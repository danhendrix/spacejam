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
                        onChange={changeName}
                    />
                </label>
                <div class={style.avatarSelection}>
                    <div id='avatar-label' class={style.avatarLabel}>
                        Select your avatar
                    </div>
                    <div class={style.avatarImageContainer}>
                        <img
                            id='avatar-wizard1'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={wizard1}
                            alt='purple wizard'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-wizard1'
                            tabIndex='0'
                        />
                        <img
                            id='avatar-fighter1'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={fighter1}
                            alt='green fighter'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-fighter1'
                            tabIndex='0'
                        />
                        <img
                            id='avatar-knight1'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={knight1}
                            alt='teal knight'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-knight1'
                            tabIndex='0'
                        />
                        <img
                            id='avatar-wizard2'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={wizard2}
                            alt='red wizard'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-wizard2'
                            tabIndex='0'
                        />
                        <img
                            id='avatar-fighter2'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={fighter2}
                            alt='orange fighter'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-fighter2'
                            tabIndex='0'
                        />
                        <img
                            id='avatar-knight2'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={knight2}
                            alt='gold knight'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-knight2'
                            tabIndex='0'
                        />
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
