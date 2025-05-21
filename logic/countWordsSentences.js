const countWordsInSentences = (inputSentence) => { 
    if(inputSentence.length < 0) {
        throw Error("Input can't be empty!");
    }
    else {
        const splittedSentence = inputSentence.trim().split(' ');
        const updatedLengthOfSentence = splittedSentence.filter((element) => element !== '');
        console.log(updatedLengthOfSentence)
        return updatedLengthOfSentence.length;
    }
}

let input = " Hi    my name is robo rani. "
console.log(countWordsInSentences(input))