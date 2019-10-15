import React from 'react';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoading: true,
        movies: [],
        total: 0,
        error: null
        };
        this.fetchMovies = this.fetchMovies.bind(this);
    }

    fetchMovies(term) {
        const q = encodeURIComponent(term)
        // The API where we're fetching data from
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=eamX48s0XXRCpVF7RBO7yqnRBGnsO3sI&query=${q}`)
        // We get a response and receive the data in JSON format...
        .then(response => response.json())
        // ...then we update the state of our application
        .then(
            data =>
            this.setState({
                movies: data.results,
                total: data.num_results,
                isLoading: false,
            })
        )
        // If we catch errors instead of a response, let's update the app
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { total, movies } = this.state;
        return (
        <div className="App">
            <SearchForm searchFn={this.fetchMovies} />
            <MovieList total={total} movies={movies} />
        </div>)
    }
}

export default App;
