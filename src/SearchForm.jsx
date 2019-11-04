import React from "react";
import styled from "styled-components";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.searchFn(this.state.search);
        }}
        className="f"
      >
        <StyledSearch
          type="text"
          placeholder="Movie search"
          value={search}
          onChange={this.handleChange}
          className="w-100"
        />
        <StyledGo type="submit" value="Go!" />
      </form>
    );
  }
}

const StyledSearch = styled.input`
  height: 50px;
  padding: 1rem;
`;
const StyledGo = styled.input`
  background-color: blue;
  border: none;
  color: white;
  padding: 0.8rem;
  font-weight: bold;
`;

export default SearchForm;
