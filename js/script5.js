

//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

let valueSecond = parseFloat((prompt('Введите значение в секундах', 0))); // начальное значение в секундах;


let minute = valueSecond / 60;
let hour = minute / 60;
console.log(hour);
console.log(minute);

document.write(`
	<table>
	<p>Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.</p>
		<tr class="table">
			<td>Начальное значение в секундах</td>
			<td>${valueSecond}</td>
			<td>Часов</td>
			<td>${hour.toFixed(3)}</td>
			<td>Минут</td>
			<td>${minute.toFixed(3)}</td>
		</tr>
	</table>
`);