function ToDo (activity, location, date, description) {
  this.whatYouDo = activity;
  this.whereYouDo = location;
  this.whenYouDo = date;
  this.whatYouDo2 = description;

}

ToDo.prototype.newActivity = function() {
  return this.whatYouDo;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var inputActivity = $("input#activity").val();
    var inputLocation = $("input#location").val();
    var inputDate = $("input#date").val();
    var inputDescription = $("input#description").val();

    var info = new ToDo(inputActivity, inputLocation, inputDate, inputDescription);

    $("#checkboxes").append("<input type='checkbox' id = '"+info.whatToDo+"' name='checkboxes' value='"+info.whatYouDo+"'> "+info.whatYouDo+".<br>");

    $("input#activity").val("");
    $("input#location").val("");
    $("input#date").val("");
    $("input#description").val("");

    $("input#"+info.whatToDo).click(function() {
      $("#show-result").show();
      $(".activity").text(info.whatYouDo);
      $(".location").text(info.whereYouDo);
      $(".date").text(info.whenYouDo);
      $(".description").text(info.whatYouDo2);
    });
  });

});
