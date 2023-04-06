import { useDispatch } from 'react-redux';
import { searchContacts } from './redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => {
          dispatch(searchContacts(e.target.value.toLowerCase()));
        }}
      ></input>
    </label>
  );
};
