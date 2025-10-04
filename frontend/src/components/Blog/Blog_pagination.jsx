import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import slugify from "slugify";
import "./blog_pagination.css";
import Pagination from "../pagination/Pagination"; // Import Pagination component
import BASE_URL from "../../pages/Config/config";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { CiSearch } from "react-icons/ci";

const Blog_pagination = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;



  // 🔁 Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/api/v1/blog/all-blog", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const sorted = [...data.blogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        if (data?.success) {



          setBlogs(sorted);
        }
      } catch (error) {
        //console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // search

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  console.log(currentBlogs);


  return (
    <div>
      <div className="blog_area">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center px-4 justify-content-between flex-wrap">
              <h3
                className="mx-4 mb-2"
                style={{
                  fontSize: "1.5rem",
                  flex: "1 1 auto",
                  textAlign: window.innerWidth <= 768 ? "center" : "left",
                }}
              >
                Recent Posts
              </h3>
              <div
                className="search-container w-100 w-md-auto"
                style={{
                  flex: "1 1 auto",
                  maxWidth: "300px",
                  position: "relative",
                }}
              >
                <button
                  className="search-icon-btn"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    position: "absolute",
                    right: "40px",
                    top: "45%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <CiSearch />
                </button>
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="search-bar px-2 mb-0 py-1 fs-5 rounded-3 fw-semibold text-dark border border-0 w-100"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                    paddingRight: "40px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="blog-top row">
        {currentBlogs.map((post) => (
          <div
            key={post._id}
            className="blog-container col-lg-4 col-md-6 col-sm-12"
          >
            <div className="blog-part">
              <div className="blog-parts-inner">
                <div className="blog-imagesec">
                  <div className="blog-imagemain">
                    <Link
                      to={`/blogpost/${post.slug}`}
                      className="blog-imgLink"
                    >
                      <img
                        src={
                          Array.isArray(post.thumbnail) &&
                            post.thumbnail.length > 0
                            ? `http://${BASE_URL}/${post.thumbnail[0].startsWith("/")
                              ? post.thumbnail[0].slice(1)
                              : post.thumbnail[0]
                            }`
                            : post.image
                              ? post.image
                              : "/romainpageicon.png"
                        }
                        alt={post.title}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blogpost_detail">
                    <span>
                      <FaUser className="bloguser" />{" "}
                      {post?.user?.username || "Unknown"}
                    </span>
                    <span>
                      <SlCalender /> {moment(post.createdAt).format("LL")}
                    </span>
                  </div>
                  <h5>
                    <Link to={`/blogpost/${post._id}`}>{post.title}</Link>
                  </h5>
                  <p>
                    {parse(DOMPurify.sanitize(post.description?.slice(0, 100)))}
                  </p>

                  <Link to={`/blogpost/${post.slug || post._id}`}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogs.length}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default Blog_pagination;
