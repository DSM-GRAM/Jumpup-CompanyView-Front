import React from 'react';
import Category from './Component/Category';
import CompanyWrapper from './Component/Contents/CompanyWrapper';
import './Component/main.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Category/>
        <CompanyWrapper/>
      </div>
    );
  }
}

export default App;
