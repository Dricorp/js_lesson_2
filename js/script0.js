
let a = parseFloat(prompt('Введите значение а', 0));
let b = parseFloat(prompt('Введите значение b', 0));
let c = parseFloat(prompt('Введите значение c', 0));


let resultS1 = a + 12 + b;
console.log(resultS1);

// Обчислити значення виразів
//	S_2=√(((a+b)/2a) )

let resultC = a + b; // результат a+b;
let resultD = 2 * a; // результат 2a;
let resultF = resultC / resultD; // результат (a+b)/2a) 
let resultS2 = Math.sqrt(resultF);


// 	Обчислити значення виразів;
// 	S_3=∛((a+b)c);

let resultA = a + b; // результат a+b;
let resultB = resultA * c; // результат (a+b)c;
let resultS3 = Math.cbrt(resultA);
console.log();


// 	Обчислити значення виразів;
//  		S_4=sin⁡(a/(-b));

let resultW = a / -b;
let resultS4 = Math.sin(resultW);


document.write(`
<p>Задача 0. Обчислити значення виразів</p>
	<table>
		<tr class="table">
			<td>Начальное значение</td>
			<td>Значение а = ${a}, Значение b = ${b}, Значение c = ${c}</td>
			<td>S1</td>
			<td>${resultS1}</td>
			<td>S2</td>
			<td>${resultS2.toFixed(2)}</td>
			<td>S3</td>
			<td>${resultS3.toFixed(2)}</td>
			<td>S4</td>
			<td>${resultS4.toFixed(2)}</td>
		</tr>
	</table>
`);