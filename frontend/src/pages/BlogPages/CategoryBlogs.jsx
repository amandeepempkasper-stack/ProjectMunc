
import React, { useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import "./CategoryBlogs.css"; 
import { useParams, useNavigate, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import BASE_URL from "../Config/config";

const CategoryBlogs = () => {
  const { slug } = useParams();
 
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchBlogsByCategory = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/blog/category/${slug}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (data?.success) {
          setBlogs(data.blogs || []);
        } else {
          setError("Failed to load category blogs.");
        }
      } catch (err) {
        console.error("Error fetching category blogs:", err.message);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [slug]);

  // if (loading) return <p className="text-center">Loading blogs...</p>;
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }
  
  if (error) return <p className="text-danger text-center">{error}</p>;

  const getPlainText = (html) => {
    const sanitized = DOMPurify.sanitize(html);
    return sanitized.replace(/<[^>]+>/g, '');
  };
  

  return (
    <>
 <div className="container mt-5 ">
      <Link to="/home" className="backto_home text-decoration-none">
  <p className="custom-back-btn">
    <IoIosArrowBack className="me-2" />
    <span>Back to Home</span>
  </p>
</Link>
   
      
      {/* <h2 className="mb-4 mt-4">Blogs in This Category</h2> */}
      <h2 className="mb-4 mt-4">
  Blogs in "{blogs[0]?.category?.title}" Category
</h2>


      {blogs.length === 0 ? (
        <p>No blog posts found for this category.</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="card mb-4 p-3 shadow-sm"
            style={{ display: "flex", flexDirection: "row", gap: "20px" , cursor: "pointer" }}
            onClick={() => navigate(`/blog/${blog.slug || blog._id}`)}
          >
          

            {/* Content */}
            <div style={{ flex: "3" }}>
              <p className="text-muted mb-1">
              <strong className="bg-primary text-white px-2 py-1 rounded">
  {blog?.category?.title || "N/A"}
</strong>

               
              </p>
              <h4>{blog.title}</h4>
              <p className="mb-0">
            
              {getPlainText(DOMPurify.sanitize(blog.description))?.split(" ").slice(0, 40).join(" ")}
              </p>
              <small className="text-muted">{moment(blog.createdAt).format("LL")}</small>

            </div>

              {/* Image */}
              <div style={{ flex: "1", minWidth: "200px" }}>
              <img
                src={`${BASE_URL}${blog.thumbnail}`}
                alt={blog.title}
                className="img-fluid rounded"
                style={{ maxHeight: "180px", objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default CategoryBlogs;

