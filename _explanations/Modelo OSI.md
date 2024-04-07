---
curso: 4
cuatrimestre: 1
asignatura: ARC
---

***Open Systems Interconnection*** o **modelo de interconexión de sistemas abiertos**.
Es un estándar relacionado con el [[Modelo TCP-IP]], que tiene por objetivo conseguir interconectar sistemas de procedencia distinta para que estos pudieran intercambiar información sin ningún tipo de impedimentos debido a los protocolos con los que estos operaban de forma propia según su fabricante.
Las sietes capas del modelo son:
1. Físico
	- La unidad de datos son los bits
2. Enlace de datos (MAC)
	- Función: Proporcionar un canal libre de Errores.
	- La unidad de datos son las tramas.
3. Red
	- Define el protocolo IP en el modelo TCP/IP
	- Especifica el enrutado de los paquetes.
	- La unidad de datos son los paquetes.
4. Transporte
	- Se asegura de que los segmentos de los datos llegan correctamente al otro extremo.
	- Libre de errores y con datos ordenados (TCP).
	- Posibles errores o pérdidas sin entrega ordenada (UDP).
5.  Sesión
	- Permite a usuarios establecer sesiones para servicios como control de dialogo, administración de testigos o sincronización.
	- Algunos protocolos de nivel de aplicación gestionan las sesiones sin necesidad de esta capa
6. Presentación
	- No se utiliza de forma extensa.
	- La encriptación a veces se hace en el nivel 2 o en el 6.
7. Aplicación
	- Reside la funcionalidad de toda la comunicación.
	- Gestiona los datos a un nivel mayor y produce la interacción con el usuario.


Referencias:
[Wikipedia - Modelo OSI](https://es.wikipedia.org/wiki/Modelo_OSI)