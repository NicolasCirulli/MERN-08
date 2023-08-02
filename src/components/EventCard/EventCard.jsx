import React from "react";

const EventCard = ({ evento }) => {
  return (
    <article className="bg-secondary rounded">
      <img src={evento.image} width="300" height="200" />
      <h2 className="text-center text-white py-3">{evento.name}</h2>
    </article>
  );
};

export default EventCard;
