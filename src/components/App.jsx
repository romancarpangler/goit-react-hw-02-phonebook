import { FormAddcontacts } from 'form';
import { Contacts } from 'contacts';
import { Filter } from 'filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <FormAddcontacts />

      <h1>Contacts</h1>
      <Filter />
      <Contacts />
    </div>
  );
};
