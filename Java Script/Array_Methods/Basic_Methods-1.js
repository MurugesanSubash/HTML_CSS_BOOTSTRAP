
let total_item = ["Chain <img src='../Fan Off.png'>", "Watch","Belt","Ring","Cooler","Cover","Temper"];

let viewlist = () =>
{
    let items = "";
    total_item.map((list)=>
    {
    
       items+= list+"<br><hr>";

    });

    document.getElementById('data1').innerHTML = "<div class = ms-5>"+ items +"</div>" ;
}

let newname = () =>
{    
   let new_name=document.getElementById('enter').value;
   total_item.push(new_name);
   alert("New name added "+ new_name);
   viewlist();
}

// let removelastname = () =>
// {  
//    let pop_name=document.getElementById('enter');
//    total_item.pop(pop_name);
//    alert('last name removed')
//    viewlist();
// }

// let removefirstname = () =>
// {
//    let shift_name=document.getElementById('enter');
//    total_item.shift(shift_name);
//    alert('First name removed')
//    viewlist();
// }

let arrange = () =>
{
   total_item.sort();

   viewlist();
}

let rearrange = () =>
{
   total_item.reverse();

   viewlist();
}

let Update = () => 
{
   let replace = document.getElementById('enter').value;

   let newupdate = prompt("enter your new value replace in" + total_item[2]);

   total_item[2] = newupdate;

   viewlist();
}

let remove = () => 
{
   let sss= document.getElementById('enter').value;
   delete total_item[sss];
   alert("Index value successfully removed")

   viewlist();
}