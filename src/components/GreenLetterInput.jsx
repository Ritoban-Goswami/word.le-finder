import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const GreenLetterInput = ({ form }) => {
  return (
    <div className="flex gap-x-1.5">
      <FormField
        control={form.control}
        name="greenLetter1"
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
      <FormField
        control={form.control}
        name="greenLetter2"
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
      <FormField
        control={form.control}
        name="greenLetter3"
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
      <FormField
        control={form.control}
        name="greenLetter4"
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
      <FormField
        control={form.control}
        name="greenLetter5"
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
    </div>
  );
};

export default GreenLetterInput;
