document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello");

    const range = document.getElementById("range");
    const pageviews = document.getElementById("pageviews");
    const price = document.getElementById("price");
    const discount = document.getElementById("discount");

    var isDiscount = discount.checked;
    var discountValue = 0.75;
    var priceValue = 16;

    console.log(range);
    console.log(pageviews);
    console.log(price);
    console.log(discount);

    discount.oninput = function() {
        isDiscount = discount.checked;
        printValues(fixDiscount(priceValue));
    }

    range.oninput = function() {
        //styles
        var value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)'

        //code
        switch (this.value) {
            case "1":
                printValues(fixDiscount(8), "10k");
                priceValue = 8;
                break;
            case "2":
                printValues(fixDiscount(12), "50k");
                priceValue = 12;
                break;
            case "3":
                printValues(fixDiscount(16), "100k");
                priceValue = 16;
                break;
            case "4":
                printValues(fixDiscount(24), "500k");
                priceValue = 24;
                break;
            case "5":
                printValues(fixDiscount(36), "1M");
                priceValue = 36;
                break;

            default:
                break;
        }
    };

    function printValues(money, pages = pageviews.innerHTML) {
        price.innerHTML = "$" + money + ".00";
        pageviews.innerHTML = pages;
    }

    function fixDiscount(prc) {
        if (!isDiscount) {
            return prc;
        } else {
            prc = prc * discountValue;
            return prc;
        }
    }
})