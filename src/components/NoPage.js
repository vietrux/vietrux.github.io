import { useEffect } from "react";
function NoPage() {
    useEffect(() => {
        document.getElementsByClassName("content")[0].style.display = "block";
    }, []);
    return (
        <>
            <div className="content">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </>
    );
}

export default NoPage;