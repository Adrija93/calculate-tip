function myFunction()
 {
    calculateTip();
};

function calculateTip() 
{
   var biilAmount= document.getElementById("totalbilledAmount").value;
   var serviceQuality=document.getElementById("serviceQuality").value;
   var totalPeople=document.getElementById("totalPeople").value;

   if(biilAmount==="" || serviceQuality==0)
   {
        window.alert("Please fill the field to get the calculated amount per head!");
        return ;//this will prevent the function from continuing
   }

   if(totalPeople==="" || totalPeople<=1)
   {
       totalPeople=1;
       document.getElementById("each").style.display="none";

   }else{
       document.getElementById("each").style.display="block";
   }

   var total =(biilAmount * serviceQuality)/totalPeople;
   total=Math.round(total*100)/100;
   total=total.toFixed(2);
   
document.getElementById("totalTip").style.display="block";

document.getElementById("tip").innerHTML=total;


}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
