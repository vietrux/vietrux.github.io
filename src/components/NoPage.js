import { useEffect } from "react";
function NoPage() {
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
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </>
    );
}

export default NoPage;