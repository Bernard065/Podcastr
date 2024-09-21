"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import { PodcastFormValidation } from "@/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { voiceCategories } from "@/constants";
import { Textarea } from "../ui/textarea";
import GeneratePodcast from "../GeneratePodcast";
import GenerateThumbnail from "../GenerateThumbnail";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";

const PodcastForm = () => {
  const [voiceType, setVoiceType] = useState("");
  const [voicePrompt, setVoicePrompt] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagePrompt, setImagePrompt] = useState('');
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(null)
  const [imageUrl, setImageUrl] = useState('');
  
  const [audioUrl, setAudioUrl] = useState('');
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(null)
  const [audioDuration, setAudioDuration] = useState(0);

  // 1. Define your form.
  const form = useForm<z.infer<typeof PodcastFormValidation>>({
    resolver: zodResolver(PodcastFormValidation),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof PodcastFormValidation>) {
    setIsSubmitting(true);
    try {
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-12 flex w-full flex-col "
      >
        <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
          <FormField
            control={form.control}
            name="podcastTitle"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="text-16 font-bold text-white-1">
                  Podcast Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="input-class no-focus"
                    placeholder="Enter your podcast title here"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2.5">
            <Label className="text-16 font-bold text-white-1">
              Select AI Voice
            </Label>

            <Select onValueChange={(value) => setVoiceType(value)}>
              <SelectTrigger className="text-16 no-focus w-full border-none bg-black-1 text-gray-1">
                <SelectValue
                  placeholder="Select AI Voice"
                  className="placeholder:text-gray-1"
                />
              </SelectTrigger>
              <SelectContent className="text-16 no-focus border-none bg-black-1 font-bold text-white-1">
                {voiceCategories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="capitalize"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
              {voiceType && (
                <audio src={`/${voiceType}.mp3`} autoPlay className="hidden" />
              )}
            </Select>
          </div>

          <FormField
            control={form.control}
            name="podcastDescription"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="text-16 font-bold text-white-1">
                  Podcast Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="input-class no-focus"
                    placeholder="Write a short podcast description"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col pt-10">
          <GeneratePodcast />

          <GenerateThumbnail />
        </div>

        <div className="mt-10 w-full">
          <Button
            type="submit"
            className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-orange-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Submitting
                <Loader size={20} className="ml-2 animate-spin" />
              </>
            ) : (
              "Submit Podcast"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PodcastForm;
