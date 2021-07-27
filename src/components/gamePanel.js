import style from './style.scss';

function GamePanel({}) {
    return (
        <>
            <div class={style.keysContainer}>
                <div class={style.arrowKeysContainer}>
                    <button
                        id='upArrow'
                        class={`${style.virtualKey} ${style.directionKey} ${style.upArrow}`}
                    >
                        Up
                    </button>
                    <button
                        id='leftArrow'
                        class={`${style.virtualKey} ${style.directionKey} ${style.leftArrow}`}
                    >
                        Left
                    </button>
                    <button
                        id='downArrow'
                        class={`${style.virtualKey} ${style.directionKey} ${style.downArrow}`}
                    >
                        Down
                    </button>
                    <button
                        id='rightArrow'
                        class={`${style.virtualKey} ${style.directionKey} ${style.rightArrow}`}
                    >
                        Right
                    </button>
                </div>
                <div class={style.enterKeyContainer}>
                    <button
                        id='enterKey'
                        class={`${style.virtualKey} ${style.enterKey}`}
                    >
                        Enter
                    </button>
                </div>
            </div>
        </>
    );
}

export default GamePanel;
