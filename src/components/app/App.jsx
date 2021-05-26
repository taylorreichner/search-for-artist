import React from 'react';
import SearchPage from '../../containers/SearchPage';
import AlbumPage from '../../containers/AlbumPage';
import SongPage from '../../containers/SongPage';
import LyricPage from '../../containers/LyricPage';
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
        <Route 
          exact path = "/artist/:artist/title/:title"
          component={LyricPage}
        />
      </Switch>
    </Router>
  );}
