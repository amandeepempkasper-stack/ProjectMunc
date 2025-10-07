import React, { useState, useEffect } from "react";
import BASE_URL from "../Config/config";
import { ChevronLeft, Eye, Edit, Trash2, X } from "lucide-react";
import classNames from "classnames";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null); // View modal
  const [editContact, setEditContact] = useState(null); // Edit modal
  const [loading, setLoading] = useState(false);

  const rowsPerPage = 10; // Rows per page

  // Fetch contacts
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/contact`);
      const json = await res.json();
      console.log(json)
      setContacts(json);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setContacts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    try {
      const res = await fetch(`${BASE_URL}/api/contact/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || "Deleted successfully");
        fetchContacts();
      } else {
        alert(data.message || "Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting contact");
    }
  };

  // Update contact
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editContact) return;

    try {
      const res = await fetch(`${BASE_URL}/api/contact/${editContact._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editContact),
      });

      console.log(res);
      const data = await res.json();
      if (data.success) {
        alert("Contact updated successfully");
        setEditContact(null);
        fetchContacts();
      } else {
        alert(data.message || "Failed to update");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating contact");
    }
  };

  // Filter contacts by search (with safe fallback)
  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(
        (c) =>
          (c.name && c.name.toLowerCase().includes(search.toLowerCase())) ||
          (c.email && c.email.toLowerCase().includes(search.toLowerCase())) ||
          (c.queryType &&
            c.queryType.toLowerCase().includes(search.toLowerCase()))
      )
    : [];

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / rowsPerPage);
  const rows = filteredContacts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-light text-gray-800 mb-2">
          Contact Inquiries
        </h1>
        <p className="text-gray-500">Manage customer contact requests</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or product..."
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
                  <td colSpan="5" className="px-6 py-8 text-center">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                    </div>
                    <p className="mt-2 text-gray-500">Loading contacts...</p>
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No contact requests found
                  </td>
                </tr>
              ) : (
                rows.map((contact) => (
                  <tr
                    key={contact._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {contact.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {contact.phone || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.queryType || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="text-blue-600 hover:text-blue-800 p-1"
                          title="View details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditContact({ ...contact })}
                          className="text-gray-600 hover:text-gray-800 p-1"
                          title="Edit contact"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Delete contact"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 px-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={classNames(
              "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md",
              page === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            )}
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
                    "w-8 h-8 rounded text-sm flex items-center justify-center transition-colors",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {n}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={classNames(
              "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md",
              page === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            Next <ChevronLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      )}

      {/* View Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md relative">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-light text-gray-800">
                Contact Details
              </h2>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <p className="text-gray-900">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Company
                </label>
                <p className="text-gray-900">
                  {selectedContact.company || "—"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Email
                </label>
                <p className="text-gray-900">{selectedContact.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Phone
                </label>
                <p className="text-gray-900">{selectedContact.phone || "—"}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Product
                </label>
                <p className="text-gray-900">
                  {selectedContact.queryType || "—"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Designation
                </label>
                <p className="text-gray-900">
                  {selectedContact.designation || "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editContact && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md relative">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-light text-gray-800">Edit Contact</h2>
              <button
                onClick={() => setEditContact(null)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={handleUpdate}>
              <input
                type="text"
                name="name"
                value={editContact.name || ""}
                onChange={(e) =>
                  setEditContact({ ...editContact, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Name"
                required
              />
              <input
                type="text"
                name="company"
                value={editContact.company || ""}
                onChange={(e) =>
                  setEditContact({ ...editContact, company: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Company"
              />
              <input
                type="email"
                name="email"
                value={editContact.email || ""}
                onChange={(e) =>
                  setEditContact({ ...editContact, email: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                value={editContact.phone || ""}
                onChange={(e) =>
                  setEditContact({ ...editContact, phone: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Phone"
              />
              <input
                type="text"
                name="designation"
                value={editContact.designation || ""}
                onChange={(e) =>
                  setEditContact({
                    ...editContact,
                    designation: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Designation"
              />
              <select
                name="queryType"
                value={editContact.queryType || ""}
                onChange={(e) =>
                  setEditContact({ ...editContact, queryType: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="" disabled hidden>
                  Select Product
                </option>
                <option value="LMS">Lead Management</option>
                <option value="IMS">Inventory Management</option>
                <option value="SMS">School Management</option>
                <option value="HRMS">HR Management</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Update Contact
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
