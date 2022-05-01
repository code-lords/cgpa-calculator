// add row
$("#addRow").click(function () {
  var html = "";
  html += '<div id="inputFormRow">';
  html += '<div class="input-group mb-3">';
  html +=
    '<input type="text" name="grade[]" class="form-control m-input" placeholder="Grade" autocomplete="off">';
  html += '<div class="input-group-append">';
  html +=
    '<input type="text" name="gradePoint[]" class="form-control m-input" placeholder="Grade Point" autocomplete="off">';
  html += '<div class="input-group-append">';
  html +=
    '<button id="removeRow" type="button" class="btn btn-danger">Remove</button>';
  html += "</div>";
  html += "</div>";

  $("#newRow").append(html);
});

// remove row
$(document).on("click", "#removeRow", function () {
  $(this).closest("#inputFormRow").remove();
});

jQuery(document).delegate("a.delete-record", "click", function (e) {
  e.preventDefault();
  var didConfirm = confirm("Are you sure You want to delete");
  if (didConfirm == true) {
    var id = jQuery(this).attr("data-id");
    var targetDiv = jQuery(this).attr("targetDiv");
    jQuery("#rec-" + id).remove();

    //regnerate index number on table
    $("#tbl_posts_body tr").each(function (index) {
      //alert(index);
      $(this)
        .find("span.sn")
        .html(index + 1);
    });
    return true;
  } else {
    return false;
  }
});

jQuery(document).delegate("a.add-record", "click", function (e) {
  e.preventDefault();
  var content = jQuery("#sample_table tr"),
    size = jQuery("#tbl_posts >tbody >tr").length + 1,
    element = null,
    element = content.clone();
  element.attr("id", "rec-" + size);
  element.find(".delete-record").attr("data-id", size);
  element.appendTo("#tbl_posts_body");
  element.find(".sn").html(size);
});
