export interface PokemonSchema {
  name: string;
  url: string;
}

export interface AbilitiesSchema {
  ability: {
    name: string;
  }
}

export interface MoveSchema {
  move: {
    name: string;
  }
}

export interface TypeSchema {
  type: {
    name: string;
  }
}
