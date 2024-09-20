import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectLoading, selectError } from "./redux/contactsSlice";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p className="loading">Loading contacts...</p>}
      {error && <p className="error">Error loading contacts: {error}</p>}
      <ContactList />
    </div>
  );
}
