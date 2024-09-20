import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { selectAuthUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.wrapper}>
      {user ? (
        <>
          <p className={css.name}>Welcome, {user.name}</p>
          <button className={css.logOutBtn} type="button" onClick={() => dispatch(apiLogout())}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserMenu;