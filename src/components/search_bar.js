import React, { Component } from "react";

// Following is a class based component which is a smarter component to note the changes that is happening to it.

class SearchBar extends Component {
  render() {
    return (
      <input
        onChange={event => {
          console.log(event.target.value);
        }}
      />
    );
  }
}

// every class based component must have a render function

// following is a functional component.  This does not have the ability to note the changes that is happening in the function

/*

const SearchBar = () => {
  return <input />;
};

*/

export default SearchBar;
