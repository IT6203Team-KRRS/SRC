import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class AnnouncementService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getAnnouncements() {
        return this.http.get('http://localhost:8000/announcements');
    }

    // Uses http.post() to post data 
    addAnnouncements(title: string, message: string) {
        this.http.post('http://localhost:8000/announcements',{ title, message })
        .subscribe((responseData) => {
            console.log(responseData);
            location.reload();
        }); 
    }
    
    deleteAnnouncement(AnnouncementId: string) {
        this.http.delete("http://localhost:8000/announcements/" + AnnouncementId)
          .subscribe(() => {
              console.log('Deleted: ' + AnnouncementId);
          });
          location.reload();
      }

      updateAnnouncement(AnnouncementId: string,title: string, message: string) {
        //request path http://localhost:8000/announcements/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/announcements/" 
                 + AnnouncementId,{ title, message })
              .subscribe(() => {
                  console.log('Updated: ' + AnnouncementId);
              });
              //location.reload();
        }
    
    

}
