
import { people } from './data';
import { Person } from "app/models/person";

export class PagingInfo {
    constructor(public page: number, public count: number) {
    }
}

export class PersonService {

    public getPeople(pagingInfo: PagingInfo): Array<Person> {

        let begin = pagingInfo.page - 1;
        if (begin < 0) begin = 0;

        return people
            .slice(begin * pagingInfo.count,
                begin * pagingInfo.count + pagingInfo.count)
            .map(p =>  new Person(
                p.id,
                p.firstName,
                p.lastName,
                p.gender,
                p.age,
                new Date(p.birthsday),
                +p.income,
                p.email
            ));
    }
}

var service = new PersonService();

console.log(service.getPeople(new PagingInfo(1, 5)));