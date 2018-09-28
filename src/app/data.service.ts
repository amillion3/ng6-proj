import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // get all users
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // get a single user
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }
  // gets fictional user posts
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
