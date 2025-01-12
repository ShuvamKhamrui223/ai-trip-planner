import React from "react";

type TripNoteProps = {
  note: string | undefined;
};
const TripNote: React.FC<TripNoteProps> = ({ note }) => {
  return (
    <div className="bg-blue-950/90 p-8">
      <p className="text-gray-300 text-lg">{note}</p>
    </div>
  );
};

export default TripNote;
