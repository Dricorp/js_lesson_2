


//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

let randomMonth = Math.floor(Math.random() * 13) + 1;;

let randomDay = Math.floor(Math.random() * 7) + 1;;

let sumValueRandom = randomMonth + randomDay;

document.write(`
	<table>
	<p>Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).</p>
		<tr class="table">
			<td>Случайное число месяца от 1 до 12</td>
			<td>${randomMonth}</td>
			<td>Случайный день месяца от 1 до 6</td>
			<td>${randomDay}</td>
			<td>Сумма случайных чисел</td>
			<td>${sumValueRandom}</td>
		</tr>
	</table>
`);