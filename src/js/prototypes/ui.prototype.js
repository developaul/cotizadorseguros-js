import { selectYear, form } from '../componentes.js';

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

// Muestra un mensaje de acuerdo al tipo
UI.prototype.showMessage = ( message, type ) => {
    const divMessage = document.createElement( 'div' );
    divMessage.textContent = message;
    divMessage.classList.add( 'mensaje', 'mt-10' );
    divMessage.classList.add( ( type === 'error' ) ? 'error' : 'correcto' );

    form.insertBefore( divMessage, form.querySelector( '#resultado' ) );

    setTimeout( () => {
        divMessage.remove();
    }, 3000 );
}