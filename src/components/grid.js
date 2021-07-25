import { Component } from 'preact';
import Square from './square';
import style from './style.scss';
import Home from '../Grids/home';
import { RequirementTypes } from '../NPC/npc';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGrid: Home,
            gridName: 'Home',
            gridLayout: [],
            rows: 0,
            columns: 0,
            rowPosition: 0,
            columnPosition: 0,
        };
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

        this.buildGrid(this.state.currentGrid);
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

    updateGrid = (grid, name) => {
        this.setState(
            {
                currentGrid: grid,
                gridName: name,
            },
            () => {
                this.buildGrid(this.state.currentGrid);
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

    checkSquareAccessible(newRow, newColumn) {
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
        const name = this.props.player.getName();
        const inventory = this.props.player.getInventory(itemToCheck);

        if (!inventory) {
            this.props.updateMessage(
                `Greetings, ${name}! You must first bring me back 3 report cards before you are allowed to pass!`
            );
            return false;
        } else if (inventory < required) {
            this.props.updateMessage(
                `Oh, you're quite on your way, ${name}! You only need ${
                    required - inventory
                } more report card${inventory !== 1 ? '' : 's'}!`
            );
            return false;
        }

        return true;
    }

    handleInteraction(row, column) {
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
        } else if (gridSpace.link) {
            this.updateGrid(gridSpace.link, gridSpace.linkName);
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

    handleKeyPress(e) {
        e.stopPropagation();
        const { columns, rows, columnPosition, rowPosition, gridLayout } =
            this.state;
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
                this.handleInteraction(rowPosition, columnPosition);

                // If current position links to another grid,
                // update positions for the new area
                if (gridLayout[rowPosition][columnPosition].link) {
                    [newRowPosition, newColumnPosition] =
                        this.calculateNewAreaPosition();
                }
            }
        }

        this.checkSquareAccessible(newRowPosition, newColumnPosition);
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
