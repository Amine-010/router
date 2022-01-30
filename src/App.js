import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MovieData from "./Components/MovieData";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Link to='/'>Home</Link>
				<Routes>
					<Route exact path='/' element={<Home/>} />
					<Route path='/:id' element={<MovieData/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;