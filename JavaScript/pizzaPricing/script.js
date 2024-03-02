
    //create you curried function here with name pizzaPricing.
    function pizzaPricing(size){
        const basePrices={
            small:8.00,
            medium:10.00,
            large:12.00
        };
        const toppingPrice=1.50;
        return function (toppings){
            const toppingArr=[...toppings];
            return function(quantity){
                const basePrice = basePrices[size.toLowerCase()]||0;
                const topping=toppingArr.length*toppingPrice;
                const total=(basePrice+topping)*quantity;
                return total.toFixed(2);       
            }
        }      
    }

    const calculatePrice = pizzaPricing("large")(["bacon", "cheese"])(2);

console.log(calculatePrice()); // Output: 15.00