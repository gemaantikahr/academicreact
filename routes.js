var listdata = require('./controller');
var express = require('express');

module.exports = function(app){
    app.route('/').get(listdata.index);
    app.route('/student').get(listdata.student);
    app.route('/student/:id_student').get(listdata.findstudent);
    app.route('/student').post(listdata.addstudent);
    app.route('/student').put(listdata.updatestudent);
    app.route('/student').delete(listdata.deletestudent);
    
    app.route('/studentproblem').get(listdata.studentproblem);
    app.route('/studentproblem/:id_student').get(listdata.findproblem);
    app.route('/studentproblem').post(listdata.addstudentproblem);
    app.route('/cobacoba').get(listdata.cobacoba);

}