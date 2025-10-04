import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Features from "./pages/features/Features";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/layout/Layout";
import Blog_pagination from "./components/Blogs/Blog/Blog_pagination";
import BlogPost from "./components/Blogs/blogpost/Blogpost";
import AdminLayouts from "./components/Blogs/AdminBoard/AdminSidebar";
import Login from "./pages/BlogPages/Login";
import Blogs from "./pages/BlogPages/Blogs";
import Profile from "./pages/BlogPages/Profile";
import UserBlogs from "./pages/BlogPages/UserBlogs";
import Addcategory from "./pages/BlogPages/Addcategory";
import AddBlog from "./pages/BlogPages/AddBlog";
import Register from "./pages/BlogPages/Register";
import BlogDetails from "./pages/BlogPages/BlogDetails";
import CategoryBlogs from "./pages/BlogPages/CategoryBlogs";
import SingleBlog from "./pages/BlogPages/SingleBlog";
import PrivateRoute from "./pages/BlogPages/services/ProtectedRoutes";
import ImsProduct from "./components/Ims/ImsProductSection1";
import LmsProduct from "./components/Lms/LmsProduct";
import HrmsProduct from "./components/Hrms/HrmsProduct";
import SmsProduct from "./components/SMS/SmsProduct";
import About from "./pages/about/About";
import ProductDemoList from "./pages/BlogPages/ProductDemoList";
import ContactList from "./pages/BlogPages/ContactList";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogpage" element={<Blog_pagination />} />
          <Route path="/blogpost/:slugOrId" element={<BlogPost />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/products/inventory-management-system"
            element={<ImsProduct />}
          />
          <Route
            path="/products/lead-management-system"
            element={<LmsProduct />}
          />
          <Route
            path="/products/human-resource-management-system"
            element={<HrmsProduct />}
          />
          <Route
            path="/products/school-management-system"
            element={<SmsProduct />}
          />
        </Route>

        {/* Blog Auth/Login */}
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Admin Routes with Nested Children */}
        <Route path="adminsidebar" element={<AdminLayouts />}>
          <Route path="profile" element={<Profile />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="my-blogs" element={<UserBlogs />} />
          <Route path="addcategory" element={<Addcategory />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="product-demo-list" element={<ProductDemoList />} />
          <Route path="contact-list" element={<ContactList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
