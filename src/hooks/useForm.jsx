import { useState } from 'react';

const useForm = (setNotification) => {
  const [contacts, setContacts] = useState(() => {
    // Load contacts from local storage
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const addContact = (contact) => {
    contact.name = capitalizeFirstLetter(contact.name);
    contact.jobTitle = capitalizeFirstLetter(contact.jobTitle);
    contact.notes = capitalizeFirstLetter(contact.notes || '');

    if (contact.id) {
      setContacts((prevContacts) => {
        const updatedContacts = prevContacts.map((c) =>
          c.id === contact.id ? contact : c
        );

        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return updatedContacts;
      });
      setNotification("Contact updated successfully!");
    } else {
      contact.id = Date.now();
      setContacts((prevContacts) => {
        const updatedContacts = [...prevContacts, contact];

        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return updatedContacts;
      });
      setNotification("Contact added successfully!");
    }
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter((c) => c.id !== id);
      
      // Update local storage after deletion
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    });
    setNotification("Contact deleted!");
  };

  return { contacts, addContact, handleDelete };
};

export default useForm;
