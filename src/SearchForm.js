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
            <div className="headerContainer">
                <form className="formContainer" onSubmit={(event) => {event.preventDefault(); this.props.searchFn(this.state.search)}}>
                <input
                    className="textInput"
                    type="text"
                    placeholder="Movie search"
                    value={search} onChange={this.handleChange}
                />
                <button className="button" type="submit">Go!</button>
                </form>
            </div>            
        )
    }
}

export default SearchForm
