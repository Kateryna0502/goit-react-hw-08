
import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({
  id,
  name,
  number
}) => {
  const dispatch = useDispatch();
  const removeContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };
  return (
    <div className={css.div}>
          {/* {<p className={css.p}>{id}</p>} */}
      <p className={css.p}>
        <FaUserAlt/>
        {name}</p>
      <p className={css.p}>
        <FaPhoneVolume/>
        {number}</p>
          <button className={css.btn} type='button' onClick={() => removeContact(id)}>Delete</button>
    </div>
  )
}

export default Contact
