import { Component,Input,OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
@Input ('todos') todos: string[] = [];


constructor(public dialog:MatDialog){ }
openDialog(){
  this.dialog.open(DialogComponent)
  console.log(this.dialog)

}

public name=''


ngOnInit():void{
}
create(){
this.todos.push(this.name)
  console.log(this.todos)
  this.name=''
}


}

