import React, { useState } from "react"; 
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import NotificationPopup from '../pop/NotificationPopup'; 
import DeleteConfirmationPopup from '../pop/DeleteConfirmationPopup'; 
import './Table.css'; 

const ContactsTable = ({ contacts, handleDelete, onContactClick }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteWithPopup = (id) => {
    setContactToDelete(id);
    setDeleteConfirmationVisible(true);
  };

  const confirmDelete = () => {
    handleDelete(contactToDelete); 
    setPopupVisible(true); 
    setDeleteConfirmationVisible(false); 
    setContactToDelete(null); 
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: "90%",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Table sx={{ borderCollapse: "collapse" }} className="contact-table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor: "#1565C0",
                  color: "#fff",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor: "#1565C0",
                  color: "#fff",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor: "#1565C0",
                  color: "#fff",
                }}
              >
                Contact Type
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor: "#1565C0",
                  color: "#fff",
                }}
              >
                Job Title
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor: "#1565C0",
                  color: "#fff",
                }}
              >
                Notes
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor: "#1565C0",
                  color: "#fff",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ color: "grey" }}>
                  No contacts available.
                </TableCell>
              </TableRow>
            ) : (
              contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell
                    onClick={() => onContactClick(contact)}
                    sx={{
                      textDecoration: "underline",
                      color: "#1565C0",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                    }}
                  >
                    {contact.name}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <span className="tooltip">
                      {contact.email}
                      <span className="tooltip-text">{contact.email}</span>
                    </span>
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {contact.contactType}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {contact.jobTitle}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {contact.notes || "-"}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteWithPopup(contact.id); 
                      }}
                      sx={{
                        backgroundColor: "#1565C0",
                        color: "#fff",
                        marginLeft: 0,
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {popupVisible && (
        <NotificationPopup
          onClose={() => setPopupVisible(false)} 
        />
      )}

      <DeleteConfirmationPopup
        open={deleteConfirmationVisible}
        onClose={() => setDeleteConfirmationVisible(false)}
        onConfirm={confirmDelete} 
      />
    </>
  );
};

export default ContactsTable;
