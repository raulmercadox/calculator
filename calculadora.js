const btns = document.querySelectorAll('.btn');
const resultado = document.querySelector('.result');
let op1 = 0;
let op2 = 0;
let opx = '';
btns.forEach(function(element) {
    element.addEventListener('click', procesarBoton);
});

function procesarBoton(e) {
    const contenido = e.target.innerHTML;

    if (contenido === 'C')
    {
        resultado.innerHTML = '0';
    }

    // Se presionan números
    if (esNumero(contenido))
    {
        if (esNumero(resultado.innerHTML))
        {
            resultado.innerHTML += contenido;
        }
        else
        {
            resultado.innerHTML = contenido;
        }
    }

    // Se presionan operandos
    if (esOperacion(contenido))
    {
        procesarOperacion(contenido);
    }

    if (contenido === '=')
    {
        op2 = parseFloat(resultado.innerHTML);
        operar();
    }

    if (contenido === '←')
    {
        if (esNumero(resultado.innerHTML))
        {
            quitarUltimo(resultado.innerHTML);
        }
    }

    procesarResultado(resultado.innerHTML);
}

function procesarOperacion(operacion)
{
    op1 = parseFloat(resultado.innerHTML);
    opx = operacion;
    resultado.innerHTML = opx;
}

function procesarResultado(contenido)
{
    if (esNumero(contenido))
    {
        resultado.innerHTML = parseFloat(contenido).toString();
    }
}

function esNumero(valor)
{
    return !isNaN(valor);
}

function esOperacion(valor)
{
    return (valor === '+' || valor === '–' || valor === '×' || valor === '÷');
}

function operar()
{
    let result = 0;
    if (opx === '+')
    {
        result = op1 + op2;
    }
    else if (opx === '–')
    {
        result = op1 - op2;
    }
    else if (opx === '×')
    {
        result = op1 * op2;
    }
    else
    {
        result = op1 / op2;
    }
    resultado.innerHTML = result.toString();
    op1 = result;
}

function quitarUltimo(contenido)
{
    if (contenido.length === 1)
    {
        resultado.innerHTML = '0';
    }
    else
    {
        resultado.innerHTML = contenido.substr(0, contenido.length - 1);
    }
}
