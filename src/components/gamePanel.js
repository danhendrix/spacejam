import style from './style.scss';

function GamePanel({ player }) {
    return (
        <div class={style.gamePanel}>
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
            <div class={style.inventoryContainer}>
                <div>Inventory</div>
                <div class={style.inventoryGrid}>
                    {Object.keys(player.inventory).map((inventoryKey, i) => (
                        <div key={i} className={style.inventoryItem}>
                            <img
                                key={i}
                                src={`../assets/${inventoryKey}.png`}
                                alt={inventoryKey}
                                class={style.inventoryImage}
                            />
                            <span>{player.inventory[inventoryKey]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GamePanel;
