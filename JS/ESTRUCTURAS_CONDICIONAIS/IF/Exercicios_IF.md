# 🚦 Exercicios: let, const e a Estrutura Condicional 'if'

**Obxectivo:** Practicar a declaración de variables e a toma de decisións usando a sentenza `if`.

---

## **Instrucións Xerais**

1.  Usa **`const`** para valores que non van cambiar.
2.  Usa **`let`** para valores que se modificarán dentro do teu código.
3.  Utiliza `console.log()` para verificar os resultados.

---

### **Exercicios de Lóxica Condicional Básica**

| \# | Título do Exercicio | Instrucións en Galego | Concepto a Practicar |
| :---: | :--- | :--- | :--- |
| **1** | **O Límite de Idade** | Declara unha constante `const idadeMinima = 18`. Declara unha variable `let miñaIdade = 15`. Escribe unha sentenza **`if`** que imprima `"Podes pasar."` só se `miñaIdade` é maior ou igual a `idadeMinima`. | `if` simple, Comparación con `const`. |
| **2** | **Estado da Luz** | Declara unha variable booleana `let luzAcendida = true`. Escribe un **`if`** que verifique se `luzAcendida` é `true`. Se o é, imprime `"A estancia está iluminada."`. | `if` con Booleano (`true`/`false`). |
| **3** | **Actualización de Puntuación** | Declara `let puntuacion = 80`. Escribe un **`if`** que revise se `puntuacion` é maior a $75$. Se o é, **reasigna** `puntuacion` ao novo valor de $100$ e imprime a nova puntuación. | `if` e Reasignación de **`let`**. |
| **4** | **Contrasinal Secreto** | Declara unha constante `const CLAVE_SECRETA = "1234"`. Declara outra constante `const intentoPersoa = "1234"`. Usa unha sentenza **`if`** para verificar se as dúas constantes son **exactamente iguais**. Se o son, imprime `"Acceso Concedido."`. | `if` con Cadenas de Texto (Strings). |
| **5** | **Compra Mínima** | Declara `let montoCompra = 45`. Declara `const ENVIO_DEBALDE = 50`. Usa un **`if`** para verificar se `montoCompra` é menor que `ENVIO_DEBALDE`. Se o é, imprime: `"Faltan " + (ENVIO_DEBALDE - montoCompra) + " para envío de balde."`. | `if`, Cálculos dentro da Condición. |

---

### **Exercicios con Múltiples Condicións**

| \# | Título do Exercicio | Instrucións en Galego | Concepto a Practicar |
| :---: | :--- | :--- | :--- |
| **6** | **Día de Lecer** | Declara unha constante `const hoxe = "luns"`. Escribe un **`if`** que comprobe se `hoxe` é **igual** a `"sábado"` **OR** **igual** a `"domingo"`. Se é calquera dos dous, imprime `"Fin de semana!"`. (Usa o operador lóxico  ). | `if` con **`\|\|`** (OR lóxico). |
| **7** | **Dobre Verificación** | Declara `let saldo = 200` e `let prezoProduto = 150`. Escribe un **`if`** que verifique dúas cousas: se `saldo` é maior que $100$ **E** se `saldo` é maior que `prezoProduto`. Se ambas son certas, imprime `"Podes mercar."`. (Usa o operador lóxico `&&`). | `if` con **`&&`** (E lóxico). |
| **8** | **Negación de Dispoñibilidade** | Declara `let produtoDispoñible = false`. Escribe un **`if`** que verifique se **NON** está dispoñible. Se non o está, imprime `"Produto Esgotado."`. (Usa o operador de negación `!` - NOT). | `if` e Operador **`!`** (Negación). |
| **9** | **Asignar Desconto** | Declara `let éClientePremium = true`. Declara `let prezoBase = 100`. Dentro dun **`if`** que comprobe se `éClientePremium` é verdadeiro, **reasigna** `prezoBase` a $80$ (aplicando un desconto). Despois do `if`, imprime o valor final de `prezoBase`. | **`let`** e Reasignación Condicional. |
| **10** | **¿É Positivo?** | Declara unha variable `let numero = -5`. Escribe un **`if`** que verifique se `numero` é maior a $0$. Se o é, imprime `"O número é positivo."`. (Non é necesario cambiar o valor, só verificar o inicial). | `if` para determinar o signo. |

---