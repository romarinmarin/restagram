import React, { Component } from "react";

class Comments extends Component {
  renderComment = (c, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{c.user}</strong>
          {c.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const message = this.refs.message.value;
    const author = this.refs.author.value;
    console.log(message, author);
  };
  render() {
    return (
      <div>
        {this.props.comments.map(this.renderComment)}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input ref="author" type="text" placeholder="author" />
          <input ref="message" type="text" placeholder="message" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Comments;
