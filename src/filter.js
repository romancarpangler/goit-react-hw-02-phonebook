export const Filter = ({ onChenge }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChenge}></input>
    </label>
  );
};
