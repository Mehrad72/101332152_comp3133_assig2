import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { login } from '../graphql/queries';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  // template: `
  // <div *ngIf="loading">Loading...</div>
  //   <div *ngIf="error">Error: {{ error.message }}</div>
  //   <div *ngIf="loginInfo">
  //     <p>Username: {{ loginInfo.username }}</p>
  //     <p>Email: {{ loginInfo.email }}</p>
  //   </div>
  //   `,
})
export class ModelComponent {
  loginInfo: any[] = [];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { }
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: login
      })
      .valueChanges.subscribe((result: any) => {
        this.loginInfo = result?.data?.loginInfo;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }


}
