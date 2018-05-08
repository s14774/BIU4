import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'person-table-paging',
  templateUrl: './person-table-paging.component.html',
  styleUrls: ['./person-table-paging.component.css']
})

export class PersonTablePagingComponent implements OnInit {

  @Output() next: EventEmitter<any> = new EventEmitter();  
  @Output() prev: EventEmitter<any> = new EventEmitter();

  clickOnNext(){
    this.next.emit(null);
  }

  clickOnPrev(){
    this.prev.emit(null);
  }

  constructor() { }

  ngOnInit() {
  }

}
