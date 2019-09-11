var response = require('./res');
var conn = require('./connect');
var express = require('express');

exports.index = function(req, res){
    res.json({"nama":"gema antika hariadi"});
}

exports.student = function(req, res){
    conn.query("SELECT *FROM tbl_mahasiswa", function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap(row, res);
        }
    });
};

exports.cobacoba = 



exports.addstudent = function(req, res){
    var id_student = req.body.id_student;
    var name = req.body.name;
    conn.query("INSERT INTO tbl_mahasiswa(nim, nama) values(?,?)", [id_student, name], function(error, row, fields){
        if(error){  
            console.log(error);
        }else{
            response.mantap("successed entry student", res);
        }
    });
};

exports.studentproblem = function(req, res){
    conn.query("SELECT *FROM tbl_masalah", function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap(row, res);
        }
    });
};

exports.addstudentproblem = function(req,res){
    var nim = req.body.nim;
    var dsproses = req.body.dsproses;
    var dsstored = req.body.dsstored;
    var today = new Date();

    conn.query("INSERT INTO tbl_masalah(nim, dsproses, dsstored, tanggal) VALUES(?,?,?,?)", [nim, dsproses, dsstored, today], function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap("add problem successed", res);
        }
    });
};

exports.findproblem = function(req, res){
    var id_student = req.params.id_student;
    conn.query("SELECT *FROM tbl_masalah WHERE nim=?", [id_student], function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap(row, res);
        }
    });
};

exports.findstudent = function(req, res){
    var id_student = req.params.id_student;
    conn.query("SELECT *FROM tbl_mahasiswa WHERE nim=?",[id_student], function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap(row, res);
        }
    })
}

//update data 
exports.updatestudent = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var tahunmasuk = req.body.tahunmasuk;

    conn.query("UPDATE tbl_mahasiswa set nama=? , tahunmasuk=? where nim = ? ", [nama, tahunmasuk, nim], function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap("updated success", res);
        }
    });
};

exports.deletestudent = function(req, res){
    var nim = req.body.nim;
    conn.query("delete from tbl_mahasiswa where nim = ? ", [nim], function(error, row, fields){
        if(error){
            console.log(error);
        }else{
            response.mantap("delete successed", res);
        }
    });
};