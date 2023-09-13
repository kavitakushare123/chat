import { Component } from '@angular/core';
import { APIsService } from '../api.services';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  inbox:any

  constructor(private apisevice:APIsService) {

    this.apisevice.getInbox().subscribe(res =>{
        console.log("res",res.inboxDetails)
        res.inboxDetails.forEach( element => {
          element.content.message.body = JSON.parse(element.content.message.body)
          console.log(element.content.message.body)
        });
        this.inbox =res.inboxDetails
    })
  }

}
