import { Injectable } from '@nestjs/common';
import { tilesData } from '../constants/tilesData';
import { shuffleArray } from '../service/shuffleArray'

@Injectable()
export class TilesService {
  getTiles() {
    const shuffledTiles = shuffleArray(tilesData);
    if (!!shuffledTiles) { 
      return shuffledTiles;
    }
    return undefined;
  }

  getSingleTile(id: string) {
    const tile = tilesData.find((tile) => tile.id === id);
    return tile;
  }
}
