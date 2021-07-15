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
            gridLayout: [],
            rows: 0,
            columns: 0,
            rowPosition: 0,
            columnPosition: 0,
        };
    }

    buildGrid(gridSetup) {
        const currentGrid = [];
        for (let rowNum = 0; rowNum < gridSetup.length; rowNum++) {
            currentGrid.push([]);

            for (
                let columnNum = 0;
                columnNum < gridSetup[rowNum].length;
                columnNum++
            ) {
                const squareItem = gridSetup[rowNum][columnNum];

                currentGrid[rowNum].push(squareItem);
            }
        }

        this.setState({
            gridLayout: [...currentGrid],
            rows: currentGrid.length,
            columns: currentGrid[0].length,
        });
    }

    componentWillMount() {
        document.removeEventListener('keyup', this.handleKeyPress.bind(this));
        // document.querySelectorAll('.virtual-key').forEach((virtualKey) => {
        //     virtualKey.removeEventListener(
        //         'click',
        //         this.handleKeyPress.bind(this)
        //     );
        // });

        this.buildGrid(this.props.gridSetup);
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyPress.bind(this));
        // document.querySelectorAll('.virtual-key').forEach((virtualKey) => {
        //     virtualKey.addEventListener(
        //         'click',
        //         this.handleKeyPress.bind(this)
        //     );
        // });
    }

    checkSquareType(newRow, newColumn) {
        const newSpace = this.state.gridLayout[newRow][newColumn];

        if (!newSpace.isAccessible) {
            return;
        }

        this.setState({
            rowPosition: newRow,
            columnPosition: newColumn,
        });
    }

    checkForNPC(row, column) {
        const gridSpace = this.state.gridLayout[row][column];

        if (gridSpace.npc) {
            const action = gridSpace.npc.interact();

            if (action.success) {
                action.fn.call(this);
                console.log(action.message);
            } else {
                console.log(action.message)
            }
        }
    }

    setSquareAccesible(column, row) {
        const gridLayout = this.state.gridLayout;
        const square = gridLayout[this.state.rowPosition + row][this.state.columnPosition + column];
        square.isAccessible = true;
        
        this.setState({ gridLayout });
    }

    handleKeyPress(e) {
        e.stopPropagation();
        const { columns, rows, columnPosition, rowPosition } = this.state;
        // Just testing whether handleKeyPress function can be added to on screen keys from here
        // const eventValue = e.type === 'keyup' ? e.keyCode : 'down';
        let newRowPosition = rowPosition;
        let newColumnPosition = columnPosition;

        switch (e.keyCode) {
            case 38:
                {
                    // up
                    if (rowPosition > 0) {
                        newRowPosition = rowPosition - 1;
                    }
                }
                break;
            case 39:
                {
                    // right
                    if (columnPosition + 1 < columns) {
                        newColumnPosition = columnPosition + 1;
                    }
                }
                break;
            case 40:
                {
                    // down
                    if (rowPosition + 1 < rows) {
                        newRowPosition = rowPosition + 1;
                    }
                }
                break;
            case 37:
                {
                    // left
                    if (columnPosition > 0) {
                        newColumnPosition = columnPosition - 1;
                    }
                }
                break;
            case 32: {
                // space
                this.checkForNPC(rowPosition, columnPosition);
            }
        }

        this.checkSquareType(newRowPosition, newColumnPosition);
    }

    render() {
        return (
            <div class={style.grid}>
                {this.state.gridLayout.map((row, rowI) => (
                    <div key={rowI} class={style.row}>
                        {row.map((item, itemI) => (
                            <Square
                                key={`${itemI}${rowI}`}
                                active={
                                    this.state.columnPosition === itemI &&
                                    this.state.rowPosition === rowI
                                }
                                type={item.type}
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
