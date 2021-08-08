import style from './style.scss';

function GameOver({ name, resetGame }) {
    return (
        <div class={style.gameOverContainer}>
            <div class={style.gameOverContents}>
                <p class={style.gameOverText}>
                    "I... I cannot believe this... You... defeated me?! I never
                    thought Acadamia would see another champion with such
                    knowledge... I see now that I was wrong... The Hall of
                    Higher Education should not be closed to any who wish to
                    enter it. I admit defeat before you... {name}, The True
                    Magetician!"
                </p>
                <p class={style.gameOverText}>
                    Thanks to your incredible knowledge, the former Magetician
                    has been subtracted from Acadamia. But you have only shown a
                    fraction of your knowledge. To prove you are The True
                    Magetician, the challenge awaits you again.
                </p>
                <h1 class={style.creditsHeading}>Credits</h1>
                <ul class={style.creditsList}>
                    <li class={style.creditsItem}>
                        Created by: dh and Eric "thatblindgeye" Olkowski
                    </li>
                    <li class={style.creditsItem}>
                        Menu and Game Background:{' '}
                        <a
                            class={style.creditsLink}
                            href='https://www.freepik.com/vectors/vintage'
                        >
                            stockgiu
                        </a>
                    </li>
                    <li class={style.creditsItem}>
                        Grass, path, and tree assets:{' '}
                        <a
                            class={style.creditsLink}
                            href='https://stealthix.itch.io/rpg-nature-tileset'
                        >
                            stealthix
                        </a>
                    </li>
                    <li class={style.creditsItem}>
                        Library assets:{' '}
                        <a
                            class={style.creditsLink}
                            href='https://limezu.itch.io/moderninteriors'
                        >
                            limezu
                        </a>
                    </li>
                    <li class={style.creditsItem}>
                        Dungeon and NPC assets:{' '}
                        <a
                            class={style.creditsLink}
                            href='https://0x72.itch.io/16x16-dungeon-tileset'
                        >
                            0x72
                        </a>
                    </li>
                    <li class={style.creditsItem}>
                        Lair and pillar assets:{' '}
                        <a
                            class={style.creditsLink}
                            href='https://cainos.itch.io/pixel-art-top-down-basic'
                        >
                            cainos
                        </a>
                    </li>
                    <li class={style.creditsItem}>
                        Inventory Icons:{' '}
                        <a
                            class={style.creditsLink}
                            href='https://cheekyinkling.itch.io/shikashis-fantasy-icons-pack'
                        >
                            cheekyinkling
                        </a>
                    </li>
                    <li class={style.creditsItem}>
                        And{' '}
                        <a
                            class={style.creditsLink}
                            href='https://www.theodinproject.com'
                        >
                            The Odin Project
                        </a>{' '}
                        for running their game jam
                    </li>
                </ul>
                <button class={style.menuButton} onClick={resetGame}>
                    Onwards... Once More!
                </button>
            </div>
        </div>
    );
}

export default GameOver;
