// import { Component } from '@angular/core';
@Component({selector:'app-mood-selector',templateUrl:'./mood-selector.component.html'})
export class MoodSelectorComponent {
  moods = ['😃','😐','😔'];
  select(mood:string) {
    // use MoodService to save
  }
}
