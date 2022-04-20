import { FC, ReactElement } from 'react';

import DrawPile from '../components/DrawPile/DrawPile';
import PlayersInfo from '../components/PlayersInfo/PlayersInfo';
// import PlayersHand from '../components/PlayersHand/PlayersHand';
import GameBoard from '../components/GameBoard/GameBoard';
import Locations from '../constants/locations';
import mocksPlayers from '../mocks/mocksPlayers';
import Tile from '../model/Tile';
import TileState from '../constants/tileState';
import PlayersHand from '../components/PlayersHand/PlayersHand';
const LandingPage: FC = (): ReactElement => {
  const tile = new Tile(
    { bottom: Locations.FIELD, left: Locations.CITY, right: Locations.FIELD, top: Locations.CITY },
    Locations.CITY,
    false,
  );

  return (
    <div className="flex justify-center">
      <DrawPile numberOfAvailableTiles={10} />
      <PlayersHand />
      <GameBoard />
      <PlayersInfo players={mocksPlayers} currentPlayer={1} />
    </div>
  );
};

export default LandingPage;
