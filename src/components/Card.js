import React, { Component } from 'react';

class App extends Component {

  onDragStart = (e, data) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", data);
  }

  render() {
    const data = this.props.number + ',' + this.props.house + ',' + this.props.id;
    return (
      <div className="card"  draggable="true" onDragStart={(e) => this.onDragStart(e, data)} >
        {this.props.number}
        {this.props.house}
      </div>
    );
  }
}

export default App;
