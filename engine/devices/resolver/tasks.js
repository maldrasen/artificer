Resolver.Tasks = (function() {

  // TODO: Implement Working Tasks.
  async function workTasks(taskWork) {
    if (taskWork && taskWork.length > 0) {
      console.log("=== Work Tasks ===");
      console.log(taskWork);
    }
  }

  return { workTasks }

})();
