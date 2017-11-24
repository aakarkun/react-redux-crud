import React from 'react';
import { Link } from 'react-router';

 class Home extends React.Component {
    render() {
        return(
            <div style={{marginTop: "40px"}}>
                <h3>Home</h3>
               <div className="ui three cards">
                    <div className="card">
                        <div className="content">
                        <img className="right floated mini ui image" src="https://image.ibb.co/b78btR/Screenshot_2.png" />
                        <div className="header">
                            Github
                        </div>
                        <div className="meta">
                            @aakarkun
                        </div>
                        <div className="description">
                            This is just a simple implementation of <b>React-Redux</b> where <b>CRUD</b> operations can be done. 
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <a href="https://github.com/aakarkun" className="ui basic black button">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                        <img className="right floated mini ui image" src="https://image.ibb.co/cyon06/unnamed.jpg" />
                        <div className="header">
                            Games
                        </div>
                        <div className="meta">
                            @aakarkun
                        </div>
                        <div className="description">
                            Large collection of online and offline games, will be available for download soon.
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <Link to="/games" className="ui basic blue button">View Collections</Link>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                        <img className="right floated mini ui image" src="https://image.ibb.co/bMnx06/download.png" />
                        <div className="header">
                            Add Game
                        </div>
                        <div className="meta">
                            #addYourGame
                        </div>
                        <div className="description">
                            Anyone can add their game here!<br /><b>Best Game</b> may be selected for featured post.
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <Link to="/games/new" className="ui basic green button">Add Game</Link>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                        <img className="right floated mini ui image" src="https://image.ibb.co/grX2YR/Google_Contacts_icon_new.png" />
                        <div className="header">
                            Contact me
                        </div>
                        <div className="meta">
                            @kusgautam
                        </div>
                        <div className="description">
                            Please, feel free to contact me. :)
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui three buttons">
                            <a href="https://www.facebook.com/kusgautam" className="ui basic blue button">Facebook</a>
                            <a href="https://www.linkedin.com/in/kusgautam/" className="ui basic green button">Linked in</a>
                            <a href="https://www.instagram.com/kusgautam" className="ui basic pink button">Instagram</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;