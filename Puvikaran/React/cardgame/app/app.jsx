import React from 'react';
import ReactDOM from 'react-dom';
import PlayerForm from './components/PlayerForm';
import Table from './components/Table';
import Player from './components/Player';
import Card from './components/Card';
import Deck from './components/Deck';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

ReactDOM.render(
  <div>
    <PlayerForm />
    <Table />
    <Player />
    <Card />
    <Deck />
  </div>,
  document.getElementById('app')
);
