import PodcastForm from "@/components/forms/PodcastForm";
import React from "react";

const Page = () => {
  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Create a Podcast</h1>

      <PodcastForm />
    </section>
  );
};

export default Page;
