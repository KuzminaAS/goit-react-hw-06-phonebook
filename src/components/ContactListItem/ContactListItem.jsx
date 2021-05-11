import React from 'react';
import styles from './ContactListItem.module.css'
import PropTypes from 'prop-types';


const ContactListItem = ({ name, number, onDelete, children}) => {
    return (
        <li>
            {children} {name} : {number} 
            <button  className={styles.btn} type='button' onClick={onDelete}>X</button>
        </li>
    )
};

export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}
