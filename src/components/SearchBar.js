import React from "react";

class SearchBar extends React.Component {
  state = { val: "", show: "" };

  onInputChange = (event) => {
    this.setState({ val: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
    this.setState({ show: this.state.val });
    this.setState({ val: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="search">
          <input
            id="mainInput"
            type="text"
            value={this.state.val}
            onChange={this.onInputChange}
            placeholder="Search for photos"
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
        <h1>{this.state.show}</h1>
      </div>
    );
  }
}

export default SearchBar;
