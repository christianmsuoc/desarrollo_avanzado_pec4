#Teoría

## Ejercicio 1

### Pregunta A

**Realiza un esquema de los diferentes tipos de test que existen, y explica en una frase corta qué testean según la categoría. (1 punto)**

![esquema testing](./Desarrollo%20avanzado%20pec%204%20testing.svg)

- Unit test: Tests que prueba una funcionalidad como por ejemplo un método de una clase
- Integration test: Test que prueba varias funcionalidades juntas
- E2E test: Un ejemplo sería un test que desde el front prueba funcionalidades del back o API.
- UI test: Test que prueba elementos de la interfaz gráfica de forma procedimental.
- Contract test: Tests que prueban una interfaz.
- Exploratory testing: Tests realizados de forma manual
- Aceptance testing: Tests de conformidad. Se encargan de asegurar que una funcionalidad de cumple. (Si utilizamos una calculadora y sumamos 2 y 2 recibimos 4)

### Pregunta B

**Explica qué es un “test double” y por qué son importantes a la hora de desarrollar test. (0.5 puntos)**

Los test doubles son unidades de código necesarias para realizar los test pero externas al propio test. Como por ejemplo cuando
queremos probar un controlador que en su código hace una llamada a otro servicio debemos proporcionar un test double del servicio.
Se puede hacer mediante Stubbing/o Mocking. Inyectando el servicio o creando un mock que simula el funcionamiento del servicio.

### Pregunta C

**Según nuestro proyecto qué deberían testear (diagramas de nodos, igual que en el artículo) nuestros test según las categorías: (1 punto)**
La respuesta a esta pregunta se encuentra implícita en la respuesta que se ha dado para la pregunta A.
