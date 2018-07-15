import React from "react";
import './sortBy.css';

export default class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption : 'TITLE',
    };
  }

  handleOptionChange(changeEvent) {
    console.log(changeEvent.target.value);
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
          id="title-input"
          type="radio"
          name="sort-group"
          value="TITLE"
          checked={this.state.selectedOption === 'TITLE'}
          onChange={this.handleOptionChange}
        />
        <label htmlFor="title-input">Title</label>,
        <input
          id="date-input"
          type="radio"
          name="sort-group"
          value="DATE"
          checked={this.state.selectedOption === 'DATE'}
          onChange={this.handleOptionChange}
        />
        <label htmlFor="date-input">Date</label>
      </div>
    );
  }
}
