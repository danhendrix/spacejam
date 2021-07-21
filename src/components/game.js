import { Component } from 'preact';
import Grid from './grid';
import Home from '../Grids/home';
import style from './style.scss';
import MainMenu from './mainMenu';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            playerName: '',
            playerAvatar: null,
            theme: 'dark',
            playerInput: '',
            npcMessage: '',
            playerInventory: [
                {
                    name: 'report card',
                    quantity: 1,
                },
            ],
        };

        // this.enteredText = '';
        // this.updateNpcMessage = this.updateNpcMessage.bind(this);
    }

    // componentDidMount() {
    //     document.addEventListener('keyup', this.handleKeyPress.bind(this));
    // }

    // handleKeyPress(e) {
    //     e.stopPropagation();
    //     if (e.keyCode === 13) {
    //         // enter
    //         this.updatePlayerInput(this.enteredText);
    //         this.enteredText = '';
    //     }
    // }

    updateGameStart = (prevState) => {
        this.setState({
            gameStart: !prevState.gameStart,
        });
    };

    updatePlayerInput = (e) => {
        this.setState({ playerInput: e.target.value });
    };

    clearPlayerInput = () => {
        this.setState({ playerInput: '' });
    };

    updateNpcMessage = (newMessage) => {
        this.setState({
            npcMessage: newMessage,
        });
    };

    // playerInputChanged = (e) => {
    //     e.stopPropagation();
    //     this.enteredText = e.target.value;
    // };

    render() {
        const { gameStart, playerInput, npcMessage } = this.state;

        return (
            <div class={style.gameContainer}>
                <div class={style.themeToggle}>Theme toggle</div>
                <div class={style.mainDisplay}>
                    {gameStart ? (
                        <Grid
                            gridSetup={Home}
                            playerInput={playerInput}
                            clearPlayerInput={this.clearPlayerInput}
                            updateNpcMessage={this.updateNpcMessage}
                            playerInventory={this.state.playerInventory}
                        />
                    ) : (
                        <MainMenu clickEvent={this.updateGameStart} />
                    )}
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
                                <p class={style.npcChatContainer}>
                                    {npcMessage}
                                </p>
                                <label for='playerInput' hidden>
                                    {this.state.playerName}'s Answer:
                                </label>
                                <input
                                    id='playerInput'
                                    class={style.playerInput}
                                    onChange={this.updatePlayerInput}
                                    value={playerInput}
                                    placeholder='Enter answer here'
                                    disabled={npcMessage === ''}
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
