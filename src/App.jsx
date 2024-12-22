import {useEffect, useState} from 'react'
import initData from '../data.json'
import './App.css'
import useLocalStorage from "./components/hooks/useLocalStorage.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

function App() {
	const [dataContacts, setDataContacts] = useState(() => {
		let data = useLocalStorage.getValue("dataContacts");
		
		if (data !== null) {
			return JSON.parse(data);
		}
		
		return initData;
	});
	const [searchValue, setSearchValue] = useState('');
	
	const updateDataContacts = ({name, number}) => {
		setDataContacts((prevState) => {
			return [...prevState, {id: new Date(), name: name, number: number}];
		});
	}
	
	const deleteDataContacts = ({id}) => {
		setDataContacts((prevState) => {
			return prevState.filter(contact => contact.id !== id);
		});
	}
	
	let FilteredDataBySearchValue = dataContacts.filter(contact => {
		return contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.number.includes(searchValue)
	});
	
	useEffect(() => {
		useLocalStorage.setValue("dataContacts", dataContacts);
	}, [dataContacts]);
	
	return (<div className="container">
		<h1>Phonebook</h1>
		<ContactForm formData={dataContacts} onFormSubmit={updateDataContacts}/>
		<SearchBox value={searchValue} onFilter={setSearchValue}/>
		<ContactList data={FilteredDataBySearchValue} onDeleteContact={deleteDataContacts}/>
	
	</div>)
}

export default App
