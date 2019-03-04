import TaskModel from './models/task'
import TaskView from './view/task'
import TaskController from './controllers/task'

$(function() {
  var model = new TaskModel(),
    view = new TaskView(model),
    controller = new TaskController(model, view)
})
