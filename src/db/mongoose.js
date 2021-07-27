const mongoose = require('mongoose');

const connectionURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/task-manager-api';

const MONGODB_URL = 'mongodb+srv://prashanth_kumar_node:sanmongodb@prashanth-node.tzaoh.mongodb.net/Prashanth-Node?retryWrites=true&w=majority';

console.log(connectionURL);
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
