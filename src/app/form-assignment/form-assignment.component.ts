import { Component } from '@angular/core';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.scss']
})
export class FormAssignmentComponent {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Arts' },
    { id: 3, name: 'Languages' }
  ];

  submit(course) {
    console.log(course);
  }
}
