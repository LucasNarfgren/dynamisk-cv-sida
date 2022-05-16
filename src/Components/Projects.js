import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Projects() {
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/lucasnarfgren/repos')
            .then(res => res.json())
            .then(data => {
                setName((prevname) => [...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].html_url
                },
                {
                    name: data[3].name,
                    description: data[3].description,
                    html_url: data[3].html_url
                },
                {
                    name: data[4].name,
                    description: data[4].description,
                    html_url: data[4].html_url
                },
                {
                    name: data[5].name,
                    description: data[5].description,
                    html_url: data[5].html_url
                },
                {
                    name: data[6].name,
                    description: data[6].description,
                    html_url: data[6].html_url
                },
                {
                    name: data[7].name,
                    description: data[7].description,
                    html_url: data[7].html_url
                },
                {
                    name: data[8].name,
                    description: data[8].description,
                    html_url: data[8].html_url
                },
                {
                    name: data[9].name,
                    description: data[9].description,
                    html_url: data[9].html_url
                },
                {
                    name: data[10].name,
                    description: data[10].description,
                    html_url: data[10].html_url
                }
                ]);
            });
    }, []);
    return (
        <>
            <body>
                <header className="header">
                <li class="dropdown">
                        <a href="javascript:void(0)"><div className="fas fa-bars"></div></a>
                        
                            <nav className="dropdown-content">
                                <li><Link to="/dynamisk-cv-sida/">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Projects">Projects</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/CV">CV</Link></li>
                            </nav>
                        
                    </li>
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/dynamisk-cv-sida/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li>Projects</li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/CV">CV</Link></li>
                        </ul>
                    </nav>
                </header>

                <div className="content">
                    <div className="context">
                        <h2>My top 10 Personal Github Repositorys</h2>
                        {name.map((names) => (
                            <>
                                <h3>{names.name}</h3>
                                <p>{names.description}</p>
                                <p><a href={names.html_url}>Link to Repository</a></p>
                            </>
                        ))
                        }
                    </div>
                </div>
            </body>
        </>

    );
}