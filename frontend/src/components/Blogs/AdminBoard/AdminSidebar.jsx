import React, { useEffect, useState } from "react";
import Header from "../AdminBoard/Header";
import {
  Box,
  Drawer,
  Avatar,
  Button,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CategoryIcon from "@mui/icons-material/Category";
import CreateIcon from "@mui/icons-material/Create";
import { BoxIcon, Phone } from "lucide-react";

const AdminLayouts = () => {
  const [selectedTab, setSelectedTab] = useState("blogs");
  const [profile, setProfile] = useState(localStorage.getItem("profile"));

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email") || "";

  const isLogin = useSelector((state) => state.auth.isLogin);
  const isUserLogin = isLogin || token || userId;
  const isCompact = useMediaQuery("(max-width: 768px)");
  const location = useLocation();

  const isCompactPage = [
    "addblog",
    "blogs",
    "my-blogs",
    "addcategory",
    "profile",
    "home",
    "contact-list",
    "product-demo-list"
  ].some((page) => location.pathname.includes(page));

  const base = "/adminsidebar";
  const drawerWidth = isCompact ? 0 : 260;

  const menuItems = [
    { label: "Home", path: "/", key: "home", icon: <HomeIcon /> },
    { label: "Profile", path: `${base}/profile`, key: "profile", icon: <PersonIcon /> },
    { label: "Blogs", path: `${base}/blogs`, key: "blogs", icon: <ArticleIcon /> },
    { label: "My Blogs", path: `${base}/my-blogs`, key: "my-blogs", icon: <FeaturedPlayListIcon /> },
    { label: "Categories", path: `${base}/addcategory`, key: "addcategory", icon: <CategoryIcon /> },
    { label: "Create Blog", path: `${base}/addblog`, key: "addblog", icon: <CreateIcon /> },
    { label: "Contacts", path: `${base}/contact-list`, key: "contact", icon: <Phone /> },
    { label: "Product Demos", path: `${base}/product-demo-list`, key: "product", icon: <BoxIcon /> },
  ];

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar - Hidden on mobile for compact pages */}
        {!(isCompact && isCompactPage) && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "grey.900",
                color: "white",
                padding: 3,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                position: "fixed",
                top: "64px",
                left: 0,
                height: "calc(100vh - 64px)",
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                border: "none",
              },
            }}
          >
            {/* User Profile Section */}
            {isUserLogin ? (
              <Box sx={{ textAlign: "center", width: "100%" }}>
                <Avatar
                  src={
                    profile
                      ? `${profile}`
                      : "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                  }
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: "auto", 
                    mb: 2,
                    border: "2px solid",
                    borderColor: "grey.700"
                  }}
                />
                <Typography variant="h6" fontWeight="300" gutterBottom>
                  {username}
                </Typography>
                <Typography variant="body2" color="grey.400">
                  {email}
                </Typography>
              </Box>
            ) : (
              <Typography variant="body1" color="grey.400" textAlign="center">
                Please log in to access admin panel
              </Typography>
            )}

            {/* Navigation Menu */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  fullWidth
                  startIcon={item.icon}
                  variant={selectedTab === item.key ? "contained" : "text"}
                  onClick={() => setSelectedTab(item.key)}
                  sx={{
                    justifyContent: "flex-start",
                    padding: "10px 16px",
                    borderRadius: 1,
                    textTransform: "none",
                    fontSize: "0.9rem",
                    fontWeight: selectedTab === item.key ? "500" : "400",
                    backgroundColor: selectedTab === item.key ? "grey.800" : "transparent",
                    color: selectedTab === item.key ? "white" : "grey.300",
                    border: selectedTab === item.key ? "1px solid" : "none",
                    borderColor: "grey.700",
                    "&:hover": {
                      backgroundColor: "grey.800",
                      color: "white",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Drawer>
        )}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            marginLeft: isCompact || isCompactPage ? 0 : `${drawerWidth}px`,
            marginTop: "64px",
            backgroundColor: "grey.50",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {/* Mobile Navigation Bar */}
          {(isCompact && isCompactPage) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: 1,
                px: 2,
                py: 1,
                backgroundColor: "grey.900",
                mb: 3,
                borderRadius: 1,
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {menuItems.map((item) => (
                <IconButton
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={() => setSelectedTab(item.key)}
                  sx={{
                    color: selectedTab === item.key ? "white" : "grey.400",
                    backgroundColor: selectedTab === item.key ? "grey.700" : "transparent",
                    flex: "0 0 auto",
                    "&:hover": {
                      backgroundColor: "grey.700",
                      color: "white",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          )}

          {/* Welcome Message for Profile Page */}
          {location.pathname.includes("profile") && (
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="h4" fontWeight="300" color="grey.800" gutterBottom>
                Admin Dashboard
              </Typography>
              <Typography variant="body1" color="grey.600">
                Manage your content and settings
              </Typography>
            </Box>
          )}

          {/* Page Content */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "grey.200",
              overflow: "hidden",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLayouts;