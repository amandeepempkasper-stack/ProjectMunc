import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import ThumbnailPlaceholder from "../../../assets/thumb.jpg";

const BlogCard = ({
  title,
  description,
  image,
  thumbnail,
  username,
  time,
  id,
  isUser,
  handleDelete,
  slug,
  previewOnly = false,
  icon,
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${slug || id}`);
  };

  const handleView = () => {
    navigate(`/blogpost/${slug}`);
  };

  // Clean description
  const cleanHTML = DOMPurify.sanitize(description, {
    FORBID_ATTR: ["style", "width", "height", "float"],
  });

  const shortDescription =
    cleanHTML.length > 150 ? cleanHTML.slice(0, 150) + "..." : cleanHTML;

  // Handle main image
  const getMainImage = () => {
    if (thumbnail && Array.isArray(thumbnail) && thumbnail.length > 0) {
      const cleanThumbnail = thumbnail[0].startsWith("/")
        ? thumbnail[0].slice(1)
        : thumbnail[0];
      return cleanThumbnail;
    }
    return image && image.trim() ? image : ThumbnailPlaceholder;
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden 
      border-[2px] border-transparent hover:border-[#007AFF] 
      transition duration-300 p-[10px]"
    >
      {/* Image + User tag */}
      <div className="relative">
        <img
          src={getMainImage()}
          alt={title}
          onClick={handleView}
          className="w-full h-48 object-cover rounded-2xl cursor-pointer"
        />

        <span className="absolute bottom-2 left-2 flex items-center gap-1 bg-white border text-[#007AFF] px-[8px] py-[4px] rounded-full text-xs font-medium shadow">
          {icon}
          {username}
        </span>

        {/* Actions for Owner */}
        {isUser && (
          <div className="absolute top-2 right-2 flex gap-2">
            <MdEdit
              onClick={handleEdit}
              title="Edit Blog"
              className="cursor-pointer text-blue-500 bg-white rounded-full p-1 w-6 h-6 shadow"
            />
            <MdDelete
              onClick={() => handleDelete(slug || id)}
              title="Delete Blog"
              className="cursor-pointer text-red-500 bg-white rounded-full p-1 w-6 h-6 shadow"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="py-2">
        <span className="block text-[10px] leading-[120%] text-[#7D7D7D] mb-1">
          {time
            ? new Date(time).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "No date available"}
        </span>

        <h3 className="text-base font-medium text-gray-800">{title}</h3>

        <p className="text-sm text-[#7D7D7D] mt-2 line-clamp-2 leading-[120%]">
          {previewOnly ? parse(shortDescription) : parse(cleanHTML)}
        </p>

        {previewOnly && (
          <button
            onClick={handleView}
            className="text-[#007AFF] text-sm font-normal leading-[100%] mt-3 inline-block hover:underline"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
