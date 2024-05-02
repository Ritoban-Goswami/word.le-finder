export async function POST(request) {
    const { greenLetters, yellowLetters, greyLetters } = await request.json();
    const filteredWords = await fetchFilteredWords(greenLetters, yellowLetters, greyLetters);
    return Response.json(filteredWords);
}

async function fetchFilteredWords(greenLetters, yellowLetters, greyLetters) {
    let finalFilteredWords = [];
    const wordQuery = greenLetters.map(letter => letter || "?").join("");
    const response = await fetch(`https://api.datamuse.com/words?sp=${wordQuery}`);
    // if (!response.ok) {
    //     throw new Error(`Error fetching words: ${response.status} ${response.statusText}`);
    // }
    const greenFilteredWords = await response.json();
    finalFilteredWords = greenFilteredWords;


    const allYellowEmpty = yellowLetters.every(letter => letter === "");
    if (!allYellowEmpty) {
        const yellowFilteredWords = finalFilteredWords.filter(wordObject => {
            const word = wordObject.word.toUpperCase();
            for (let yellowLetter of yellowLetters) {
                if (yellowLetter !== '' && word.includes(yellowLetter.toUpperCase())) {
                    let letterIndex = yellowLetters.indexOf(yellowLetter);
                    let letterPosArr = word.split('').map((char, index) => char === yellowLetter.toUpperCase() ? index : -1).filter(index => index !== -1);
                    if (letterPosArr.includes(letterIndex)) {
                        return false;
                    }
                }
            }
            return true;
        });
        finalFilteredWords = yellowFilteredWords;
    }

    const greyLettersArr = greyLetters.split(',');
    const allGreyEmpty = greyLettersArr.every(letter => letter === "");
    if (!allGreyEmpty) {
        const greyFilteredWords = finalFilteredWords.filter(wordObject => {
            const word = wordObject.word.toUpperCase();
            for (let greyLetter of greyLettersArr) {
                if (greyLetter !== '' && word.includes(greyLetter.toUpperCase())) {
                    return false;
                }
            }
            return true;
        });
        finalFilteredWords = greyFilteredWords;
    }
    const filteredMeaningfulWords = await filterWordsWithMeaning(finalFilteredWords);
    return filteredMeaningfulWords;
}

const filterWordsWithMeaning = async (words) => {
    const wordsWithMeaning = await Promise.all(words.map(async (wordObj) => {
        const meaning = await fetchMeaning(wordObj.word);
        return { word: wordObj.word, meaning: meaning };
    }));

    return wordsWithMeaning.filter(word => word.meaning);
};

const fetchMeaning = async (word) => {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (res.ok) {
            const [data] = await res.json();
            const meaning = data?.meanings?.[0]?.definitions?.[0]?.definition || null;
            return meaning;
        } else {
            return null;
        }
    } catch (err) {
        console.error("Error occurred during fetchMeaning:", err);
        return null;
    }
};