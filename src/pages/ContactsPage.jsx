import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading, selectError } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import toast, { Toaster } from 'react-hot-toast';
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
    
    <ContactForm />
    {loading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
      <Toaster />
      
      <SearchBox />

      <ContactList />
      
    </div>
  );
}
      
export default ContactsPage;