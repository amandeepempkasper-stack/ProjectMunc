import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { IoMdPerson } from "react-icons/io";
import { useBlogDelete } from "../../BlogContext/BlogDeleteContext";
import BASE_URL from "../Config/config";
import BlogCard from "../../components/Blogs/AdminBoard/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");       // ✅ search state
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);      // ✅ pagination state
  const blogsPerPage = 8;

  const { deletedBlogId, deleteBlog } = useBlogDelete();

  // Fetch blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (data?.success) {
        setBlogs(data.blogs.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // Remove deleted blogs
  useEffect(() => {
    if (deletedBlogId) {
      setBlogs((prev) => prev.filter((blog) => blog._id !== deletedBlogId));
    }
  }, [deletedBlogId]);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Filter blogs by search
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      blog.description.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Delete Blog
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/api/v1/blog/delete-blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data?.success) {
        deleteBlog(id);
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      }
    } catch (error) {
      console.log("Error deleting blog:", error);
    }
  };

  return (
    <section className="bg-[#F0FDFF] py-24 px-6 md:px-20 mt-15">
      {/* Heading + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-xl md:text-3xl font-normal text-[#1C2B33]">
            Read our latest blogs.
          </h2>
          <p className="text-[#7D7D7D] text-sm md:text-base leading-[130%]">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded-md px-3 bg-white py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              thumbnail={blog.thumbnail}
              slug={blog.slug || blog._id}
              username={blog?.user?.username}
              time={moment(blog.createdAt).format("ll")}
              handleDelete={() => handleDelete(blog._id || blog.slug)}
              previewOnly={true}
              icon={<IoMdPerson />}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No blogs found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2 text-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-0.5 rounded-xl border text-[20px] border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border border-gray-300 rounded-xl ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded-xl hover:bg-gray-100 disabled:opacity-50"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Blogs;
