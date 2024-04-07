---
layout: post
titulo: Sintaxis de Markdown
autor: javier
banner: /assets/img/posts/2024-04-07/banner.png
---
Markdown es un lenguaje de marcado de texto que permite agregar formatos simples a textos.
Este formato es muy útil porque nos permite centrarnos en el contenido de la información pero sin olvidar el estilo de manera muy sencilla. 
En este primer post de mi blog, te hablaré de markdown. ¿Sabías que esta página web está hecha con Markdown? Gracias al generador de páginas estáticas <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>, podemos transformar este tipo de archivos en páginas para nuestro sitio web.

# ¿Cómo escribir en Markdown?
Para escribir en Markdown, sólamente deberemos crear un archivo en nuestro ordenador con la extensión '.md', seguir la sintaxis y hacer uso de un intérprete que le de un estilo. Existen herramientas como <a href="https://obsidian.md/" target="_blank">Obsidian</a> que nos sirven para crear este tipo de archivos, escribir, leerlos y relacionarlos de manera muy sencilla.

# Sintaxis de Markdown
Antes de hablar de los tipos de formatos que podemos darle a nuestro texto, tenemos que hablar de los **dos caracteres de escape** que tiene este lenguaje: ``<`` y ``&``. El signo de "menor que" sirve para empezar etiquetas, y el ampersand para denotar entidades HTML.

Si se quieren utilizar como caracteres literales se deben indicar como entidades, es decir: si se quiere poner el símbolo '**&lt;**', se pondrá '**&amp;lt**;', y si se quiere usar '**&amp;**', se pondrá '**&amp;amp;**'.

La existencia de los carácteres de escape es debida a que **markdown permite incrustar texto en formato HTML**. Sin embargo, es importante tener en cuenta que no se puede incrustar markdown en un contenido HTML.

## Párrafos y saltos de línea
Un párrafo no es más que una o más líneas de texto. Para separar un párrafo de otro, indicaremos una línea en blanco.

Si se quiere indicar una etiqueta "&lt;br />", se hará acabando una línea con dos o más espacios y pulsando después el botón de retorno.
### Ejemplo de párrafos y saltos de línea
Evidentemente, los espacios en blanco no se pueden visualizar. Sin embargo, podemos copiar el siguiente texto para comprobar que funciona correctamente.
```md
Esto es el parrafo 1.

Esto es el párrafo 2.
Esto es el párrafo 2 aunque esté en una línea diferente.
                    
Parrafo 3. Si la línea está compuesta solo por espacios, se considera vacía.

Párrafo 4, con etiqueta <br />       
... Y aquí sigue el texto del párrafo 3
```
## Títulos
Markdown admite dos tipos de cabeceras, Setext y ATX.
### Setext
Las cabeceras de estilo setext son "subrayadas" usando signos de igual (`=`) para las cabeceras de primer nivel, y guiones  (`-`) para las de segundo nivel. No hay mínimo ni máximo de signos que poner en ninguno de los dos casos.
<div class="highlight">
    <pre class="highlight"><code><span class="gh">Cabecera de primer nivel (H1)
=================
</span>
<span class="gu">Cabecera de segundo nivel (H2)
------------------
</span></code></pre></div>

### ATX
Las cabeceras de estilo ATX utilizan de una a seis almohadillas al principio de la linea, correspondiendo a las cabeceras de niveles uno a seis.
```md
# Cabecera H1
## Cabecera H2
###### Cabecera H6
```
De manera opcional, podemos "cerrar" las cabeceras de estilo ATX:
```md
# Cabecera H1 #
## Cabecera H2 ##
###### Cabecera H6 ######
```

## Citas
Markdown utiliza el estilo *email* para expresar citas. Esto quiere decir que utiliza el caracter de mayor que, ```>```, al principio de las líneas.
Podemos hacerlo de dos maneras diferentes: poniendo ```>``` en cada línea, o poniendo solo uno al principio del bloque.
<div class="highlight">
    <pre class="highlight"><code><span class="gt">&gt; Esto es un bloque con dos párrafos.Lorem ipsum dolor sit amet,</span>
<span class="gt">&gt; consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.</span>
<span class="gt"> 
&gt; Podemos poner solo uno al principio. Párrafo 2.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</span>
</code></pre></div>

Además, podemos anidar las citas una dentro de la otra añadiendo más niveles con el caracter mayor que. También, las citas pueden contener otros elementos Markdown:
<div class="highlight">
    <pre class="highlight"><code><span class="gt">&gt; <span class="gu">###### Cabecera de primer nivel (H6) en una cita</span></span>
<span class="gt">> Nivel 1 de cita</span>
<span class="gt">> > Nivel 2 de cita</span>
</code></pre></div>

