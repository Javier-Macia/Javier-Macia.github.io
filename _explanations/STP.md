---
curso: 4
cuatrimestre: 1
asignatura: ARC
---

*Spanning Tree Protocol*, o protocolo de expansión del árbol.
Es un protocolo de red de capa 2 del [[Modelo OSI]] (capa de enlace de datos).
Su función es la de gestionar la presencia de bucles en topologías de red debido a la existencia de enlaces redundantes. El protocolo permite a los dispositivos de interconexión activar o desactivar automáticamente los enlaces de conexión, de forma que se garantice la eliminación de los bucles.
El algoritmo sigue los siguientes pasos:
- Elección del puente raíz
- Elección de los puertos raíz
- Elección de los puertos designados
- Puertos bloqueados.
Los puertos en este protocolo pueden estar en los siguientes estados:
- Bloqueo
- Escucha
- Aprendizaje
- Envío 
- Desactivado

Referencias:
[Wikipedia - Spanning tree](https://es.wikipedia.org/wiki/Spanning_tree)