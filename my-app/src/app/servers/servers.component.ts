import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  severCreationStatus = 'No sever was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver 1, Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateSever() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.severCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
