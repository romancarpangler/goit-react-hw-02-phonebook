import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormAddcontacts } from 'form';
import { Contacts } from 'contacts';
import { Filter } from 'filter';
import { server } from 'server';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const saveContact = localStorage.getItem('contacts');
    console.log(saveContact);
    if (saveContact) {
      const contactsParse = JSON.parse(saveContact);
      setContacts(contactsParse);

      return;
    }
    setContacts(server);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (name, number) => {
    const contact = {
      id: nanoid().toString(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const onChenge = event => {
    setFilter(event.target.value);
  };

  const filterName = () => {
    const valueFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormAddcontacts onSubmit={onSubmit} />

      <h1>Contacts</h1>
      <Filter onChenge={onChenge} />
      <Contacts contacts={filterName()} onDeleteContact={deleteContact} />
    </div>
  );
};
