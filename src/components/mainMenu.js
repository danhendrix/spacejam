import style from './style.scss';
import chicken from '../assets/chicken1.png';
import wizard from '../assets/wizard.png';

function MainMenu({ startGame, changeName, changeAvatar, name, avatar }) {
    return (
        <div>
            <div class={style.themeToggle}>Theme toggle</div>
            <h1>Onward to Mathventure!</h1>
            <label>
                Enter your name
                <input type='text' value={name} onChange={changeName} />
            </label>

            <img onClick={changeAvatar} src={chicken} />
            <img
                onClick={changeAvatar}
                src={wizard}
                style={{ width: '90px' }}
            />
            {name !== '' && avatar ? (
                <button onClick={startGame}>Start</button>
            ) : null}
        </div>
    );
}

export default MainMenu;
