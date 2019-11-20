import { Component, OnInit, Input } from '@angular/core';
import { AnnouncementService } from '../announcement.service';  
import { Router } from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-announcement-form',
  templateUrl: './new-announcement-form.component.html',
  styleUrls: ['./new-announcement-form.component.css']
})
export class NewAnnouncementFormComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  private mode = 'add'; //default mode
  private id: string; //student ID

  constructor(private _myService: AnnouncementService, private router:Router, public route: ActivatedRoute) { }

  onSubmit(){
    console.log("You submitted: " + this.title + " " + this.message);

    if(this.mode == 'add')
    {
      this._myService.addAnnouncements(this.title ,this.message);
    }
    this.router.navigate(['/teacherAnnouncements']);

    if(this.mode == 'edit')
    {
      console.log("Updating: " + this.title + " " + this.message);    
      this._myService.updateAnnouncement(this.id,this.title ,this.message);
    }
    this.router.navigate(['/teacherAnnouncements']);

  }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');}
       else {this.mode = 'add';
           this.id = null; }
     });
  }
  
}
