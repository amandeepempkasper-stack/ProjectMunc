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
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CategoryIcon from "@mui/icons-material/Category";
import CreateIcon from "@mui/icons-material/Create";
import { BoxIcon, Phone } from "lucide-react";
// import BASE_URL from "../../../Pages/Config/config";

const AdminLayouts = () => {
  const [selectedTab, setSelectedTab] = useState("blogs");

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email") || "";

  const isLogin = useSelector((state) => state.auth.isLogin);
  const isUserLogin = isLogin || token || userId;

  // const isTablet = useMediaQuery("(max-width: 1200px)");
  // const isMobile = useMediaQuery("(max-width: 768px)");
  const isCompact = useMediaQuery("(max-width: 768px)");

  const location = useLocation();
  // const isCompactPage = (location.pathname.includes("addblog") || location.pathname.includes("blogs")) ;
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

  const iconNavItems = [
    { icon: <HomeIcon />, path: "/home", key: "home" },
    { icon: <PersonIcon />, path: `${base}/profile`, key: "profile" },
    { icon: <ArticleIcon />, path: `${base}/blogs`, key: "blogs" },
    { icon: <FeaturedPlayListIcon />, path: `${base}/my-blogs`, key: "my-blogs" },
    { icon: <CategoryIcon />, path: `${base}/addcategory`, key: "addcategory" },
    { icon: <CreateIcon />, path: `${base}/addblog`, key: "addblog" },
    { icon: <Phone />, path: `${base}/contact-list`, key: "contact" },
    { icon: <BoxIcon />, path: `${base}/product-demo-list`, key: "product" },
  ];

  // const drawerWidth = isTablet ? 130 : 260;
  const drawerWidth = isCompact ? 0 : 260;

  const [profile, setProfile] = useState(localStorage.getItem("profile"));

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

        {/* Hide sidebar if on AddBlog page and on mobile */}
        {!(isCompact && isCompactPage) && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#08325B",
                color: "white",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                position: "fixed",
                top: "60px",
                left: 0,
                height: "calc(100vh - 65px)",
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              },
            }}
          >
            {isUserLogin ? (
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  mt: isCompact ? "42px" : "0px",
                  mb: 4,
                }}
              >
                <Avatar
                  src={
                    profile
                      ? `${profile}`
                      : "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                  }
                  sx={{ width: 90, height: 90, mx: "auto", mb: 1 }}
                />
                <Typography variant="h6">{username}</Typography>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    fontSize: isCompact ? "10px" : "14px",
                  }}
                >
                  {email}
                </Typography>
              </Box>
            ) : (
              <Typography variant="h6" color="gray" sx={{ textAlign: "center" }}>
                Please log in to access the admin panel.
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/"
                fullWidth
                variant={selectedTab === "home" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("home")}
                sx={{
                  mb: 2,
                  p: 1,
                  borderRadius: "22px",
                  backgroundColor: "#35c0ca",
                  color: "white",
                  "&:hover": { backgroundColor: "#3ca8ad",color: "#ffffff99" },
                }}
              >
                Home
              </Button>

              <Button
                component={Link}
                to={`${base}/profile`}
                fullWidth
                variant={selectedTab === "profile" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("profile")}
                sx={{
                  backgroundColor: "#1976D2",
                  color: "white",
                  "&:hover": { backgroundColor: "#1565C0",color: "#ffffff99" },
                }}
              >
                Profile
              </Button>

              <Button
                component={Link}
                to={`${base}/blogs`}
                fullWidth
                variant={selectedTab === "blogs" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("blogs")}
                sx={{
                  backgroundColor: "#388E3C",
                  color: "white",
                  "&:hover": { backgroundColor: "#2E7D32",color: "#ffffff99" },
                }}
              >
                Blogs
              </Button>
              <Button
                component={Link}
                to={`${base}/my-blogs`}
                fullWidth
                variant={selectedTab === "my-blogs" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("my-blogs")}
                sx={{
                  backgroundColor: "#F57C00",
                  color: "white",
                  "&:hover": { backgroundColor: "#E65100",color: "#ffffff99" },
                }}
              >
                My Blogs
              </Button>

              <Button
                component={Link}
                to={`${base}/addcategory`}
                fullWidth
                variant={selectedTab === "addcategory" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("addcategory")}
                sx={{
                  backgroundColor: "#b0b00e",
                  color: "white",
                  "&:hover": { backgroundColor: "#66660b",color: "#ffffff99" },
                }}
              >
                Add Category
              </Button>

              <Button
                component={Link}
                to={`${base}/addblog`}
                fullWidth
                variant={selectedTab === "addblog" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("addblog")}
                sx={{
                  backgroundColor: "#faaf00",
                  color: "white",
                  "&:hover": { backgroundColor: "#f99f00",color: "#ffffff99" },
                }}
              >
                Create Blog
              </Button>
              <Button
                component={Link}
                to={`${base}/contact-list`}
                fullWidth
                variant={selectedTab === "contact-list" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("contact-list")}
                sx={{
                  backgroundColor: "#ff5da5",
                  color: "white",
                  "&:hover": { backgroundColor: "#ff3da5",color: "#ffffff99" },
                }}
              >
                Contact List
              </Button>
              <Button
                component={Link}
                to={`${base}/product-demo-list`}
                fullWidth
                variant={selectedTab === "product-demo-list" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("product-demo-list")}
                sx={{
                  backgroundColor: "#D32F2F",
                  color: "white",
                  "&:hover": { backgroundColor: "#C62828",color: "#ffffff99" },
                }}
              >
                Product Demo List
              </Button>
            </Box>
          </Drawer>
        )}

        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 
        , width: "100%",
        ml: isCompact ? 0 : `${drawerWidth}px`,
           marginTop: '64px' 
      }}> */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            paddingLeft: isCompact || isCompactPage ? 0 : `${drawerWidth}px`,
            marginTop: "64px",
          }}
        >
          {(isCompact && isCompactPage) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: 1,
                px: 1,
                backgroundColor: "#08325B",
                mb: 2,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {iconNavItems.map((item) => (
                <IconButton
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={() => setSelectedTab(item.key)}
                  sx={{
                    color: selectedTab === item.key ? "#35c0ca" : "white",
                    flex: "0 0 auto",
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          )}


          {location.pathname.includes("profile") && (
            <>
              <Typography variant="h4" color="#08325b" sx={{ textAlign: "center" }}>
                Welcome to Admin Panel
              </Typography>
              <Typography
                color="#08325b"
                sx={{ textAlign: "center", fontSize: "12px" }}
              >
                Select an option from the sidebar.
              </Typography>
            </>
          )}
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayouts;
