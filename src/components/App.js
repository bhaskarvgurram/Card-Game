import React, { Component } from 'react';
import state_json from '../state.json';

import Card from './Card';
import Holder from './Holder';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards : this.shuffle(state_json),
      hearts: [],
      spades: [],
      diamond: [],
      clubs: []
    }
    this.onDropHearts = this.onDropHearts.bind(this);
    this.onDropSpades = this.onDropSpades.bind(this);
    this.onDropDiamond = this.onDropDiamond.bind(this);
    this.onDropClubs = this.onDropClubs.bind(this);

  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  onDropHearts(data){
    const split = data.split(',');
    const number = split[0];
    const house = split[1];
    const id = Number(split[2]);

    let hearts = this.state.hearts;

    if(house === 'hearts'){
      hearts = [...this.state.hearts, number];
      const cards = this.state.cards.filter(card => {
        return card.id !== id;
      });
      this.setState({
        cards,
        hearts
      });
    }
  }

  onDropSpades(data){
    const split = data.split(',');
    const number = split[0];
    const house = split[1];
    const id = Number(split[2]);
    let spades = this.state.spades;

    if(house === 'spades'){
      spades = [...this.state.spades, number];
      const cards = this.state.cards.filter(card => {
        return card.id !== id;
      });
      this.setState({
        cards,
        spades
      });
    }
  }

  onDropDiamond(data){
    const split = data.split(',');
    const number = split[0];
    const house = split[1];
    const id = Number(split[2]);
    let diamond = this.state.diamond;

    if(house === 'diamond'){
      diamond = [...this.state.diamond, number];
      const cards = this.state.cards.filter(card => {
        return card.id !== id;
      });
      this.setState({
        cards,
        diamond
      });
    }
  }

  onDropClubs(data){
    const split = data.split(',');
    const number = split[0];
    const house = split[1];
    const id = Number(split[2]);
    let clubs = this.state.clubs;

    if(house === 'clubs'){
      clubs = [...this.state.clubs, number];
      const cards = this.state.cards.filter(card => {
        return card.id !== id;
      });
      this.setState({
        cards,
        clubs
      });
    }
  }

  restart = () => {
    this.setState({
      cards : this.shuffle(state_json),
      hearts: [],
      spades: [],
      clubs: [],
      diamond: []
    })
  }



  render() {

    const cards = this.state.cards.map((card, index) => {
      return (
        <Card key={index} number={card.number} house={card.house} id={card.id} handleClick={this.handleClick} />
      )
    })
    const loadCards = cards.length === 0 ? <button onClick={this.restart}>Restart</button> : cards;
    return (
      <div className="App">
        {loadCards}
        <Holder
          hearts={this.state.hearts}
          spades={this.state.spades}
          diamond={this.state.diamond}
          clubs={this.state.clubs}
          onDropHearts={this.onDropHearts}
          onDropSpades={this.onDropSpades}
          onDropDiamond={this.onDropDiamond}
          onDropClubs={this.onDropClubs}
        />
      </div>
    );
  }
}

export default App;
