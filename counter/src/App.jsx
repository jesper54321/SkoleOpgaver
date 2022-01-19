import { useState } from "react";
import "./App.scss";

function App() {
	const [counter, setCounter] = useState(0);
	return (
		<button onClick={(e) => setCounter(counter + 1)}>
			Du har klikket på knappen <b>{counter}</b> antal gange
		</button>
	);
}

export default App;
