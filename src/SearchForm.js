import React from 'react';

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
        <input
          type="text"
          placeholder="Movie search"
          value={search} onChange={this.handleChange}
        />
        <input type="submit" value="Go!"/>
      </form>
    )
  }
}

export default SearchForm
