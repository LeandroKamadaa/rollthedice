# Roll The Dice

Checkpoint4 - Webdev

Um módulo simples que simula o lançamento de um dado de 20 lados e exibe uma mensagem colorida com base no resultado. Ele utiliza as bibliotecas `chalk` para colorir o texto e `cool-ascii-faces` para adicionar emoticons divertidos nas mensagens.

## Grupo

### - Leandro Kamada Pesce Dimov - RM560381
### - Cilas Pinto Macedo - RM560745
### - Ian Junji Maluvayshi Matsushita RM560588
### - Pedro Arão Baquini - RM559580
### - Leonardo de Souza Pierangelli - RM560381



## Instalação

Para usar o módulo `rollthedice` em seu projeto, basta instalar o pacote:

```bash
npm install @leandrokamada/rollthedice
```

## Uso

Depois de instalar o pacote, você pode importá-lo e chamar a função `rollthedice` passando um nome como argumento. A função gera um número aleatório entre 1 e 20 e exibe uma mensagem colorida dependendo do resultado.

Exemplo de uso:

```javascript
import rollthedice from 'rollthedice';

rollthedice('Leandro');
```

## Resultados Possíveis

- **Erro Crítico (1)**: Se o número gerado for 1, você verá uma mensagem de erro crítico.
- **Acerto Crítico (20)**: Se o número gerado for 20, você verá uma mensagem de acerto crítico.
- **Falha no Teste (menor que 10)**: Se o número gerado for menor que 10 (exceto 1), você verá uma mensagem de falha no teste.
- **Sucesso (maior ou igual a 10)**: Se o número for 10 ou maior (exceto 20), você verá uma mensagem indicando sucesso.

### Exemplo de saída

- Se o dado gerar 1:
  ```
  (╯°□°)ٌヽ〃┻━┻ Leandro, você tirou 1 e teve um erro crítico!
  ```

- Se o dado gerar 20:
  ```
  (◕‿◕) Leandro, você tirou 20 e teve um acerto crítico!
  ```

- Se o dado gerar um valor entre 2 e 9:
  ```
  (¬‿¬) Leandro, você tirou 5 e não passou no teste!
  ```

- Se o dado gerar um valor entre 10 e 19:
  ```
  (✿◉‿◉) Leandro, você tirou 15 e passou no teste!
  ```

## Dependências

Este módulo depende de duas bibliotecas externas:

- `chalk`: Para colorir a saída no terminal.
- `cool-ascii-faces`: Para gerar emoticons ASCII divertidos.

Você pode instalar essas dependências automaticamente ao instalar o pacote `rollthedice`, ou instalá-las separadamente:

```bash
npm install chalk cool-ascii-faces
```

