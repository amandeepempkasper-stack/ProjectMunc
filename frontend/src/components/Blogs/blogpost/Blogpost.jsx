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
      {/* <Navbar /> */}
      <section className="bg-[#F0FDFF] py-24 px-6 md:px-20">
        <div className="row h-100">

          <div className="text-[20px] md:text-[30px] font-semibold leading-[100%] text-[#1C2B33]">
            <h3 className="mb-3 tittle">{blog.title}</h3>
          </div>

          <div className="row h-100">
            {/* Main Blog Post */}
            <div className="blog-main-section col-lg-9 d-flex flex-column">
              

              <div className="blog-img-section">
                <img src={imageUrl} className="img-fluid mb-4" alt="Blog" />
              </div>
              
              <p className="text-muted text-sm text-gray-500 mb-3">
                {moment(blog.createdAt).format("LL")}
              </p>

              <div className="parsed-content   max-h-[400px] overflow-y-auto pr-2 space-y-3 text-gray-700 leading-relaxed prose prose-lg max-w-none scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 rounded">{parsedContent}</div>

              {/* Author and Social Section */}
              <div className=" pt-4 border-top  align-items-center flex-wrap gap-2">
                <div className="author-info">
                  <p className="mb-0 text-muted">
                    <strong>
                      Author : {blog?.user?.username || "Unknown Author"}
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="side-blogcontainer col-lg-3 d-none d-lg-block">
              {toc.length > 0 && (
                <div className="bg-white p-4 rounded-xl shadow mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">
                    Table of Contents
                  </h3>
                  <div className="flex flex-col gap-2">
                    {toc.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="px-3 py-2 rounded-md text-sm text-gray-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-600 transition font-medium"
                      >
                        {index + 1}. {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white p-[16px] w-[333px] rounded-xl mb-2">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Category
                </h3>

                <div className="flex flex-wrap gap-2">
                  {visibleCategories.length === 0 ? (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
                      No categories found
                    </span>
                  ) : (
                    visibleCategories.map((cat) => (
                      <span
                        key={cat._id}
                        onClick={() => navigate(`/category/${cat.slug}`)}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 transition"
                      >
                        {cat.title}
                      </span>
                    ))
                  )}

                  {categories.length > 5 && (
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="text-xs font-medium text-blue-500 hover:underline w-full text-left mt-2"
                    >
                      {showAll ? "Show Less" : "Show All"}
                    </button>
                  )}
                </div>
              </div>

              <div className="bg-white p-[16px] w-[333px] rounded-xl">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {blogs.length > 0 ? (
                    blogs.slice(0, 4).map((blog, index) => (
                      <li key={index} className="flex items-center gap-3">
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
                          alt={blog.title}
                          className="w-16 h-14 object-cover object-center rounded-md border border-gray-200"
                        />
                        <div>
                          <p
                            onClick={() =>
                              navigate(`/blogpost/${blog.slug || blog._id}`)
                            }
                            className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer line-clamp-2"
                          >
                            {blog.title}
                          </p>
                          <span className="text-xs text-gray-500">
                            {moment(blog.createdAt).format("LL")}
                          </span>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No recent posts found
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default BlogPost;
