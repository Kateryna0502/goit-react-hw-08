import { useDispatch, useSelector } from "react-redux";
// import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { deleteContact } from "../../redux/contacts/operations.js";
import toast from "react-hot-toast";

const ContactList = () => {
  
  const onContactFilter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
  };
    return (
      <div>
        <ul className={css.list}>
          {onContactFilter.map((contact) => {
            return (
              <li className={css.item} key={contact.id}>
                <p>
                  <b>{contact.name}</b>: {contact.number}
                </p>
                <button onClick={() => onDeleteContact(contact.id)} type="button">
                  ❌
                </button>
              </li>
              
            )
          })}
      </ul>
    </div>
    );
  };


      

export default ContactList;

