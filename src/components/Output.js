import React, { Component } from 'react';
import SelectLang from './SelectLang';

export class Output extends Component {
  onlangChange = lang => {
    this.props.onLangChange(lang);
  };
  render() {
    return (
      <div className="form-group">
        <SelectLang selectChange={this.onlangChange} />
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          placeholder="Translation"
          value={this.props.trans}
          readOnly
        />
      </div>
    );
  }
}

export default Output;
