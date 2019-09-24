import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TranslateForm from './components/TranslateForm';
import TranslationContextProvider from './context/TranslationContext';

const App = () => {
  return (
    <div>
      <Navbar />
      <TranslationContextProvider>
        <TranslateForm />
      </TranslationContextProvider>
    </div>
  );
};

export default App;
