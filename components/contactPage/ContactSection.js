
import styles from "../../styles/Contact.module.css"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
export default function ContactSection() {
    
    return <div className={styles.contactSection + " flex"}>
        <div className={styles.info + " w-1/5 bg-black text-white"}>
            <ContactInfo></ContactInfo>
        </div>
        <div className={styles.form + " w-3/5 bg-white"}>
            <ContactForm></ContactForm>
        </div>
        <div className={styles.map + " w-1/5"}></div>
    </div>
}