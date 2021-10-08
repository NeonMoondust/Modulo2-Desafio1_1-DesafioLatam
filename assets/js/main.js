import { operacioneSimples } from './operaciones_dos_numeros.js';
import { calculo_de_grados } from './grados.js';
import { calculo_calendario } from './calendario.js';
import { promediar_sumar } from './promediar_sumar.js';

const button2 = document.getElementById('btn-operacioneSimples');
const button3 = document.getElementById('btn-grados')
const button4 = document.getElementById('btn-calendario')
const button5 = document.getElementById('btn-promediar')

button2.onclick = () => {operacioneSimples()};
button3.onclick = () => {calculo_de_grados()};
button4.onclick = () => {calculo_calendario()};
button5.onclick = () => {promediar_sumar()};