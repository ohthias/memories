# Memories
Mural de fotos dinâmico.

## Sobre o projeto

**Memories** é uma experiência visual de mural fotográfico que monta blocos de imagens em tela cheia com layouts variados, transições suaves e troca automática de composição ao longo do tempo.

O projeto foi desenvolvido com **HTML**, **CSS** e **JavaScript puro**, mantendo uma estrutura simples, leve e fácil de executar.

## Funcionalidades

- Mural de fotos em tela cheia
- Layouts predefinidos e alternados aleatoriamente
- Embaralhamento das imagens a cada renderização
- Transição com efeito de fade
- Zoom suave ao passar o mouse sobre cada foto
- Layout responsivo para diferentes tamanhos de tela

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Como funciona

O arquivo `script.js`:

- mantém uma lista de imagens externas;
- embaralha os elementos antes de renderizar;
- escolhe um layout aleatório;
- cria os blocos de foto dinamicamente;
- repete o processo automaticamente em intervalos aleatórios.

A interface principal é composta por:

- `index.html`, que estrutura a página;
- `style.css`, que define o visual e a responsividade;
- `script.js`, que controla a lógica do mural;
- `logo.png`, que exibe a identidade visual no topo da tela.

## Como executar

### Opção 1: abrir diretamente no navegador
Basta abrir o arquivo `index.html` em um navegador moderno.

### Opção 2: usar um servidor local
Você também pode rodar o projeto com uma extensão como **Live Server** no VS Code ou qualquer servidor estático simples.

## Estrutura do projeto

```bash
memories/
├── index.html
├── logo.png
├── script.js
└── style.css
```

## Personalização

Você pode personalizar o projeto alterando:

- a lista de imagens em `script.js`;
- os blocos e proporções dos layouts;
- as cores, animações e responsividade em `style.css`;
- o logo exibido no centro da composição.

## Observações

As imagens usadas no mural são carregadas de links externos. Se alguma URL deixar de responder, basta substituir a lista por novos endereços de imagem.
