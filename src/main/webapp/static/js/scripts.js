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
    data.authorId = "";
    data.performerId = $("#taskPerformer option:selected").val();
    data.parentTaskId = $("#parentTask option:selected").val();
    data.description = $("#taskDescription").val();
    data.priority = $("#taskPriority option:selected").val();
    data.deadLine = $("#taskDeadLine").val();
    return data;
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
      
    }
  });
});
