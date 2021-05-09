import React from 'react';
// import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem';
import { ReactComponent as UserIcon } from '../icons/user.svg'
const ContactList = ({ list, onDelete }) => {

    const contactElements = list.map((item, index) => <ContactListItem  key={item.id} {...item} onDelete={()=>onDelete(index)}> <UserIcon/> </ContactListItem>)
    return (
        <ul>
            {contactElements}
        </ul>
    
    )
};

export default ContactList;
