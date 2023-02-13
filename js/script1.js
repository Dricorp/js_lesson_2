

//	Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

let a = parseFloat(prompt('Введите значение а', 0));
let b = parseFloat(prompt('Введите значение b', 0));

let resultSum = a + b;
let resultMultiply = a * b;
let resultDivide = a / b;

document.write(`
	<table>
	<p>Задача 1. Знайти суму, добуток та частку двох дійсних чисел.</p>
		<tr class="table">
			<td>Начальное значение</td>
			<td>Значение а = ${a}, Значение b = ${b},</td>
			<td>Сложение</td>
			<td>${resultSum.toFixed(2)}</td>
			<td>Умножение</td>
			<td>${resultMultiply.toFixed(2)}</td>
			<td>Часть</td>
			<td>${resultDivide.toFixed(2)}</td>
		</tr>
	</table>
`);