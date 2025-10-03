import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import "./blogpost.css";
import { IoIosArrowBack } from "react-icons/io";
import { useBlogContext } from "../../../BlogContext/BlogContext";
import { useParams } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import parse, { domToReact } from "html-react-parser";
import BASE_URL from "../../../pages/Config/config";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const BlogPost = () => {
  const { getSingleBlog, singleBlog } = useBlogContext();
  const { slugOrId } = useParams();
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const headingsRef = useRef([]);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (data?.success) {
          setBlogs(data.blogs.slice().reverse());
        }
      } catch (error) {
        //console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!slugOrId) {
      return;
    }
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/blog/get-blog/${slugOrId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (data?.success) {
          setBlog(data.blog);
        }
      } catch (error) {
        //console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [slugOrId]);

  const [parsedContent, tocData] = useMemo(() => {
    if (!blog?.description) return [null, []];

    const headings = [];
    let index = 0;

    const content = parse(DOMPurify.sanitize(blog.description), {
      replace: (domNode) => {
        if (domNode.name && /^h[1-6]$/.test(domNode.name)) {
          const id = `heading-${index++}`;
          const text = domToReact(domNode.children);
          const plainText = domNode.children?.[0]?.data || `Heading ${index}`;
          headings.push({ id, text: plainText });
          return React.createElement(domNode.name, { id }, text);
        }
      },
    });

    return [content, headings];
  }, [blog?.description]);

  useEffect(() => {
    setToc(tocData);
  }, [tocData]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/category/all-categories`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (data?.success && Array.isArray(data.category)) {
          setCategories(data.category);
        } else {
          setCategories([]);
        }
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  if (!blog) {
    return (
      <div className="container mt-5">
        <Skeleton height={40} width={`60%`} />
        <Skeleton height={200} />
        <Skeleton count={6} />
      </div>
    );
  }

  let headingRenderIndex = 0;
  const contentWithAnchors = parse(DOMPurify.sanitize(blog.description), {
    replace: (domNode) => {
      if (domNode.name && /^h[1-6]$/.test(domNode.name)) {
        const id = `heading-${headingRenderIndex++}`;
        const text = domToReact(domNode.children);
        return React.createElement(domNode.name, { id }, text);
      }
    },
  });

  // const imageUrl =
  //   Array.isArray(blog.thumbnail) && blog.thumbnail.length > 0
  //     ? `${BASE_URL}/${blog?.thumbnail[0].startsWith("/")
  //       ? blog.thumbnail[0].slice(1)
  //       : blog.thumbnail[0]
  //     }`
  //     : blog.image || "/imgthumb.png";

  const imageUrl =
    Array.isArray(blog.thumbnail) && blog.thumbnail.length > 0
      ? `${
          blog?.thumbnail[0].startsWith("/")
            ? blog.thumbnail[0].slice(1)
            : blog.thumbnail[0]
        }`
      : blog.image || "/imgthumb.png";

  console.log(imageUrl);

  return (
    <>
      <Navbar />
      <div className="blogpost container-fluid my-0 py-5">
        <div className="row h-100">
          {/* <Link to="/blogpage" className="backtohome text-decoration-none">
          <span className="custom-back-btn">
            <IoIosArrowBack className="me-2" />
            <span>Back</span>
          </span>
        </Link> */}
          <div className="titles sticky-title bg-white">
            <h3 className="mb-3 tittle">{blog.title}</h3>
          </div>

          <div className="row h-100">
            {/* Main Blog Post */}
            <div className="blog-main-section col-lg-9 d-flex flex-column">
              {/* your blog content here */}

              <div className="blog-img-section">
                <img src={imageUrl} className="img-fluid mb-4" alt="Blog" />
              </div>
              {/* <h1 className="mb-3">{blog.title}</h1> */}
              <p className="text-muted">
                {moment(blog.createdAt).format("LL")}
              </p>

              <div className="parsed-content">{parsedContent}</div>

              {/* Author and Social Section */}
              <div className=" pt-4 border-top  align-items-center flex-wrap gap-2">
                <div className="author-info">
                  <p className="mb-0 text-muted">
                    <strong>
                      Author : {blog?.user?.username || "Unknown Author"}
                    </strong>
                  </p>
                </div>
                {/* <div className="d-flex gap-3">
              <a href="#" className="text-dark">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-dark">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-dark">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-dark">
                <FaLinkedinIn size={20} />
              </a>
            </div> */}
              </div>
            </div>

            {/* Sidebar */}
            <div className="side-blogcontainer col-lg-3 d-none d-lg-block">
              {toc.length > 0 && (
                <div className="mb-4 toc-section">
                  <h4>Table of Contents</h4>
                  <div className="button-container">
                    {toc.map((item, index) => (
                      <button key={item.id} className="custom-button">
                        <a href={`#${item.id}`} className="button-link">
                          {index + 1}. {item.text}
                        </a>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4 shadow rounded border p-4 bg-light text-primary categories-section ">
                <h4 className="mb-3 text-dark border-bottom pb-2">
                  Categories
                </h4>

                <div className="category-grid">
                  {visibleCategories.length === 0 ? (
                    <button className="category-btn">
                      No Categories Available
                    </button>
                  ) : (
                    visibleCategories.map((cat) => (
                      <button
                        key={cat._id}
                        className="category-btn"
                        onClick={() => navigate(`/category/${cat.slug}`)}
                      >
                        {cat.title}
                      </button>
                    ))
                  )}
                </div>
                {categories.length > 4 && (
                  <div className="mt-3 text-center">
                    <span
                      className="show-more-btn d-inline-flex align-items-center gap-1"
                      onClick={() => setShowAll(!showAll)}
                      style={{ cursor: "pointer", fontWeight: "bold" }}
                    >
                      {showAll ? (
                        <>
                          Show Less <FaChevronUp />
                        </>
                      ) : (
                        <>
                          Show More <FaChevronDown />
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-4 shadow rounded border p-4 bg-light text-primary">
                <h4 className="mb-3 text-dark border-bottom pb-2">
                  Recent Posts
                </h4>
                <ul className="list-unstyled m-0">
                  {blogs.slice(0, 4).map((blog, index) => (
                    <li
                      key={index}
                      className="mb-2"
                      style={{ backgroundColor: "white" }}
                    >
                      <Link
                        to={`/blogpost/${blog.slug || blog._id}`}
                        className="recent-post-item d-flex align-items-start text-decoration-none"
                      >
                        <img
                          src={
                            Array.isArray(blog.thumbnail) &&
                            blog.thumbnail.length > 0
                              ? `${BASE_URL}/${
                                  blog.thumbnail[0].startsWith("/")
                                    ? blog.thumbnail[0].slice(1)
                                    : blog.thumbnail[0]
                                }`
                              : blog.image ||
                                "https://via.placeholder.com/50x40?text=No+Img"
                          }
                          alt="recent"
                          className="img-thumbnail"
                        />
                        <div className="recent-post-text">
                          <span className="title">
                            {blog.title.slice(0, 25)}...
                          </span>
                          <span className="date">
                            {moment(blog.createdAt).format("LL")}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
