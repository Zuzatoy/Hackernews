import React, { Component } from 'react';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];

const cars = [
  {
    title: 'Mazda',
    color: 'red',
    brand: 'new'
  },
  {
    title: 'Toyota',
    color: 'brown',
    brand: 'old'
  }
]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      cars: cars

    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        {this.state.cars.map(car =>
          <div key ={car.title} >
            <span>{car.title}</span>
            <span>{car.color}</span>
            {/* <span>
              <button onClick={() => this.onDismiss(car.title)}
              >
              Dismiss
              </button>
            </span> */}
          </div>
        )}

        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => this.onDismiss(item.ob)}
              >
              Dismiss
              </button>
            </span>

      </div> 
            )       }
    </div> );
        }  
}

export default App;
