import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

export const ContactList = ({ contactNames, deleteItem }) => {
  return (
    <ul className={css.contactList}>
      {contactNames.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            deleteItem={() => deleteItem(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
