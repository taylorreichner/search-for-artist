import React from 'react';
import SearchPage from '../../containers/SearchPage';
import AlbumPage from '../../containers/AlbumPage';
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          component={SearchPage} 
        />
        <Route 
          exact path = "/albums/:id"
          component={AlbumPage}
        />
      </Switch>
    </Router>
  );}
