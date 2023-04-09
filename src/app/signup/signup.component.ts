import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { signup } from '../graphql/queries';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private apollo: Apollo) {}

  signup(username: string, email: string, password: string): void {
    this.apollo.mutate({
      mutation: signup,
      variables: {
        username: username,
        email: email,
        password: password
      }
    }).subscribe(({ data }) => {
      console.log('New user created: ', data);
    }, (error) => {console.log('Error creating user: ', error);
    });
  }
}
