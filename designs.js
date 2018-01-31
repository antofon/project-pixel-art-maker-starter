// Select color input
var colorPicker = $("#colorPicker");
// Select size input for table
var htVal = 0;
var wtVal = 0;
//select Color
var color = null;
// Select submit button
var submit = $(":submit");
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

submit.click(function(event) {
  //clear Canvas after each user submission
  $("#pixelCanvas").html("");
  //capture values for height and width of canvas
  color = $("#colorPicker").val();
  htVal = $("#inputHeight").val();
  wtVal = $("#inputWidth").val();
  makeGrid(htVal, wtVal);
  //prevent the default functionality of the submit button from occurring
  event.preventDefault();
});
