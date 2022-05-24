import { makeAutoObservable } from 'mobx';
import ProjectStore from './ProjectStore';
import GameStore from './GameStore';
import PlayersStore from './PlayersStore';
import { JSONData } from '../mocks/mocksTiles';
import GameModeParser from '../components/GameModeParser';
import { BoardState } from '../components/GameBoard/GameBoard';

class RootStore {
  gameStore: GameStore;
  playersStore: PlayersStore;
  projectStore: ProjectStore;
  isDevelopmentMode = false;
  room: string;

  constructor() {
    this.gameStore = new GameStore(this, GameModeParser(JSONData))
    this.playersStore = new PlayersStore(this);
    this.projectStore = new ProjectStore(this);

    makeAutoObservable(this);
  }

  setIsDevelopmentMode() {
    this.isDevelopmentMode = !this.isDevelopmentMode;
  }

  setRoom(roomName: string) {
    this.room = roomName;
  }
}

const rootStore = new RootStore();
export let boardState: BoardState[];

export function setBoardStateVariableReference() {
  boardState = rootStore.gameStore.boardState;
}

setBoardStateVariableReference();
export type { RootStore };
export default rootStore;
