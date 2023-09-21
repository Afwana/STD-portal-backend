import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-inline-calender',
  templateUrl: './inline-calender.component.html',
  styleUrls: ['./inline-calender.component.css']
})
export class InlineCalenderComponent {
  selectedDate: Date = new Date();
}
