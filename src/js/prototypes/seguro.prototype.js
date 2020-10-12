export function Seguro( brand, year, type ) {
    this.brand  = brand * 1 - 1;
    this.year   = year;
    this.type   = type;
}

Seguro.prototype.cotizarSeguro = function(){
    let brands = [ 1.15, 1.05, 1.35 ], cantidad;
    const base = 2000;

    for( let i = 0; i < brands.length; i++ ) {
        if( this.brand === i ) { cantidad = base * brands[i]; break; }
    }

    // Cada año que la diferencia es mayor el costo se va a reducir un 3%
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ( ( diferencia * 3 ) * cantidad ) / 100;

    // Si el seguro es básico se multiplica por un 30% más sino por 50% más
    cantidad *= ( this.type === 'basico' ) ? 1.30 : 1.50;

    return cantidad;
}