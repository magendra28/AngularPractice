import { Component, EventEmitter, Output, signal } from '@angular/core';
import { newTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTask>();
  // these are normal way of two way binding 
  enteredTitle='';
  enterdSummary='';
  enterdData='';

  // we can dothat using signals also
  // enteredTitle=signal('');
  // enterdSummary=signal('');
  // enterdData=signal('');

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enterdSummary,
      dueDate: this.enterdData
    })
  }
}
