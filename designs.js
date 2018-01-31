// Select color input
var colorPicker = $("#colorPicker");
// Select size input for table
var htVal = 0;
var wtVal = 0;
//select Color
var color = null;
// Select submit button
var submit = $(":submit");
//select reset button
var reset = $(":reset");
//select canvas
var pixelCanvas = $("#pixelCanvas");

function makeGrid(htVal, wtVal) {
  //use index var to create unique IDs for each row and cell (cell1 in row 0 and cell1 in row1 make up col1)
  //this ensures that when columns (<td></td>) are appended, they will be appended to unique IDs, not all rows (<tr></tr>)
  var rowIndex = 0;
  var cellIndex = 0;
  for (var i = 0; i < htVal; i++) {
    pixelCanvas.append("<tr id='row" + rowIndex + "'></tr>");
    for (var j = 0; j < wtVal; j++) {
      $("#row" + rowIndex).append("<td id='cell" + cellIndex + "'></td>");
      /*when a cell is clicked, store the current value of the colorPicker
      and use .css() to change the backgroundColor of the current cell using $(this)*/
      $("#cell" + cellIndex).click(function(event) {
        color = $("#colorPicker").val();
        $(this).css("backgroundColor", color);
      }).hover().css("cursor", "pointer");
      //to create unique ID for the cell
      cellIndex++;
    }
    //to create unique ID for the row
    rowIndex++;
  }
}

//when the colorPicker is changed, store the new color in global var
$("#colorPicker").on("change", function() {
  color = $(this).val();
});

//display Canvas after each user submission
/* works similar to reset function but should be used
when you want to altere the grid size */
submit.click(function(event) {
  // disable the submit button, must click 'Reset' to enable
  $(this).prop('disabled', 'true');
  /*if did not disable submit button, clears previous Canvas, to prevent additional cells from accumulating
  $("#pixelCanvas").html("");*/
  //capture values for color, height, and width of canvas
  color = $("#colorPicker").val();
  htVal = $("#inputHeight").val();
  wtVal = $("#inputWidth").val();
  makeGrid(htVal, wtVal);
  //prevent the default functionality of the submit button from occurring
  event.preventDefault();
});

//clear Canvas after each user submission
reset.click(function(event) {
  /* remove attr entirely. aware of prop() vs. attr() situation with disabled. however this removes the property and accomplishes what I want */
  submit.removeAttr('disabled');
  // clears previous Canvas
  $("#pixelCanvas").html("");
  // set default colorPicker back to Black
  $("#colorPicker").val("#ffffff");
  //on Reset, grid will be 1x1
  htVal = wtVal = 1;
  makeGrid(htVal, wtVal);
});
