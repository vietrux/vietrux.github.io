import { useEffect } from "react";
function Contact() {
    useEffect(() => {
        document.getElementsByClassName("content")[0].style.display = "block";
    }, []);
    return (
        <>
            <div className="content">
                <h1>Contact</h1>
            </div>
        </>
    );
}

export default Contact;