import React from "react";
import "./Table.css";

const Table = ({ contacts, handleDelete, onContactClick }) => {
  return (
    <div>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Type</th>
            <th>Job Title</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "grey" }}>
                No contacts available.
              </td>
            </tr>
          ) : (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td
                  onClick={() => onContactClick(contact)}
                  style={{
                    textDecoration: "underline",
                    color: "palevioletred",
                    cursor: "pointer",
                  }}
                >
                  {contact.name}
                </td>
                <td>
                  <span className="tooltip">
                    {contact.email}
                    <span className="tooltip-text">{contact.email}</span>
                  </span>
                </td>
                <td>{contact.contactType}</td>
                <td>{contact.jobTitle}</td>
                <td>{contact.notes || "-"}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(contact.id);
                    }}
                    style={{ color: "black" }}
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
  );
};

export default Table;
