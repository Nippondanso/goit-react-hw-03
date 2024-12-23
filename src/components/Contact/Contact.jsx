import styles from "./Contact.module.css"

const Contact = ({item, onDeleteContact}) => {
	// return (
	// 	<div className={styles.contact}>
	// 		<div className={styles.info}>
	// 			<p className={styles.name}>{item.name}</p>
	// 			<p className={styles.number}>{item.number}</p>
	// 		</div>
	// 		<button onClick={() => onDeleteContact(item)}>Delete</button>
	// 	</div>
	// )
	
	return (
		<li className={styles.contact}>
			<div className={styles.info}>
				<span className={styles.name}>{item.name}</span>
				<span className={styles.number}>{item.number}</span>
			</div>
			<button className={styles.button} onClick={() => onDeleteContact(item)}>
				Delete
			</button>
		</li>
	);
}

export default Contact;