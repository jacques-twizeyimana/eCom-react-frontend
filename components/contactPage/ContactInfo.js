export default function ContactInfo(){
    const contactInfo = [
        {id:1,icon: "./svgs/home.svg", text: "Openrca.com"},
        {id:2,icon: "./svgs/send.svg", text: "openrca2021@gmail.com"},
        {id:3,icon: "./svgs/address.svg", text: "Mukamira, Nyabihu"},
        {id:4,icon: "./svgs/phone.svg", text: "+1 754 435934503"}
    ]
    return <>
    <h2>Contact Info.</h2>
            <p>Fill up your information here, to get to
us in no time 24/7.</p>
<div className="address mt-4">
{contactInfo.map(contact=>{
    return <div key={contact.id} className="flex mt-5 items-center">
        <img src={contact.icon}></img>  <p style={{fontSize: "11px"}} className="ml-4">{contact.text}</p>
    </div>
})}
</div>
    </>
}