## Preguntas

1. ¿Qué sucedió al usar async y await?
Al usar async y await, las funciones que contienen operaciones asíncronas (como las funciones que retornan promesas) pueden ser llamadas de manera sincrónica, esperando a que las promesas se resuelvan antes de continuar con la ejecución del código. Esto hace que el código sea más legible y similar a una programación síncrona, evitando el uso anidado de callbacks.

2. ¿Qué sucedió al usar el método then()?
Al usar el método then(), se puede encadenar una serie de funciones que se ejecutarán en secuencia una vez que la promesa se resuelva. Esto permite un control más granular sobre el flujo de datos asíncronos y es especialmente útil cuando se trabaja con múltiples operaciones asíncronas que dependen unas de otras.

3. ¿Qué diferencias encontraste entre async, await y el método then()?
- `async` y `await` proporcionan una sintaxis más sencilla y legible para trabajar con promesas. Permiten escribir código asíncrono de manera similar al código síncrono, lo que facilita la comprensión y el mantenimiento del código.
- El método `then()` se utiliza para encadenar operaciones asíncronas de manera explícita. Es útil cuando se desea un mayor control sobre el flujo de datos asíncronos o cuando no se puede utilizar la sintaxis de async/await (por ejemplo, en versiones anteriores de JavaScript o en contextos donde no se admiten funciones async/await).
- `async` y `await` solo pueden utilizarse dentro de funciones marcadas como `async`, mientras que el método `then()` se puede utilizar en cualquier momento para manejar promesas.
- En general, `async/await` suele ser la opción preferida cuando se trabaja con promesas, ya que ofrece un código más limpio y claro en comparación con el enfoque de `then()` anidado.

