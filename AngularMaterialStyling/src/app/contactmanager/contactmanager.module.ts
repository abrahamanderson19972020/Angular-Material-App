import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactManagerRoutingModule } from './contactmanager-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NoteComponent,
  ],
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [UserService],
})
export class ContactmanagerModule {}
