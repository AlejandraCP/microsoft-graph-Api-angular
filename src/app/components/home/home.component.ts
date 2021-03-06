import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { HomeService } from '../../services/home.service';
import { AuthMicroService } from '../../services/auth-micro.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: MicrosoftGraph.Event[];
  me: MicrosoftGraph.User;
  message: MicrosoftGraph.Message;
  emailSent: Boolean;
  calendarSent: Boolean;
  subsGetUsers: Subscription;
  subsGetMe: Subscription;
  subsSendMail: Subscription;
  date: any;

  send: MicrosoftGraph.Event;
  subsSendCalendar: Subscription;
  constructor(
    private homeService: HomeService,
    private authService: AuthMicroService
  ) { }

  ngOnInit() {
    this.subsGetMe = this.homeService.getMe().subscribe(me => {
      this.me = me; 
      let cutName = me.mail.indexOf('@');
      let cutUserName = me.displayName.indexOf(' ');
      let name = me.mail.substring(0,cutName);
      let userName = me.displayName.substring(cutUserName+1);
      
      // send name and nameUser to local storage
      localStorage.setItem('name', name);
      localStorage.setItem('userName', userName);
    });
  }

  ngOnDestroy() {
    this.subsGetUsers.unsubscribe();
  }


  onSendMail() {
    this.message = {
      subject: 'Welcome to Microsoft Graph development with Angular 4 and the Microsoft Graph Connect sample',
      toRecipients: [{
              emailAddress: {
              address: this.me.mail || this.me.userPrincipalName
          }
      }],
      body: {
          content: "<html><head> <meta http-equiv=\'Content-Type\' content=\'text/html; charset=us-ascii\'> <title></title> </head><body style=\'font-family:calibri\'> <p>Congratulations " + this.me.displayName + ",</p> <p>This is a message from the Microsoft Graph Connect sample. You are well on your way to incorporating Microsoft Graph endpoints in your apps. </p> <h3>What&#8217;s next?</h3><ul><li>Check out <a href='https://developer.microsoft.com/graph/' target='_blank'>https://developer.microsoft.com/graph</a> to start building Microsoft Graph apps today with all the latest tools, templates, and guidance to get started quickly.</li><li>Use the <a href='https://developer.microsoft.com/graph/graph-explorer' target='_blank'>Graph explorer</a> to explore the rest of the APIs and start your testing.</li><li>Browse other <a href='https://github.com/microsoftgraph/' target='_blank'>samples on GitHub</a> to see more of the APIs in action.</li></ul> <h3>Give us feedback</h3> <ul><li>If you have any trouble running this sample, please <a href='https://github.com/microsoftgraph/angular4-connect-sample/issues' target='_blank'>log an issue</a>.</li><li>For general questions about the Microsoft Graph API, post to <a href='https://stackoverflow.com/questions/tagged/microsoftgraph?sort=newest' target='blank'>Stack Overflow</a>. Make sure that your questions or comments are tagged with [microsoftgraph].</li></ul><p>Thanks and happy coding!<br>Your Microsoft Graph samples development team</p> <div style=\'text-align:center; font-family:calibri\'> <table style=\'width:100%; font-family:calibri\'> <tbody> <tr> <td><a href=\'https://github.com/microsoftgraph/angular4-connect-sample\'>See on GitHub</a> </td> <td><a href=\'https://officespdev.uservoice.com/\'>Suggest on UserVoice</a> </td> <td><a href=\'https://twitter.com/share?text=I%20just%20started%20developing%20%23Angular%20apps%20using%20the%20%23MicrosoftGraph%20Connect%20sample!%20&url=https://github.com/microsoftgraph/angular4-connect-sample\'>Share on Twitter</a> </td> </tr> </tbody> </table> </div>  </body> </html>",
          contentType: "html"
      }
  }
    this.subsSendMail = this.homeService.sendMail(this.message).subscribe();
    this.emailSent = true;
  }

 

  onSendCalendar(){

    this.date = new Date();

    this.send = {
        subject: "soy mariiii",
        start: {
          dateTime: this.date,
          timeZone: "GMT-0500"
        },
        end: {
          dateTime: this.date,
          timeZone: "GMT-0500"
        }
    }
    
    this.subsSendCalendar = this.homeService.sendCalendar(this.send).subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    this.authService.login();
  }

}
