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
            playerInput: '',
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
        this.setState({
            playerAvatar: e.target.src,
        });
    };

    updateGameStart = (prevState) => {
        this.setState({
            gameStart: !prevState.gameStart,
        });
        console.log(this.state.playerName);
    };

    updatePlayerInput = (e) => {
        this.setState({ playerInput: e.target.value });
    };

    clearPlayerInput = () => {
        this.setState({ playerInput: '' });
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
            playerInput,
            playerInventory,
        } = this.state;

        return (
            <div class={style.gameContainer}>
                <div class={style.mainDisplay}>
                    {gameStart ? (
                        <Grid
                            gridSetup={Home}
                            playerInput={playerInput}
                            clearPlayerInput={this.clearPlayerInput}
                            updateMessage={this.updateMessage}
                            playerInventory={playerInventory}
                            avatar={playerAvatar}
                            name={playerName}
                        />
                    ) : (
                        <MainMenu
                            startGame={this.updateGameStart}
                            changeName={this.updatePlayerName}
                            name={playerName}
                            changeAvatar={this.updatePlayerAvatar}
                            avatar={playerAvatar}
                        />
                    )}
                </div>
                {gameStart ? (
                    <div class={style.controllerDisplay}>
                        <GamePanel
                            message={message}
                            playerInput={playerInput}
                            updatePlayerInput={this.updatePlayerInput}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Game;
