import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    console.log(data);
  };

  return (
    <div className="generalContainet">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {/* <Filter
        value={filter}
        // onChange={fiterChange}
      /> */}
      {/* <ContactList
      // contactNames={visibleContact}
      // deleteItem={this.deleteContact}
      /> */}
    </div>
  );
};
