import PropTypes from 'prop-types';
import { ImCheckmark, ImBin } from 'react-icons/im';
import { Box } from 'components/Box';
import { theme } from 'constants';
import { Item, Button } from './Contact.styled';

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      <Box display="flex" alignItems="center" gridGap={3} minWidth="nameBox">
        <ImCheckmark size={theme.sizes.iconS} />
        {name}:
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gridGap={3}
        minWidth="numberBox"
      >
        <span>{number}</span>
        <Button
          name={id}
          type="button"
          onClick={deleteContact}
          aria-label="Remove contact"
        >
          <ImBin size={theme.sizes.iconM} />
        </Button>
      </Box>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
