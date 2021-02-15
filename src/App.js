import React from 'react';
import Nav from './Nav/Nav';
import Collage from './Collage/Collage';
import Photos from './Photos/Photos'
import Slider from './Collage/BackPh/Slider';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const container = {
    width: '100%',
    height: '100vh',
    position: 'relative'
}

  return ( 
    <Router>
    <div style={container}>
        <Route path="/" exact component={Slider}/>
        <Route path="/photos" component={Photos}/>
        <Nav/>
        <Route path="/" exact component={Collage}/>
    </div>
    </Router>
  );
}

export default App;
