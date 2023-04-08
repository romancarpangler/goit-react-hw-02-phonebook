import { deleteContact } from './redux/slice';
import { useSelector, useDispatch } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.a);
  const filter = useSelector(state => state.filter);

  function contactsFillet() {
    if (!filter) {
      return false;
    }

    return contacts.filter(a => a.name.toLowerCase().includes(filter));
  }

  const fillter = contactsFillet();

  const list = fillter ? fillter : contacts;

  return (
    <ul>
      {list.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
