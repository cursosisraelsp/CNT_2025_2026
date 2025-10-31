# Operadores para crear lóxica condicional potente.

A continuación, explico o significado dos operadores **`&&` (AND)** e **`!` (NOT)** e xero o contido para que o incorpores ao teu arquivo.

-----

## Explicación dos Operadores Lóxicos

### 1\. Operador `&&` (AND Lógico / Conjunción)

O operador `&&` (AND Lógico), que significa "e", úsase para **combinar dúas ou máis condicións**.

  * **Significado:** O resultado da condición con `&&` só será **verdadeiro** (`true`) se e só se **TODAS** as condicións conectadas son verdadeiras.
  * **Exemplo:** `(Ten diñeiro) && (A tenda está aberta)`. Só podes mercar se se cumpren ambas as dúas condicións.

### 2\. Operador `!` (NOT Lógico / Negación)

O operador `!` (NOT Lógico), que significa "non" ou "o contrario", úsase para **inverter** o valor dunha condición.

  * **Significado:** Se a condición inicial é verdadeira (`true`), o operador `!` convértea en falsa (`false`). Se a condición inicial é falsa (`false`), convértea en verdadeira (`true`).
  * **Exemplo:** `!Está chovendo`. Se `Está chovendo` é `true`, a condición con `!` convértese en `false`.

-----

## 📝 Contido para o Arquivo `.md` (en Galego)

Aquí tes o bloque de texto en formato Markdown para engadir ao teu ficheiro, preferiblemente despois da sección dos exercicios, para ofrecer unha explicación detallada en galego.

## 💡 Explicación Detallada de Operadores Lóxicos


Estes operadores permítennos facer comprobacións máis complexas nas nosas sentenzas `if`.




-----

### Operador \! (Negación Lóxica / NOT)

O operador `!` (NOT Lóxico) ponse diante dunha variable booleana ou dunha condición e inverte o seu valor.

**Significado:** Converte o valor de `true` a `false` e de `false` a `true`. É moi útil para preguntar polo estado contrario.

#### Exemplo:

```javascript
let estáCargado = false;

// O 'if' pregunta: SE NON estáCargado
if (!estáCargado) {
    console.log("AVISO: O sistema non está listo.");
}

// Se o código anterior se executa, é porque (!false) devolveu true.
```






### Operador && (E Lóxico / AND)

O operador `&&` (E Lóxico) úsase para conectar dúas ou máis condicións dentro dun `if`.

**Significado:** Esixe que **todas** as condicións conectadas sexan verdadeiras para que o código dentro do bloque `if` se execute. Se unha delas falla, o resultado é falso.

#### Exemplo:

```javascript
let tenPermiso = true;
let tenChave = true;

// Para acceder necesítase ter Permiso E ter Chave
if (tenPermiso && tenChave) {
    console.log("Acceso Permitido: Cúmprense ambas as condicións.");
}



Podes pegar este bloque no teu ficheiro `Exercicios_IF.md` para ter unha referencia rápida sobre estes operadores.

```