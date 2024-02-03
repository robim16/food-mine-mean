import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent  implements OnInit{

  constructor() {}

  @Input()
  title!: string
  margin? = '1rem 0 1rem 0.2rem'


  @Input()

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
