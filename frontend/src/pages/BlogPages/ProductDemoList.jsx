import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDemoList = () => {
  const [demos, setDemos] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // items per page
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch demos from backend
  const fetchDemos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/api/demo`, {
        params: { search, page, limit },
      });

      // Check if backend returns paginated data
      if (Array.isArray(res.data)) {
        setDemos(res.data);
        setTotalPages(Math.ceil(res.data.length / limit)); // fallback pagination
      } else {
        setDemos(res.data.data || []);
        setTotalPages(res.data.totalPages || 1);
      }
    } catch (err) {
      console.error("Error fetching demos:", err);
      setDemos([]);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDemos();
  }, [search, page]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this demo?")) return;

    try {
      await axios.delete(`http://localhost:8080/api/demo/${id}`);
      alert("Deleted successfully ✅");
      fetchDemos();
    } catch (err) {
      console.error(err);
      alert("Failed to delete ❌");
    }
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Product Demo Requests</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, company or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-50">
            <tr>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Company</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Phone</th>
              <th className="border px-3 py-2">Product</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : demos && demos.length ? (
              demos.map((demo) => (
                <tr key={demo._id}>
                  <td className="border px-3 py-2">{demo.name}</td>
                  <td className="border px-3 py-2">{demo.companyName}</td>
                  <td className="border px-3 py-2">{demo.email}</td>
                  <td className="border px-3 py-2">{demo.phone}</td>
                  <td className="border px-3 py-2">{demo.product}</td>
                  <td className="border px-3 py-2">
                    <button
                      onClick={() => handleDelete(demo._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${
            page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <span className="flex items-center gap-2">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded ${
            page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductDemoList;