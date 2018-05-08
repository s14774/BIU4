import { Component, OnInit } from '@angular/core';
import { Person } from "app/models/person";
import { PersonService, PagingInfo } from "app/services/person-service";

@Component({
  selector: 'person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  items: Person[] = [];

  private nameAsc: boolean = true
  private surnameAsc: boolean = true


  public sortByName() {
    if (this.nameAsc)
      this.items.sort((x, y) => x.name.localeCompare(y.name));
    else
      this.items.sort((x, y) => -x.name.localeCompare(y.name));
    this.nameAsc = !this.nameAsc;
  }

  public sortBySurname() {
    if (this.surnameAsc)
      this.items.sort((x, y) => x.surname.localeCompare(y.surname));
    else
      this.items.sort((x, y) => -x.surname.localeCompare(y.surname));
    this.surnameAsc = !this.surnameAsc;
  }

  private currentPage = 1;
  
  public next() {
    this.items = [];
    this.currentPage++;
    this.items = this.personService.getPeople(new PagingInfo(this.currentPage, 10));
  }

  public prev(): void {
    if (this.currentPage <= 1) return;
    this.items = [];
    this.currentPage--;
    this.items = this.personService.getPeople(new PagingInfo(this.currentPage, 10));
  }

  public filter(persons): void {
    if (persons.length) {
      this.items = persons; 
    }
    else {
      this.items = this.personService.getPeople(new PagingInfo(this.currentPage, 10));
    }
  } 

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.items = this.personService.getPeople(new PagingInfo(1, 10));
  }

}
