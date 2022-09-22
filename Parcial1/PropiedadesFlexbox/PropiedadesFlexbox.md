# Propiedades de Flexbox

## ¿Qué es Flexbox? 

Flexbox es un módulo de diseño de CSS3 que se creó para mejorar la forma en la que se hace diseño responsive, evitando así el uso de float, escribiendo menos código y facilitando el posicionamiento de elementos, incluso no teniendo noción del tamaño de éstos. Básicamente la idea de Flexbox es poder alterar el ancho, alto y posicionamiento de elementos de la mejor manera con el espacio del que disponemos.

## Propiedades de Flexbox

| Elemento          | Descripción                                                                            |
|-------------------|----------------------------------------------------------------------------------------|
| ```inline-flex``` | Establece un contenedor en linea, similar a **inline-block** (ocupa todo el contendio) |
| ```flex```        | Establece un contenedor en bloque, similar a **block** (ocupa todo el ancho del padre) |

### Direccion de los ejes

| Propiedad            | Valor                                        | Significado                             |
|----------------------|----------------------------------------------|-----------------------------------------|
| ```flex-direction``` | **row**, row-reverse, column, column-reverse | Cambia la orientación del eje principal |

Mediante la propiedad flex-direction podemos modificar la dirección del eje principal del contenedor para que se oriente en horizontal (por defecto) o en vertical. Además, también podemos incluir el sufijo -reverse para indicar que coloque los ítems en orden inverso.

| Valor                | Descripcion                                                        |
|----------------------|--------------------------------------------------------------------|
| ```row```            | Establece la dirección del eje principal en horizontal             |
| ```row-reverse```    | Establece la dirección del eje principal en horizontal (invertido) |
| ```column```         | Establece la dirección del eje principal en vertical               |
| ```column-reverse``` | Establece la dirección del eje principal en vertical (invertido)   |

### Contenedor multimedia

Por otro lado, existe otra propiedad llamada flex-wrap con la que podemos especificar el comportamiento del contenedor respecto a evitar que se desborde (nowrap, valor por defecto) o permitir que lo haga, en cuyo caso, estaríamos hablando de un contenedor flexbox multilinea.

| Propiedad       | Valor                            | Significado                                    |
|-----------------|----------------------------------|------------------------------------------------|
| ```flex-wrap``` | **row-wrap**, wrap, wrap-reverse | Evita o permite el desbordamiento (multilinea) |

Los valores que puede tomar esta propiedad son las siguientes:

| Valor              | Descripcion                                                                         |
|--------------------|-------------------------------------------------------------------------------------|
| ```nowrap```       | Establece los elementos en una sola linea (no permite que se desborde el contenedor |
| ```wrap```         | Establece los elementos en modo multilinea (permite que se desborde el contenedor)  |
| ```wrap-reverse``` | Establece los elementos en modo multilinea, pero en dirección inversa               |

### Propiedades de alineación

| Propiedad             | Valor                                                                                |
|-----------------------|--------------------------------------------------------------------------------------|
| ```justify-content``` | **flex-start**, flex-end, space-between, space-around, space-evenly                  |
| ```align-content```   | flex-start, flex-end, center, space-between, space-around, space-evenly, **stretch** |
| ```align-items```     | flex-start, flex-end, center, **stretch**, baseline                                  |
| ```align-self```      | **auto**, flex-start, flex-end, center, stretch, baseline                            |
