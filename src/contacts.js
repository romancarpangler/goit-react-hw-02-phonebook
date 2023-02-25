import { nanoid } from 'nanoid';

export const Contacts = () => {
  return (
    <ul>
      <li key={nanoid()}></li>
    </ul>
  );
};
