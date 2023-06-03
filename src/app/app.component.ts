import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { nombre: string, estado: boolean }[] = [];
  filtro: string = '0';

  onFilterChanged(filter: string) {
    this.filtro = filter;
    console.log(this.filtro)
  }

  addTask(task: string) {
    const newTask = {
      nombre: task,
      estado: false
    };
    this.tasks.push(newTask);
    console.log(this.tasks)
  }
}
