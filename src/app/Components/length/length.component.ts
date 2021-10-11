import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {

  isExpandable: boolean = false;
  isExpandable1: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
