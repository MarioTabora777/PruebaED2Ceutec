import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Encuentros, EncuentrosRelations} from '../models';

export class EncuentrosRepository extends DefaultCrudRepository<
  Encuentros,
  typeof Encuentros.prototype._id,
  EncuentrosRelations
> {
  constructor(
    @inject('datasources.Conn') dataSource: ConnDataSource,
  ) {
    super(Encuentros, dataSource);
  }
}
