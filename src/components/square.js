import { h } from 'preact';
import style from './style.scss';

const Square = ({ active, avatar, type, npc }) => (
    // Remove the style[npc.imgClass] and style.active classes?
    <div
        class={`${style.square} ${style[type]} 
        ${active ? style.active : ''}
        ${npc ? style[npc.imgClass] : ''}`}
    >
        {active ? <img class={style.activeImg} src={avatar} /> : null}
        {npc ? (
            <img
                class={`${style.npc} ${style[npc.imgClass]}`}
                src={npc.imgSrc}
            />
        ) : null}
    </div>
);

export default Square;
