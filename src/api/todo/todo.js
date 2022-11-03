const restful = require ("node-restful")
const mongoose= require.mongoose

const todoSchema = new mongoose.Schema({
    descripition: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    created: { type: Date, default: Date.now}
})

module.exports = restful.model("Todo", todoSchema)