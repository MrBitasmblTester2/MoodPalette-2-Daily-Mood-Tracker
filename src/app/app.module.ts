// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
@NgModule({ declarations: [AppComponent, MoodSelectorComponent, HeatmapComponent], imports: [BrowserModule], bootstrap: [AppComponent] })
export class AppModule {}
