import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddcontacts } from 'form';
import { Contacts } from 'contacts';
import { Filter } from 'filter';
import { server } from 'server';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContact = localStorage.getItem('contacts');
    if (saveContact) {
      const contactsParse = JSON.parse(saveContact);
      this.setState({ contacts: contactsParse });
      return;
    }
    this.setState({ contacts: server });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid().toString(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  onChenge = e => {
    this.setState({ filter: e.target.value }, this.filterName);
  };

  filterName() {
    const valueFilter = this.state.filter.toLowerCase();
    const contacts = this.state.contacts;
    return contacts.filter(contact => contact.name.includes(valueFilter));
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
