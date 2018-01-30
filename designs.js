// Select color input
var colorPicker = $("#colorPicker");
// Select size input for table
var htVal = 0;
var wtVal = 0;
// Select submit button
var submit = $(":submit");
//select canvas
var pixelCanvas = $("#pixelCanvas");
/* 1. For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
2. Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color. */

function makeGrid(htVal, wtVal) {
  var index = 0;
  for (var i = 0; i < htVal; i++) {
    console.log("row: " + i);
    pixelCanvas.append("<tr id='row" + index + "'></tr>");
    for (var j = 0; j < wtVal; j++) {
      console.log("col: " + j);
      console.log("index: " + index);
      $("#row" + index).append('<td></td>');
    }
    index++;
  }
}
// When size is submitted by the user, call makeGrid()
submit.on("click", function(event) {
  htVal = $("#inputHeight").val();
  wtVal = $("#inputWidth").val();
  console.log(htVal);
  console.log(wtVal);
  makeGrid(htVal, wtVal);
  event.preventDefault();
});
