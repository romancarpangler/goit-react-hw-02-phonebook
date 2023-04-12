import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormAddcontacts } from 'components/form';
import { Contacts } from 'components/contacts';
import { Filter } from 'components/filter';
import { fetchContact } from 'operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

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
