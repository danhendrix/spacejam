import { Component } from 'preact';
import Square from './square';
import style from './style.scss';

// const Neighbor = {
//     topNeighbor: 'TopNeighbor',
//     rightNeighbor: 'RightNeighbor',
//     bottomNeighbor: 'BottomNeighbor',
//     leftNeighbor: 'LeftNeighbor',
// };

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnPosition: 0,
            rowPosition: 0,
        };
        this.columns = 0;
        this.rows = 0;
        this.buildGrid(this.props.gridSetup);
    }

    buildGrid(gridSetup) {
        const gridLayout = [];
        for (let rowNum = 0; rowNum < gridSetup.length; rowNum++) {
            gridLayout.push([]);

            for (let columnNum = 0; columnNum < gridSetup[rowNum].length; columnNum++) {
                const squareItem = gridSetup[columnNum][rowNum];

                gridLayout[rowNum].push(squareItem);
            }
        }
        this.gridLayout = gridLayout;
        this.rows = gridLayout.length;
        this.columns = gridLayout[0].length;
        console.log(gridLayout)
    }

    componentWillMount() {
        document.removeEventListener("keyup", this.onKeyPressed.bind(this));
    }

    componentDidMount() {
		document.addEventListener("keyup", this.onKeyPressed.bind(this));
	}    
  
	async onKeyPressed(e) {
        e.stopPropagation()
		switch(e.keyCode) {
			case 38: {
				// up
                if (this.state.rowPosition > 0) {

                    this.setState({ rowPosition: this.state.rowPosition - 1});
                }
			}
            break;
            case 39: {
                // right
                console.log('coumns: ', this.columns)
                console.log('and columnposition ', this.state.columnPosition)
                if (this.state.columnPosition + 1 < this.columns) {
                    await this.setState({ columnPosition: this.state.columnPosition + 1});
                    console.log('state now hm.. ', this.state)
                }
            }
            break;
            case 40: {
                // down
                if (this.state.rowPosition + 1 < this.rows) {
                    await this.setState({ rowPosition: this.state.rowPosition + 1});
                }
            }
            break;
            case 37: {
                // left
                if (this.state.columnPosition > 0) {
                    await this.setState({ columnPosition: this.state.columnPosition - 1});
                }
            }
            break;
		}
	}

    render() {
        return (
            <div class={style.grid}>
                {this.gridLayout.map((row, rowI) => (
                    <div key={rowI} class={style.row}>
                        {row.map((item, itemI) => (
                            <Square
                                key={`${itemI}${rowI}`}
                                active={(this.state.columnPosition === itemI && this.state.rowPosition === rowI)}
                                imgClass={item.imgClass}
                                npc={item.npc}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Grid;
