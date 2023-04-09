import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { login } from '../graphql/queries';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],

})
export class ModelComponent {
  username: string = '';
  password: string = '';
  response: any;

  constructor(private apollo: Apollo) { }
  login() {
    this.apollo.watchQuery({
      query: login,
      variables: {
        username: this.username,
        password: this.password
      }
    }).valueChanges.subscribe(result => {
      this.response = result.data;
      console.log(this.response);
    });
  }
}
