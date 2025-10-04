// src/components/AdminBoard/TopMobileNavbar.jsx
import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CategoryIcon from "@mui/icons-material/Category";
import CreateIcon from "@mui/icons-material/Create";
import { FaBox, FaPhone } from "react-icons/fa";

const base = "/adminsidebar";

const iconNavItems = [
  { icon: <HomeIcon />, path: "/Blog_pagination", key: "home", label: "Home" },
  {
    icon: <PersonIcon />,
    path: `${base}/profile`,
    key: "profile",
    label: "Profile",
  },
  {
    icon: <ArticleIcon />,
    path: `${base}/blogs`,
    key: "blogs",
    label: "Blogs",
  },
  {
    icon: <FeaturedPlayListIcon />,
    path: `${base}/my-blogs`,
    key: "my-blogs",
    label: "My Blogs",
  },
  {
    icon: <CategoryIcon />,
    path: `${base}/addcategory`,
    key: "addcategory",
    label: "Categories",
  },
  {
    icon: <CreateIcon />,
    path: `${base}/addblog`,
    key: "addblog",
    label: "Create Blog",
  },
  {
    icon: <FaPhone />,
    path: `${base}/contact-list`,
    key: "contact",
    label: "Contacts",
  },
  {
    icon: <FaBox />,
    path: `${base}/product-demo-list`,
    key: "product",
    label: "Product Demos",
  },
];

const TopMobileNavbar = ({ selectedTab, setSelectedTab, style, className }) => {
  return (
    <Box
      style={style}
      className={className}
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
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar for a cleaner look
        },
        scrollbarWidth: "none", // Prevent showing the scrollbar on Firefox
        msOverflowStyle: "none", // Hide scrollbar for IE and Edge
        // Ensure smooth scrolling on mobile devices
        scrollBehavior: "smooth",
        "-webkit-overflow-scrolling": "touch", // For smoother scrolling on iOS
      }}
    >
      {iconNavItems.map((item) => (
        <Tooltip key={item.key} title={item.label} placement="bottom" arrow>
          <IconButton
            component={Link}
            to={item.path}
            onClick={() => setSelectedTab(item.key)}
            sx={{
              color: selectedTab === item.key ? "white" : "grey.400",
              backgroundColor:
                selectedTab === item.key ? "grey.700" : "transparent",
              flex: "0 0 auto",
              width: 36,
              height: 36,
              "&:hover": {
                backgroundColor: "grey.700",
                color: "white",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default TopMobileNavbar;
