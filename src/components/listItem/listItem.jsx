import React from "react";
import "./listItem.css";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      expanded: false,
    };
  }

  toggleClass() {
    const currentState = this.state.expanded;
    this.setState({ expanded: !currentState });
  };

  render() {
    return (
    <li
      className={`list-item`}
      onClick={this.toggleClass}>{this.props.Title} - ({this.props.Year})
      <div className={this.state.expanded ? 'expanded' : 'hidden'}>
        <div>
          <span>Type: {this.props.Type}</span><br/>
          <span>imdbID: {this.props.imdbID}</span>
        </div>
        <img src={this.props.Poster} alt={this.props.imdbID}/>
      </div>
    </li>
    );
  }
}
