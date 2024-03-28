"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormDescription, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import GreenLetterInput from "./GreenLetterInput";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";
import TypographyH4 from "./TypographyH4";

const FormSchema = z.object({
  greenLetter1: z.string().optional(),
  greenLetter2: z.string().optional(),
  greenLetter3: z.string().optional(),
  greenLetter4: z.string().optional(),
  greenLetter5: z.string().optional(),
});

const Card = () => {
  const [wordSuggestions, setWordSuggestions] = useState([]);

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

  const getWordSuggestions = async (wordData) => {
    try {
      const res = await fetch(`api/find-word`, {
        method: "POST",
        body: JSON.stringify(wordData),
      });

      const data = await res.json();
      setWordSuggestions(data);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const onSubmit = async (data) => {
    await getWordSuggestions(data);
    console.log(wordSuggestions);
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
          <Button
            className="w-20"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Find
          </Button>
        </form>
      </Form>
      {wordSuggestions.length > 0 && (
        <div className="mt-6">
          <TypographyH4>Found Words:</TypographyH4>
          <div className="mt-3 flex flex-wrap gap-x-1.5 gap-y-2">
            {wordSuggestions.map((suggestion, index) => (
              <Badge key={index} variant="outline">
                {suggestion.word}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
