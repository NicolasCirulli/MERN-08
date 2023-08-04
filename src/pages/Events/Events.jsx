import LayoutMain from "../Layouts/LayoutMain";
import EventCard from "../../components/EventCard/EventCard";
import events from "../../data/events.js";
const Events = () => {
  return (
    <LayoutMain>
      <section className="container d-flex flex-wrap gap-5 justify-content-center justify-content-md-between">
        <h2 className="text-center w-100 text-primary">Events</h2>
        {events.map((event) => (
          <EventCard key={event._id} evento={event} />
        ))}
      </section>
    </LayoutMain>
  );
};

export default Events;
