class Questions {
    constructor(unusedQuestions, usedQuestions = []) {
        this.unusedQuestions = unusedQuestions;
        this.usedQuestions = usedQuestions;
    }

    changeStatus = (questionIndex) => {
        const unusedCopy = this.unusedQuestions;
        const pickedQuestion = unusedCopy.splice(unusedCopy[questionIndex], 1);
        this.usedQuestions.push(pickedQuestion);
        this.unusedQuestions = unusedCopy;
    };

    pickQuestion = () => {
        const randomNumber = Math.floor(
            Math.random() * this.unusedQuestions.length
        );

        const chosenQuestion = this.unusedQuestions[randomNumber];
        this.changeStatus(randomNumber);

        // console.log(chosenQuestion);
        return chosenQuestion;
    };
}

export default Questions;
