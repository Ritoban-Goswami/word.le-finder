import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
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
    <div className="flex gap-x-1.5">
      {fields.map((fieldName, index) => (
        <FormField
          key={index}
          control={form.control}
          name={fieldName}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-green-200 focus-visible:ring-green-400"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};

export default GreenLetterInput;
