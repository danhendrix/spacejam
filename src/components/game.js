import { Component } from 'preact';
import Grid from './grid';
import Home from '../Grids/home';
import style from './style.scss';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: true,
            player: {
                name: '',
                avatar: null,
            },
            theme: 'dark',
        };
    }

    render() {
        const { gameStart } = this.state;

        return (
            <div class={style.gameContainer}>
                <div class={style.themeToggle}>Theme toggle</div>
                <div class={style.mainDisplay}>
                    {gameStart ? <Grid gridSetup={Home} /> : null}
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
                                Messages (NPC text, questions + buttons to click
                                for answering, etc)
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
