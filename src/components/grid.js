import { Component } from 'preact';
import Square from './square';
import style from './style.scss';
import Home from '../Grids/home';
import Dungeon from '../Grids/dungeon';
import Library from '../Grids/library';
import Forest from '../Grids/forest';
import Lair from '../Grids/lair';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridName: 'Home',
            gridLayout: Home,
            rows: 0,
            columns: 0,
            rowPosition: 0,
            columnPosition: 0,
        };
    }

    componentWillMount() {
        document.removeEventListener('keydown', this.handleKeyPress.bind(this));
        document.removeEventListener('click', this.handleKeyPress.bind(this));

        this.buildGrid(this.state.gridLayout);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
        document.addEventListener('click', this.handleKeyPress.bind(this));
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

    updateGrid = async (path) => {
        let newGrid;

        switch (path) {
            case 'forest':
                newGrid = Forest;
                break;
            case 'library':
                newGrid = Library;
                break;
            case 'dungeon':
                newGrid = Dungeon;
                break;
            case 'lair':
                newGrid = Lair;
                break;
            default:
                newGrid = Home;
        }

        return await this.setState(
            {
                gridLayout: newGrid,
                gridName: path,
            },
            () => {
                this.buildGrid(this.state.gridLayout);
            }
        );
    };

    // Calculate the position of the player when entering a new area
    // based on where they were in the previous area
    calculateNewAreaPosition() {
        const { rowPosition, columnPosition } = this.state;
        let newAreaRow = rowPosition;
        let newAreaColumn = columnPosition;

        if (rowPosition === 0) {
            newAreaRow = 9;
        } else if (rowPosition === 9) {
            newAreaRow = 0;
        }

        if (columnPosition === 0) {
            newAreaColumn = 9;
        } else if (columnPosition === 9) {
            newAreaColumn = 0;
        }

        return [newAreaRow, newAreaColumn];
    }

    checkSquareAccessible(e, newRow, newColumn) {
        const newSpace = this.state.gridLayout[newRow][newColumn];

        if (!newSpace.isAccessible && e.keyCode !== 13) {
            return;
        }

        this.setState({
            rowPosition: newRow,
            columnPosition: newColumn,
        });
    }

    checkRemainingEnemies() {
        const npcSquares = [];

        this.state.gridLayout.forEach((row) => {
            row.forEach((square) => {
                if (square.npc) {
                    npcSquares.push(square);
                }
            });
        });

        const remainingEnemies = npcSquares.filter((square) => {
            if (!square.npc.actions[0].requirements) return;

            return square.npc.actions[0].requirements[0].cleared === false;
        });

        return remainingEnemies.length;
    }

    handleInteraction(row, column) {
        const gridSpace = this.state.gridLayout[row][column];
        const { updateMessage } = this.props;

        if (gridSpace.npc && !gridSpace.npc.isInTheMiddleOfAction) {
            const { fn, message, messageType } = gridSpace.npc.interact(this.props.player, this.props.answerInput);

            if (fn) fn.call(this);
            if (message) updateMessage(message, messageType);
        } else if (gridSpace.pathTo) {
            this.updateGrid(gridSpace.pathTo);
        }
    }

    setSquareAccessible(row, column) {
        const gridLayout = this.state.gridLayout;
        const square =
            gridLayout[this.state.rowPosition + row][
                this.state.columnPosition + column
            ];
        square.isAccessible = true;

        this.setState({ gridLayout });
    }

    async handleKeyPress(e) {
        e.stopPropagation();
        if (e.target.id === 'closeButton') return;

        const { columns, rows, columnPosition, rowPosition, gridLayout } =
            this.state;
        const { message } = this.props;
        const eventValue = e.type === 'keydown' ? e.keyCode : e.target.id;
        let newRowPosition = rowPosition;
        let newColumnPosition = columnPosition;

        switch (eventValue) {
            case 38:
            case 'upArrow':
                {
                    // `message === ''` prevents moving when modal is open
                    if (rowPosition > 0 && !message.type) {
                        newRowPosition = rowPosition - 1;
                    }
                }
                break;
            case 39:
            case 'rightArrow':
                {
                    if (columnPosition + 1 < columns && !message.type) {
                        newColumnPosition = columnPosition + 1;
                    }
                }
                break;
            case 40:
            case 'downArrow':
                {
                    // down
                    if (rowPosition + 1 < rows && !message.type) {
                        newRowPosition = rowPosition + 1;
                    }
                }
                break;
            case 37:
            case 'leftArrow':
                {
                    // left
                    if (columnPosition > 0 && !message.type) {
                        newColumnPosition = columnPosition - 1;
                    }
                }
                break;
            case 13:
            case 'enterKey':
            case 'submitAnswer': {
                this.handleInteraction(rowPosition, columnPosition);

                // If current position has a path to another grid,
                // update positions for the new area
                if (gridLayout[rowPosition][columnPosition].pathTo) {
                    [newRowPosition, newColumnPosition] =
                        this.calculateNewAreaPosition();
                }
            }
        }

        if (!(await this.checkForNewGrid(newColumnPosition, newRowPosition))) {
            this.checkSquareAccessible(e, newRowPosition, newColumnPosition);
        }
    }

    async checkForNewGrid(newColumnPosition, newRowPosition) {
        if (
            newColumnPosition === this.state.columnPosition &&
            newRowPosition === this.state.rowPosition &&
            this.state.gridLayout[this.state.rowPosition][
                this.state.columnPosition
            ].pathTo
        ) {
            [newRowPosition, newColumnPosition] =
                this.calculateNewAreaPosition();
            await this.updateGrid(
                this.state.gridLayout[this.state.rowPosition][
                    this.state.columnPosition
                ].pathTo
            );
            this.setState({
                rowPosition: newRowPosition,
                columnPosition: newColumnPosition,
            });
            return true;
        }
        return false;
    }

    render() {
        const { avatar } = this.props.player;
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
                                avatar={avatar}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Grid;
