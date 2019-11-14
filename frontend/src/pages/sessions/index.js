import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Sessions extends Component {
  state = {
    sessions: [],
    sessionInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loadSessions();
  }

  loadSessions = async (page = 1) => {
    const response = await api.get(`/sessions?page=${page}`);

    const { docs, ...sessionInfo } = response.data;

    this.setState({ sessions: docs, sessionInfo, page });
  };

  prevPage = () => {
    const { page, sessionInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadSessions(pageNumber);
  };

  nextPage = () => {
    const { page, sessionInfo } = this.state;

    if (page === sessionInfo.pages) return;

    const pageNumber = page + 1;

    this.loadSessions(pageNumber);
  };

  render() {
    const { sessions, page, sessionInfo } = this.state;
    return (
      <div className="session-list">
        {sessions.map(session => (
          <article key={session._id}>
            <strong>{session.movie}</strong>
            <p>{session.desc}</p>

            <Link to={`/sessions/${session._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === sessionInfo.pages} onClick={this.nextPage}>
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
