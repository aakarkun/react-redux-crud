import React from 'react';
import PropTypes from 'prop-types';
import { Link, Match } from 'react-router';
import GameView from './GameView';

 export default class GameCard extends React.Component {
    render() {
        const { game, deleteGame } = this.props;
        return(
            <div className="card">
                <div className="image">
                    <img src={game.cover} alt="Game Cover" />
                </div>
                <div className="content">
                    <div className="header">{game.title}</div>
                </div>
                <div className="extra content">
                    <div className="ui three buttons">
                        <Link to={`/game/${game._id}`} className="ui basic button green">Edit</Link>
                        <Link to={`/game/view/${game._id}`} className="ui basic button blue">View</Link>
                        <div className="ui basic button red" onClick={() => deleteGame(game._id)}>Delete</div>
                    </div>
                </div>
            </div>
        );
    }
}

GameCard.propTypes = {
    game: React.PropTypes.object.isRequired,
    deleteGame: React.PropTypes.func.isRequired
}