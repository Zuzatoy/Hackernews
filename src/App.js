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


function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      cars,
      searchTerm: ''

    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });

  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
      <Search
        value={searchTerm}
        onChange={this.onSearchChange}
        />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
          />
      <form>
        <input type='text'
        value={searchTerm} 
        onChange={this.onSearchChange}
        />
      </form>
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


    </div> );
        }  
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children} <input
          type='text'
          value={value}
          onChange={onChange}
        />
      </form>
    )
  }
}

export default App;


class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => this.onDismiss(item.objectID)}>
              Dismiss
              </Button>
            </span>

      </div> 
            )       }
      </div>
    )
  }
}

class Button extends Component {
  render() {
    const {
      onClick,
      className = '',
      children,
    } = this.props;
    return (
      <button
        onClick = {onClick}
        className = {className}
        type="button"
        >
        {children}
        </button>
    )
  }
}