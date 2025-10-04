import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../redux/store";
import logo from "../../../assets/logo.png"

const Header = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");

  const isLogin = useSelector((state) => state.auth.isLogin);
  const isUserLogin = isLogin || token || userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logged out successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        backgroundColor: "grey.900",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "grey.800",
      }}
    >
      <Toolbar sx={{ minHeight: "64px!important" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={logo}
            alt="Kasper Logo"
            style={{ 
              width: 100, 
              height: 32,
              borderRadius: "4px"
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginLeft: 1,
              fontWeight: "300",
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            {/* Kasper */}
          </Typography>
        </Box>

        {/* Auth Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!isUserLogin || !token ? (
            <>
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: "400",
                  fontSize: "0.9rem",
                  "&:hover": {
                color: "#fff", // ✅ Keep text white on hover
                backgroundColor: "gray.800", // ✅ Darker hover background
              },
                  padding: "6px 16px",
                }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "grey.600",
                  textTransform: "none",
                  fontWeight: "400",
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "grey.800",
                    borderColor: "grey.500",
                    color: "#fff",
                  },
                  padding: "6px 16px",
                }}
              >
                Create Account
              </Button>
            </>
          ) : (
            <>
              <Chip
                label={username?.split(" ")[0]}
                sx={{
                  color: "white",
                  backgroundColor: "grey.700",
                  fontWeight: "400",
                  "& .MuiChip-label": {
                    paddingX: 2,
                  },
                }}
              />
              <Button
                onClick={handleLogout}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: "400",
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "grey.800",
                  },
                  padding: "6px 16px",
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;