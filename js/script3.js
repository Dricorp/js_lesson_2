

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

let priceItem = parseFloat(prompt('Введите стоимость единицы товара', 0)); //стоимость единицы;
let valueItem = parseFloat(prompt('Введите количество единиц товара', 0));// количество товара;
let valueTax = parseFloat(prompt('Введите ставку НДС', 5));//ставка налога на добавленную стоимость;
let totalPrice = priceItem * valueItem//итоговая стоимость;
let totalTax = totalPrice * valueTax / 100;
let totalValueWithNotTax = totalPrice - totalTax; // сумма без ндс;

document.write(`
	<table>
	<p>Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).</p>
		<tr class="table">
			<td>Cтоимость единицы товара</td>
			<td>${priceItem}</td>
			<td>Количество единиц товара</td>
			<td>${valueItem}</td>
			<td>Введите ставку НДС</td>
			<td>${valueTax}%</td>
			<td>Итого НДС</td>
			<td>${totalTax}</td>
			<td>Сумма без НДС</td>
			<td>${totalValueWithNotTax}</td>
			<td>Итого сумма</td>
			<td>${totalPrice}</td>
		</tr>
	</table>
`);