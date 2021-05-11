import React, { Component } from "react";

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';


class App extends Component {

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
  render() {

    return (
    <Container>
    <h1>Phonebook</h1>
    <ContactForm/>
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    </Container>
  )
  }
}

export default App;
