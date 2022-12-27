import * as mongoose from "mongoose";

mongoose.connect("mongodb+srv://moonie:Tr%40ng2301@moonie.yxbxu8l.mongodb.net/exam").catch(err =>{
    console.log(err);
});

module.exports = mongoose;