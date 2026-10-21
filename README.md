# UNES Universidade

Site institucional fictício de uma universidade, feito com **HTML, CSS e JavaScript puro** como projeto de estudo.

🔗 **Ver online:** https://nidragnnar.github.io/UNES/ (depois de ativar o GitHub Pages, veja abaixo)

## Páginas

| Página | Arquivo | Conteúdo |
| --- | --- | --- |
| Home | `index.html` | Capa e cards com os cursos |
| Quem Somos | `quem-somos.html` | História, 5 motivos para estudar e objetivos |
| Contato | `contato.html` | Informações de contato e formulário |

## Recursos

- Layout responsivo (celular, tablet e desktop) com menu hambúrguer no celular
- CSS único organizado com variáveis (cores, espaçamentos, sombras)
- Formulário de contato com validação em tempo real e envio via [Formspree](https://formspree.io)
- Acessibilidade: HTML semântico, `label` ligado a cada campo, foco visível, `aria-current` no menu e suporte a `prefers-reduced-motion`
- Imagens hospedadas no próprio repositório

## Estrutura

```
UNES/
├── index.html
├── quem-somos.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    ├── logo.png
    └── capa.png
```

## Como rodar

Não precisa instalar nada: basta abrir o `index.html` no navegador.

## Ativar o envio real do formulário

Por padrão o formulário funciona em **modo demonstração** (valida os campos e mostra a mensagem de sucesso, mas não envia nada). Para receber as mensagens no seu e-mail:

1. Crie uma conta grátis em [formspree.io](https://formspree.io) e crie um novo formulário.
2. Copie o código gerado (algo como `xyzabcd`).
3. Em `contato.html`, troque `SEU_ID` em `action="https://formspree.io/f/SEU_ID"` pelo seu código.

## Publicar no GitHub Pages

No repositório, vá em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)` e salve. Em alguns minutos o site estará disponível no link acima.

## Créditos

Imagens (logo e capa) originais do exercício "site-g" publicado em [erichenriquesm.github.io](https://erichenriquesm.github.io/html5-e-css3/).
