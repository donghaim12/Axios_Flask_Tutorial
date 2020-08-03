import React, { Component } from 'react';
import axios from 'axios';

class axiostest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ number: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const number = {
      number: this.state.number
    }

    if (this.state.number !== "") {
      axios.post(`http://127.0.0.1:5000/result`, { number })
        .then(function (response) {
          console.log(response);
          console.log(response.data);
          alert(response.data)  
          //alert(this.state.number)
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    }
    else {
      alert("The search query cannot be empty")
    }
    // this.setState({
    //   number: ''
    // })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="회차 번호"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <div>{this.state.number}</div>
        <button type="submit">
          입력
        </button>
      </form>
    );
  }
}
export default axiostest;