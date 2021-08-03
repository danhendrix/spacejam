import { Component } from 'preact';
import style from './style.scss';
import Message from './message';
import Grid from './grid';
import MainMenu from './mainMenu';
import GamePanel from './gamePanel';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            theme: 'dark',
            player: null,
            answerInput: '',
            message: {
                text: '',
                type: null,
            },
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

    updateMessage = (newMessage, newType) => {
        this.setState({
            message: {
                text: newMessage,
                type: newType,
            },
            answerInput: '',
        });
    };

    render() {
        const { gameStart, message, player, answerInput } = this.state;

        return (
            <>
                {message.type !== null ? (
                    <Message
                        message={message}
                        updateAnswerInput={this.updateAnswerInput}
                        answerInput={answerInput}
                        name={player.name}
                        clearMessage={this.updateMessage}
                        clearInput={this.clearAnswerInput}
                    />
                ) : null}
                <div class={style.gameContainer}>
                    {gameStart ? (
                        <div class={style.mainDisplay}>
                            <Grid
                                answerInput={answerInput}
                                clearAnswerInput={this.clearAnswerInput}
                                updateMessage={this.updateMessage}
                                player={player}
                                message={message}
                            />
                        </div>
                    ) : (
                        <MainMenu updateGameStart={this.updateGameStart} />
                    )}
                    {gameStart ? (
                        <GamePanel
                            answerInput={answerInput}
                            updateAnswerInput={this.updateAnswerInput}
                            player={player}
                        />
                    ) : null}
                </div>
            </>
        );
    }
}

export default Game;
