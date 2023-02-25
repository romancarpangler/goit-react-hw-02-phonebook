import { Component } from 'react';
import { Form } from 'form';
import { Contacts } from 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Form />
        <Contacts />
      </>
    );
  }
}
