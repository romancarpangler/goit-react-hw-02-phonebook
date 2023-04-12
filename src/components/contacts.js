import { deleteContact } from '../operations';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from '../redux/selector';

export const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
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
      {isLoading && (
        <div style={{ marginTop: 20, marginLeft: 50 }}> Loading... </div>
      )}
      {isError && (
        <div style={{ marginTop: 100, marginLeft: 50 }}>{isError}</div>
      )}
    </>
  );
};
