const Todo = require("./todo")

Todo.methofds(["get", "post", "put", "delete"])
Todo.updateOptions({new:true,runValidators: true})


module.exports = Todo