import { Component } from 'preact';
import Grid from './grid';
import Home from '../Grids/home';
import style from './style.scss';

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

        this.enteredText = '';
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyPress.bind(this));
    }

    handleKeyPress(e) {
        e.stopPropagation();
        if (e.keyCode === 13) {
            // enter
            this.updatePlayerInput(this.enteredText);
            this.enteredText = '';
        }
    }

    updatePlayerInput = (playerInput) => {
        this.setState({ playerInput });
    };

    playerInputChanged = (e) => {
        e.stopPropagation();
        this.enteredText = e.target.value;
    };

    render() {
        const { gameStart, playerInput } = this.state;

        return (
            <div class={style.gameContainer}>
                <div class={style.themeToggle}>Theme toggle</div>
                <div class={style.mainDisplay}>
                    {gameStart ? (
                        <Grid
                            gridSetup={Home}
                            playerInput={playerInput}
                            updatePlayerInput={this.updatePlayerInput}
                        />
                    ) : null}
                </div>
                <div class={style.lowerDisplay}>
                    {gameStart ? (
                        <>
                            <div
                                class={`${style.keysContainer} ${style.arrowKeysContainer}`}
                            >
                                <button
                                    id='upArrow'
                                    class={`${style.virtualKey} ${style.directionKey} ${style.upArrow}`}
                                >
                                    Up
                                </button>
                                <button
                                    id='leftArrow'
                                    class={`${style.virtualKey} ${style.directionKey} ${style.leftArrow}`}
                                >
                                    Left
                                </button>
                                <button
                                    id='downArrow'
                                    class={`${style.virtualKey} ${style.directionKey} ${style.downArrow}`}
                                >
                                    Down
                                </button>
                                <button
                                    id='rightArrow'
                                    class={`${style.virtualKey} ${style.directionKey} ${style.rightArrow}`}
                                >
                                    Right
                                </button>
                            </div>
                            <div class={style.messageContainer}>
                                <p class='npc-chat-container'>{playerInput}</p>
                                <input
                                    onChange={this.playerInputChanged}
                                    value={this.enteredText}
                                />
                            </div>
                            <div
                                class={`${style.keysContainer} ${style.spaceKeyContainer}`}
                            >
                                <button
                                    id='spaceKey'
                                    class={`${style.virtualKey} ${style.spaceKey}`}
                                >
                                    Space
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Game;
