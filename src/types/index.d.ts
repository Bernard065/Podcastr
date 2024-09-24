import { Dispatch, SetStateAction } from "react";
import { Id } from "../../convex/_generated/dataModel";

export interface Podcast {
  id: number;
  title: string;
  description: string;
  imgURL: string;
}

export interface PodcastCardProps {
  podcast: Podcast;
}

export interface GeneratePodcastProps {
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudio: Dispatch<SetStateAction<string>>;
  voiceType: string;
  audio: string;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}
