import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('SearchForm state', this.state);
  }

  handleInputChange(e) {
    console.log("handleInputChange --> e.target.value -->", e.target.value);

    this.setState({
      term: e.target.value
    });

    this.props.onChange && this.props.onChange(e.target.value);
  }

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <input
          value={this.state.term}
          type="text"
          name="term"
          placeholder="Search term"
          onChange={e => this.handleInputChange(e)}
          autocomplete="off"
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
