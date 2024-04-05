import { NextResponse } from 'next/server';

export async function POST(request) {
    const { greenLetters, yellowLetters, greyLetters } = await request.json();
    const filteredWords = await fetchFilteredWords(greenLetters, yellowLetters, greyLetters);
    return NextResponse.json(filteredWords);
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
            for (let i = 0; i < yellowLetters.length; i++) {
                const yellowLetter = yellowLetters[i];
                if (yellowLetter && word.includes(yellowLetter) && word[i] !== yellowLetter) {
                    return true;
                }
            }
            return false;
        });
        finalFilteredWords = yellowFilteredWords;
    }

    const allGreyEmpty = greyLetters.every(letter => letter === "");
    if (!allGreyEmpty) {
        const greyFilteredWords = finalFilteredWords.filter(wordObject => {
            const word = wordObject.word.toUpperCase();
            for (let i = 0; i < greyLetters.length; i++) {
                const greyLetter = greyLetters[i];
                if (greyLetter && word.includes(greyLetter)) {
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
        return await fetchMeaning(wordObj.word);
    }));

    return words.filter((_, index) => wordsWithMeaning[index]);
};

const fetchMeaning = async (word) => {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return res.status === 200;
    } catch (err) {
        console.error("Error occurred during fetchMeaning:", err);
        return false;
    }
};