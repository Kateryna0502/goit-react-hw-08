import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";





const ContactList = () => {
  
    
    const onContactFilter = useSelector(selectFilteredContacts);
  
    return (
      <div>
        <ul className={css.list}>
          {onContactFilter.map((contact) => {
            return (
              <li className={css.item} key={contact.id}>
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };


      

export default ContactList;

