// import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class MoodService {
  private storageKey = 'moodData';
  loadMoods() { return JSON.parse(localStorage.getItem(this.storageKey)||'[]'); }
  saveMoods(data:any[]) { localStorage.setItem(this.storageKey, JSON.stringify(data)); }
}
