// import style from './style.scss';

function MainMenu({ clickEvent }) {
    return (
        <div>
            <h1>Onward to Mathventure!</h1>
            <button onClick={clickEvent}>Start</button>
        </div>
    );
}

export default MainMenu;
