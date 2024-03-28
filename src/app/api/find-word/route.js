import { NextResponse } from 'next/server';
export async function POST(request) {
    const reqObj = await request.json()
    const word = Object.values(reqObj).map(letter => letter || "?").join("");

    if (word === "?????") {
        return NextResponse.json([]);
    }

    const res = await fetch(
        `https://api.datamuse.com/words?sp=${word}`
    );

    const data = await res.json();
    return NextResponse.json(data);
}