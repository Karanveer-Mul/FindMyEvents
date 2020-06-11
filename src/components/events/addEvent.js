import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../../actions/eventActions";
import { v1 as uuid } from "uuid";

class AddEvent extends Component {
  state = {
    name: "",
    date: "",
    time: "",
    desc: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, date, time, desc } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (date === "") {
      this.setState({ errors: { date: "Date is required" } });
      return;
    }

    if (time === "") {
      this.setState({ errors: { time: "Time is required" } });
      return;
    }

    if (desc === "") {
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }

    const newEvent = {
      id: uuid(),
      name,
      date,
      time,
      desc,
    };

    this.props.addEvent(newEvent);

    this.setState({
      name: "",
      date: "",
      time: "",
      desc: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, date, time, desc, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter the name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Date"
              name="date"
              placeholder="dd/mm/yyyy"
              value={date}
              onChange={this.onChange}
              error={errors.date}
            />
            <TextInputGroup
              label="Time"
              name="time"
              placeholder="hh:mm:ss PDT"
              value={time}
              onChange={this.onChange}
              error={errors.time}
            />
            <TextInputGroup
              label="Description"
              name="desc"
              placeholder="Enter the description"
              value={desc}
              onChange={this.onChange}
              error={errors.desc}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(AddEvent);
