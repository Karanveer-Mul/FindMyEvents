import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

class Event extends Component {
  state = {
    showEventInfo: false,
  };

  render() {
    const { name, date, time, desc } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h3>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h3>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Description: {desc}</li>
            <li className="list-group-item">Date: {date}</li>
            <li className="list-group-item">Time: {time}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
