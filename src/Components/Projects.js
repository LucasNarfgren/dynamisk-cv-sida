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
                    
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    
                    html_url: data[2].html_url
                },
                {
                    name: data[3].name,
                    
                    html_url: data[3].html_url
                },
                {
                    name: data[4].name,
                    
                    html_url: data[4].html_url
                },
                {
                    name: data[5].name,
                    
                    html_url: data[5].html_url
                },
                {
                    name: data[6].name,
                    
                    html_url: data[6].html_url
                },
                {
                    name: data[7].name,
                    
                    html_url: data[7].html_url
                },
                {
                    name: data[8].name,
                    
                    html_url: data[8].html_url
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/CV">CV</Link></li>
                        </nav>

                    </li>
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li>Projects</li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/CV">CV</Link></li>
                        </ul>
                    </nav>
                </header>

                <div className="content">
                    <h1>Projects</h1>
                    <p>Scroll Down</p>
                </div>
                
                <div className="content-project-right">
                    
                    <div className="about-project">

                        <h1>Github Repositorys</h1>
                        
                        <div className="space"></div>
                        
                            {name.map((names) => (
                                <>
                                    <h2>{names.name}</h2>
                                    
                                    <p><a href={names.html_url} target="_blank">Link to Repository</a></p>
                                </>
                            ))
                            }
                        
                    </div>
                </div>
            </body>
        </>

    );
}