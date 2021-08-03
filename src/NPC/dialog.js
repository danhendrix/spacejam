const incorrect = [
    "That's not right! Try again.",
    "Nope.",
    "Not quite there, but try again!",
];

export const generateIncorrect = () => {
    return Math.floor(Math.random() * incorrect.length);
};