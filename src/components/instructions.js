import style from './style.scss';

function Instructions({ name, toggleInstructions }) {
    return (
        <div class={style.instructionsContainer}>
            <p class={style.instructions}>
                Welcome, brave adventurer! You must be... {name}!
            </p>
            <p class={style.instructions}>
                You have just arrived in Acadamia, the finest place for
                learning! At least, it was...
            </p>
            <p class={style.instructions}>
                Acadamia's Hall of Higher Education was once famous for teaching
                all those who wished to be taught, but ever since the current
                Magetician took over... Well, not everyone has been allowed to
                enter the Hall. The Magetician believes only those who prove
                their worth first are allowed to continue learning, despite the
                many pleas from those all over Acadamia.
            </p>
            <p class={style.instructions}>
                We have waited for a champion of knowledge to defeat The
                Magetician and show them that any and all should be allowed to
                enter The Hall of Higher Education. Perhaps, {name}... that
                champion is you.
            </p>
            <h1>How to Play</h1>
            <p class={style.instructions}>
                Use your arrow keys or the on screen arrow buttons to move
                around the world. When you arrive at a path to another area,
                simply move in the direction of the new area to enter it.
            </p>
            <p class={style.instructions}>
                Use your Enter key or the on screen Enter button to interact
                with characters in the world. If a character asks a question for
                you to solve, type your answer in the box and press the Submit
                button or your Enter key.
            </p>
            <p class={style.instructions}>
                By helping those in Acadamia, you will receive Report Cards.
                Collect 3 Report Cards and you shall be allowed into the Hall of
                Higher Education, and have a chance defeat The Magetician.
            </p>
            <button class={style.menuButton} onClick={toggleInstructions}>
                Back
            </button>
        </div>
    );
}

export default Instructions;
