import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Movies = ({movies}) => {
    return (
        <FlipMove className={"px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex justify-center flex-wrap"}>
            {movies.map((movie) => <Thumbnail movie={movie} key={movie.id} />)}
        </FlipMove>
    );
};

export default Movies;