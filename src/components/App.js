import React, { Component } from 'react';
import state_json from '../state.json';
import { bake_cookie, read_cookie } from 'sfcookies';

import Card from './Card';
import Holder from './Holder';

class App extends Component {
  constructor(props){
    super(props);
    if(read_cookie('state').length === 0) {
      this.state = {
        cards : this.shuffle(state_json),
        hearts: [],
        spades: [],
        clubs: [],
        diamond: []
      }
    }else{
      this.state = read_cookie('state');
    }

    this.onDropHearts = this.onDropHearts.bind(this);
    this.onDropSpades = this.onDropSpades.bind(this);
    this.onDropDiamond = this.onDropDiamond.bind(this);
    this.onDropClubs = this.onDropClubs.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    const { history } = this.props;

    if(localStorage.getItem('loggedIn') === 'false'){
      history.push('/login');
    }
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
      }, function() {
        bake_cookie('state', this.state);
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
      }, function() {
        bake_cookie('state', this.state);
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
      }, function() {
        bake_cookie('state', this.state);
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
      }, function() {
        bake_cookie('state', this.state);
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
    }, function() {
      bake_cookie('state', this.state);
    })

  }

  handleLogout() {
    const { history } = this.props;
    localStorage.setItem('loggedIn', false);
    history.push('/login');
  }



  render() {
    const cards = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          number={card.number}
          house={card.house}
          id={card.id}
          handleClick={this.handleClick}
        />
      )
    })
    const loadCards = cards.length === 0 ? <button onClick={this.restart}>Restart</button> : cards;
    return (
      <div className="App">
        <button onClick={this.handleLogout}>Logout</button>
        <br />
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
