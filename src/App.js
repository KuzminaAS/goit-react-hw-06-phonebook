import React, { Component } from "react";

import shortid from "shortid";
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';



class App extends Component {

    state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contactList = JSON.parse(localStorage.getItem("contacts"))
    this.setState({
      contacts: contactList || []
    })
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    const contactList = JSON.stringify(contacts);
    localStorage.setItem("contacts", contactList);
    
  }

  addContact = ({name,number}) => {
     const contact = {
        id: shortid.generate(),
        name,
        number
      }

    this.setState(prevState => {
     const { contacts } = prevState;
     
      const result = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
      
      if (result) {
        
        alert(`${name} is already in contacts`);
        return {contacts}
      } else {

      const newContacts = [...contacts];
      newContacts.push(contact);
      return {contacts : newContacts}
      }

    })

  }

  onDelete = (index) => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts]
      newContacts.splice(index, 1);
      return {contacts : newContacts}
    })
  }
  
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }
  render() {

    const { contacts, filter } = this.state;
    const { addContact, onDelete } = this;

    const normalizeFilter = filter.toLowerCase();
    
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

    return (
    <Container>
    <h1>Phonebook</h1>
     <ContactForm onSubmit={addContact}> </ContactForm>

    <h2>Contacts</h2>
    <Filter value = {filter} onChange = {this.changeFilter} />
     <ContactList list={visibleContacts} onDelete={onDelete} />
    </Container>
  )
  }
}

export default App;
