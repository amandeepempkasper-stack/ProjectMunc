import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Config/config";
import { ChevronLeft } from "lucide-react"; // Assuming you're using `react-feather` for icons
import classNames from "classnames"; // Make sure you have this utility installed if not already

const ProductDemoList = () => {
  const [demos, setDemos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filteredDemos, setFilteredDemos] = useState([]); // Added state for filtered demos

  const fetchDemos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/demo`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setDemos(data);
      } else {
        setDemos(data.data || []);
      }
    } catch (err) {
      console.error("Error fetching demos:", err);
      setDemos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDemos();
  }, []); // Fetch demos only once when the component mounts

  // Filter demos based on search
  useEffect(() => {
    const results = demos.filter(
      (demo) =>
        demo.name.toLowerCase().includes(search.toLowerCase()) ||
        demo.companyName.toLowerCase().includes(search.toLowerCase()) ||
        demo.email.toLowerCase().includes(search.toLowerCase()) ||
        demo.phone.toLowerCase().includes(search.toLowerCase()) ||
        demo.product.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDemos(results);
  }, [search, demos]); // Re-run filtering logic when search or demos change

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this demo?")) return;

    try {
      const res = await fetch(`${BASE_URL}/api/demo/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      alert("Deleted successfully ✅");
      fetchDemos(); // Refresh demos after delete
    } catch (err) {
      console.error("Error deleting demo:", err);
      alert("Failed to delete ❌");
    }
  };

  const rowsPerPage = 10;
  const totalPages = Math.ceil(filteredDemos.length / rowsPerPage);
  const rows = filteredDemos.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6 border">
      <div className="mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-2">
          Product Demos
        </h2>
        <p className="text-gray-500">Manage demo requests</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, company or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                    </div>
                    <p className="mt-2 text-gray-500">Loading demos...</p>
                  </td>
                </tr>
              ) : rows.length ? (
                rows.map((demo) => (
                  <tr
                    key={demo._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {demo.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {demo.companyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {demo.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {demo.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {demo.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleDelete(demo._id)}
                        className="text-red-600 hover:text-red-800 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No demo requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 border-t bg-white text-sm">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 disabled:opacity-40"
          disabled={page === 1}
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1;
            const isActive = n === page;
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={classNames(
                  "w-8 h-8 rounded text-sm flex items-center justify-center",
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-white border hover:bg-gray-100"
                )}
              >
                {String(n).padStart(2, "0")}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 disabled:opacity-40"
          disabled={page === totalPages}
        >
          Next <ChevronLeft className="w-4 h-4 rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default ProductDemoList;
