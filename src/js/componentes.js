import { Seguro, UI } from './prototypes/index.js';
import '../css/tailwind.css';



// References
export const selectYear = document.querySelector( '#year' );



// Creando instancias
const ui = new UI();



export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', ui.fillOptions );
}