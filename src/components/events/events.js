import React, { Component } from "react";
import Event from "./event";

class Events extends Component {
  state = {
    events: [
      {
        id: 1,
        name: "Carnival",
        date: "28-4-20",
        time: "20:30 hours",
        desc: "somthing about Carnival",
      },
      {
        id: 2,
        name: "Hanabi",
        date: "30-4-20",
        time: "10:30 hours",
        desc: "Fireworks festival",
      },
    ],
  };

  render() {
    const { events } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">Upcoming Events</h1>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </React.Fragment>
    );
  }
}

export default Events;
