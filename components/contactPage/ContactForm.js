import { useState } from "react"
import styles from "../../styles/Contact.module.css"

export default function ContactForm() {
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setemail] = useState("")
    const [message,setmessage] = useState("")

    const handleFirstName = (e)=>{
       setfirstName(e.target.value)
    } 
    const handleLastName = (e)=>{
        setlastName(e.target.value)
     } 
     const handleEmail = (e)=>{
        setemail(e.target.value)
     }
      const handleMessage = (e)=>{
        setmessage(e.target.value)
     }

     const handleSubmit = (e)=>{
         e.preventDefault()
         alert(JSON.stringify({
             firstName,lastName,email,message
         }))
     }

    return <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2 className="font-black text-black text-2xl">Get In Touch With Us</h2>
        <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
                <input value={firstName} onChange={handleFirstName} required type="text" id="fname"></input>
                <label htmlFor="fname">First Name</label>
            </div>

            <div className={styles.inputContainer}>
            <input onChange={handleLastName} value={lastName} required type="text" id="lname"></input>
                <label htmlFor="lname">Last Name</label>
            </div>
        </div>

        <div className={styles.inputContainer}>
                <input onChange={handleEmail} value={email} required type="text" id="email"></input>
                <label htmlFor="email">Your Email</label>
            </div>

            <div className={styles.inputContainer}>
                <p>Enter Your Message</p>
                <textarea onChange={handleMessage} value={message} type="text" rows="4"></textarea>
            </div>

            <button>Send Message</button>
    </form>
}