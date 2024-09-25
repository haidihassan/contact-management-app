import React, { useState } from "react";
import ContactForm from "./components/form/ContactForm";
import SearchBar from "./components/searchBar/SearchBar";
import useForm from "./hooks/useForm";
import "./styles.css";
import ContactTable from "./components/contactTable/Table";
import ContactPopup from "./components/popUp/ContactPopup";
import NotificationPopup from "./components/pop/NotificationPopup";


const App = () => {
  const [currentContact, setCurrentContact] = useState(null);
  const [notification, setNotification] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { contacts, addContact, handleDelete } = useForm(setNotification);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onContactClick = (contact) => {
    setCurrentContact(contact);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentContact(null);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };
  return (
    <div className="App">
      <h1>Contact Management</h1>
      <ContactForm addContact={addContact} />
      <SearchBar onSearch={handleSearch} />
      <ContactTable
        contacts={filteredContacts}
        handleDelete={handleDelete}
        onContactClick={onContactClick}
      />
      {isPopupOpen && (
        <ContactPopup contact={currentContact} onClose={handleClosePopup} />
      )}
      {notification && (
        <NotificationPopup message={notification} onClose={handleCloseNotification} />
      )}
    </div>
  );
};

export default App;
