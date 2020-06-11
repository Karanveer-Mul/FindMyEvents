import { GET_EVENTS, ADD_EVENT, DELETE_EVENT } from "../actions/types";

const initialState = {
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

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };

    default:
      return state;
  }
}
