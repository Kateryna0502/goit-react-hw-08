
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { selectAuthIsLoggedIn} from '../../redux/auth/selectors'; 
import styles from './Navigation.module.css';

const Navigation = () => {
  
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>Contacts</NavLink>
      )}
    </nav>
  );
};

export default Navigation;