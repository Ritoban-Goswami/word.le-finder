"use client";

import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import TypographyH3 from "./TypographyH3";
import TypographyP from "./TypographyP";

const Suggestions = ({ suggestions, className }) => {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <div className={`${className}`}>
      <TypographyH3 className="text-primary uppercase">
        Found Words
      </TypographyH3>
      <div className="mt-3 flex flex-wrap gap-x-1.5 gap-y-2">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) =>
            isMobile ? (
              <Popover key={index}>
                <PopoverTrigger>
                  <Badge>{suggestion.word}</Badge>
                </PopoverTrigger>
                <PopoverContent className="max-w-72">
                  <span>{suggestion.meaning}</span>
                </PopoverContent>
              </Popover>
            ) : (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge>{suggestion.word}</Badge>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-72">
                    <span>{suggestion.meaning}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          )
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
