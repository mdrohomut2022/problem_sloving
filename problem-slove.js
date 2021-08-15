
/*--------------------------
seerToMoon converter satrt here 
1 moon=40 seer;
-----------------------------*/

function seerToMon(seer){

    var oneMon=40;

   if(seer>0){
    var seer_mon=(seer/oneMon);

    // console.log(seer_mon);

     return seer_mon;

   }
   else{
       console.log('you should input positive number, weight cannot be zero or negative number!');
   }


}

var seer=80;
var toatlweight=  seerToMon(seer);
console.log(toatlweight);

/*-------------------------
seerToMoon converter End here 
-----------------------------*/





/*----------------------------
 totalSales counting system start here
 -----------------------------*/

 function totalSales(shirt_price,pant_price,shoe_price){

    // declare variable

    var shirtQuantity=2;
    var pantQuantity=3;
    var shoeQuantity=5;

    if(shirt_price>=100&& pant_price>=200 && shoe_price>=500){

    var total_shirtPrice=shirt_price * shirtQuantity;
    var total_pantPrice=pant_price * pantQuantity;
    var total_shoePrice=shoe_price * shoeQuantity;

    Total = total_shirtPrice + total_pantPrice +total_shoePrice;
    // console.log(Total);
    return Total;


    }
    else{

        console.log('you had enter some wrong price!please enter leagal price !');
    }



 }

  // declare variable

 var shirtPrice=100;
 var pantPrice=200;
 var shoePrice=500;
 var Total_Price= totalSales(shirtPrice,pantPrice,shoePrice);
 console.log(Total_Price);

 /*----------------------------
 totalSales counting system End here
 -----------------------------*/



/*---------------------------------
 t_shit_deliverCost counting system start here
-----------------------------------*/

function deliveryCost(t_shirtQuantity){


    // nested if,else statement

    if(t_shirtQuantity>0){


          // declare variable

    var First100_deliveryPrice=100;
    var second100_deliveryPrice=80;
    var third100_deliveryPrice=50;

    if(t_shirtQuantity<=100){
        var deliveryPrice = t_shirtQuantity * First100_deliveryPrice;

        return deliveryPrice;

    }
    else if(t_shirtQuantity<=200 ){

       var  first_100=100 * First100_deliveryPrice;

       var restQuantity=t_shirtQuantity-100;

       var  second_100=restQuantity * second100_deliveryPrice;

       var total_deliveryPrice= first_100 + second_100;

       return total_deliveryPrice;

    }
    else{
        var  first_100=100 * First100_deliveryPrice;

        var  second_100=100 * second100_deliveryPrice;

        var restQuantity=t_shirtQuantity-200;

        var  third_100=restQuantity * third100_deliveryPrice;

        var total_deliveryPrice= first_100 + second_100 + third_100 ;

        return total_deliveryPrice;

    }



    }
    else{
        console.log('you should enter valid number!,t-shirt_Quantity cannot be zero or negative number...');
    }

}

var t_shirtQuantity=250;
var delivery_total_cost = deliveryCost(t_shirtQuantity);

console.log(delivery_total_cost);


/*---------------------------------
 t_shit_deliverCost counting system end  here
-----------------------------------*/


/*-------------------
Finding perfectFriend 
---------------------*/
function perfectFriend(names){

    // console.log(names);

    for(const name of names){

        if(name.length ==5){
            return name;
           

        }
        
    }



}

var FriendNames=['motu,patlu','jhon','don','porimoni','pori','moni','monu','ullah','rohomut'];
var bestFriend =  perfectFriend(FriendNames);
console.log(bestFriend);








