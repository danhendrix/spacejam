import { h } from 'preact';
import style from './style.scss';
import wizard1 from '../assets/avatars/wizard1.png';
import wizard2 from '../assets/avatars/wizard2.png';
import fighter1 from '../assets/avatars/fighter1.png';
import knight1 from '../assets/avatars/knight1.png';
import fighter2 from '../assets/avatars/fighter2.png';
import knight2 from '../assets/avatars/knight2.png';
import { useState } from 'preact/hooks';
import { User } from '../User/user';

const AvatarOptions = [
    {
        name: 'wizard1',
        src: wizard1,
        alt: 'purple wizard',
    },
    {
        name: 'wizard2',
        src: wizard2,
        alt: 'red wizard',
    },
    {
        name: 'fighter1',
        src: fighter1,
        alt: 'green fighter',
    },
    {
        name: 'knight1',
        src: knight1,
        alt: 'teal knight',
    },
    {
        name: 'fighter2',
        src: fighter2,
        alt: 'orange fighter',
    },
    {
        name: 'knight2',
        src: knight2,
        alt: 'gold knight',
    },
];

function MainMenu({ updateGameStart }) {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    const startGame = () => {
        const user = new User(name, avatar);
        updateGameStart(user);
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateAvatar = (e) => {
        setAvatar(e.currentTarget.children[0].src);
    };

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
                        onInput={updateName}
                    />
                </label>
                <div class={style.avatarSelection}>
                    <div id='avatar-label' class={style.avatarLabel}>
                        Select your avatar
                    </div>
                    <div class={style.avatarImageContainer}>
                        {AvatarOptions.map(({ name, src, alt }) => (
                            <button
                                key={name}
                                class={style.avatarButton}
                                onClick={updateAvatar}
                            >
                                <img
                                    class={`${style.avatarImage} ${
                                        avatar === name ? style.selected : ''
                                    }`}
                                    src={src}
                                    alt={alt}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {name !== '' && avatar ? (
                <button class={style.startButton} onClick={startGame}>
                    Start
                </button>
            ) : null}
        </div>
    );
}

export default MainMenu;
