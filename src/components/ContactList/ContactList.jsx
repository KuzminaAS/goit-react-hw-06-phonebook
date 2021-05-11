import React from 'react';

import ContactListItem from '../ContactListItem';
import { ReactComponent as UserIcon } from '../icons/user.svg'
import { connect } from 'react-redux';
import {deleteContact} from '../../redux/contacts/contacts-actions'

const ContactList = ({ list, onDelete }) => {

    const contactElements = list.map((item, index) => <ContactListItem  key={item.id} {...item} onDelete={()=>onDelete(index)}> <UserIcon/> </ContactListItem>)
    return (
        <ul>
            {contactElements}
        </ul>
    
    )
};


const mapStateToProps = ({items,filter}) => { 

    const normalizeFilter = filter.toLowerCase();
    
    const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return {
        list: visibleContacts
    }
}

const mapDispatchToProps = dispatch => ({onDelete: (index) => dispatch(deleteContact(index))});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
