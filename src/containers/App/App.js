import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../../logo.svg";
import "./App.css";
import SearchInput from "../../components/searchInput/searchInput";
import SearchList from "../../components/searchList/searchList";
import SortBy from "../../components/sortBy/sortBy";
import { search } from "../../actions/searchActions/searchActions";
import { sort } from "../../actions/sortActions/sortActions";

class App extends Component {
  onSearch({ target }) {
    this.props.onSearch(target.value);
  }
  onSort(selectedOption) {
    this.props.onSort(selectedOption);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Film Search</h1>
        </header>
        <SortBy onChange={this.onSort.bind(this)}/>
        <SearchInput onChange={this.onSearch.bind(this)} />
        <SearchList results={this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  onSearch: (payload) => {
    dispatch(search(payload))
  },
  onSort: (payload) => {
    dispatch(sort(payload))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// webpack
// eslint
// testy
