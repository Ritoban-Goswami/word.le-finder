"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormDescription, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import GreenLetterInput from "./GreenLetterInput";

const FormSchema = z.object({
  greenLetter1: z.string().optional(),
  greenLetter2: z.string().optional(),
  greenLetter3: z.string().optional(),
  greenLetter4: z.string().optional(),
  greenLetter5: z.string().optional(),
});

const Card = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      greenLetter1: "",
      greenLetter2: "",
      greenLetter3: "",
      greenLetter4: "",
      greenLetter5: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-6 max-w-sm rounded overflow-hidden shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormLabel>Enter the Green Letters</FormLabel>
          <GreenLetterInput form={form} />
          <FormDescription>
            Please enter the letters which are in the word and in correct
            position.
          </FormDescription>
          <Button type="submit">Find</Button>
        </form>
      </Form>
    </div>
  );
};

export default Card;
