import { Link } from "react-router-dom";

export default function Contact() {
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
                            <li><Link to="/Projects">Projects</Link></li>
                            <li>Contact</li>
                            <li><Link to="/CV">CV</Link></li>
                        </ul>
                    </nav>
                </header>

                <div className="content">
                    <h1 className="banner">Contact Me</h1>
                    <p>Scroll Down</p>
                </div>


                <div className="content">
                    
                    <div className="container">
                        <form>

                            <label>Firstname</label><br></br>
                            <input className="name" placeholder="first name.."></input><br></br>
                            <label>Lastname</label><br></br>
                            <input className="name" placeholder="last name.."></input><br></br>

                            <label>Message</label><br></br>
                            <textarea className="textarea" placeholder="Write something..">

                            </textarea><br></br>

                            <button>Send</button>

                        </form>

                    </div>
                </div>

            </body>

        </>

    );
}