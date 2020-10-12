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

// Muestra la cotización en pantalla
UI.prototype.showResult = ( { brand, year, type }, total ) => {
    let brands = [ 'Americano', 'Asiatico', 'Europeo' ], textMarca;
    
    // Obteniendo el texto de la marca
    for( let i = 0; i < brands.length; i++ ) {
        if( brand === i ) { textMarca = brands[i]; break; }
    }

    // Creando resumen HTML
    const div = document.createElement( 'div' );
    div.classList.add( 'mt-10' );
    div.innerHTML = `
        <p class="header">Tu Resumen:</p>
        <p class="font-bold">Marca: <span class="font-normal">${ textMarca }</span></p>
        <p class="font-bold">Año: <span class="font-normal">${ year }</span></p>
        <p class="font-bold">Tipo: <span class="font-normal">${ type }</span></p>
        <p class="font-bold">Total: <span class="font-normal"> $ ${ total }</span></p>`;

    const result    = form.querySelector( '#resultado' );
    const spinner   = document.querySelector( '#cargando' );

    // Mostrando spinner
    spinner.style.display = 'block';

    // Se oculta el spinner y se muestran los resultados
    setTimeout( () => {
        spinner.style.display = 'none';
        result.appendChild( div );
    }, 3000 );
}