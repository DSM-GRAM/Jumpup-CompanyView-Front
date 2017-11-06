import React from 'react';
import Category from './Component/Category';
import ContentWrapper from './Component/Contents/ContentsWrapper';
import './Component/main.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Category/>
        <ContentWrapper/>
      </div>
    );
  }
}

export default App;
