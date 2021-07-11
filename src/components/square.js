import { Component, h } from 'preact';
import style from './style.scss';

class Square extends Component {
    constructor({ active }) {
        super();
        this.state = {
            active,
        }

        this.topNeighbor = null;
        this.rightNeighbor = null;
        this.bottomNeighbor = null;
        this.leftNeighbor = null;
    }

    componentWillReceiveProps(props1) {
        if (props1.active !== this.state.active) {
            this.setState({ active: props1.active });
        }
    }

    AddNeighbor(direction, neighbor) {
        this[direction] = neighbor;
    }

    render() {
        return (
            <div class={`${style.square} ${this.state.active ? style.active : ''}`}>
                <h1>square</h1>
            </div>
        )}
}

export default Square;