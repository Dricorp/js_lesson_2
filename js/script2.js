

// Задача 2. Дано рік народження (дата: 1 січня)та поточний рік. Знайти кількість років.

let yearOfBirth = parseInt(prompt('Введите год рождения', 2000));
let thisYear = 2023;
let userAge = thisYear - yearOfBirth;
console.log(userAge);


document.write(`
	<table>
	<p>Задача 2. Дано рік народження (дата: 1 січня)та поточний рік. Знайти кількість років.</p>
		<tr class="table">
			<td>Год рождения</td>
			<td>${yearOfBirth}</td>
			<td>Текущий год</td>
			<td>${thisYear}</td>
			<td>Возраст</td>
			<td>${userAge}</td>
		</tr>
	</table>
`);