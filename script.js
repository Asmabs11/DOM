var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));

for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener("click", function () {
    plusButton[i].nextElementSibling.innerHTML++;
    totale();
  });
}

var minusButton = Array.from(
  document.getElementsByClassName("fa-minus-circle")
);
var quantity = Array.from(document.getElementsByClassName("quantity"));
for (let i = 0; i < minusButton.length; i++) {
  minusButton[i].addEventListener("click", function () {
    if (quantity[i].innerHTML > 0) {
      minusButton[i].previousElementSibling.innerHTML--;
      totale();
    }
  });
}

 var likeButtons = Array.from(document.getElementsByClassName("fa-heart"));
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function() {
        likeButtons[i].classList.toggle("like");
        })}





        var trashbuttons = Array.from(document.getElementsByClassName("fa-trash-alt"));
        for(let i=0;i<trashbuttons.length;i++){
     trashbuttons[i].addEventListener('click' , function(){

        quantity[i].innerHTML=0;
        totale();
     })

        }



       

        var totalPriceElement =document.getElementsByClassName("total")
        console.log(totalPriceElement[0].innerHTML)
        
            

            function totale() {
                var unit_price =Array.from(document.getElementsByClassName("unit-price"))
                var quantity =Array.from(document.getElementsByClassName("quantity"))

                let total = 0;

                for (let i=0;i<quantity.length;i++) {
                
                  total = total + (unit_price[i].innerHTML * quantity[i].innerHTML); 
                  
                }
                return totalPriceElement[0].innerHTML = total
                }
        

        
           
           
          