day = new Date().getDate();
year = new Date().getFullYear(); 

captionString = `Food prices ≠ February ${day}, ${year}`;

apple = `🍎`;
applePrice = 10;
appleCount = 3;
appleSalePercent = 7;

orange = `🍊`;
orangePrice = 12;
orangeCount = 2;
orangeSalePercent = 3;

kiwi = `🥝`;
kiwiPrice = 15;
kiwiCount = 10;
kiwiCountryPercent = 10;

function PercentTransform (percent, key = `down`) {
    if (key == `up`) return (100+percent)/100;
    if (key == `down`) return (100-percent)/100;
}

function Operation(price, count, percent, percentkey) {
    return (price*count)*PercentTransform(percent, percentkey);
}

appleSum = Operation(applePrice, appleCount, appleSalePercent, `down`);
orangeSum = Operation(orangePrice, orangeCount, orangeSalePercent, `down`);
kiwiSum = Operation(kiwiPrice, kiwiCount, kiwiCountryPercent, `up`);
finalSum = appleSum + orangeSum + kiwiSum

console.log(`
----------
Результат вычислений: 
Общая цена за киви со скидкой - ${kiwiSum}
Общая цена за апельсины со скидкой - ${orangeSum}
Общая цена за яблоки со скидкой - ${appleSum}
Всего за весь товар - ${finalSum}
----------
`)

document.write(`

<section class="main">
<div class="container">
    <h1>${captionString.replace(`≠`, `-`).toUpperCase()}</h1>
    <table>
        <tr class="first">
            <td>Product</td>
            <td>Product Price</td>
            <td>Product count</td>
            <td>Product sale percent</td>
            <td>Product country percent</td>
            <td>Price</td>
        </tr>

        <tr>
            <td>🍎</td>
            <td>$10</td>
            <td>3</td>
            <td>${appleSalePercent}%</td>
            <td>-</td>
            <td>$${appleSum.toFixed(2)}</td>
        </tr>

        <tr>
            <td>🍊</td>
            <td>$12</td>
            <td>2</td>
            <td>${orangeSalePercent}%</td>
            <td>-</td>
            <td>$${orangeSum}</td>
        </tr>

        <tr>
            <td>🥝</td>
            <td>$15</td>
            <td>10</td>
            <td>-</td>
            <td>${kiwiCountryPercent}%</td>
            <td>$${kiwiSum}</td>
        </tr>

        <tr>
            <td colspan="6">Final sum: $${finalSum}</td>
        </tr>
    </table>
</div>
</section>

`)