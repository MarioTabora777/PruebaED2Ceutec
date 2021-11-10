import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Equipo, EquipoRelations} from '../models';

export class EquipoRepository extends DefaultCrudRepository<
  Equipo,
  typeof Equipo.prototype._id,
  EquipoRelations
> {
  constructor(
    @inject('datasources.Conn') dataSource: ConnDataSource,
  ) {
    super(Equipo, dataSource);
  }
}
