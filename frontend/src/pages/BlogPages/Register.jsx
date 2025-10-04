import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import BASE_URL from '../Config/config';

const Register = () => {
  const navigate = useNavigate();
  
  // State
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/register`,
        { 
          username: inputs.name, 
          email: inputs.email.toLowerCase(), 
          password: inputs.password 
        }
      );

      if (data.success) {
        toast.success("Account created successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error(error.response.data.message || "User already exists");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ 
        backgroundColor: "grey.50",
        padding: 2
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          width="100vh"
          maxWidth={400}
          padding={4}
          borderRadius={2}
          sx={{
            backgroundColor: "white",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            border: "1px solid",
            borderColor: "grey.200",
          }}
        >
          {/* Header */}
          <Box textAlign="center" mb={3}>
            <Typography 
              variant="h4" 
              component="h1" 
              fontWeight="300"
              color="grey.800"
              gutterBottom
            >
              Create Account
            </Typography>
            <Typography 
              variant="body2" 
              color="grey.600"
            >
              Join us today
            </Typography>
          </Box>

          {/* Name Field */}
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            type="text"
            required
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
              }
            }}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            type="email"
            required
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
              }
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            value={inputs.password}
            onChange={handleChange}
            name="password"
            type={showPassword ? "text" : "password"}
            required
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            sx={{
              marginTop: 3,
              marginBottom: 2,
              borderRadius: 1,
              padding: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: "grey.900",
              '&:hover': {
                backgroundColor: "grey.800",
              },
              '&:disabled': {
                backgroundColor: "grey.300",
              }
            }}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          {/* Login Link */}
          <Box textAlign="center">
            <Typography 
              variant="body2" 
              color="grey.600"
              sx={{ marginBottom: 1 }}
            >
              Already have an account?
            </Typography>
            <Button
              onClick={() => navigate("/login")}
              variant="text"
              size="small"
              sx={{
                textTransform: "none",
                color: "grey.700",
                fontWeight: "500",
                '&:hover': {
                  backgroundColor: "transparent",
                  color: "grey.900",
                }
              }}
            >
              Sign in to your account
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default Register;