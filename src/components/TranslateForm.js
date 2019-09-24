import React, { useState, useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const TranslateForm = () => {
  const [text, setText] = useState('');
  const [lan, setLan] = useState('en');
  const { translation, detectLang, lang, translateText } = useContext(
    TranslationContext
  );
  const handleChange = e => {
    setLan(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    detectLang(text);
    translateText(text, lan);
  };
  const renderSwitch = () => {
    switch (lang) {
      case 'en':
        return <option>English</option>;
      case 'fr':
        return <option>French</option>;
      case 'ar':
        return <option>Arabic</option>;
      case 'tr':
        return <option>Turkish</option>;
      case 'it':
        return <option>Italian</option>;
      case 'es':
        return <option>Spanish</option>;
      case 'nl':
        return <option>Dutch</option>;
      default:
        return <option>English</option>;
    }
  };
  return (
    <div className="container">
      <div className="form-group mt-5">
        <form onSubmit={handleSubmit}>
          <select className="form-control">{renderSwitch()}</select>
          <textarea
            className="form-control"
            placeholder="Type text"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={event => setText(event.target.value)}
            required
          />
          <select className="form-control" value={lan} onChange={handleChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ar">Arabic</option>
            <option value="tr">Turkish</option>
            <option value="it">Italian</option>
            <option value="es">Spanish</option>
            <option value="nl">Dutch</option>
          </select>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={translation}
            disabled
          />
          <button>Translate</button>
        </form>
      </div>
    </div>
  );
};

export default TranslateForm;
