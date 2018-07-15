import React from "react";
import './sortBy.css';

export default class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption : props.default || 'TITLE',
    };
  }

  handleOptionChange(changeEvent) {
    this.props.onChange(changeEvent.target.value);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className={'sort-by__container'}>
        <span>Sort By:</span>
        <input
          type="radio"
          value="TITLE"
          checked={this.state.selectedOption === 'TITLE'}
          onChange={this.handleOptionChange}
        />
        <label htmlFor="title-input">Title</label>,
        <input
          type="radio"
          value="DATE"
          checked={this.state.selectedOption === 'DATE'}
          onChange={this.handleOptionChange}
        />
        <label htmlFor="date-input">Date</label>
      </div>
    );
  }
}
