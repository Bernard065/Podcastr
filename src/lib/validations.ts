import { z } from "zod";

export const PodcastFormValidation = z.object({
  podcastTitle: z.string().min(2, {
    message: "Podcast Title must be at least 2 characters.",
  }),
  podcastDescription: z.string().min(5, {
    message: "Podcast Description must be at least 5 characters.",
  }),
});
