import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Movies from "./Movies";

const Home = ({movies}) => {
    return (
        <div>
            <Header />
            <Nav />
            <Movies movies={movies} />
        </div>
    );
};

export default Home;

