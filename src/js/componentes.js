import { Seguro, UI } from './prototypes/index.js';
import '../css/tailwind.css';



// References
export const selectYear = document.querySelector( '#year' ),
             form       = document.querySelector( '#cotizar-seguro' );

// Instancias
const ui = new UI();



// Functions
// Cotiza el seguro
const cotizarSeguro = event => {
    event.preventDefault();

    // Obteniendo valores de los campos
    const brand = document.querySelector( '#marca' ).value,
          year  = selectYear.value,
          type  = document.querySelector( 'input[name="tipo"]:checked' ).value;

    if( brand === '' || year === '' || type === '' ) {
        ui.showMessage( 'Todos los campos son obligatorios', 'error' );
        return;
    }

    ui.showMessage( 'Cotizando...', 'correcto' );

    // Realizar cotización
    const seguro = new Seguro( brand, year, type );
    const total = seguro.cotizarSeguro();

    // Mostrar la cotización en pantalla
    ui.showResult( seguro, total );

    // Eliminando la última cotización en pantalla
    const results = document.querySelector( '#resultado div' ); 
    if( results ) { results.remove(); }
}



// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', ui.fillOptions );
    form.addEventListener( 'submit', cotizarSeguro );
}