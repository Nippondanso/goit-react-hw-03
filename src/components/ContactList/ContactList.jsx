import Contact from "./Contact.jsx";
import  styles from "./ContactList.module.css";

const ContactList = ({data, onDeleteContact}) => {
	return (<div className={styles.list}>
			{data.map(item => {
				return (<Contact key={item.id} item={item} onDeleteContact={onDeleteContact}/>)
			})}
		</div>)
}

export default ContactList;