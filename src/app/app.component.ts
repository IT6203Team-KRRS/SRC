import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'individual-project'

  latitude = 33.937350;
  longitude = -84.519456;

  //declare variable to hold response and make it public to be accessible from components.html
  public announcements;
  //initialize the call using StudentService 
  constructor(private _myService: AnnouncementService) { }
  ngOnInit() {
    this.getAnnouncements();
  }
  //method called OnInit
  getAnnouncements() {
  this._myService.getAnnouncements().subscribe(
     //read data and assign to public variable students
      data => { this.announcements = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(AnnouncementId: string) {
    this._myService.deleteAnnouncement(AnnouncementId);
  }

}
