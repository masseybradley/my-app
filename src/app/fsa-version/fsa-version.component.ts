import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Entity } from '../shared/entity';
import { EntityService } from '../shared/entity.service';
import { ENTITIES } from '../shared/mock-entities';

import { Version } from '../shared/version';

@Component({
  selector: 'app-fsa-version',
  templateUrl: './fsa-version.component.html',
  styleUrls: ['./fsa-version.component.css']
})
export class FsaVersionComponent implements OnInit {
  @Input() version: Version;

  @Output() deselectVersion = new EventEmitter<Version>();
  
  selected = false;
  deselect(version: Version) {
    this.deselectVersion.emit(version);
    console.log('deselect: ' + version.date)
    this.selected = true;
  }

  constructor(
    private entityService: EntityService
  ) { }

  listEntities() {
    return this.entityService.getEntities();
  }
  
  listEntitiesOfVersion(version: Version) {
    return this.entityService.getEntitesOfVersion(version);
  }

  ngOnInit() {
    console.log('version: ' + this.version.date);

  }

}
