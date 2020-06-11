import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";
//import { Link } from "react-router-dom";

class Event extends Component {
  state = {
    showEventInfo: false,
  };

  onDeleteClick = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, date, time, desc } = this.props.event;
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
            className="fas fa-angle-double-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
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
  deleteEvent: PropTypes.func.isRequired,
};

export default connect(null, { deleteEvent })(Event);
