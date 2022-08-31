# Modelo de Caja en HTML

Todo en CSS tiene una caja alrededor, y comprender el funcionamiento de las cajas es clave para poder crear diseños en CSS como alinear elementos con otros elementos.

## Cajas en **bloque** y **en línea**

En CSS hay dos tipos de cajas:

- Cajas en bloque
- Cajas en linea

Y estos tipos se refieren al nodo en la que se comporta la caja

### Cajas en **bloque**

```css
elemento {
    display: block;
}
```

Tiene los siguientes comportamientos: 

- La caja fuerza un salto de línea al llegar al final de la línea.
- La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.
- Se respetan las propiedades width y height.
- El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

### Cajas en línea

```css
elemento {
    display: inline;
}
```

Tiene los siguientes comportamientos: 

- La caja no fuerza ningún salto de línea al llegar al final de la línea.
- Las propiedades width y height no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

Unos elemplos de elementos ```inline``` son:

```html
<a href=""></a>
<span> </span>
<em> </em>
<strong> </strong>
```