import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AnnouncementService } from './announcement.service';
import { NewAnnouncementFormComponent } from './new-announcement-form/new-announcement-form.component';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
//import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule, MatIconModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';
import { BodyStudentPageComponent } from './body-student-page/body-student-page.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { FaqComponent } from './faq/faq.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { AgmCoreModule } from '@agm/core';
import { DefaultComponentComponent } from './default-component/default-component.component';
import { TeacherHomePageComponent } from './teacher-home-page/teacher-home-page.component';
import { TeacherAnnouncementsComponent } from './teacher-announcements/teacher-announcements.component';
import { TeacherBodyPageComponent } from './teacher-body-page/teacher-body-page.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: DefaultComponentComponent

 },   
 {
   path: 'teacherHomePage',
   component: TeacherBodyPageComponent
 },
 {
   path: 'addAnnouncements',         //when annoncement added 
   component: NewAnnouncementFormComponent
 },      
{
   path: 'listAnnouncements',       //when announcements listed
   component: ListAnnouncementsComponent
 },
 {
   path: 'teacherAnnouncements',
   component: TeacherAnnouncementsComponent
 },
 {
  path: 'editAnnouncement/:_id',         //when announcements edited 
  component: NewAnnouncementFormComponent
},
{
  path: 'faq',           // when FAQ page is requested
  component: FaqComponent
},
{
  path: 'googlemaps',   // third party google API redirect
  component: GoogleMapsComponent
},
 {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];


@NgModule({
  declarations: [
    AppComponent,
    NewAnnouncementFormComponent,
    //HeaderComponent,
    NavigationMenuComponent,
    NotFoundComponent,
    ListAnnouncementsComponent,
    BodyStudentPageComponent,
    StudentHomePageComponent,
    FaqComponent,
    GoogleMapsComponent,
    DefaultComponentComponent,
    TeacherHomePageComponent,
    TeacherAnnouncementsComponent,
    TeacherBodyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7cOR91PWqChqBnJvl3dJn2UcrHuAg8i4'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
