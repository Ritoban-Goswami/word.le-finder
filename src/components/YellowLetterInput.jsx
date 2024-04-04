import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
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
                  className="bg-yellow-200 focus-visible:ring-yellow-400"
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

export default YellowLetterInput;
