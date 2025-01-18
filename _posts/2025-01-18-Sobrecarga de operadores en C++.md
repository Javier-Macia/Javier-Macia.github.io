---
layout: post
titulo: Sobrecarga de operadores
autor: javier
banner: 
description: Los operadores se pueden sobrecargar para conseguir reducir, optimizar y simplificar tareas que se realizan con las estructuras de datos, pues permiten redefinir el comportamiento de operadores como +, -, * o == para que funcionen con objetos de clases personalizadas. En este post, se explicará paso a paso cómo hacerlo y qué beneficios tiene, con ejemplos prácticos.
keywords:
  - Sobrecarga de operadores C++
  - Operadores personalizados C++
  - Programación orientada a objetos C++
  - Ejemplos sobrecarga operadores
  - Tutorial C++ operadores
tags:
  - Programación
---
La sobrecarga de operadores en C++ es una característica que permite redefinir el comportamiento de operadores estándar (como +, -, \*, \==) para que funcionen con objetos de clases personalizadas. Esto hace que el código sea más legible y que las operaciones con estos objetos se parezcan más a las operaciones con tipos de datos primitivos. En este post, se explicará paso a paso cómo hacerlo y qué beneficios tiene, con ejemplos prácticos.
# Operadores sobrecargados
Estos son los operadores que se pueden sobrecargar:

| **Operadores que pueden sobrecargarse**     | **Ejemplos**         |
| ------------------------------------------- | -------------------- |
| Aritmética binaria                          | +, -, *, /, %        |
| Aritmética unaria                           | +, -, ++, --         |
| Asignación                                  | =,+=, *=, /=, -=, %= |
| Bit a bit                                   | &, \|, <<, >>, ~, ^  |
| Desreferenciación                           | ->                   |
| Asignación y liberación de memoria dinámica | new, delete          |
| Subíndice                                   | []                   |
| Llamada a función                           | ()                   |
| Lógicos                                     | &, \|\|, !           |
| Relacionales                                | >, <, \==, <=, >=    |

# ¿Por qué usar sobrecarga de operadores?

### **Claridad en el código**
Permite expresar operaciones complejas de forma intuitiva. Por ejemplo, un numero complejo se compone de su parte real y su parte imaginaria.
Si quisiéramos hacer la suma, la diferencia de legibilidad sería así: 

```c++
int main(){
    Complex c1(1, 2), c2(3, 4), c3(5, 6), c4(7, 8), c5(9, 10);
    // Método normal
    Complex ejemplo1 = c1.sum(c2.sum(c3.sum(c4.sum(c5))));
    // Método con sobrecarga de operadores
    Complex ejemplo2 = c1 + c2 + c3 + c4 + c5;
}
```

### **Interfaz más natural**
Facilita el uso de tus clases como si fueran tipos nativos. En operaciones más complejas, con diferentes tipos de operadores, no usar la sobrecarga resultaría en un código muy poco legible y complicado de entender.

### **Reutilización del código**
Puedes definir comportamientos estándar para operaciones comunes.

# Restricciones de la sobrecarga de operadores
No todos los operadores pueden sobrecargarse: Algunos, como `::`, `.\*` , `.`, y `sizeof`, no permiten sobrecarga. Además de esto, no se puede cambiar la prioridad de los operadores, esta sigue siendo la misma (aquello que va entre paréntesis tiene prioridad; primero las multiplicaciones y después las sumas...).
# Recomendaciones
El comportamiento del operador debe ser claro y predecible, y además se debería devolver referencias si es posible para evitar copias innecesarias de memoria.
# Implementación
Se presenta una situación para ejemplificar la implementación en la que tenemos un tipo de dato llamado `TipoPersonalizado` que está compuesto por 2 números enteros. Al sumar dos estructuras de datos de este tipo, se suman `valor1` del `objeto1` con `valor1` del `objeto2`, y lo mismo con `valor2`.

```c++
#include <iostream>
using namespace std;

class TipoPersonalizado {
private:
	int valor1, valor2;
public:
	TipoPersonalizado (int X = 0, int Y = 0  ){
		valor1 = X;
		valor2 = Y;
	};
	// Puedes cambiar el simbolo después de 'operator' por lo que tu quieras!
	// Como ves, también puedes cambiar el parámetro que le pasas a la operación
	// Podrías hacer que dos tipos de datos diferentes pudiesen ejecutar este código. 
	TipoPersonalizado operator+(TipoPersonalizado const& obj){
		TipoPersonalizado res;
		res.valor1 = valor1 + obj.valor1;
		res.valor2 = valor2 + obj.valor2;
		return res;
	}
	
	void mostrar() {cout << valor1 << " , " << valor2 << '\n';}
};

int main(){
    TipoPersonalizado a1(1,2), a2(2,3), a3(3,4), res;
    res = a1 + a2 + a3;
    res.mostrar();
    return 0;
}
```
### Referencias:
- <a href="https://en.cppreference.com/w/cpp/language/operators" target="_blank">Operator Overloading - cppreference.com</a>
- <a href="https://www.geeksforgeeks.org/operator-overloading-cpp/" target="_blank">Operator Overloading in C++ - GeeksForGeeks</a>