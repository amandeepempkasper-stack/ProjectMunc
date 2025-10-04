import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./blog.css";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import BASE_URL from "../../../pages/Config/config";
import { Container, Form, Row, Col } from "react-bootstrap";
import ServiceMainSection from "../../SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";
import ThumbnailPlaceholder from "../../../assets/thumb.jpg";
// import Navbar from "../../navbar/Navbar";
// import Footer from "../../footer/Footer";

const Blog_pagination = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
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
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="" style={{ backgroundColor: "#f5f3ff", minHeight: "100vh" }}>
      {/* <Navbar /> */}
      <Container className="text-center">

        <ServiceMainSection highlights="OUR " highlightsDouble="BLOGS" />

        <h3 className=" ">Read Our Latest Blogs</h3>
        <p className="text-muted">
          The latest industry news, interviews, technologies, and resources.
        </p>

        <Form className="d-flex justify-content-center my-4">
          <Form.Control
            type="search"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ maxWidth: "400px" }}
            className="shadow-sm"
          />
        </Form>
      </Container>

      <Container>
        <Row className="gy-4">
          {currentBlogs.map((post) => (
            <Col key={post._id} xs={12} sm={6} md={4} lg={3}>
              <div className="blog-part h-100 d-flex flex-column">
                <Link to={`/blogpost/${post.slug || post._id}`}>
                  <img
                    src={
                      Array.isArray(post.thumbnail) && post.thumbnail.length > 0
                        ? `${
                            post.thumbnail[0].startsWith("/")
                              ? post.thumbnail[0].slice(1)
                              : post.thumbnail[0]
                          }`
                        : post.image
                        ? post.image
                        : ThumbnailPlaceholder
                    }
                    alt={post.title}
                    className="img-fluid rounded-top"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Link>

                <div
                  className="blog-part-inner flex-grow-1 d-flex flex-column"
                  style={{ padding: "10px" }}
                >
                  <div className="blogpost_detail d-flex justify-content-between text-primary small mb-2">
                    <span>
                      <FaUser className="me-1" />
                      {post?.user?.username || "Unknown"}
                    </span>
                    <span>
                      <SlCalender className="me-1" />
                      {moment(post.createdAt).format("LL")}
                    </span>
                  </div>
                  <h6 className="fw-bold h6">
                    <Link
                      to={`/blogpost/${post.slug || post._id}`}
                      className="text-decoration-none text-dark"
                    >
                      {post.title.slice(0, 27)} ...
                    </Link>
                  </h6>
                  <p className="text-muted flex-grow-1">
                    {parse(DOMPurify.sanitize(post.description?.slice(0, 40)))}
                  </p>
                  <Link
                    to={`/blogpost/${post.slug || post._id}`}
                    state={{ width: "fit-content" }}
                    className="btn btn-outline-primary mt-auto"
                    style={{ width: "fit-content", alignSelf: "center" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>




        <div className="d-flex justify-content-center mt-5">
          <Pagination
            blogsPerPage={blogsPerPage}
            totalPages={Math.ceil(filteredBlogs.length / blogsPerPage)}
            currentPage={currentPage}
            paginate={setCurrentPage}
          />
        </div>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Blog_pagination;

// import React, { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import {  Link } from "react-router-dom";
// import "./blog.css";
// import Pagination from "../pagination/Pagination"; // Import Pagination component
// import blog from "../../../blogs.json";
// import axios from "axios";
// import moment from "moment";
// import DOMPurify from 'dompurify';
// import parse from 'html-react-parser';
// import { CiSearch } from "react-icons/ci";
// import BASE_URL from "../../../Pages/Config/config";
// import { Container,Form } from "react-bootstrap";

// const Blog_pagination = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 6;

//  // 🔁 Fetch blogs from API
//  useEffect(() => {
//   const fetchBlogs = async () => {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (data?.success) {
//         setBlogs(data.blogs.reverse());
//       }
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   fetchBlogs();
// }, []);

//   // Pagination logic
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

//   // search

//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredBlogs = blogs.filter((blog) =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ backgroundColor: "#f5f3ff", minHeight: "100vh", paddingBottom: "3rem" }}>
//       {/* <div className="blog_area">
//       <div className="row">
//         <div className="col-lg-12">
//         <div className="d-flex align-items-center px-4 justify-content-between flex-wrap">
//           <h3
//           className="mx-4 mb-2"
//           style={{
//             fontSize: "1.5rem",
//             flex: "1 1 auto",
//             textAlign: window.innerWidth <= 768 ? "center" : "left",
//           }}
//           >
//           Recent Posts
//           </h3>
//           <div
//           className="search-container w-100 w-md-auto"
//           style={{ flex: "1 1 auto", maxWidth: "300px" }}
//           >
//           <button
//             className="search-icon-btn"
//             style={{
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.5rem",
//             position: "absolute",
//             right: "20px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             }}
//           >
//             <CiSearch />
//           </button>
//           <input
//             type="text"
//             placeholder="Search Blogs"
//             className="search-bar px-2 mb-0 py-1 fs-5 rounded-3 fw-semibold text-dark border border-0 w-100"
//             aria-label="Search"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             style={{
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
//             paddingRight: "40px",
//             }}
//           />
//           </div>
//         </div>
//         </div>
//       </div>
//       </div> */}
//       <Container className="text-center py-5">
//         <span className="badge bg-light text-primary mb-2">Our blog</span>
//         <h1 className="fw-bold">Resources and insights</h1>
//         <p className="text-muted">The latest industry news, interviews, technologies, and resources.</p>

//         <Form className="d-flex justify-content-center my-4">
//           <Form.Control type="search" placeholder="Search" style={{ maxWidth: "400px" }}    value={searchTerm}
//             onChange={handleSearchChange} />
//         </Form>
//       </Container>

//       {/* Blog Posts */}
//       <div className="blog-top row">
//       {currentBlogs.map((post) => (
//         <div
//         key={post.id}
//         className="blog-container col-lg-3 col-md-6 col-sm-12"
//         >
//         <div className="blog-part">
//           <div className="blog-part-inner">

//           <div className="blog-imagesec img-sec w-100 position-relative mb-3">

//             <div className="blog-image">
//             <Link to={`/blogpost/${post.slug}`} className="blog-imgLink">
//               <img
//               src={
//                 Array.isArray(post.thumbnail) &&
//                 post.thumbnail.length > 0
//                 ? `${BASE_URL}/${
//                   post.thumbnail[0].startsWith("/")
//                     ? post.thumbnail[0].slice(1)
//                     : post.thumbnail[0]
//                   }`
//                 : post.image
//                 ? post.image
//                 : "https://via.placeholder.com/300x200?text=No+Image"
//               }
//               alt={post.title.slice(0,10)}
//               />
//             </Link>
//             </div>

//           </div>

//           <div className="blog-content">
//             <div className="blogpost_detail">
//             <span>
//               <FaUser className="bloguser" />{" "}
//               {post?.user?.username || "Unknown"}
//             </span>
//             <span>
//               <SlCalender /> {moment(post.createdAt).format("LL")}
//             </span>
//             </div>
//             <h5>
//             <Link to={`/blogpost/${post._id}`}>{post.title}</Link>
//             </h5>
//             <p>
//             {parse(
//               DOMPurify.sanitize(post.description?.slice(0, 100))
//             )}
//             </p>

//             <Link to={`/blogpost/${post.slug || post._id}`}>Read more</Link>
//           </div>
//           </div>
//         </div>
//         </div>
//       ))}
//       </div>

//       {/* Pagination Component */}
//       <Pagination
//       blogsPerPage={blogsPerPage}
//       totalBlogs={blogs.length}
//       currentPage={currentPage}
//       paginate={setCurrentPage}
//       />
//     </div>
//     );
// };

// export default Blog_pagination;
