import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Jugadores extends Entity {
  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  identidad?: string;

  @property({
    type: 'string',
  })
  Edad?: string;

  @property({
    type: 'string',
  })
  EquipoCode?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _Id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jugadores>) {
    super(data);
  }
}

export interface JugadoresRelations {
  // describe navigational properties here
}

export type JugadoresWithRelations = Jugadores & JugadoresRelations;
