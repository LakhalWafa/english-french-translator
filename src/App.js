import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';
import axios from 'axios';

export class App extends Component {
  state = {
    text: '',
    translation: [],
    lang: '',
    detec: '',
    apiKey:
      'trnsl.1.1.20190423T150040Z.fcd1a66099ec5c93.2adacf33f6f28d3729bdf2f7af88aaf169424b6a'
  };

  getTranslation = () => {
    axios
      .get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
          this.state.apiKey
        }&text=${this.state.text}&lang=${this.state.detec}-${this.state.lang}`
      )
      .then(res => this.setState({ translation: res.data.text }))
      .catch(err => console.log(err));
  };

  onTextChange = text => {
    this.setState({ text }, this.getTranslation);
  };

  onLangChange = lang => {
    this.setState({ lang });
  };

  onLangDetect = detec => {
    this.setState({ detec });
  };

  render() {
    const { text, translation, apiKey } = this.state;
    return (
      <div className="container">
        <Navbar />
        <form>
          <div className="row">
            <div className="col my-4">
              <Input
                value={text}
                apiKey={apiKey}
                textChange={this.onTextChange}
                langDetect={this.onLangDetect}
              />
            </div>
            <div className="col my-4">
              <Output trans={translation} onLangChange={this.onLangChange} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
