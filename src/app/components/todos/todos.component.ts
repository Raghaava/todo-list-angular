import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit() {
      this.todos = [
          {
              id:1,
              title:'Write ToDos APP1',
              completed:false
          },
          {
              id:2,
              title:'Write ToDos APP2',
              completed:false
          },
          {
              id:3,
              title:'Write ToDos APP3',
              completed:false
          },
      ]
  }

}
