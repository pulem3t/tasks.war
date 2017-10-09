$(document).ready(function() {

  function validateTask() {
    var result = true;
    $(".task-required").not("div.select-wrapper.task-required").each(function (index, elem) {
      if($(elem).val() == "") {
        result = false;
      }
    });
    return result;
  }

  function getTaskData() {
    var data = {};
    data.prefix = $("#taskPrefix").val();
    data.title = $("#taskTitle").val();
    //Test user
    data.authorId = "ac128533-afb6-45e9-9386-96c2bc89d4b6";
    data.performerId = $("#taskPerformer option:selected").val();
    data.description = $("#taskDescription").val();
    data.priority = parseInt($("#taskPriority option:selected").val());
    data.deadLine = parseInt($("#taskDeadLine").val());
    return {task: data};
  }

  $("select").material_select();
  $(".modal").modal();

  $("#createTaskBtn").on("click", function () {
    $("#taskListBlock").css("display","none");
    $("#createTaskBlock").css("display","block");
  });

  $("#backFromTaskBtn").on("click", function () {
    $("#createTaskBlock").css("display","none");
    $("#taskListBlock").css("display","block");
  });

  $("#submitTaskBtn").on("click", function () {
    $("#saveTaskModal").modal("open");
  });

  $("#saveTaskBtn").on("click", function () {
    if(validateTask()) {
      var data = getTaskData();
      console.log(JSON.stringify(data));
      $.ajax({
        url: 'tasks/addTask',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
      })
      .done(function(res) {
        console.log(res);
      });
    }
  });
});
