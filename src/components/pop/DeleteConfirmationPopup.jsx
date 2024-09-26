import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import './Delete.css'; 

const DeleteConfirmationPopup = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      fullWidth 
      maxWidth="sm" 
    >
      <DialogTitle 
        style={{ textAlign: "center", color: "#1565C0", fontFamily: "Georgia, sans-serif" }} 
      >
        Delete Confirmation
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontFamily: "Georgia, sans-serif" }}> 
          Are you sure you want to delete this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "#1565C0", 
            color: "#fff",
            marginLeft: 1,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          sx={{
            backgroundColor: "#1565C0",
            color: "#fff",
            marginLeft: 1,
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationPopup;
