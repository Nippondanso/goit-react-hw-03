import {useId} from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({value, onFilter}) => {
	
	const searchFieldId = useId();
	
	return (<div className={styles.container}>
		<label className={styles.label} htmlFor={searchFieldId}>Find contacts by name</label>
		<input
			className={styles.input}
			id={searchFieldId}
			name={'search'}
			value={value}
			onChange={e => onFilter(e.target.value)}/>
	</div>)
}

export default SearchBox;