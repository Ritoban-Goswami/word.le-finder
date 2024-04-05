import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
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
                  className="bg-stone-200 focus-visible:ring-stone-400"
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

export default GreyLetterInput;
