// import React from "react";
// import "./pagination.css";

// const Pagination = ({ currentPage, totalPages, paginate }) => {
//   return (
//     <div className="pagination">
//       <button
//         onClick={() => paginate(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="page-btn"
//       >
//         &laquo; Prev
//       </button>

//       {[...Array(totalPages)].map((_, index) => (
//         <button
//           key={index + 1}
//           onClick={() => paginate(index + 1)}
//           className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
//         >
//           {index + 1}
//         </button>
//       ))}

//       <button
//         onClick={() => paginate(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="page-btn"
//       >
//         Next &raquo;
//       </button>
//     </div>
//   );
// };

// export default Pagination;
// ../pagination/Pagination.js
import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {getPageNumbers().map((number) => (
        <BootstrapPagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </BootstrapPagination.Item>
      ))}
      <BootstrapPagination.Next
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
