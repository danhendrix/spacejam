import { Component } from 'preact';
import Grid from './grid';
import style from './style.scss';
import Home from '../Grids/home';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: true,
            playerName: '',
            playerAvatar: null,
            theme: 'dark',
            playerInput: '',
        };

        this.enteredText = "";
    }

    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyPress.bind(this));
    }

    handleKeyPress(e) {
        e.stopPropagation();
        if (e.keyCode === 13) {
            // enter
            this.updatePlayerInput(this.enteredText);
            this.enteredText = "";
        }
    }

    updatePlayerInput = (playerInput) => {
        this.setState({ playerInput });
    }

    playerInputChanged = (e) => {
        e.stopPropagation();
        this.enteredText = (e.target.value);
    }

    render() {
        const { gameStart, playerInput } = this.state;

        return (
            <div class={style.gameContainer}>
                <div class={style.themeToggle}>Theme toggle</div>
                <div class={style.mainDisplay}>
                    {gameStart ? <Grid gridSetup={Home} playerInput={playerInput} updatePlayerInput={this.updatePlayerInput} /> : null}
                </div>
                <div class={style.lowerDisplay}>
                    {gameStart ? (
                        <>
                        <div class={style.keysContainer}>Arrow Keys</div>
                        <div class={style.messageContainer}>
                            <p class="npc-chat-container">{playerInput}</p>
                            <input onChange={this.playerInputChanged} value={this.enteredText} />
                        </div>
                        <div class={style.keysContainer}>Space Key</div>
                        </>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Game;
