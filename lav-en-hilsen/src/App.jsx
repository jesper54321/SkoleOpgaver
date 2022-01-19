import "./App.css";
import { useState } from "react";

function App() {
	const [name, setName] = useState("");
	return (
		<div>
			<input
				type="text"
				name=""
				id=""
				onChange={(e) => setName(e.target.value)}
			/>
			<p>Hej med dig {name}</p>
		</div>
	);
}

export default App;
