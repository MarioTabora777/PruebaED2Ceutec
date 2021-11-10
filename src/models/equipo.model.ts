import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Equipo extends Entity {
  @property({
    type: 'string',
    default: '',
  })
  CodeEquipo?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  Localidad?: string;

  @property({
    type: 'string',
  })
  Posicion?: string;


  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  _id?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Equipo>) {
    super(data);
  }
}

export interface EquipoRelations {
  // describe navigational properties here
}

export type EquipoWithRelations = Equipo & EquipoRelations;
