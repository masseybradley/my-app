import { Injectable } from '@angular/core';

import { Version } from './version';

import { VERSIONS } from './mock-versions';


@Injectable()
export class VersionService {
  
  // getLatestVersion() {}

  getVersions() {
    return VERSIONS
  };

  constructor() { }

}
