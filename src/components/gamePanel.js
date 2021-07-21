import style from './style.scss';

function GamePanel({ message, playerInput, updatePlayerInput }) {
    return (
        <>
            <div class={`${style.keysContainer} ${style.arrowKeysContainer}`}>
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
            <div class={style.messageContainer}>
                <p class={style.npcChatContainer}>{message}</p>
                <label>
                    Answer:
                    <input
                        id='playerInput'
                        class={style.playerInput}
                        onChange={updatePlayerInput}
                        value={playerInput}
                        disabled={message === ''}
                    />
                </label>
            </div>
            <div class={`${style.keysContainer} ${style.spaceKeyContainer}`}>
                <button
                    id='spaceKey'
                    class={`${style.virtualKey} ${style.spaceKey}`}
                >
                    Space
                </button>
            </div>
        </>
    );
}

export default GamePanel;