## Listas
Las listas pueden ser numeradas o no numeradas. Para marcar una lista, tan solo deberemos indicar uno de los símbolos reservados para las listas, seguido de un espacio.
###  Listas no numeradas
Las listas no numeradas utilizan asteriscos, signos más y guiones, indistintamente, como marcadores de lista.
```md
* Asterisco
+ Símbolo de suma
- Símbolo de guión
```
###  Listas numeradas
Las listas no numeradas se indican con un número y un punto.
```md
1. Primero
2. Segundo
3. Tercero
```
Es importante señalar que los números indicados no tendrán efecto en el HTML interpretado. Es decir, el código HTML que se interprete por un tercer servicio será el siguiente:
```html
<ol>
  <li>Primero</li>
  <li>Segundo</li>
  <li>Tercero</li>
</ol>
```
Si los objetos de la lista están separados por líneas en blanco, Markdown los envolverá en etiquetas `<p>`. Así:
```md
[//]: # (Lista sin espacio de por medio) 
- Elemento
- Elemento 2

[//]: # (Lista con espacio de por medio)
- Elemento 1

- Elemento 2
```
## Bloques de código
Los bloques de código son envueltos por etiquetas `<pre>` y `<code>`. Para crear un bloque de código, tenemos varias maneras de hacerlo:
- Identando cada línea del bloque con, al menos, cuatro espacios o una tabulación.
- Envolviendo el bloque con el acento grave <code class="language-plaintext highlighter-rouge">`</code> si es un bloque de una línea.
- Envolviendo el bloque con tres acentos graves <code class="language-plaintext highlighter-rouge">```</code> o tres virgulillas `~~~` si es de varias líneas. En este caso, el bloque de código irá debajo de los acentos, y podremos indicar el tipo de lenguaje poniendolo en la primera línea, justo después de los acentos.

Ejemplo:
~~~md
"Hola mundo" en diferentes lenguajes:

C++: 

    # include <iosteam>
    int main(){
      cout <<"Hola, mundo"<<endl;
      return 0;
    }


Java:
```java
class HolaMundo(
  static public void main(String args[]){
    System.out.println("Hola, mundo");
  }
)
```

Python: `print("Hola mundo")`
~~~ 
También podemos hacer lo mismo con la virgulilla `~` en vez de el acento grave. 

Recomiendo usar la opción de los tres símbolos debido a que permite indicar el tipo de lenguaje en el que está escrito el bloque de código.

## Líneas horizontales
Se pueden indicar etiquetas `<hr />` poniendo tres o más guiones, asteriscos o guiones bajos en una línea por si solos. Si se desea, se pueden usar espacios entre guiones o asteriscos:
```md
* * *

***

*****

- - -

---------------------------------------
```

## Elementos "span"
Son aquellos elementos que se insertan en la misma línea.
### Enlaces
Se aceptan de dos tipos: en la misma línea y por referencia. En ambos, el enlace está delimitado por corchetes `[]`.

En el estilo de la misma línea se usan paréntesis justo después de los corchetes para indicar la URL y un título opcional. Si se refiere a un recurso local del mismo servidor, se pueden usar rutas relativas:
```md
Este es [un ejemplo](https://google.com/ "Título opcional").
Este [ejemplo](https://google.com/) no tiene título.
Ruta relativa del about[blog](/blog/).
```

En el estilo de referencia, se indica otro conjunto de corchetes después del primero para definir un identificador que, en otra parte del documento, defina el enlace. Los identificadores no son sensibles a las mayúsculas.
```md
Esto es [un ejemplo][id].
Si el texto del enlace coincide con el [id][], no hace falta poner el identificador.

[id]: https://google.com/ "Título opcional"
```
### Énfasis
Markdown interpreta los asteriscos `*` y las barras bajas `_` como indicadores de énfasis. Un texto envuelto por uno de estos símbolos se interpretará como una etiqueta `<em>`, y por dos de estos símbolos como una `<strong>`. Se debe abrir el texto con énfasis con el mismo símbolo.

Para poner asteriscos o barras bajas literales, pondremos una contrabarra `\`justo antes del símbolo para que pueda ser ignorado.
```md
*Cursiva*
_Cursiva_
**Negrita**
**Negrita**
\*Texto envuelto por asteriscos literales\*
```

## Imágenes
Para indicar una imagen, seguiremos el mismo procedimiento que con los enlaces, pero poniendo un signo de esclamación `!` delante de los corchetes. Así: 
```md
Este es un ejemplo: ![texto alternativo](/ruta/a/la/imagen.jpg "Título opcional").
Este es otro ejemplo: ![texto alternativo][id].

[id]: /ruta/a/la/imagen.jpg "Título opcional"
```


### Referencias:
- <a href="https://daringfireball.net/projects/markdown/syntax" target="_blank">Markdown: Syntax</a>
- <a href="https://hipertextual.com/2013/04/que-es-markdown" target="_blank">Markdown: qué es y cómo aprovecharlo</a>
- <a href="https://en.wikipedia.org/wiki/Setext" target="_blank">Wikipedia: Setext</a>
- <a href="https://es.wikipedia.org/wiki/ATX" target="_blank">Wikipedia: ATX</a>