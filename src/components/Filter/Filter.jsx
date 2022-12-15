import PropTypes from 'prop-types';
import { InputTitle, Input } from './Filter.styled';

export const Filter = ({ handleChangeFilter, filterValue }) => (
  <div>
    <InputTitle htmlFor="filter">Find contacts by name</InputTitle>
    <Input
      name="filter"
      onChange={handleChangeFilter}
      value={filterValue}
    ></Input>
  </div>
);

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
