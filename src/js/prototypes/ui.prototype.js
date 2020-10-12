import { selectYear } from '../componentes.js';

export function UI() {}

// Llena las opciones del campo de año
UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    
    for( let i = max; i >= min; i-- ) {
        const option        = document.createElement( 'option' );
        option.value        = i;
        option.textContent  = i;

        selectYear.appendChild( option );
    }
}
