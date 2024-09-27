import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

const NotificationPopup = ({ message, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSnackbarExit = () => {
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      onExited={handleSnackbarExit}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={null}
        severity="success"
        sx={{
          width: "1200",
          backgroundColor: "#1565C0", 
          color: "#fff",
        }}
        icon={false}  
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationPopup;
