import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const GreyLetterInput = ({ form }) => {
  const fields = [
    "greyLetter1",
    "greyLetter2",
    "greyLetter3",
    "greyLetter4",
    "greyLetter5",
  ];

  return (
    <div>
      <FormLabel className="font-semibold">Enter the Grey Letters</FormLabel>
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
                    className="bg-stone-300 focus-visible:ring-stone-400"
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
        Please enter the letters which are not in the word.
      </FormDescription>
    </div>
  );
};

export default GreyLetterInput;
