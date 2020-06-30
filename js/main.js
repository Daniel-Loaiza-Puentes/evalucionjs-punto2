let sinimpuestos = parseInt(prompt("Ingrese el valor sin impuestos"));
let tipodeproducto = parseInt(prompt("Ingrese el tipo de producto"));

function obtenervalorconimpuestos(sinimpuestos, tipodeproducto) {

    switch (tipodeproducto)
    {
        //El valor sin impuestos más el 21% si el tipo de producto es 1
        case 1:
            let total = sinimpuestos + (sinimpuestos * 21/100)
            document.write("Para un valor sin impuestos de " + sinimpuestos + " y el tipo de producto " + tipodeproducto + " El resultado de importe con impuestos es " + total);
            break;
        //El valor sin impuestos más el 10% si el tipo de producto es 2
            case 2:
            let total2 = sinimpuestos + (sinimpuestos * 10/100)
                document.write("Para un valor sin impuestos de " + sinimpuestos + " y el tipo de producto " + tipodeproducto + " El resultado de importe con impuestos es " + total2);
            break;
        case 3:
            let total3 = sinimpuestos + (sinimpuestos * 5/100)
            document.write("Para un valor sin impuestos de " + sinimpuestos + " y el tipo de producto " + tipodeproducto + " El resultado de importe con impuestos es " + total3);
            break;
        default:
            document.write("Tipo de producto no especificado")
            break;
    }
}

obtenervalorconimpuestos(sinimpuestos, tipodeproducto)