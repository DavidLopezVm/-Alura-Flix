import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '.pages/Home';
import UploadVideo from './pages/UploadVideo';
import Header from './components/Header';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={UploadVideo} />
      </Switch>
    </>
  );
}

export default App;
