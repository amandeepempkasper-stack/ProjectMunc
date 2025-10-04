import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import toast from "react-hot-toast";
import BASE_URL from "../Config/config";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // State
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/login`, {
        email: inputs.email,
        password: inputs.password,
      });
      
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("name", data?.name);
        localStorage.setItem("email", data?.user?.email);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("username", JSON.stringify(data.username));
        localStorage.setItem("profile", data?.user?.profile);

        dispatch(authActions.login());
        toast.success("Login successful");
        navigate("/adminsidebar/my-blogs");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");
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
              Welcome Back
            </Typography>
            <Typography 
              variant="body2" 
              color="grey.600"
            >
              Sign in to your account
            </Typography>
          </Box>

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
            {loading ? "Signing In..." : "Sign In"}
          </Button>

          {/* Register Link */}
          <Box textAlign="center">
            <Typography 
              variant="body2" 
              color="grey.600"
              sx={{ marginBottom: 1 }}
            >
              Don't have an account?
            </Typography>
            <Button
              onClick={() => navigate("/register")}
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
              Create an account
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Login;