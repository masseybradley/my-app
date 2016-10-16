import { Injectable } from '@angular/core';

import { Entity } from './entity';
import { ENTITIES } from './mock-entities';

@Injectable()
export class EntityService {

  constructor() { }

  getEntitesOfVersion(version) {
    function isSameValue(value) {
      return value.version == version;
    }
    return ENTITIES.filter(isSameValue)
  }
  getEntities() {
    return ENTITIES
  }
}