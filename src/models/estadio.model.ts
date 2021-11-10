import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estadio extends Entity {
  @property({
    type: 'string',
  })
  CodeEstadio?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  localidad?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estadio>) {
    super(data);
  }
}

export interface EstadioRelations {
  // describe navigational properties here
}

export type EstadioWithRelations = Estadio & EstadioRelations;
