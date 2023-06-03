import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { nombre: string, estado: boolean }[] = [];
  @Input() filtro: string = '0';
  
  get filteredTasks(): { nombre: string, estado: boolean }[] {
    if (this.filtro === '1') {
      return this.tasks.filter(task => task.estado);
    } else if (this.filtro === '2') {
      return this.tasks.filter(task => !task.estado);
    } else {
      return this.tasks;
    }
  }
}
