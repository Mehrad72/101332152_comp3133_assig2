import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { employees } from '../graphql/queries';
@Component({
  selector: 'app-getemp',
  templateUrl: './getemp.component.html',
  styleUrls: ['./getemp.component.css']
})
export class GetempComponent {

  data: any;
  
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // Fetch the employees query using the Apollo client
    this.apollo
        .query({
          query: employees,
        })
        .subscribe((response) => {
          // Set the data received from the server to the component's data property
          this.data = response.data;
        });
  }

}
