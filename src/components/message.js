import { useEffect, useRef } from 'preact/hooks';
import style from './style.scss';

function Message(props) {
    const closeRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (!inputRef.current) {
            closeRef.current.focus();
        } else {
            inputRef.current.focus();
        }
    });

    const closeModal = (e) => {
        if (e.type === 'click' || e.key === 'Escape') {
            props.clearMessage('', null);
            props.clearInput();
        }
    };

    return (
        <div class={style.messageModal} onKeyDown={closeModal}>
            <div class={style.npcMessage}>{props.message.text}</div>
            {props.message.type === 'question' ? (
                <div class={style.userAnswer}>
                    <label class={style.answerContainer}>
                        <div class={style.answerLabel}>
                            {props.name}'s Answer
                        </div>
                        <input
                            id='playerAnswer'
                            class={style.answerInput}
                            onInput={props.updateAnswerInput}
                            value={props.answerInput}
                            ref={inputRef}
                        />
                    </label>
                </div>
            ) : null}

            <div>
                {props.message.type === 'question' ? (
                    <button id='submitAnswer' class={style.modalButton}>
                        Submit
                    </button>
                ) : null}

                <button
                    id='closeButton'
                    class={style.modalButton}
                    onClick={closeModal}
                    onKeyDown={closeModal}
                    ref={closeRef}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Message;
