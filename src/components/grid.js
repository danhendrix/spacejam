import { Component } from 'preact';
import Square from './square';
import style from './style.scss';
import { RequirementTypes } from '../NPC/npc';

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
        document
            .querySelectorAll(`.${style.virtualKey}`)
            .forEach((virtualKey) => {
                virtualKey.removeEventListener(
                    'click',
                    this.handleKeyPress.bind(this)
                );
            });

        this.buildGrid(this.props.gridSetup);
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyPress.bind(this));
        document
            .querySelectorAll(`.${style.virtualKey}`)
            .forEach((virtualKey) => {
                virtualKey.addEventListener(
                    'click',
                    this.handleKeyPress.bind(this)
                );
            });
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

    interactWithNpc(row, column) {
        const gridSpace = this.state.gridLayout[row][column];

        if (gridSpace.npc && !gridSpace.npc.isInTheMiddleOfAction) {
            const currentAction = gridSpace.npc.interact();

            if (currentAction.requirements.length) {
                for (let require of currentAction.requirements) {
                    const { type, question, answer } = require;

                    if (type === RequirementTypes.inventory) {
                        console.log('looking up the player');
                        // if (!Object.hasOwnProperty.call(player, type) || player[type] < amount) {
                        //     return {
                        //         success: false,
                        //         message,
                        //     };
                        // }
                    } else if (type === RequirementTypes.question) {
                        console.log('Here is a question for you: ', question);
                        const playerAnswer = this.props.playerInput;
                        console.log('answer? ', answer);

                        if (playerAnswer != answer) {
                            this.props.updatePlayerInput('');
                            console.log('try again');
                            gridSpace.npc.cancel();
                            return false;
                        }
                    }
                }
            }

            const { fn, message } = currentAction.afterAction;
            fn.call(this);
            console.log('after action message', message);

            gridSpace.npc.successfulAction();

            return true;
        }
    }

    setSquareAccesible(column, row) {
        const gridLayout = this.state.gridLayout;
        const square =
            gridLayout[this.state.rowPosition + row][
                this.state.columnPosition + column
            ];
        square.isAccessible = true;

        this.setState({ gridLayout });
    }

    handleKeyPress(e) {
        e.stopPropagation();
        const { columns, rows, columnPosition, rowPosition } = this.state;
        const eventValue = e.type === 'keyup' ? e.keyCode : e.target.id;
        let newRowPosition = rowPosition;
        let newColumnPosition = columnPosition;

        switch (eventValue) {
            case 38:
            case 'upArrow':
                {
                    // up
                    if (rowPosition > 0) {
                        newRowPosition = rowPosition - 1;
                    }
                }
                break;
            case 39:
            case 'rightArrow':
                {
                    // right
                    if (columnPosition + 1 < columns) {
                        newColumnPosition = columnPosition + 1;
                    }
                }
                break;
            case 40:
            case 'downArrow':
                {
                    // down
                    if (rowPosition + 1 < rows) {
                        newRowPosition = rowPosition + 1;
                    }
                }
                break;
            case 37:
            case 'leftArrow':
                {
                    // left
                    if (columnPosition > 0) {
                        newColumnPosition = columnPosition - 1;
                    }
                }
                break;
            case 32:
            case 'spaceKey': {
                // space
                this.interactWithNpc(rowPosition, columnPosition);
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
