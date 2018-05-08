
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from "app/models/person";

@Component({
    selector:"[person-filter]", 
    templateUrl:'./person-filter.component.html'

})
export class PersonFilterComponent {
    
    @Input() persons: Person[];
    name: string = '';
    surname: string = '';
    genders: string[] = ["Male","Female"];
    email: string = '';
    ageFrom: string = '';
    ageTo: string = '';
    birthdayFrom: string = '';
    birthdayTo: string = '';
    incomeFrom: string = '';
    incomeTo: string = '';

    @Output() filterPersons: EventEmitter<any> = new EventEmitter(); 

    constructor() {}

    onChangeName(event) {
        console.log("!onChangeName");
        console.log(this.persons);
        this.name=event;
        this.persons = this.persons.filter((person) => {
            return person.name.toLowerCase().indexOf(this.name.toLowerCase()) >= 0;
        });
        this.filterPersons.emit(this.persons);
    }

    onChangeSurname(event) {
        console.log("!onChangeSurname");
        console.log(this.persons);
        this.surname=event;
        this.persons = this.persons.filter((person) => {
            return person.surname.toLowerCase().indexOf(this.surname.toLowerCase()) >= 0;
        });
        this.filterPersons.emit(this.persons);
        console.log("!onChangeSurnameEnd");
    }

    onChangeGender() {
        //console.log("!onChangeGender");
        //console.log(this.genders);
        if (this.genders.length == 2 ) {
            this.persons = [];
        }
        else {
            this.persons = this.persons.filter((person) => {
                return person.gender == this.genders[0];
            }); 
        }
        
        this.filterPersons.emit(this.persons);
        //console.log("!onChangeGenderEnd");
    }

    onChangeFemale(event) {
        //console.log("!onChangeFemale");
        let index = this.genders.indexOf("Female"); 
        if (index >= 0) {
            this.genders.splice(index, 1);
        } 
        if (event) {
            this.genders.push("Female")
        }

        this.onChangeGender();
        //console.log("!onChangeFemaleEnd");
    }

    onChangeMale(event) {
        //console.log("!onChangeMale");
        let index = this.genders.indexOf("Male");
        if (index >= 0) {
            this.genders.splice(index, 1);
        }
        if (event) {
            this.genders.push("Male")
        }

        this.onChangeGender();
        //console.log("!onChangeMaleEnd");
    }

    onChangeEmail(event) {
        console.log("!onChangeEmail");
        console.log(this.persons);
        this.email=event;
        this.persons = this.persons.filter((person) => {
            return person.email.toLowerCase().indexOf(this.email.toLowerCase()) >= 0;
        });
        this.filterPersons.emit(this.persons);
    }

    onChangeAge() {
        console.log("!onChangeAge");
        //console.log(this.persons);

        if(this.ageFrom == '' || Number.isNaN(+this.ageFrom)){
            var from = 0;
        }
        else{
            var from = +this.ageFrom;
        }

        if(this.ageTo == '' || Number.isNaN(+this.ageTo)){
            var to = 1000;
        }
        else{
            var to = +this.ageTo;
        }

        console.log(from);
        console.log(to);

        this.persons = this.persons.filter((person) => {
            if((person.age >= from) && (person.age <= to)){
            //if(!Number.isNaN(+this.ageFrom) && person.age >= from || !Number.isNaN(+this.ageTo) && person.age <= to){
                return person;
            }
        });
        console.log(this.persons);
        this.filterPersons.emit(this.persons);
        console.log("!onChangeAgeEnd");
    }

    onChangeAgeFrom(event) {
        this.ageFrom=event;
        this.onChangeAge();
    }

    onChangeAgeTo(event) {
        console.log("!onChangeAgeTo");
        this.ageTo=event;
        this.onChangeAge();
    }

    onChangeBirthday() {
        console.log("!onChangeBirthday");
        console.log(new Date(this.birthdayFrom));

        var timestampFrom = Date.parse(this.birthdayFrom);
        var timestampTo = Date.parse(this.birthdayTo);

        //console.log(from);
        //console.log(to);

        this.persons = this.persons.filter((person) => {
            if(!Number.isNaN(timestampFrom) && new Date(timestampFrom) <= person.birthday || !Number.isNaN(timestampTo) && new Date(timestampTo) >= person.birthday ){
                return person;
            }
        });

        this.filterPersons.emit(this.persons);
        console.log("!onChangeBirthdayEnd");
    }

    onChangeBirthdayFrom(event) {
        this.birthdayFrom=event;
        this.onChangeBirthday();
    }

    onChangeBirthdayTo(event) {
        console.log("!onChangeBirthdayTo");
        this.birthdayTo=event;
        this.onChangeBirthday();
    }

    onChangeIncome() {
        console.log("!onChangeIncome");
        //console.log(this.persons);

        if(this.incomeFrom == '' || Number.isNaN(+this.incomeFrom)){
            var from = 0;
        }
        else{
            var from = +this.incomeFrom;
        }

        if(this.incomeTo == '' || Number.isNaN(+this.incomeTo)){
            var to = 10000000;
        }
        else{
            var to = +this.incomeTo;
        }

        console.log(from);
        console.log(to);

        this.persons = this.persons.filter((person) => {
            if((person.income >= from) && (person.income <= to)){
                return person;
            }
        });
        console.log(this.persons);
        this.filterPersons.emit(this.persons);
        console.log("!onChangeIncomeEnd");
    }

    onChangeIncomeFrom(event) {
        this.incomeFrom=event;
        this.onChangeIncome();
    }

    onChangeIncomeTo(event) {
        console.log("!onChangeIncomeTo");
        this.incomeTo=event;
        this.onChangeIncome();
    }
}
