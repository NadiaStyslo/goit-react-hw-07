// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operationsApi';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>loading...</b>}
      <ContactList />
    </div>
  );
};

export default App;
