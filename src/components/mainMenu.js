import style from './style.scss';
import chicken from '../assets/chicken1.png';
import wizard from '../assets/wizard.png';

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
                            id='avatar-chicken'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            src={chicken}
                            alt='chicken'
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-chicken'
                            tabIndex='0'
                        />
                        <img
                            id='avatar-wizard'
                            class={style.avatarImage}
                            onClick={changeAvatar}
                            onKeyDown={changeAvatar}
                            src={wizard}
                            alt='wizard'
                            style={{ width: '90px' }}
                            aria-labelledby='avatar-label'
                            aria-describedby='avatar-wizard'
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
