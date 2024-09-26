import React, { useEffect, useRef } from "react";
import "./Popup.css";
import { Button } from "@mui/material";

const ContactPopup = ({  contact, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (contact) {
      dialogRef.current?.showModal(); 
    } else {
      dialogRef.current?.close(); 
    }
  }, [contact]);

  return (
    <dialog ref={dialogRef} className="popup-content">
      <h2 style={{ textAlign: "center" }}>Contact Details</h2>
      <p style={{ marginLeft: "15px" }}>
        <strong>Name:</strong> {contact?.name}
      </p>
      <p style={{ marginLeft: "15px" }}>
        <strong>Email:</strong> {contact?.email}
      </p>
      <p style={{ marginLeft: "15px" }}>
        <strong>Contact Type:</strong> {contact?.contactType}
      </p>
      <p style={{ marginLeft: "15px" }}>
        <strong>Job Title:</strong> {contact?.jobTitle}
      </p>
      {contact?.notes && (
        <p style={{ marginLeft: "15px" }}>
          <strong>Notes:</strong> {contact.notes}
        </p>
      )}
     <Button
        onClick={onClose}
        sx={{
          backgroundColor: "#1565C0",
          color: "#fff",
          marginLeft: 1,
        }}
      >
        Close
      </Button>
    </dialog>
  );
};

export default ContactPopup;
