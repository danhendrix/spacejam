import { Component } from 'preact';
import Grid from './grid';
import Home from '../Grids/home';
import style from './style.scss';
import MainMenu from './mainMenu';
import GamePanel from './gamePanel';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            theme: 'dark',
            answerInput: '',
            message: '',
            player: null,
            currentGrid: Home,
            gridName: 'Home',
        };
    }

    updateGameStart = (player) => {
        this.setState({
            gameStart: true,
            player,
        });
    };

    updateAnswerInput = (e) => {
        this.setState({ answerInput: e.target.value });
    };

    clearAnswerInput = () => {
        this.setState({ answerInput: '' });
    };

    updateMessage = (newMessage) => {
        this.setState({
            message: newMessage,
        });
    };

    updateGrid = async (grid, name) => {
        await this.setState({
            currentGrid: grid,
            gridName: name,
        });
    }

    render() {
        const {
            gameStart,
            message,
            player,
            answerInput,
            currentGrid,
            gridName,
        } = this.state;

        return (
            <div class={style.gameContainer}>
                {gameStart ? (
                    <div class={style.mainDisplay}>
                        <Grid
                            gridSetup={currentGrid}
                            gridName={gridName}
                            answerInput={answerInput}
                            clearAnswerInput={this.clearAnswerInput}
                            updateMessage={this.updateMessage}
                            player={player}
                            updateGrid={this.updateGrid}
                        />
                    </div>
                ) : (
                    <MainMenu
                        updateGameStart={this.updateGameStart}
                    />
                )}
                {gameStart ? (
                    <div class={style.gamePanel}>
                        <GamePanel
                            message={message}
                            answerInput={answerInput}
                            updateAnswerInput={this.updateAnswerInput}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Game;
