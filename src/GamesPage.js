import React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import PropTypes from 'prop-types';
import { fetchGames, deleteGame } from './actions';

class GamesPage extends React.Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return(
            <div style={{marginTop: "40px"}}>
                <h3>Games</h3>
                <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
            </div>
        );
    }
}


GamesPage.propTypes = {
    games: React.PropTypes.array.isRequired,
    fetchGames: React.PropTypes.func.isRequired,
    deleteGame: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);