import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: true,
    };
  }

  handleHeaderClick = (pageBool)=>{
    console.log(pageBool);
    this.setState({
      page: pageBool,
    } )
  }

  render() {
    const { page } = this.state;
    if (page) {
      return (
        <div className="App">
          <Header handleHeaderClick={this.handleHeaderClick} />
          <Body />
          <Footer />
        </div>
      );
    }
    return (
      <div className="App">
        <Header handleHeaderClick={this.handleHeaderClick} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
