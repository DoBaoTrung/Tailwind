import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <Link to="/detail">Detail</Link>
            <br />
            <Link to="/about">About</Link>
        </div>
    );
}

export default Home;