import React from 'react';
import ReactDOM from 'react-dom';

function getAjaxPromise(url) {
  return new Promise(resolve => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        resolve(httpRequest.responseText);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  });
}

/*
 * This is a template to get you started on Assignment #4. 
 *
 * You can put all of your code in this file to work on the assignment.
 *
 * If you forget how to install or compile this project, refer to the README.txt
 */




class Component extends React.Component {
  constructor(props) {
    super(props);
    this.userSearch = this.userSearch.bind(this);
    this.loadPokemon = this.loadPokemon.bind(this);
    this.state = {
      pokemon: ''
  
    };
  }
  loadPokemon(){
      var url = 'https://pokeapi.co/api/v2/pokemon/' + this.state.pokemon +'/'
      getAjaxPromise(url)
      .then(JSON.parse)
        .then(response =>{
          
          let name=response.name;
			let image=response.sprites.front_default;
			let type=response.types[0].type.name;
			let weight=response.weight;
            let moves=response.moves[0].move.name;
            let abilities=response.abilities[0].ability.name;
          
          this.setState({image: image});
          this.setState({name: name});
          this.setState({type: type});
          this.setState({weight: weight});
          this.setState({moves: moves});
          this.setState({abilities: abilities});
          
      });
  }
    userSearch(e){
        this.setState({pokemon: e.target.value})
    }
    
  render() {
    return (
        
      <div class="other">
        <h2> <img src="who.png"/></h2>
        <div class="content">
        <div class="inputs">
          <input class="inputBox" onChange={this.userSearch} />
          <button class="button" onClick={this.loadPokemon}>Search</button>
        </div>
          
        <div class="displayCon">
            <img class="image" src ={this.state.image}/>
        <p class ="name"> Name: {this.state.name}</p>
        <p class ="type">Type: {this.state.type}</p>
        <p class ="weight">Weight: {this.state.weight}</p>
        <p class ="movie">Move: {this.state.moves}</p>
        <p class ="ability">Ability: {this.state.abilities}</p>
        <br/>
        **NOTE** Might take a second to load. Please be patient 
        </div>
        </div>
          
      </div>
    );
  }
}



ReactDOM.render(
  <Component/>,
  document.getElementById('root')
);
