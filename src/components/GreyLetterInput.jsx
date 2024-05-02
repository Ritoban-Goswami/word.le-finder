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
  return (
    <div>
      <FormLabel className="font-semibold">Enter the Grey Letters</FormLabel>
      <div className="mt-3.5 mb-2">
        <FormField
          control={form.control}
          name="greyLetters"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-stone-300 focus-visible:ring-stone-400 w-full sm:w-full text-left"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormDescription>
        Please enter the letters which are not in the word, comma seperated.
      </FormDescription>
    </div>
  );
};

export default GreyLetterInput;
