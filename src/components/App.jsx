import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddcontacts } from 'form';
import { Contacts } from 'contacts';
import { Filter } from '../filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid().toString(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid().toString(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid().toString(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid().toString(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  onSubmit({ name, number }) {
    const contact = {
      id: nanoid().toString(),
      name,
      number,
    };

    this.setState(prevState => {
      // const { contacts } = this.state;

      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  }

  onChenge = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormAddcontacts onSubmit={this.onSubmit} />

        <h1>Contacts</h1>
        <Filter onChenge={this.onChenge} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
