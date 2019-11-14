import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Session extends Component {
  state = {
    session: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/sessions/${id}`);

    this.setState({ session: response.data });
  }

  render() {
    const { session } = this.state;

    return (
      <div className="session-info">
        <h1>{session.movie}</h1>
        <p>{session.crew}</p>
        <p>{session.genres}</p>
        <p>{session.duration}</p>
        <p>{session.certification}</p>
        <p>{session.day}</p>
        <p>{session.hour}</p>

        <p>
          URL: <a href={session.url}>{session.url}</a>
        </p>
      </div>
    );
  }
}
