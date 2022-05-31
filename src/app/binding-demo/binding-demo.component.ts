import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {
  showSecret = false; 
  log = []; 

  onDietails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length +1);
    this.log.push(new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
