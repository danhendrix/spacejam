import style from './style.scss';

function GameOver({ name, resetGame }) {
    return (
        <div class={style.gameOverContainer}>
            <p>
                "I... I cannot believe this... You... defeated me?! I never
                thought Acadamia would see another champion with such
                knowledge... I see now that I was wrong... The Hall of Higher
                Education should not be closed to any who wish to enter it. I
                admit defeat before you... {name}, The True Magetician!"
            </p>
            <p>
                Thanks to your incredible knowledge, the former Magetician has
                been subtracted from Acadamia. But you have only shown a
                fraction of your knowledge. To prove you are The True
                Magetician, another challenge awaits...
            </p>
            <button class={style.menuButton} onClick={resetGame}>
                Onwards... Once More!
            </button>
        </div>
    );
}

export default GameOver;
