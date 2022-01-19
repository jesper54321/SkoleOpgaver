import { useEffect, useState } from "react";
import "./App.scss";

function App() {
	const [formResults, setFormResults] = useState()
	const [serialisedResults, setserialisedResults] = useState([])

	useEffect(() => {
		let serialisedData = [];
	  	if (formResults) 
			for (const item of formResults.entries()) { 
				serialisedData.push(item)
			}
			setserialisedResults(serialisedData)
	}, [formResults]);

	return (
	<div className="flex">
		<form action="" method="post" onSubmit={e=>{e.preventDefault(); setFormResults(new FormData(e.target))}}>
			<label htmlFor="name">Fulde navn: </label>
			<input type="text" name="name" /><br/>

			<label htmlFor="phone">Telefon: </label>
			<input type="tel" name="phone" /><br/>

			<label htmlFor="mail">E-Mail: </label>
			<input type="email" name="mail" /><br/>

			<label htmlFor="comment">Kommentar: </label>
			<textarea name="comment"></textarea><br/>

			<fieldset>
				<p>Vælg din foretrukne kontakt metode:</p>
				<input type="radio" id="email" name="fav_contact" value="email"/>
				<label htmlFor="email">E-Mail</label>
				<input type="radio" id="tel" name="fav_contact" value="tel"/>
				<label htmlFor="tel">Mobil</label>
			</fieldset>
			<input type="submit" value="Send"  />
			<input type="reset" value="Nulstil" />
		</form>

		<div className="showOff">
			{serialisedResults ? 
				serialisedResults.map(
					(item, index)=>{
						return (<div key={index}>{item[0]}: {item[1]} </div>)
					}
				)
				:""}
		</div>
	</div>

	);
}
export default App;

