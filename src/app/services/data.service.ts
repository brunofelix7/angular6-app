import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../classes/post';
import { User } from './../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  /**Retorna todos os users */
  public getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url, { withCredentials: true, responseType: 'json' });
  }

  /**Retorna um user */
  public getUser(id: number) {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return this.http.get<User>(url, { withCredentials: true, responseType: 'json' });
  }

  /**Retorna todos os posts */
  public getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(url, { withCredentials: true, responseType: 'json' });
  }

}
