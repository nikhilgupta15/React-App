import Navbar from "./components/Navbar";
import Counters from "./components/counters";
import "./App.css";

import React, { Component } from "react";
// import ReactDOM from "react-dom";
class App extends Component {
  state = {
    counters: []
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () => {
    let length = this.state.counters.length;
    var c = 0;
    //console.log(length);
    if (length !== 0) var Id = this.state.counters[length - 1].id;
    else Id = 0;
    var element = {};
    if (document.getElementById("item").value !== "") {
      element = {
        id: Id + 1,
        value: 0,
        name: document.getElementById("item").value
      };

      const counters = [...this.state.counters];
      counters.push(element);
      // console.log(counters);
      this.setState({ counters });
      if (c === 0)
        document.getElementById("check").style.visibility = "visible";
      else if (this.state.counters.length !== 0) {
        c++;
        document.getElementById("check").style.visibility = "visible";
      } else document.getElementById("check").style.visibility = "hidden";
    }
  };

  handleInput() {
    if (document.getElementById("item").value !== "")
      document.getElementById("item").value = "";
  }
  counterSum = () => {
    var sum = 0;
    var length = this.state.counters.length;
    for (var i = 0; i < length; i++) {
      sum = sum + this.state.counters[i].value;
    }
    console.log(sum);
    return sum;
  };

  handleCheckOut = () => {
    console.log(43456789);
    var length = this.state.counters.length;
    var c = 0;

    for (var i = 0; i < length; i++) {
      if (this.state.counters[i].value !== 0) {
        var r = document.createElement("tr");
        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        document
          .getElementById("body")
          .appendChild(r)
          .appendChild(c1).innerHTML = c + 1;
        document
          .getElementById("body")
          .appendChild(r)
          .appendChild(c2).innerHTML = this.state.counters[i].name;
        document
          .getElementById("body")
          .appendChild(r)
          .appendChild(c3).innerHTML = this.state.counters[i].value;
        c = c + 1;
        // console.log(document.getElementById("body"));

        document.getElementById("display").style.display = "block";
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          sumOfCounters={this.counterSum()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onAdd={this.handleAdd}
            onInput={this.handleInput}
            onCheckOut={this.handleCheckOut}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
