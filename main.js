var Name=document.getElementById("studentname");
var ID=document.getElementById("studentid");
var GPA=document.getElementById("studentgpa");
var inputs=document.getElementsByClassName("form-control");

var Students=[];
//the main function for add and show the student table 
var add=document.getElementById('add');


add.onclick=function(){
 //ADD Function
 //Show Function
 //Rest Function to not make the user need to clear the pre student info everytime
 INSERT();
 Display();
 Reset();

    }
 





function INSERT(){
    var Student={
        Name:Name.value,
        ID:ID.value,
        GPA:GPA.value
    }
    Students.push(Student);
    
 }


  //Show Function

  function Display(){
      var temp='';
      for(var i=0;i<Students.length;i++){
          temp+="<tr><td>"+Students[i].Name+"</td> <td>"+Students[i].ID+"</td> <td>"+Students[i].GPA+"</td> <td><button class='btn btn-danger' onclick='Delete("+i+");'>"+"Delete"+"</button></td><td><button class='btn btn-warning' onclick='Update("+i+");'>" + "Edit" +"</button></td></tr>"

      }
      document.getElementById('tableBody').innerHTML=temp;
  }



//Delete Function(){}
function Delete(index){
    Students.splice(index,1)
    Display();

}





//Update Function
function Update(index){
    var change="";
    change="<tr><td>"+Students[index].Name.val()+"</td><td>"+Students[index].ID.val()+"</td><td>"+Students[index].GPA.val()+"</td></tr>"
    Display();

}
//Rest Function 
function Reset()
{
    for(var i=0; i<inputs.length ; i++)
    {
        inputs[i].value="";
       

    }
}