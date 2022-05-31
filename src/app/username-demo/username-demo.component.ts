import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-demo',
  templateUrl: './username-demo.component.html',
  styleUrls: ['./username-demo.component.css']
})
export class UsernameDemoComponent implements OnInit {

username = "";

  constructor() { }

  ngOnInit(): void {
  }

}
