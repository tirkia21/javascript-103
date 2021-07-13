let product = " "
    let price = 0
    let range = 0
    let sum = 0

    while(product !== "x") {
        product = prompt('enter product')
        if (product !== "x"){
            range++;
            price = prompt("price")
            sum = Number(price) + sum
        }
    }

   console.log("Cart" + range + "x", "Total prise" + sum);