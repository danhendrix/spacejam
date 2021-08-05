import style from './style.scss';

function Instructions({ name, toggleInstructions }) {
    return (
        <div class={style.instructionsContainer}>
            <p class={style.instructions}>
                Welcome, brave adventurer! You must be... {name}!
            </p>
            <button class={style.menuButton} onClick={toggleInstructions}>
                Back
            </button>
        </div>
    );
}

export default Instructions;
