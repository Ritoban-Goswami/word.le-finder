import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const YellowLetterInput = ({ form }) => {
  const fields = [
    "yellowLetter1",
    "yellowLetter2",
    "yellowLetter3",
    "yellowLetter4",
    "yellowLetter5",
  ];

  return (
    <div>
      <FormLabel className="font-semibold">Enter the Yellow Letters</FormLabel>
      <div className="flex justify-center mt-3.5 mb-2 gap-x-1.5">
        {fields.map((fieldName, index) => (
          <FormField
            key={index}
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    maxLength={1}
                    className="bg-yellow-300 focus-visible:ring-yellow-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
      <FormDescription>
        Please enter the letters which are in the word but not in correct
        position.
      </FormDescription>
    </div>
  );
};

export default YellowLetterInput;
