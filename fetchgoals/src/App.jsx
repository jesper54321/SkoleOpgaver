import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import axios from "axios";
import "./App.scss";
import { List } from "./components/list";
import { Details } from "./components/details";


function App() {
	const [data,setData] = useState([])

	useEffect(async () => {
		const url = ("https://api.mediehuset.net/sdg/goals")
		const result = await axios.get(url)
		setData(result.data.items)
	}, []);

	return (
		<Router>
			<List data={data}/>
			<Routes>
				<Route path="/" element={" "} />
				<Route path="/:id" element={<Details data={data}/>} />
			</Routes>
		</Router>
	);
}

export default App;

