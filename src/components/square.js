import { h } from 'preact';
import style from './style.scss';

const Square = (({ active }) => (
    <div class={`${style.square} ${active ? style.active : ''}`}>
        {active
            ? <img class={style.activeImg} src="../assets/chicken1.png" />
            : null
        }
    </div>
));

export default Square;