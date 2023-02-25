import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddcontacts } from 'form';
import { Contacts } from 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  onSubmit({ name, number }) {
    const contact = {
      id: nanoid().toString(),
      name,
      number,
    };

    this.state.contacts.push(contact);
  }

  render() {
    return (
      <>
        <FormAddcontacts onSubmit={this.onSubmit} />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
