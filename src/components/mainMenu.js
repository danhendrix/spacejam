import style from './style.scss';
import wizard1 from '../assets/avatars/wizard1.png';
import wizard2 from '../assets/avatars/wizard2.png';
import fighter1 from '../assets/avatars/fighter1.png';
import knight1 from '../assets/avatars/knight1.png';
import fighter2 from '../assets/avatars/fighter2.png';
import knight2 from '../assets/avatars/knight2.png';

function MainMenu({ changeName, changeAvatar, name, avatar, updateGameStart }) {
    return (
        <div class={style.menuContainer}>
            <div class={style.themeToggle}>Theme toggle</div>
            <h1 class={style.gameTitle}>Onward to Mathventure!</h1>
            <div class={style.playerInfo}>
                <label class={style.nameLabel}>
                    Enter your name
                    <input
                        class={style.nameInput}
                        type='text'
                        value={name}
                        onInput={changeName}
                    />
                </label>
                <div class={style.avatarSelection}>
                    <div id='avatar-label' class={style.avatarLabel}>
                        Select your avatar
                    </div>
                    <div class={style.avatarImageContainer}>
                        <button
                            class={style.avatarButton}
                            onClick={changeAvatar}
                        >
                            <img
                                class={`${style.avatarImage} ${
                                    avatar === wizard1 ? style.selected : ''
                                }`}
                                src={wizard1}
                                alt='purple wizard'
                            />
                        </button>
                        <button
                            class={style.avatarButton}
                            onClick={changeAvatar}
                        >
                            <img
                                class={`${style.avatarImage} ${
                                    avatar === fighter1 ? style.selected : ''
                                }`}
                                src={fighter1}
                                alt='green fighter'
                            />
                        </button>
                        <button
                            class={style.avatarButton}
                            onClick={changeAvatar}
                        >
                            <img
                                class={`${style.avatarImage} ${
                                    avatar === knight1 ? style.selected : ''
                                }`}
                                src={knight1}
                                alt='teal knight'
                            />
                        </button>
                        <button
                            class={style.avatarButton}
                            onClick={changeAvatar}
                        >
                            <img
                                class={`${style.avatarImage} ${
                                    avatar === wizard2 ? style.selected : ''
                                }`}
                                src={wizard2}
                                alt='red wizard'
                            />
                        </button>
                        <button
                            class={style.avatarButton}
                            onClick={changeAvatar}
                        >
                            <img
                                class={`${style.avatarImage} ${
                                    avatar === fighter2 ? style.selected : ''
                                }`}
                                src={fighter2}
                                alt='orange fighter'
                            />
                        </button>
                        <button
                            class={style.avatarButton}
                            onClick={changeAvatar}
                        >
                            <img
                                class={`${style.avatarImage} ${
                                    avatar === knight2 ? style.selected : ''
                                }`}
                                src={knight2}
                                alt='gold knight'
                            />
                        </button>
                    </div>
                </div>
            </div>
            {name !== '' && avatar ? (
                <button class={style.startButton} onClick={updateGameStart}>
                    Start
                </button>
            ) : null}
        </div>
    );
}

export default MainMenu;
