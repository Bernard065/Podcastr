import { GeneratePodcastProps } from "@/types";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

const useGeneratePodcast = ({
  setAudio,
  voiceType,
  voicePrompt,
  setAudioStorageId,
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePodcast = async () => {
    setIsGenerating(true);

    setAudio(" ");

    if (!voicePrompt) {
      return setIsGenerating(false);
    }

    try {
      // Get podcast
    } catch (error) {
      console.error("Error generating podcast:", error);
    } finally {
      setIsGenerating(false);
    }
  };
  return {
    isGenerating,
    generatePodcast,
  };
};

const GeneratePodcast = (props: GeneratePodcastProps) => {
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);
  return (
    <>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI prompt to generate podcast
        </Label>
        <Textarea
          className="input-class no-focus font-light"
          placeholder="Provide text to AI to generate audio"
          rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>

      <div className="mt-5 max-w-[200px]">
        <Button
          type="submit"
          className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-orange-400"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              Generating
              <Loader size={20} className="ml-2 animate-spin" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audio && (
        <audio
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </>
  );
};

export default GeneratePodcast;
