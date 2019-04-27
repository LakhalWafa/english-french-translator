import React, { Component } from 'react';

export class SelectLang extends Component {
  state = {
    lang: ''
  };

  handleChange = e => {
    this.setState({ lang: e.target.value }, () => {
      this.props.selectChange(this.state.lang);
    });
  };

  render() {
    return (
      <div>
        <select
          className="form-control form-control"
          onChange={this.handleChange}
        >
          <option>Select Language</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    );
  }
}

export default SelectLang;
