import "./App.css";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../src/pages/RegistrationPage "));
const LoginPage = lazy(() => import("../src/pages/LoginPage "));
const ContactsPage = lazy(() => import("../src/pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const onLogout = () => {
  //   dispatch(apiLogout());
  // };

  if (isRefreshing) {
    return <p>User is refreshing, please wait</p>;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;


// import ContactList from './components/ContactList/ContactList.jsx'
// import SearchBox from './components/SearchBox/SearchBox.jsx'
// import ContactForm from './components/ContactForm/ContactForm.jsx'
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from './redux/contacts/operations.js';
// import { selectError, selectLoading } from './redux/contacts/selectors.js';


// function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div>
//       <h1 >Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </div>
//   );
// }



// export default App
