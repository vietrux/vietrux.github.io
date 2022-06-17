import { useEffect } from "react";
function Contact() {
    useEffect(() => {
        var meter = document.getElementById("meter");
        meter.addEventListener("animationend", function () {
            document.getElementsByClassName("dashboard")[0].style.display = "none";
            document.getElementsByClassName("content")[0].style.display = "block";
        });
    }, []);
    return (
        <>
            <div className="dashboard">
                <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle id="meter" className="meter" cx="57" cy="57" r="52" />
                </svg>
            </div>
            <div className="content">
                <h1>Contact</h1>
                <h2>Email</h2>
                <p>
                    <a href="mailto:
                    leviettrung.social@gmail.com">
                        leviettrung.social@gmail.com
                    </a>
                </p>
                <h2>Phone</h2>
                <p>
                    <a href="tel:
                    0123456789">
                        0123456789
                    </a>
                </p>
                <h2>Address</h2>
                <p>
                    <a href="https://www.google.com/maps/place/
                    Hanoi,+HN
                    ">
                        Hanoi, HN
                    </a>
                </p>

                <h2>Social</h2>
                <p>
                    <a href="
                    https://www.facebook.com/
                    ">
                        Facebook
                    </a>
                </p>
                <p>
                    <a href="
                    https://www.instagram.com/
                    ">
                        Instagram
                    </a>
                </p>
                <p>
                    <a href="
                    https://www.linkedin.com/in/
                    ">
                        Linkedin
                    </a>
                </p>

                <h2>Github</h2>
                <p>
                    <a href="
                    https://github.com/vietrux">
                        vietrux
                    </a>
                </p>
            </div>
        </>
    );
}

export default Contact;