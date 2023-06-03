import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();
  seleccion: string = '0';

  onFilterChange() {
    this.filterChanged.emit(this.seleccion);
  }
}
