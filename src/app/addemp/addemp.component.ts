import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { addEmployee } from '../graphql/queries';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  parseFloat = parseFloat;
  constructor(private apollo: Apollo) { }
  addEmployee(firstName: string, lastName: string, email: string, gender: string, salary: number) {
    this.apollo.mutate({
      mutation: addEmployee,
      variables: {
        firstName, 
        lastName,
        email,
        gender,
        salary
      }
    }).subscribe(({ data }) => {
      console.log('New employee added', data);
    }, (error) => {
      console.log('Error adding employee', error);
    });
  }
}
