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
            playerName: '',
            playerAvatar: null,
            theme: 'dark',
            answerInput: '',
            message: '',
            playerInventory: [
                {
                    name: 'report card',
                    quantity: 1,
                },
            ],
        };
    }

    updatePlayerName = (e) => {
        this.setState({
            playerName: e.target.value,
        });
    };

    updatePlayerAvatar = (e) => {
        if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
            this.setState({
                playerAvatar: e.target.src,
            });
        }
    };

    updateGameStart = (prevState) => {
        this.setState({
            gameStart: !prevState.gameStart,
        });
        console.log(this.state.playerName);
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

    render() {
        const {
            gameStart,
            message,
            playerAvatar,
            playerName,
            answerInput,
            playerInventory,
        } = this.state;

        return (
            <div class={style.gameContainer}>
                {gameStart ? (
                    <div class={style.mainDisplay}>
                        <Grid
                            gridSetup={Home}
                            answerInput={answerInput}
                            clearAnswerInput={this.clearAnswerInput}
                            updateMessage={this.updateMessage}
                            playerInventory={playerInventory}
                            avatar={playerAvatar}
                            name={playerName}
                        />
                    </div>
                ) : (
                    <MainMenu
                        updateGameStart={this.updateGameStart}
                        changeName={this.updatePlayerName}
                        name={playerName}
                        changeAvatar={this.updatePlayerAvatar}
                        avatar={playerAvatar}
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
