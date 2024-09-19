import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div className="text-white-1">Podcast details {id}</div>;
};

export default Page;
