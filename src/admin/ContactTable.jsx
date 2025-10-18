

import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDeleteContactMutation, useGetAllContactsQuery } from "../redux/apis/contactapi";

const ContactTable = () => {
  const { data, isLoading, isError } = useGetAllContactsQuery();
  const [deletecontact] = useDeleteContactMutation()
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 8;

  if (isLoading)
    return <p className="text-center text-lg py-10">Loading contacts...</p>;
  if (isError)
    return (
      <p className="text-center text-lg py-10 text-red-600">
        Failed to load contacts.
      </p>
    );

  const contacts = data?.contacts || [];

  const filtered = contacts.filter((x) => {
    const s = search.toLowerCase();
    return (
      x.name.toLowerCase().includes(s) ||
      x.email.toLowerCase().includes(s) ||
      x.message.toLowerCase().includes(s)
    );
  });

  const total = Math.ceil(filtered.length / perPage);
  const shown = filtered.slice((page - 1) * perPage, page * perPage);


  return (
    <div className="p-4 min-h-screen bg-slate-50">
      <h2 className="text-2xl font-semibold text-center mb-6 text-slate-800">
        📬 Contact Entries
      </h2>


      <div className="flex justify-center mb-4">
        <input
          className="border border-slate-300 p-2 rounded-md w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>


      <div className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full text-sm text-slate-700 border-collapse">
          <thead className="bg-indigo-100 text-slate-700">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-slate-500">
                  No data found
                </td>
              </tr>
            ) : (
              shown.map((x, i) => (
                <tr key={x._id} className="border-b hover:bg-slate-50">
                  <td className="p-2">{(page - 1) * perPage + i + 1}</td>
                  <td className="p-2">{x.name}</td>
                  <td className="p-2">{x.email}</td>
                  <td className="p-2">{x.mobile}</td>
                  <td className="p-2 max-w-[180px] truncate">{x.message}</td>
                  <td className="p-2">
                    {new Date(x.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-2">
                    <button
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-3 mt-4 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 bg-indigo-200 rounded disabled:bg-slate-200"
        >
          Prev
        </button>
        <span className="text-sm text-slate-700">
          Page {page} of {total}
        </span>
        <button
          disabled={page === total}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 bg-indigo-200 rounded disabled:bg-slate-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactTable;














