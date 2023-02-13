


//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.


let priceProductFirst = parseFloat(prompt('Введите стоимость первого товара', 0));
let valueProductFirst = parseFloat(prompt('Введите количество первого товара', 0));
let priceProductSecond = parseFloat(prompt('Введите стоимость второго товара', 0));

let valueProductSecond = parseFloat(prompt('Введите количество второго товара', 0));
let priceProductThird = parseFloat(prompt('Введите стоимость третьего товара', 0));
let valueProductThird = parseFloat(prompt('Введите количество Третьего товара', 0));

let totalSumProductFirst = priceProductFirst * valueProductFirst;
let totalSumProductSecond = priceProductSecond * valueProductSecond;
let totalSumProductThird = priceProductThird * valueProductThird;
let totalSum = totalSumProductFirst + totalSumProductSecond + totalSumProductThird;

document.write(`
<p>Задача 0. Обчислити значення виразів</p>
<p>Накладная 747</p>
	<table class="product-table">
		<tr class="table__check">
		<td>Наименование</td>
			<td>Стоимость первого товара</td>
			<td>Количество товара</td>
			<td>Сумма</td>
			<td>Первый товар</td>
			<td>${priceProductFirst.toFixed(2)}</td>	
			<td>${valueProductFirst.toFixed(2)}</td>		
			<td> ${totalSumProductFirst.toFixed(2)}</td>
			
			<td>Второй товар</td>					
			<td>${priceProductSecond.toFixed(2)}</td>
			<td>${valueProductSecond.toFixed(2)}</td>
			<td>${totalSumProductSecond.toFixed(2)}</td>

			<td>Третий товар</td>						
			<td>${priceProductThird.toFixed(2)}</td>
			<td>${valueProductThird.toFixed(2)}</td>
			<td>${totalSumProductThird.toFixed(2)}</td>
			<td>Итого</td>
			<td class="total">${totalSum.toFixed(2)}</td>
			<td class="title">Благодарим за покупку, приходите еще!</td>
		</tr>
	</table_>
`);