import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Jugadores, JugadoresRelations} from '../models';

export class JugadoresRepository extends DefaultCrudRepository<
  Jugadores,
  typeof Jugadores.prototype._Id,
  JugadoresRelations
> {
  constructor(
    @inject('datasources.Conn') dataSource: ConnDataSource,
  ) {
    super(Jugadores, dataSource);
  }
}
