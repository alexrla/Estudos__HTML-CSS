# Grid
- **Bidirecional: opera em linha e coluna;**
- **Quando usamos a propriedade `display: flex` em um elemento, passamos a ter um _flex-container_;**
- **Dentro desse container, os seus elementos filhos, passam a ser chamados de _flex-items_;**
- **Em relação a orientação, temos dois eixos: _main axis_ (eixo principal) e o _cross axis_ (eixo cruzado/secundário);**
- **Quando estamos operando em cima de uma linha, o eixo principal se encontra na horizontal e o eixo cruzado na vertical;**
- **Quando estamos operando sobre uma coluna, temos uma inversão, o eixo principal passa ser na vertical e o eixo cruzado na horizontal;**



## Propriedades

### grid-template-columns (Grid-container)
- **Usado para definir a organização das colunas;**
- **Informamos a quantidade e o tamanho que cada coluna vai ocupar.Po exemplo:**
  - **`grid-template-columns: 50% 50%` - aqui definimos que teremos duas colunas e que cada uma vai ocupar 50% do espaço;**

- **Quando queremos passar valores iguais, podemos usar a função _repeat_. Por exemplo:**
  - **`grid-template-columns: repeat(4, 8.33% 8.33% 8.33%)` - aqui temos 3 colunas, de tamanho 8.33%,  repetidas 4 vezes (no final ficamos com 8.33%, multiplicada 12 vezes);**

- **Ainda temos a função _minmax_, onde podemos definir o mínimo e o máxima, do tamanho relativo a coluna. Por exemplo:**
  - **`grid-template-columns: minmax(100px, 200px) minmax(200px, 400px)` - aqui teremos duas colunas, a primeira com no mínimo 100px e no máxima 200px e a segunda com no mínimo 200px e máximo de 400px;**




### grid-template-rows (Grid-container)
- **Usado para definir a organização das linhas;**
- **Também informamos a quantidade e o tamanho que agora, cada linha vai ocupar. Por exemplo:**
  - **`grid-template-rows: 50% 25% 12.5% 12.5%` - aqui ficamos com 4 linhas, sendo a primeira com 50%, a segunda 25% e as, terceira e quarta, linhas, com 12.5% cada;**
- **Quando não definimos valores suficientes para a quantidade de linhas, as demais ocupam o espaço restante;**
- **Quando definimos o valor _auto_ para uma linha, o espaço restante é dividido de forma que essa linha e as seguintes, fiquem com o mesmo tamanho;**



### grid-column (Grid-item)
- **Usado para definir o início e o fim, da nossa "célula", na coluna (onde a "célula) se inicia e termina;**
- **OBS.: estou usando o termo célula, que conheci no excel. Logo, estou enxergando a nossa grade, como (o nosso grid-container) uma tabela;**
- **Podemos ter:grade**
  - **`grid-column: 2` - a célula vai ocupar a coluna 2;**
  - **`grid-column: 2 / 4 (barra é obrigatória)` - indica que a célula vai ocupar as colunas 2 e 3 (vai do início da segunda coluna ao começo da coluna 4);**
  - **`grid-column-start` - indica a coluna inicial da célula;**
  - **`grid-column-end`: indica a coluna final da célula;**
  - **`grid-column: span 3`: indica que a célula vai ocupar 3 colunas a partir de onde ela está;**




### grid-row (Grid-item)

- **Usado para definir o início e o fim, da nossa "célula", em relação a linha;**
- **O mesmo que foi comentado para a propriedade `grid-column`, é válido para a propriedade `grid-row`;**



### grid-area (Grid-item)

- **Shorthand;**

- **Atalho para `grid-row-start`, `grid-column-start`, `grid-row-end` e `grid-column-end`:**

  ```css
  grid-area: 1 / 2 / 3 / 4;
  
  /*
  	grid-row-start: 1;
  */
  
  /*
  	grid-row-end: 3;
  */
  
  /*
  	grid-column-start: 2;
  */
  
  /*
  	grid-column-end: 4;
  */
  ```



### grid-template-areas (Grid-container)

- **Utilizado para definir áreas específicas no grid container. Exemplo:**

  ```html
  <!-- HTML -->
  <div class="container">
      <main>MAIN</main>
      <header>HEADER</header>
      <footer>FOOTER</footer>
      <nav>NAV</nav>
  </div>
  ```

  ```css
  /* CSS */
  header  {
      grid-area: header;
  }
  
  main    {
      grid-area: main;
  }
  
  nav    {
      grid-area: nav;
  }
  
  footer    {
      grid-area: footer;
  }
  
  .container  {
      display: grid;
  
      grid-template-areas:
          'header header'
          'nav main'
          'footer footer'
          ;
  
      grid-template-columns: 200px 1fr;
  
      grid-template-rows: 150px 500px 200px;
  }
  ```

  **No exemplo dado, temos uma grade com duas colunas e três linhas. De acordo com o nosso `template-grid-areas`, o _header_ vai ocupar toda a linha de cima, o nav vai ocupar a segunda linha e primeira coluna, enquanto o main, ocupa a segunda linha e a segund coluna e por último, o footer ocupa toda a terceira linha;**



### OBS.:

- **Usando as propriedade `grid-column` e `grid-row`, as células podem se sobreescrever (uma ficando a frente da outra). Podemos alterar essa ordem de visibilidade, aplicando o `z-index`;**

- **Podemos nomear as linhas que compõem as colunas. Por exemplo:**

  ```css
  grid-template-columns:
  [linhaInicial] 
  	1fr
  [linhaDoMeioUm] 1fr [linhaDoMeioDois]
  	1fr
  [linhaFinal]
  
  /*
  - Vejamos que temos 3 colunas, cada uma ocupando 1fr de espaço e, nessas três colunas, nomeamos as quatro linhas no sentido vertical, que formam essas colunas;
  
  - Podemos dar mais de um nome (separamos os nomes com espaços);
  
  - Esses nomes podem ser utilizados no grid-column. Por exemplo:
  	grid-column-start: linhaInicial;
  	grid-column-end: linhaFinal;
  
  - Os nomes também podem ser utilizados no grid-area;
  */
  ```

- **Span: faz com que a célula se estenda, de acordo com um determinado valor. Por exemplo:**

  ```css
  grid-column-start: 1;
  grid-column-end: span 2;
  
  /*
  De acordo com o exemplo acima, a célula se inicia na coluna 1 e se exetende por mais duas células (duas colunas). 
  Ou seja, ela vai da coluna 1, a coluna 3; 
  */
  ```

- **repeat(): podemos indica a quantidade de vezes que uma linha ou coluna, vão ser repetidas e os seus tamanho. Por exemplo:**

  ```css
  /* Isso */
  grid-template-columns: 1fr 1fr 1fr;
  
  /* É semelhante a isso */
  grid-template-columns: repeat(3, 1fr);
  
  /*
  	3 colunas, cada uma ocupando 1fr do espaço;
  */
  ```

- **gap: define uma distância entre os elementos da grid (linhas e colunas):**

  - **`gap: valor` - teremos esse valor de distância, entre os elementos da grid (linhas e colunas);**

  - **`gap: valorUm valorDois` - _valorUm_ aplicado nas linhas e _valorDois_ aplicado nas colunas;**

  - **`column-gap: valor` - gap aplicado só nas colunas;** 

  - **`row-gap`: valor - gap aplicado só nas linhas;** 
