import { Component, OnInit } from '@angular/core';

import { Version } from '../shared/version';
import { VersionService } from '../shared/version.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private versionService: VersionService
  ) { }
  
  // list of available versions
  listVersions() {
    let versions: Version[] = this.versionService.getVersions()
    return versions
  }

  // array of selected versions to compare
  selectedVersions: Version[] = []

  // select a certain version
  selectVersion(version: Version) {
    if ( this.selectedVersions.indexOf(version) > -1 ) {
      console.log('version already selected.')
    } else {
      if ( this.selectedVersions.length >= 2 ) {
        console.log('only 2 versions can be selected at a time.')
      } else {
        this.selectedVersions.push(version)
        console.log('appended: ' + version.date + ' to selectedVersions.')
      }
    }
    console.log(version)
    console.log(this.selectedVersions)
  }

  // deselect a certain version
  deselectVersion(version: Version) {
    console.log('received version to deselect: ' + version)
    console.log(version)

    let elem = this.selectedVersions.indexOf(version);
    if (elem > -1) {
      this.selectedVersions.splice(elem, 1);
    }
  }

  ngOnInit() { }

}
