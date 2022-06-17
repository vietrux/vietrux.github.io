function About() {
    const info = {
        name: "Lê Việt Trung",
        summary: "I'm Lê Việt Trung, a full stack developer with 1 years of experience in algorithm and 3 months of experience in MERN stack. ",
        hobbies: "I like to play with code and play with my friends. I also like to play with music and read books.",
        skills: {
            ProgrammingLanguages: [
                "Pascal",
                "JavaScript",
                "HTML, CSS",
                "Python"
            ],
            Frameworks: [
                "ReactJS / AngularJS / NodeJS",
                "jQuery / Twitter Bootstrap / Materialize CSS",
                "ASP WebAPI / RestfulAPI / JSON, XML "
            ],
            Databases: [
                "MySQL",
                "MongoDB",
                "Microsoft SQL"
            ],
            VersionControl: [
                "Git"
            ],
            Other: [
                "Microsoft Office",
                "Adobe Photoshop"
            ]
        }
    };
    return (
        <>
            <div className="content">
                <h1>About</h1>
                <h2>Summary</h2>
                <p>{info.summary}</p>
                <h2>Hobbies</h2>
                <p>{info.hobbies}</p>
                <h2>Skills</h2>
                <div className="skills">
                    <div className="skills-left">
                        <h3>Programming Languages</h3>
                        <ul>
                            {info.skills.ProgrammingLanguages.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h3>Frameworks</h3>
                        <ul>
                            {info.skills.Frameworks.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h3>Databases</h3>
                        <ul>
                            {info.skills.Databases.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h3>Version Control</h3>
                        <ul>
                            {info.skills.VersionControl.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h3>Other</h3>
                        <ul>
                            {info.skills.Other.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;