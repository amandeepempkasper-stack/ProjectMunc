import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Config/config";
import { ChevronLeft } from "lucide-react";
import classNames from "classnames";
import toast from 'react-hot-toast';


const ProductDemoList = () => {
  const [demos, setDemos] = useState([]);
  const [filteredDemos, setFilteredDemos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editDemo, setEditDemo] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    product: "",
    designation: "",
  });
  // const [toast, setToast] = useState(null);

  const rowsPerPage = 10;

  // Fetch all demos
  const fetchDemos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/demo`);
      setDemos(Array.isArray(res.data) ? res.data : res.data.data || []);
    } catch (err) {
      console.error("Error fetching demos:", err);
      toast.error("Failed to fetch demos ❌", "error");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  // Search filter (case-insensitive)
  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const results = demos.filter(
      (demo) =>
        demo.name?.toLowerCase().includes(lowerSearch) ||
        demo.companyName?.toLowerCase().includes(lowerSearch) ||
        demo.email?.toLowerCase().includes(lowerSearch) ||
        demo.phone?.toLowerCase().includes(lowerSearch) ||
        demo.product?.toLowerCase().includes(lowerSearch) ||
        demo.designation?.toLowerCase().includes(lowerSearch)
    );
    setFilteredDemos(results);
  }, [search, demos]);

  // const showToast = (message, type = "success") => {
  //   setToast({ message, type });
  //   setTimeout(() => setToast(null), 2500);
  // };

  // Delete demo
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this demo?")) return;
    try {
      await axios.delete(`${BASE_URL}/api/demo/${id}`);
      toast.success("Deleted successfully ✅", "success");
              // toast.success("Account created successfully");

      fetchDemos();
    } catch (err) {
      console.error("Error deleting demo:", err);
      // showToast("Failed to delete ❌", "error");
    }
  };

  // Open edit modal
  const handleEdit = (demo) => {
    setEditDemo(demo);
    setEditForm({
      name: demo.name || "",
      companyName: demo.companyName || "",
      email: demo.email || "",
      phone: demo.phone || "",
      product: demo.product || "",
      designation: demo.designation || "",
    });
  };

  // Update demo
  const handleUpdate = async () => {
    try {
      await axios.put(`${BASE_URL}/api/demo/${editDemo._id}`, editForm);
      toast.success("Updated successfully ✅", "success");
      setEditDemo(null);
      fetchDemos();
    } catch (err) {
      console.error("Error updating demo:", err);
      toast.error("Failed to update ❌", "error");
    }
  };

  const totalPages = Math.ceil(filteredDemos.length / rowsPerPage);
  const rows = filteredDemos.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="relative max-w-7xl mx-auto p-6 rounded-lg bg-white">
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
          placeholder="Search by name, company, product or designation..."
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
                {[
                  "Name",
                  "Company",
                  "Email",
                  "Phone",
                  "Product",
                  "Designation",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center">
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
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {demo.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {demo.companyName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {demo.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {demo.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {demo.product}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {demo.designation}
                    </td>
                    <td className="px-6 py-4 text-sm space-x-4 flex">
                      <button
                        onClick={() => handleEdit(demo)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(demo._id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
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
      <div className="flex items-center justify-between px-4 py-3 border-t bg-white text-sm mt-4">
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

      {/* Edit Modal */}
      {editDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Edit Demo</h3>
            {Object.keys(editForm).map((key) => (
              <div className="mb-3" key={key}>
                <label className="block text-sm text-gray-600 capitalize mb-1">
                  {key}
                </label>
                <input
                  type="text"
                  value={editForm[key]}
                  onChange={(e) =>
                    setEditForm({ ...editForm, [key]: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            ))}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setEditDemo(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {/* {toast && (
        <div
          className={`fixed bottom-6 right-6 px-4 py-2 rounded-lg shadow-lg text-white text-sm transition-all duration-500 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )} */}
    </div>
  );
};

export default ProductDemoList;
