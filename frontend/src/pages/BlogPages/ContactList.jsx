import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(10);
  const [selectedContact, setSelectedContact] = useState(null);

  // Fetch contacts from backend

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/contact");
      const json = await res.json();
      // Handle backend response whether it's { data: [...] } or just array
      const contactsArray = Array.isArray(json)
        ? json
        : json.data || [];
      setContacts(contactsArray);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setContacts([]);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);


  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`http://localhost:8080/api/contact/${id}`, {
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

  // Filter contacts based on search input
  const filteredContacts = contacts.filter(
    (c) =>
      (c.name && c.name.toLowerCase().includes(search.toLowerCase())) ||
      (c.email && c.email.toLowerCase().includes(search.toLowerCase())) ||
      (c.queryType && c.queryType.toLowerCase().includes(search.toLowerCase()))
  );
  // Pagination logic
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="bg-[#f9f9f9] min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Contact List</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Name, Email, Product..."
          className="w-full mb-4 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Contacts Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Product</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No records found
                  </td>
                </tr>
              ) : (
                currentContacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50">
                    <td className="border p-3">{contact.name}</td>
                    <td className="border p-3">{contact.email}</td>
                    <td className="border p-3">{contact.phone || "N/A"}</td>
                    <td className="border p-3">{contact.queryType || "N/A"}</td>
                    <td className="border p-3 flex gap-2">
                      <button
                        onClick={() => setSelectedContact(contact)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => paginate(idx + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === idx + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* View Modal */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-11/12 max-w-md relative">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                onClick={() => setSelectedContact(null)}
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
              <p>
                <strong>Name:</strong> {selectedContact.name}
              </p>
              <p>
                <strong>Company:</strong> {selectedContact.company || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {selectedContact.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedContact.phone || "N/A"}
              </p>
              <p>
                <strong>Product:</strong> {selectedContact.queryType || "N/A"}
              </p>
              <p>
                <strong>Description:</strong> {selectedContact.description || "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;