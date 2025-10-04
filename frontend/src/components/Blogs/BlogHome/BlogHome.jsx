import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
// import "./blog.css";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import BASE_URL from "../../../pages/Config/config";
import { Container, Form, Row, Col } from "react-bootstrap";
import ServiceMainSection from "../../SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [searchTerm, setSearchTerm] = useState("");

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`, {
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
    <div style={{ minHeight: "80vh" }}>
      <ServiceMainSection highlights="OUR BLOGS" highlightsDouble="BLOGS" />

      <Container>
        <Row className="gy-4">
          {blogs.slice(0, 4).map((post) => (
            <Col key={post._id} xs={12} sm={6} md={4} lg={3}>
              <div className="blog-part h-100 d-flex flex-column">
                <div
                  className="blog-imagesec position-relative overflow-hidden"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Link to={`/blogpost/${post.slug || post._id}`}>
                    <img
                      src={
                        Array.isArray(post.thumbnail) &&
                        post.thumbnail.length > 0
                          ? `${BASE_URL}/${
                              post.thumbnail[0].startsWith("/")
                                ? post.thumbnail[0].slice(1)
                                : post.thumbnail[0]
                            }`
                          : post.image
                          ? post.image
                          : "https://via.placeholder.com/300x200?text=No+Image"
                      }
                      alt={post.title}
                      className="img-fluid rounded-top"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "230px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>

                <div className="blog-part-inner flex-grow-1 d-flex flex-column">
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
                  <h6 className="fw-bold post-title">
                    <Link
                      to={`/blogpost/${post.slug || post._id}`}
                      className="text-decoration-none text-dark"
                      style={{ color: "rgba(16, 97, 73, 0.877)" }}
                    >
                      {post.title}
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
      </Container>
    </div>
  );
};

export default BlogHome;

// import React, { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import { Link } from "react-router-dom";
// import slugify from "slugify";
// import "./blog.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import axios from "axios";
// import moment from "moment";
// import DOMPurify from "dompurify";
// import parse from "html-react-parser";

// const token =localStorage.getItem("token")

// const BlogHome = () => {
//   const [blogs, setBlogs] = useState([]);

//   const sliderSettings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//             slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//             slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

//   // Fetch blogs from API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         console.log("Token from localStorage:", token);
//         const { data } = await axios.get("/api/v1/blog/all-blog",{
//           headers:{
//             Authorization:`Bearer ${localStorage.getItem("token")}`
//           }
//         });
//           const sorted = [...data.blogs].sort(
//   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
// );
//         if (data?.success) {
//           //setBlogs(data.blogs.reverse());
//           setBlogs(sorted);
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       <div className="blog_area">
//         <div className="row">
//           <div className="col-lg-12 blog-top">
//             <div className="d-flex align-items-center px-4 justify-content-between flex-wrap">
//               <h3
//                 className="mx-4 mb-2"
//                 style={{
//                   fontSize: "1.5rem",
//                   flex: "1 1 auto",
//                   textAlign: window.innerWidth <= 768 ? "center" : "left",
//                 }}
//               >
//                 Recent Posts
//               </h3>
//               {/* <div
//           className="search-container w-100 w-md-auto"
//           style={{ flex: "1 1 auto", maxWidth: "300px" ,  position: "relative"}}
//           >
//           <button
//             className="search-icon-btn"
//             style={{
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.5rem",
//             position: "absolute",
//             right: "40px",
//             top: "45%",
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
//           </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Posts */}
//       <div className="blog-top gap-6 row">
//         <Slider {...sliderSettings}>
//           {blogs.slice(0,24).map((post) => (
//             <div
//               key={post._id}
//               className="blog-container col-lg-3 col-md-6 col-sm-12"
//             >
//               <div className="blog-part">
//                 <div className="blog-part-inner">
//                   <div className="blog-imagesecs">
//                     <div className="blog-image">
//                       <Link
//                         to={`/blogpost/${post.slug}`}
//                         className="blog-imgLink"
//                       >
//                         <img
//                           src={
//                             Array.isArray(post.thumbnail) &&
//                             post.thumbnail.length > 0
//                               ? `${BASE_URL}/${
//                                   post.thumbnail[0].startsWith("/")
//                                     ? post.thumbnail[0].slice(1)
//                                     : post.thumbnail[0]
//                                 }`
//                               : post.image
//                               ? post.image
//                               : "/romainpageicon.png"
//                           }
//                           alt={post.title}
//                           loading="lazy"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="blog-content">
//                     <div className="blogpost_details">
//                       <span>
//                         <FaUser className="bloguser" />{" "}
//                         {post?.user?.username || "Unknown"}
//                       </span>
//                       <span>
//                         <SlCalender /> {moment(post.createdAt).format("LL")}
//                       </span>
//                     </div>
//                     <h5>{post.title?.slice(0,20)}</h5>
//                    <div>
//   {typeof post.description === "string"
//     ? parse(DOMPurify.sanitize(post.description.slice(0, 50)))
//     : "No description"}
// </div>

//                     <Link to="/Blog_pagination">
//                       Read Blogs...
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default BlogHome;
