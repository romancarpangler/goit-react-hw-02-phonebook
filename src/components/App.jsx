import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddcontacts } from 'form';
import { Contacts } from 'contacts';
import { Filter } from 'filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid().toString(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid().toString(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid().toString(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid().toString(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit({ name, number }) {
    const contact = {
      id: nanoid().toString(),
      name,
      number,
    };
    console.log(this.state);

    // this.setState({
    //   contacts: [...this.state.contacts, contact],
    // });
  }

  onChenge = e => {
    this.setState({ filter: e.target.value }, this.filterName);
  };

  filterName() {
    const valueFilter = this.state.filter.toLowerCase();
    const contacts = this.state.contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilter)
    );
  }

  deleteContact = id => {
    const contacts = this.state.contacts;
    this.setState(() => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormAddcontacts onSubmit={this.onSubmit} />

        <h1>Contacts</h1>
        <Filter onChenge={this.onChenge} />
        <Contacts
          contacts={this.filterName()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
