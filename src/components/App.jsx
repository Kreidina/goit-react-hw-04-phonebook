import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('Contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`Name: ${name} to already in contacts`);
    }
    if (
      contacts.some(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      return alert(`Number: ${number} to already in contacts`);
    }

    addNewContact(name, number);
  };

  const addNewContact = (name, number) => {
    const idData = nanoid();
    const newContact = {
      id: idData,
      name,
      number,
    };
    setContacts([newContact, ...contacts]);
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const visibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visibleContact;
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  const visible = visibleContact();
  return (
    <div className="generalContainet">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList contactNames={visible} deleteItem={deleteContact} />
    </div>
  );
};
