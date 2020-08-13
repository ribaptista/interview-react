import React from 'react';
import { StyledInputText, Button, InputContainer } from './SearchForm.styled'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={(event) => {event.preventDefault(); this.props.searchFn(this.state.search)}}>
        <InputContainer>
          <StyledInputText
              type="text"
              placeholder="Movie search"
              value={search} onChange={this.handleChange}
            />
          <Button>Go!</Button>
        </InputContainer>
      </form>
    )
  }
}

export default SearchForm
