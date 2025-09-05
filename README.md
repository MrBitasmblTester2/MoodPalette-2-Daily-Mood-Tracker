# MoodPalette-2-Daily-Mood-Tracker

Description:
A simple and visually appealing web app that allows users to log their daily moods and view them as a colorful calendar heatmap.

## Tech Stack
- Angular

## Requirements
- Mood selection interface (Hint: Use emoji or color buttons for mood selection)
- Calendar heatmap display (Hint: Map moods to colors and show them on a monthly grid)
- Local storage persistence (Hint: Save moods locally so data stays after refresh)

## Installation
1. Ensure you have Node.js (>=12.x) and npm installed.
2. Install Angular CLI globally:
   bash
   npm install -g @angular/cli
   
3. Clone this repository:
   bash
   git clone https://github.com/your-username/MoodPalette-2-Daily-Mood-Tracker.git
   cd MoodPalette-2-Daily-Mood-Tracker
   
4. Install project dependencies:
   bash
   npm install
   
5. Start the development server:
   bash
   ng serve
   
6. Open your browser and navigate to `http://localhost:4200`.

## Usage
1. Launch the app in your browser.
2. On the main screen, select your mood using the emoji or color buttons.
3. Your selection is saved instantly in local storage.
4. Switch to the calendar view to see your mood history displayed as a colorful heatmap.
5. Refresh the page or return later—your data persists automatically.

## Implementation Steps
1. Initialize a new Angular project:
   bash
   ng new mood-palette
   
2. Generate core components:
   bash
   ng generate component components/mood-selector
   ng generate component components/heatmap-calendar
   
3. Create a `MoodService` to handle saving and retrieving moods from local storage.
4. Implement `MoodSelectorComponent` with emoji or color button inputs for mood selection.
5. Define a color mapping for each mood in `HeatmapCalendarComponent`.
6. Build a monthly grid layout to represent each day of the month.
7. Connect components to `MoodService` to load existing entries on init and save new entries on selection.
8. Style components in `styles.scss` to ensure a clean, responsive design.
9. Test functionality by selecting moods and verifying that the calendar heatmap updates and data persists across page reloads.