function collection()
{
    var AA = document.getElementById('names').value;
    var BB = document.getElementById('age').value;
    var CC = document.getElementById('number').value;
    var DD = document.getElementById('email').value;

    if( AA == "")
    {
        alert("enter the name")
        return false;
    }

    if( BB == "")
    {
        alert("enter the age")
        return false;
    }

    if( CC == "")
    {
        alert("enter the number")
        return false;
    }
    
    if( DD == "")
    {
        alert("enter the email")
        return false;
    }

    return true;
}

 function showList()
{
    var totalList = "";
    if(localStorage.getItem("nameList") == null)
    {
       totalList = [];
    }
    else
    {
        totalList = JSON.parse( localStorage.getItem("nameList"));
    }
    var print = "";
// enter the index as id ;
    totalList.map (( group,position) => 
    {
        print+="<tr>";
        print+="<td>"+ group.names +"</td>";
        print+="<td>"+ group.age +"</td>";
        print+="<td>"+ group.number +"</td>";
        print+="<td>"+ group.email +"</td>";
        print+= '<td> <button onclick="deleteData()">Delete</button><button onclick="updateData()">Edit</button></td>';
        print+="<tr>";
    })

        document.getElementById('inside').innerHTML = print;

}

document.onload = showList();

function addData()
{
    if( collection() == true )
    {
        var AA = document.getElementById('names').value;
        var BB = document.getElementById('age').value;
        var CC = document.getElementById('number').value;
        var DD = document.getElementById('email').value;

        var totalList;

        if(localStorage.getItem("nameList") == null)
        { 
           totalList = [];
        }

        else
        {
         totalList = JSON.parse( localStorage.getItem("nameList"));
        }
// push the input by enter input ID 1st, then varient (id-names : varient-AA)
        totalList.push({
           names: AA, 
           age: BB,
           number: CC,
           email: DD
        });

        localStorage.setItem("nameList",JSON.stringify(totalList));

        showList();

        document.getElementById('names').value ="";
        document.getElementById('age').value ="";
        document.getElementById('number').value ="";
        document.getElementById('email').value ="";
    
    }
}
function deleteData( index)
 
{
    var totalList = "";

        if(localStorage.getItem("nameList") == null)
        { 
           totalList = [];
        }
        else
        {
         totalList = JSON.parse( localStorage.getItem("nameList"));
        }

       totalList.splice(index,1);
       
    {
        localStorage.setItem("nameList",JSON.stringify(totalList));

        showList();

        document.getElementById('names').value ="";
        document.getElementById('age').value ="";
        document.getElementById('number').value ="";
        document.getElementById('email').value ="";
    
    }

}

let updateData = (index)=>
{
 document.getElementById('add').style.display = 'none';
 document.getElementById('update').style.display = 'block';

 var totalList = "";
 if(localStorage.getItem("nameList") == null)
 { 
    totalList = [];
 }
 else
 {
  totalList = JSON.parse( localStorage.getItem("nameList"));
 }
 document.getElementById('names').value = totalList[index].names;
 document.getElementById('age').value = totalList[index].age;
 document.getElementById('number').value = totalList[index].number;
 document.getElementById('email').value = totalList[index].email;

 document.getElementById('update').onclick = function (){
    totalList[index].names = document.getElementById('names').value;
    totalList[index].age = document.getElementById('names').value;
    totalList[index].number = document.getElementById('names').value;
    totalList[index].email = document.getElementById('names').value;

    localStorage.setItem("nameList",JSON.stringify(totalList));

        showList();

        document.getElementById('names').value ="";
        document.getElementById('age').value ="";
        document.getElementById('number').value ="";
        document.getElementById('email').value ="";
 }


}
