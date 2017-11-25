import React from 'react';
import { connect } from 'react-redux';
import { fetchGame, fetchGames } from './actions';
import { Link } from 'react-router';

class GameView extends React.Component {
    state = {
        games: this.props.games ? this.props.games: '',
        _id: this.props.game ? this.props.game._id: '',
        title: this.props.game ? this.props.game.title : '',
        cover: this.props.game ? this.props.game.cover : ''
    }
    
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            games: nextProps.games,
            _id: nextProps.game._id,
            title: nextProps.game.title,
            cover: nextProps.game.cover
        })
    }

    componentDidMount() {
        this.props.fetchGames();
        if(this.props.params._id) {
            this.props.fetchGame(this.props.params._id);
        }
    }

    componentDidUpdate() {
        window.scrollTo(0,0);
    }

    render() {
        console.log(this.state);
        const { _id, title, cover, games } = this.state;
        return(
            <div style={{marginTop: "40px"}}>
                <h3>Game view</h3>
                <h2>{title}</h2> 
                <div className="ui three cards">
                    <div className="ui card">
                        <div className="image">
                            <img src={cover} />
                        </div>
                        <div className="content">
                            <Link to={`/game/view/${_id}`} className="header">{title}</Link>
                            <div className="meta">
                            <span className="date">@kusgautam</span>
                            </div>
                            <div className="description">
                            {title} is Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                            <i className="user icon"></i>
                            22 Friends Play this game
                            </a>
                        </div>
                    </div>
                </div>

                <h3>More Games</h3>
                <hr style={{opacity: "0.2"}}/>
                {games.map(game => {
                    return <div className="ui items">
                    <div className="item">
                        <div className="image">
                        <img src={game.cover} />
                        </div>
                        <div className="content">
                        <Link to={`/game/view/${game._id}`} className="header">{game.title}</Link>
                        <div className="meta">
                            <span>{game.title} is Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            Additional Details
                        </div>
                        </div>
                    </div>
                </div>
                })}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    
    if(props.params._id) {
        return {
            game: state.games.find(item => item._id === props.params._id),
            games: state.games
        }
    }

    return { game: null }
}

export default connect(mapStateToProps, { fetchGame, fetchGames })(GameView);