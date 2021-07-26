import style from './style.scss';

function Message(props) {
    const closeModal = () => {
        props.clearMessage('');
        props.clearInput();
    };

    return (
        <div class={style.messageModal}>
            <div class={style.npcMessage}>{props.message}</div>
            <div class={style.userAnswer}>
                <label class={style.answerContainer}>
                    <div class={style.answerLabel}>{props.name}'s Answer</div>
                    <input
                        class={style.answerInput}
                        onChange={props.updateAnswerInput}
                        value={props.answerInput}
                    />
                </label>
            </div>
            <div>
                <button id='submit-btn' class={style.modalButton}>
                    Submit
                </button>
                <button class={style.modalButton} onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Message;
