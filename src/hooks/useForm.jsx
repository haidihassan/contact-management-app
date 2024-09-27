import { useState } from "react";

const useForm = (setNotification) => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const addContact = (contact) => {
    contact.name = capitalizeFirstLetter(contact.name);
    contact.jobTitle = capitalizeFirstLetter(contact.jobTitle);
    contact.notes = capitalizeFirstLetter(contact.notes || "");

    contact.id = Date.now();
    setContacts((prevContacts) => {
      const newContacts = [...prevContacts, contact];

      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return newContacts;
    });
    setNotification("Contact added successfully!");
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      const newContacts = prevContacts.filter((c) => c.id !== id);

      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return newContacts;
    });
    setNotification("Contact deleted!");
  };

  return { contacts, addContact, handleDelete };
};

export default useForm;
