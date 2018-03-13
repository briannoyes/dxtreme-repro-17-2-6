To Reproduce:
- npm install to get packages
- ng serve to run from command line
- click into a cell in the table and change the value
- look at the debugger console window - property foo get and set are being called on the data bound User object even though they are not bound in the grid and no other code in the app knows anything about that property. Speculation: DxDataGrid code must be iterating over object properties with Object.keys and calling all of them whether bound to a column in the data grid or not
