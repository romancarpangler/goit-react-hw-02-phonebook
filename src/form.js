import { useState } from 'react';
import PropTypes from 'prop-types';

export const FormAddcontacts = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    event.currentTarget.reset();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="ivan vasulovuch"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="111-111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button>submit</button>
    </form>
  );
};

FormAddcontacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
