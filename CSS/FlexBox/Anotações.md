# FlexBox
- **Unidirecional: ou opera em cima de uma linha, ou opera em cima de uma coluna;**
- **Quando usamos a propriedade `display: flex` em um elemento, passamos a ter um _flex-container_;**
- **Dentro desse container, os seus elementos filhos, passam a ser chamados de _flex-items_;**
- **Em relação a orientação, temos dois eixos: _main axis_ (eixo principal) e o _cross axis_ (eixo cruzado/secundário);**
- **Quando estamos operando em cima de uma linha, o eixo principal se encontra na horizontal e o eixo cruzado na vertical;**
- **Quando estamos operando sobre uma coluna, temos uma inversão, o eixo principal passa ser na vertical e o eixo cruzado na horizontal;**



## Propriedades



### flex-direction
- **`flex-direction: row`: elementos em linha (comportamento padrão);**
- **`flex-direction: column`: elementos em coluna;**
- **`flex-direction: row-reverse`: elementos em linha, mas a ordem dos elementos são invertidas e, dependendo da largura do container, os elementos vão ser alinhados à direita;**
- **`flex-direction: column-reverse`: elementos em coluna e com a ordem invertida;**



### flex-wrap
- **`flex-wrap: nowrap`: os elementos ultrapassam o tamanho do container, quando o container não é grande o suficiente para caber todos os seus elementos (comportamento padrão);**
- **`flex-wrap: wrap`: quando os elementos vão ultrapassar o tamanho do container, a uma quebra, de tal forma que os elementos restantes são agrupados na linha de baixo;**
- **`flex-wrap: wrap-reverse`: quebra a sequência dos elementos, os agrupando na linha de baixo (quando ultrapassam o limite do container), mas inverte o posicionamento das linhas, a de cima vai para baixo e vice-versa;**



### flex-flow
- **Mistura as duas propriedades: `flex-direction` e `flex-wrap`. Ex:**
  - **`flex-flow: row wrap`;**



### justify-content

- **Alinha os elementos no eixo principal (_main axis_);**
- **`justify-content: flex-start`: alinha os elementos no início do container (comportamento padrão);**
- **`justify-content: flex-end`: alinha os elementos no final do container;**
- **`justify-content: center`: centraliza os elementos;**
- **`justify-content: space-around`: adiciona espaços em volta dos elementos (sempre antes e depois de cada elemento);**
- **`justify-content: space-between`: adiciona espaço entre os elementos (espaços de mesma medida);**
- **`justify-content: space-evenly`: adiciona espaços, de tamanho igual, ao redor dos elementos ;**
- **Lembrando que quando mudamos a direção para coluna, o _main axis_ passa a ser na vertical;**



### align-items

- **Alinha os elementos no eixo cruzado (_cross axis_);**
- **`align-items: stretch`: não promove alterações no comportamento dos elementos (temos o comportamento padrão);**
- **`align-items: baseline`: alinha os elementos pela linha de base;**
- **`align-items:flex-start`: alinha os elementos na parte superior do container (em cima);**
- **`align-items: flex-end`: alinha os elementos na parte inferior do container (em baixo);**
- **`align-items: center`: centraliza os elementos;**



### align-content

- **Usada para alinhar múltiplas linhas (no _main axis_);**
- **`align-content: stretch`: não promove alterações no comportamento dos elementos (temos o comportamento padrão);**
- **`align-content: flex-start`: alinha os elementos na parte superior do container (em cima);**
- **`align-content: flex-end`: alinha os elementos na parte inferior do container (em baixo);**
- **`align-content:center`: centraliza os elementos;**
- **`align-items: space-around`: adiciona espaços em volta dos elementos (sempre antes e depois de cada elemento);**
- **`align-items: space-between`: adiciona espaço entre os elementos (espaços de mesma medida);**



### order

- **Através dessa propriedades, podemos definir a ordem que os elementos serão dispostos no container;**
- **Por padrão, os elementos possuem `order: 0`;**
- **Os elementos de `order` maior, vão sendo exibidos por último;**



### align-self

- **Através dessa propriedade, podemos alinha um item em específico (no _cross axis_);**

- **`align-self: stretch`: não promove alterações no comportamento dos elementos (temos o comportamento padrão);**

- **`align-self: baseline`: alinha o elemento pela linha de base;**

- **`align-self: flex-start`: alinha os elementos na parte superior do container (em cima);**

- **`align-self: flex-end`: alinha os elementos na parte inferior do container (em baixo);**

- **`align-content:center`: centraliza os elementos;**

  

### flex-grow

- **Utilizado para definirmos a lógica de como os elementos vão ocupar o espaço que está sobrando no container;**
- **A partir do `flex-grow`, damos um certo peso para os nosso elementos. A partir daí, o espaço restante é dividido pela quantidade de pesos e, o resultado dessa divisão, será passado em tamanho, para os elementos, respeitando o pesos passados. Por exemplo, se quase todos os elementos do container, possuem peso 1, mas existe um elemento um elemento de peso 2, esse elementos de peso 2, deverá receber o dobro do tamanho calculado;**
- **Com o `flex-grow: 0`, o elemento não irá crescer de forma nenhuma;**



### flex-shrink

- **Utilizado para definirmos a lógica de como os elementos vão encolher/ser reduzidos, em relação ao tamanho do container;**
- **Segue a mesma lógica do `flex-grow`, só que agora ao invés de adicionar, podemos dizer que ele retira "um pedaço de tamanho", do nosso item, dependendo da lógica aplicada;****



### flex-basis

- **Usado para definir o tamanho de um _flex-item_;**
- **Quando estamos trabalhando com linha, o tamanho é aplicado a largura dos elementos. Já quando estamos trabalhando com coluna, o tamanho é aplicado a altura dos elementos;**
