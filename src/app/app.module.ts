import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FsaVersionComponent } from './fsa-version/fsa-version.component';
// services
import { VersionService } from './shared/version.service';
import { EntityService } from './shared/entity.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FsaVersionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    VersionService,
    EntityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }