import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const GreenLetterInput = ({ form }) => {
  const fields = [
    "greenLetter1",
    "greenLetter2",
    "greenLetter3",
    "greenLetter4",
    "greenLetter5",
  ];

  return (
    <div>
      <FormLabel className="text-base font-semibold">
        Enter the Green Letters
      </FormLabel>
      <div className="flex mt-3.5 mb-2 gap-x-1.5">
        {fields.map((fieldName, index) => (
          <FormField
            key={index}
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-green-300 focus-visible:ring-green-400"
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
        Please enter the letters which are in the word and in correct position.
      </FormDescription>
    </div>
  );
};

export default GreenLetterInput;
