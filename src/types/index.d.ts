export interface Podcast {
  id: number;
  title: string;
  description: string;
  imgURL: string;
}

export interface PodcastCardProps {
  podcast: Podcast;
}
