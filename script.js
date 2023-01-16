const answerBank = {
    nouns: ['cat', 'dog', 'chicken', 'monkey', 'republican', 'democrat', 'people', 'woman', 'man'],
    verbs: ['cross the road', 'cross the aisle', 'swallow the fly', 'pick his nose', 'jump in the river', 'go to school'],
    answers: ['other side', 'end of the rainbow', 'tootsie roll center', 'final countdown', 'punchline']
}

const pickRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const buildAnswer = () => {
    const noun = pickRandom(answerBank.nouns);
    const verb = pickRandom(answerBank.verbs);
    const answer = pickRandom(answerBank.answers);
    return `Why did the ${noun} ${verb}?  To get to the ${answer}!`
}

console.log(buildAnswer());

