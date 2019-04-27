import React, { Component } from 'react';
import DetectLang from './DetectLang';
import axios from 'axios';

export class Input extends Component {
  state = {
    text: this.props.value,
    lang: ''
  };

  detectLang = () => {
    axios
      .get(
        `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${
          this.props.apiKey
        }&text=${this.state.text}`
      )
      .then(res => this.setState({ lang: res.data.lang }))
      .catch(err => console.log(err));
    this.props.langDetect(this.state.lang);
  };

  getText = e => {
    this.setState({ text: e.target.value }, () => {
      this.props.textChange(this.state.text);
    });
    this.detectLang();
  };

  render() {
    return (
      <div className="form-group">
        <DetectLang lang={this.state.lang} />
        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter Text"
          value={this.state.text}
          onChange={this.getText}
        />
      </div>
    );
  }
}

export default Input;
