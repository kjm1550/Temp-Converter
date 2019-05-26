const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

main();

function main() {
	celciusInput.addEventListener('input', celciusConvertRest);
	fahrenheitInput.addEventListener('input', fahrenheitConvertRest);
	kelvinInput.addEventListener('input', kelvinConverRest);
}

function roundNumber(num) {
	return Math.round(num * 100) / 100;
}

function celciusConvertRest() {
	const cTemp = parseFloat(celciusInput.value);
	const fTemp = cTemp * (9 / 5) + 32;
	const kTemp = cTemp + 273.15;

	fahrenheitInput.value = roundNumber(fTemp);
	kelvinInput.value = roundNumber(kTemp);
}

function fahrenheitConvertRest() {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5 / 9);
	const kTemp = (fTemp + 459.67) * (5 / 9);

	celciusInput.value = roundNumber(cTemp);
	kelvinInput.value = roundNumber(kTemp);
}

function kelvinConverRest() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = (9 / 5) * (kTemp - 273) + 32;

	celciusInput.value = roundNumber(cTemp);
	fahrenheitInput.value = roundNumber(fTemp);
}
