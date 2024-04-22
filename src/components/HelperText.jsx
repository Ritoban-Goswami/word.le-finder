import React from "react";
import TypographyP from "./TypographyP";
import TypographyH4 from "./TypographyH4";

const HelperText = ({ className }) => {
  return (
    <div className={`${className}`}>
      <TypographyP>
        Stuck on Wordle? Don't worry, Word(le) Finder is here to be your chill
        puzzle buddy, not your spoiler robot.
      </TypographyP>
      <TypographyP>
        <strong>
          Think of Word(le) Finder as your personal Wordle whisperer.
        </strong>{" "}
        You tell it what letters you've nailed (green), which ones are lurking
        in the wrong spots (yellow), and which ones are completely off target
        (gray), and it gives you a secret list of words that could be the
        answer. Plus, it throws in some cheeky word definitions as a bonus
        (because who doesn't love a little extra trivia with their coffee?)
      </TypographyP>
      <TypographyH4>Here's the lowdown on using Word(le) Finder:</TypographyH4>
      <ul className="sm:text-lg my-3 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Spill the green:</strong> Type in the letters you got right
          and where they landed.
        </li>
        <li>
          <strong>Yellow fever?</strong> Enter any letters you know are in the
          word, but just chilling in the wrong place.
        </li>
        <li>
          <strong>Gray area:</strong> Got any letters that are totally out of
          the picture? Let Word(le) Finder know.
        </li>
        <li>
          <strong>Hit me with your best shot!</strong> Click the button and
          watch your secret word list appear, along with some interesting
          tidbits about each word.
        </li>
      </ul>
      <TypographyP>
        <strong>
          With Word(le) Finder on your team, you'll be a Wordle whiz in no time.
          But remember, it might throw you a few curveballs (to keep things
          interesting!), so the ultimate glory of solving the puzzle is still
          all yours.
        </strong>
      </TypographyP>
    </div>
  );
};

export default HelperText;
