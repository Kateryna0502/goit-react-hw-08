import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import toast from 'react-hot-toast';
import { addContact, deleteContact } from '../redux/contacts/operations';

function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully🎉");
      });
  }, [dispatch]);

  const onAddContact = (contact) => {
    dispatch(addContact(contact))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully🎉");
      });
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
  };


  return (
  <div>
    <h1>Your Contacts</h1>
    
    <ContactForm onAddContact={onAddContact} />
    {loading && <Loader />}
      {error && <p>{error}</p>}
      <SearchBox /> 
    <ContactList />
  </div>
);
}

export default ContactsPage;