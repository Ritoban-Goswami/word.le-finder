import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import TypographyH3 from "./TypographyH3";
import TypographyP from "./TypographyP";

const Suggestions = ({ suggestions, className }) => {
  return (
    <div className={`${className}`}>
      <TypographyH3 className="text-primary uppercase">
        Found Words
      </TypographyH3>
      <div className="mt-3 flex flex-wrap gap-x-1.5 gap-y-2">
        {suggestions.length > 0 ? (
          <TooltipProvider>
            {suggestions.map((suggestion, index) => (
              <Tooltip>
                <TooltipTrigger key={index}>
                  <Badge>{suggestion.word}</Badge>
                </TooltipTrigger>
                <TooltipContent className="max-w-72">
                  <span>{suggestion.meaning}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        ) : (
          <TypographyP>
            Try to give in some clues to get word suggestions.
          </TypographyP>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
