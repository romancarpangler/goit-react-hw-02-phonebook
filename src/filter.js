import PropTypes from 'prop-types';

export const Filter = ({ onChenge }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChenge}></input>
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
