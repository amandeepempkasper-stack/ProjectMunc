import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import "./blog.css";
import { Link } from 'react-router-dom';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
       
        fetch("/blogs.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data))
          .catch((error) => console.error("Error loading blog data:", error));
      }, []);

    return (
      <div>
        <div className="blog_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-title">
                  <div className="blog-sec-title text-center">
                    <h3>Recent Posts</h3>
                  </div>
                </div>
              </div>
            </div>
         
  
        {/* Blog Posts */}
        <div className=" row blog-top ">
          {blogs.map((post) => (
            <div key={post.id} className="blog-container col-lg-4 col-md-6 col-sm-12">
              <div className="blog-part">
                <div className="blog-part-inner">
                  <div className="blog-imagesec">
                    <div className="blog-image">
                      <Link to={post.link} className="blog-imgLink">
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blogpost_detail">
                    <span>
                      <FaUser className='bloguser' /> {post.author}
                    </span>
                    <span>
                      <SlCalender /> {post.date}
                    </span>
                    </div>
                    <h5>
                      <Link to={post.link}>{post.title}</Link>  
                    </h5>
                  
                    <Link to={post.link}>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Blog;



