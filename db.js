const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb',{useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log('mongodb connection succesful')
    }
    else
    {
        console.log('not succesful')
    }
});
require('./employee.model');
