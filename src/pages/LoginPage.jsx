
import css from "../components/ContactForm/ContactForm.module.css";
import LoginForm from "../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;




