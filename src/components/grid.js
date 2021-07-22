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

    checkPlayerInventory(itemToCheck, required) {
        const inventory = this.props.playerInventory.filter(
            (item) => item.name === itemToCheck
        );

        if (!inventory.length) {
            this.props.updateMessage(
                'You must first bring me back 3 report cards before you are allowed to pass!'
            );
            return false;
        } else if (inventory[0].quantity < required) {
            this.props.updateMessage(
                `It looks like you're almost there! Only ${
                    required - inventory[0].quantity
                } more report card${
                    inventory[0].quantity !== 1 ? '' : 's'
                } to go!`
            );
            return false;
        }

        return true;
    }

    interactWithNpc(row, column) {
        const gridSpace = this.state.gridLayout[row][column];

        if (gridSpace.npc && !gridSpace.npc.isInTheMiddleOfAction) {
            const currentAction = gridSpace.npc.interact();

            if (currentAction.requirements.length) {
                for (let require of currentAction.requirements) {
                    const {
                        type,
                        item,
                        numberNeeded,
                        question,
                        answer,
                        cleared,
                    } = require;

                    if (type === RequirementTypes.inventory) {
                        if (!this.checkPlayerInventory(item, numberNeeded))
                            return false;
                        // if (!Object.hasOwnProperty.call(player, type) || player[type] < amount) {
                        //     return {
                        //         success: false,
                        //         message,
                        //     };
                        // }
                    } else if (type === RequirementTypes.question) {
                        const playerAnswer = this.props.answerInput;
                        this.props.clearAnswerInput();
                        if (cleared) {
                            console.log('already answered');
                            return;
                        }
                        if (playerAnswer === '') {
                            this.props.updateMessage(question);
                            gridSpace.npc.cancel();
                            return false;
                        } else if (playerAnswer != answer) {
                            this.props.updateMessage('Try again!');
                            gridSpace.npc.cancel();
                            return false;
                        }

                        require.updateCleared();
                    }
                }
            }

            const { fn, message } = currentAction.afterAction;
            fn.call(this);
            this.props.updateMessage(message);
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
            case 13:
            case 'spaceKey': {
                // space
                this.interactWithNpc(rowPosition, columnPosition);
            }
        }

        this.checkSquareType(newRowPosition, newColumnPosition);
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
