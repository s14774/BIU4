import { Component, OnInit, Input } from '@angular/core';
import { Person } from "app/models/person";

@Component({

  selector: '[person-table-row]',
  templateUrl: './person-table-row.component.html',
  styleUrls: ['./person-table-row.component.css']

})

export class PersonTableRowComponent implements OnInit {

  @Input() model:Person;

  constructor() { }

  ngOnInit() {
  }

}
