
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentArray : string[]
  

  constructor() { }

  ngOnInit() {
  }

  getData(){
    this.parentArray = ['Thummaginjala', 'Sree', 'Winny'];
  }
}