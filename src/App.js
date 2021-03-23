import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
// import Header from './components/header/classHeader.js';
import Form from './components/form/Form.js';
import People from './components/people/People.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'React Props!!',
      people: [],
    }
  }

  changeTitle = (string) => {
    this.setState({
      title: string,
    });
  }

  updatePeople = (data) => {
    // Why use this?
    //  We don't want to mutate all of state.
    //  we need to re-render, if we just modify the value, no re-render occurs `setState` makes sure our display is updated.
    this.setState({
      people: data,
    });
  }

  render() {
    return (
      <div className="App">
        <Header changeTitle={this.changeTitle} title={this.state.title} />
        <Form updatePeople={this.updatePeople} />
        <People data={this.state.people} />
      </div>
    );
  }
}

export default App;
