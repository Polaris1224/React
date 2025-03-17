import MovieCard from "./MovieCard";
import Student from "./Student";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
        <h1>Movie App</h1>
        <MovieList />
        </header>
      </div>

      {/*Props in React...(Immutable)*/}
      {/*Here variable name of the prop must be consistant in the parent and child. As here we used name as variable name so in its child component we can access this by using this.props.name
      Here we can pass any kind of prop like string, number etc...*/}
      {/* <Student name="Alexa"/> */}
    </>
  );
}

//Below are the default props. In case we fail to pass the props to the child or if the props not exist then default props will be used.
Student.defaultProps = {
  name: 'Student',
  marks: 'N.A.'
}

export default App;
