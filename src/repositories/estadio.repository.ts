import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Estadio, EstadioRelations} from '../models';

export class EstadioRepository extends DefaultCrudRepository<
  Estadio,
  typeof Estadio.prototype._id,
  EstadioRelations
> {
  constructor(
    @inject('datasources.Conn') dataSource: ConnDataSource,
  ) {
    super(Estadio, dataSource);
  }
}
