import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }
  student:any;
  students;


  ngOnInit() {
    this.resetStudent();
    this.students=[{rollnumber:1,birthdate:14-11-1992,firstName:'radha',lastName:'parida',parentName:'ramesh',parentPhone:'123456',address:'bang'},
    {rollnumber:2,birthdate:13-12-1993,firstName:'linku',lastName:'parida',parentName:'namita',parentPhone:'123456',address:'odisha'},]
  }

  resetStudent(){
    this.student={
      rollnumber:Number,
      birthdate:Date,
     firstName:'',
     lastName:'',
     parentName:'',
     parentPhone:'',
     address:'',
  }
  }
  getStudent(){
    var studentList=[];
    if(localStorage.getItem('students') !=null){
      studentList=JSON.parse(localStorage.getItem('students'));
    }
    return studentList;
  }
    addStudent(){
      if(this.student.rollnumber!=0){
      this.student.id=Math.round(Math.random()*10000000);
    }
    this.students.push(this.student);
    localStorage.setItem('students',JSON.stringify(this.student));
      this.resetStudent();
    
  console.log( this.students)
    }
  updateStudent(){
    var updated=false;
    
    for(var i=0;i<this.students.length;i++){
      if(this.student.id==this.students[i].id){
        updated=true;
        this.students[i]=this.student;
        break;
      }
      localStorage.setItem('students',JSON.stringify('student'));

    }
    if(!updated){
     this.students.push(this.student);
  }
     this.resetStudent();
  localStorage.setItem('students',JSON.stringify('student'));

   }
  
  deleteAllStudents(){
    this.students=[];
   // localStorage.setItem('students',JSON.stringify('student'));

  }
  deleteStudent(rollnumber){
    var list=[];
    for(var i=0;i<this.students.length;i++){
      if(rollnumber!=this.students[i].rollnumber){
        list.push(this.students[i]);
        }
        
    }
    this.students=list;
  //  localStorage.setItem('students',JSON.stringify('student'));

  }
  selectStudent(student){
    this.student=student;
  }
    
  }
       
       

