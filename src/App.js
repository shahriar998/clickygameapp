import React, { Component } from 'react';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import friends from "./cards.json";

class App extends Component {
  
  state = {
    friends,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    
  };
  clickPicture = id => {
   
    const manupulateArray = this.manupulateArray(friends);
    this.setState({friends: manupulateArray});
    
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "Incorrect!! You Failed!"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Correct!!",
        shakeit: "false"
      });
    }
   
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
   
  }
  manupulateArray = (picturesArray) => {
      for (let i = picturesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
      }
      return picturesArray;
  }
  render() {
    return (
      <div className="App">
        <div className="card-header bg-primary text-white">
          Click an Image to begin! You lose if you click on an image twice
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </div>
        <Wrapper
        
        pictures=
          {this.state.friends.map(picture => (
            <PictureCard
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} // to get rid of unique key prop warning
              name={picture.name}
              image={picture.image}
            />
          ))}
        />
        <footer className="footer">
      <div className="container">
        <span className="text-muted">&copy;SBE Alright Reserved</span>
      </div>
    </footer> 
      </div>
    );
  }
}

export default App;
