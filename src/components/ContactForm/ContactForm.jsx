import {ErrorMessage, Field, Form, Formik} from "formik";
import {useId} from "react";
import styles from './ContactForm.module.css';
import * as Yup from "yup";


const ContactForm = ({onFormSubmit}) => {
	
	const nameId = useId();
	const numberId = useId();
	const FormSchema = Yup.object().shape({
		name: Yup.string().min(3).max(50).required(),
		number: Yup.string().min(3).max(50).required(),
	});
	const initialValues = {
		id: "",
		name: "",
		number: ""
	};
	const handleSubmit = (values, actions) => {
		onFormSubmit(values);
		actions.resetForm();
	}
	
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchema}>
			<Form className={styles.form}>
				
				<label className={styles.label} htmlFor={nameId}>Name</label>
				<Field className={styles.input} name={'name'} id={nameId}/>
				<ErrorMessage name="name" component="span"/>
				
				<label className={styles.label} htmlFor={numberId}>Number</label>
				<Field className={styles.input} name={'number'} type="number" id={numberId}/>
				<ErrorMessage name="number" component="span"/>
				
				<button className={styles.button} type="submit">Submit</button>
			</Form>
		</Formik>
	)
}
export default ContactForm;