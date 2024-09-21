import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from '../redux/contacts/operations';
import Loader from '../components/Loader/Loader';

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

  

  


  return (
  <div>
    <h1>Your Contacts</h1>
    
    <ContactForm onAddContact={onAddContact} />
    {loading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
      <Toaster />
      <ContactForm />
      <SearchBox />

      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>You don&apos;t have contacts yet!</p>
      )}
    </div>
  );
}
      
//       <SearchBox /> 
//     <ContactList />
//   </div>
// );
// }

export default ContactsPage;