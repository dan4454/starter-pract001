import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data: any;
  error: any;
  errorcode = 0;
  response: any;

  constructor() {
    // retry.attach();
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      var result = await axios.get("https://jsonplaceholsder.typicode.com/users");
      this.data = result.data;
      this.errorcode = result.status;
    }
    catch (e: any) {
      this.error = e.message;
      this.response = e.response;
    }
  }
}
