"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import GreenLetterInput from "./GreenLetterInput";
import YellowLetterInput from "./YellowLetterInput";
import GreyLetterInput from "./GreyLetterInput";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Suggestions from "./Suggestions";

const FormSchema = z.object({
  greenLetter1: z.string().optional(),
  greenLetter2: z.string().optional(),
  greenLetter3: z.string().optional(),
  greenLetter4: z.string().optional(),
  greenLetter5: z.string().optional(),
  yellowLetter1: z.string().optional(),
  yellowLetter2: z.string().optional(),
  yellowLetter3: z.string().optional(),
  yellowLetter4: z.string().optional(),
  yellowLetter5: z.string().optional(),
  greyLetter1: z.string().optional(),
  greyLetter2: z.string().optional(),
  greyLetter3: z.string().optional(),
  greyLetter4: z.string().optional(),
  greyLetter5: z.string().optional(),
});

const Card = () => {
  const [wordSuggestions, setWordSuggestions] = useState([]);
  const [formEmpty, setFormEmpty] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      greenLetter1: "",
      greenLetter2: "",
      greenLetter3: "",
      greenLetter4: "",
      greenLetter5: "",
      yellowLetter1: "",
      yellowLetter2: "",
      yellowLetter3: "",
      yellowLetter4: "",
      yellowLetter5: "",
      greyLetter1: "",
      greyLetter2: "",
      greyLetter3: "",
      greyLetter4: "",
      greyLetter5: "",
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
    // Check if all fields are empty, not using zod as it attaches error message to a certain field.
    const allFieldsEmpty = Object.values(data).every((value) => !value);
    if (allFieldsEmpty) {
      setFormEmpty(true);
      return;
    }
    setFormEmpty(false);

    const {
      greenLetter1,
      greenLetter2,
      greenLetter3,
      greenLetter4,
      greenLetter5,
      yellowLetter1,
      yellowLetter2,
      yellowLetter3,
      yellowLetter4,
      yellowLetter5,
      greyLetter1,
      greyLetter2,
      greyLetter3,
      greyLetter4,
      greyLetter5,
    } = data;

    const formattedData = {
      greenLetters: [
        greenLetter1,
        greenLetter2,
        greenLetter3,
        greenLetter4,
        greenLetter5,
      ],
      yellowLetters: [
        yellowLetter1,
        yellowLetter2,
        yellowLetter3,
        yellowLetter4,
        yellowLetter5,
      ],
      greyLetters: [
        greyLetter1,
        greyLetter2,
        greyLetter3,
        greyLetter4,
        greyLetter5,
      ],
    };
    await getWordSuggestions(formattedData);
  };

  return (
    <>
      <div className="sm:p-6 col-span-2 max-w-sm sm:bg-background sm:rounded-lg overflow-hidden sm:shadow-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col"
          >
            <GreenLetterInput form={form} />
            <YellowLetterInput form={form} />
            <GreyLetterInput form={form} />
            <Button
              className="w-20 self-center"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Find
            </Button>
            {formEmpty && (
              <p className="text-sm font-bold text-red-500">
                You have to provide at least one letter to get hints.{" "}
              </p>
            )}
          </form>
        </Form>
      </div>
      <Suggestions
        className="col-span-3 w-full"
        suggestions={wordSuggestions}
      />
    </>
  );
};

export default Card;
