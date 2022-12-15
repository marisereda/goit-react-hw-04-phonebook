import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { theme } from 'constants';

const LS_CONTACTS_KEY = 'Phonebook-contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  // --------------------------------
  useEffect(() => {
    const lsContacts = JSON.parse(localStorage.getItem(LS_CONTACTS_KEY));
    if (lsContacts) {
      setContacts(lsContacts);
    }
  }, []);

  // --------------------------------
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // --------------------------------
  const addContact = ({ name, number }) => {
    const seekingName = name.toLowerCase().trim();
    const foundName = contacts.find(
      contact => contact.name.toLowerCase().trim() === seekingName
    );

    if (foundName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    setContacts([...contacts, newContact]);
  };

  // --------------------------------
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // --------------------------------
  const handleChangeFilter = e => {
    const filter = e.target.value.toLowerCase();
    setFilter(filter);
  };

  // --------------------------------
  const getFilteredContacts = () => {
    let filterTrimed = filter.trim();
    return filterTrimed
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterTrimed)
        )
      : contacts;
  };

  // --------------------------------
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={6}
    >
      <Section title="Phonebook" bgColor={theme.colors.bgLight}>
        <ContactForm addContact={addContact} />
      </Section>

      <Section title="Contacts" bgColor={theme.colors.bgPrimary}>
        <Filter handleChangeFilter={handleChangeFilter} filterValue={filter} />
        <ContactList
          filteredContacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>

      <GlobalStyle />
    </Box>
  );
};
