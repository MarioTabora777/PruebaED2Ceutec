import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Encuentros extends Entity {
  @property({
    type: 'string',
  })
  CodeEquipo?: string;

  @property({
    type: 'string',
  })
  CodeEstadio?: string;

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

  constructor(data?: Partial<Encuentros>) {
    super(data);
  }
}

export interface EncuentrosRelations {
  // describe navigational properties here
}

export type EncuentrosWithRelations = Encuentros & EncuentrosRelations;
