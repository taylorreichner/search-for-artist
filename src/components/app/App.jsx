import React from 'react';
import SearchPage from '../../containers/SearchPage';
import AlbumPage from '../../containers/AlbumPage';
import SongPage from '../../containers/SongPage';
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
          exact path = "/artist/:artist/albums/:id"
          component={AlbumPage}
        />
        <Route 
          exact path = "/artist/:artist/songs/:releaseId"
          component={SongPage}
        />
      </Switch>
    </Router>
  );}
