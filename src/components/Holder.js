import React, { Component } from 'react';

class Holder extends Component {


  allowDrop = e => {
    e.preventDefault();
  }

  onDropHearts = e => {
    const data = e.dataTransfer.getData("text/plain");
    this.props.onDropHearts(data);
  }

  onDropSpades = e => {
    const data = e.dataTransfer.getData("text/plain");
    this.props.onDropSpades(data);
  }

  onDropDiamond = e => {
    const data = e.dataTransfer.getData("text/plain");
    this.props.onDropDiamond(data);
  }

  onDropClubs = e => {
    const data = e.dataTransfer.getData("text/plain");
    this.props.onDropClubs(data);
  }

  render() {
    const hearts = this.props.hearts.map((heart, index) => {
      return (
        <div key={index}>
          {heart}
        </div>
      )
    });
    const spades = this.props.spades.map((spade, index) => {
      return (
        <div key={index}>
          {spade}
        </div>
      )
    })
    const diamonds = this.props.diamond.map((diamond, index) => {
      return (
        <div key={index}>
          {diamond}
        </div>
      )
    })
    const clubs = this.props.clubs.map((club, index) => {
      return (
        <div key={index}>
            {club}
        </div>
      )
    })
    return (
      <div className="holder">
        <div className="hearts" onDragOver={this.allowDrop} onDrop={this.onDropHearts}>
          <h4>Hearts</h4>
            {hearts}
        </div>
        <div className="spades" onDragOver={this.allowDrop} onDrop={this.onDropSpades}>
          <h4>Spades</h4>
            {spades}
        </div>
        <div className="diamond" onDragOver={this.allowDrop} onDrop={this.onDropDiamond}>
          <h4>Diamond</h4>
            {diamonds}
        </div>
        <div className="clubs" onDragOver={this.allowDrop} onDrop={this.onDropClubs}>
          <h4>Clubs</h4>
            {clubs}
        </div>

      </div>

    );
  }
}

export default Holder;
