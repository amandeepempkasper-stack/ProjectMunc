// src/components/AdminBoard/TopMobileNavbar.jsx
import React from "react";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CategoryIcon from "@mui/icons-material/Category";
import CreateIcon from "@mui/icons-material/Create";

const iconNavItems = [
  { icon: <HomeIcon />, path: "/Blog_pagination", key: "home" },
  { icon: <PersonIcon />, path: "/adminsidebar/profile", key: "profile" },
  { icon: <ArticleIcon />, path: "/adminsidebar/blogs", key: "blogs" },
  { icon: <FeaturedPlayListIcon />, path: "/adminsidebar/my-blogs", key: "my-blogs" },
  { icon: <CategoryIcon />, path: "/adminsidebar/addcategory", key: "addcategory" },
  { icon: <CreateIcon />, path: "/adminsidebar/addblog", key: "addblog" },
];

const TopMobileNavbar = ({ selectedTab, setSelectedTab ,style , className}) => {
  return (
    <div style={style} className={className}>
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
  </div>
  );
};

export default TopMobileNavbar;
