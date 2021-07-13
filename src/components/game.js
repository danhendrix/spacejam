import { Component } from 'preact';
import Grid from './grid';
import style from './style.scss';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: true,
      playerName: '',
      playerAvatar: null,
      theme: 'dark',
    };
  }

  render() {
    const { gameStart } = this.state;

    return (
      <div class={style.gameContainer}>
        <div class={style.themeToggle}>Theme toggle</div>
        <div class={style.mainDisplay}>
          {gameStart ? <Grid columns={5} rows={5} /> : null}
        </div>
        <div class={style.lowerDisplay}>
          {gameStart ? (
            <>
              <div class={style.keysContainer}>Arrow Keys</div>
              <div class={style.messageContainer}>
                Messages (NPC text, questions + buttons to click for answering,
                etc)
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
