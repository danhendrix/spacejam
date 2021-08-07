const incorrect = [
    "That's not right! Try again.",
    'Nope!',
    "Not quite there, but I'll let you try again.",
    'I GUESS you can have another go...',
    'I believe in giving people another chance.',
    "Negative. No, the answer isn't a negative number, you just got it wrong.",
    "I'm positive that's not right.",
    "Maybe you aren't always wrong, but some times you are. Like now.",
    "Why was six afraid of seven? Uh... I can't remember, but your answer wasn't right.",
    "Don't tell anyone else, but I believe you can get this right with another guess.",
    'On a scale of 1 to 10, that answer is wrong.',
];

export const generateIncorrect = () => {
    return incorrect[Math.floor(Math.random() * incorrect.length)];
};
