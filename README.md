# Content-Engagement-Tracking
Script to track content engagement via page scrolling

### About this script

This script is intended for use with web Analytics packages, to track how far visitors scroll into pages, and whether they see specific elements (identified by the elements' IDs).

It largely tweaks existing work done by Justin Cutroni of Google, and includes much input from my ex-colleague Gustav Spross, of General Electric.

### Significant items in the script

#### Initial objects / variables

- minimumRatio: a varaible specifying the minimum page ratio (total page length / browser viewport) for which tracking should be used.
- trackedMilestones: an object containing floats of the scrolling milestones which should be tracked for each page 
  - (e.g. { "50" : false } means track when a user scrolls to 50% of the page length).
- trackedElements: an object containing the IDs of any elements which should be tracked. The script will record the time taken until the elements were visible in the viewport.
  - e.g. { "funky_element" : false } will record the time taken until the element with id "funky_element" became visible in the viewport.


