

//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.


let widthCm = parseFloat((prompt('Введите значение в см', 0))); //ввод значения в см;
let widthMetr = widthCm / 100;
console.log(widthMetr); //результат в км;
let widthKm = widthMetr / 1000; // результат в км;
console.log(widthKm);

document.write(`
	<table>
	<p>Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.</p>
		<tr class="table">
			<td>Значение в см</td>
			<td>${widthCm}см</td>
			<td>Значение в см</td>
			<td>${widthMetr}м</td>
			<td>Значение в км</td>
			<td>${widthKm}км</td>
		</tr>
	</table>
`);