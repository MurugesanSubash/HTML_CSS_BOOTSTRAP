let customer_name=["Maha", "Nivi","Prithiv","Seetha", "Devi"];

let viewlist = () =>
{
    let name="";

    customer_name.map(
       (row)=>
        {
         name+= "<table ><thead><tr><th></th></tr></thead><tbody><tr><td>"+ row + 
                "</td></tr></tbody></table>";
        } 
    );
    document.getElementById('list').innerHTML= name; 
}

let newname = () =>
{    
   let new_name=document.getElementById('customer_details').value;
   customer_name.push(new_name);
   alert("New name added "+ new_name);
   viewlist();
}

let removelastname = () =>
{  
   let pop_name=document.getElementById('customer_details');
   customer_name.pop(pop_name);
   alert('last name removed')
   viewlist();
}

let removefirstname = () =>
{
   let shift_name=document.getElementById('customer_details');
   customer_name.shift(shift_name);
   alert('First name removed')
   viewlist();
}

let arrange = () =>
{
   customer_name.sort();

   viewlist();
}

let rearrange = () =>
{
   customer_name.reverse();

   viewlist();
}

let Update = () => 
{
   let indexvalue = document.getElementById('customer_details').value;

   let newupdate = prompt("enter your new value replace in" + customer_name[indexvalue]);

   customer_name[indexvalue] = newupdate;

   viewlist();
}

	