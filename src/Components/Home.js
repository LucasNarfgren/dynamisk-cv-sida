import { Link } from "react-router-dom";

export default function Home() {

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
                            <li>Home</li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/CV">CV</Link></li>
                        </ul>
                    </nav>
                </header>


                <div className="content">

                    <h1 className="banner">Welcome to my personal website</h1>
                    <h3 className="slogan">yolo</h3>
                </div>
            </body>

        </>

    );
}



