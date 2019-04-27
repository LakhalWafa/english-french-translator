import React, { Component } from 'react';

export class DetectLang extends Component {
  render() {
    const langs = this.props.lang;

    switch (langs) {
      case 'en':
        return (
          <div>
            <select className="form-control form-control">
              <option>English</option>
            </select>
          </div>
        );
      case 'fr':
        return (
          <div>
            <select className="form-control form-control">
              <option>French</option>
            </select>
          </div>
        );
      default:
        return (
          <div>
            <select className="form-control form-control">
              <option>Detect Language</option>
            </select>
          </div>
        );
    }
  }
}

export default DetectLang;
