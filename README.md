# ✨ Daily Dev Utils ✨

Sabe aquelas funções pequenas que salvam o dia e que a gente sempre acaba reescrevendo em algum projeto?
Então. Esse repositório é justamente para isso.  

## 💖 Sobre
Aqui eu vou juntando funções úteis para o dia a dia de desenvolvimento, em várias linguagens, com uma organização simples para encontrar depois sem sofrer.

Pode usar à vontade.  
E se te ajudar, não custa nada deixar uma estrelinha, né xuxu? 💅

---

O **Daily Dev Utils** é uma coleção de funções, helpers, snippets e utilitários que uso, estudo ou quero deixar guardados para consultar depois.
A ideia não é criar uma super biblioteca cheia de regra, build, dependência e burocracia.

A ideia é bem mais simples:

> guardar soluções pequenas, úteis e reutilizáveis para problemas comuns do dia a dia.

Coisas como:

- formatar datas;
- validar dados;
- manipular strings;
- trabalhar com arrays e objetos;
- organizar consultas SQL;
- criar helpers de debug;
- guardar snippets que economizam tempo.

Basicamente, é minha caixinha de ferramentas dev para quando bate o clássico:

> “Eu já fiz isso antes... onde foi parar?” 😭

<br>

# 📁 Estrutura

```txt
daily-dev-utils/
│
├── javascript/
│   ├── datas/
│   ├── strings/
│   ├── arrays/
│   ├── objetos/
│   └── validacoes/
│
├── php/
│   ├── datas/
│   ├── strings/
│   ├── arrays/
│   ├── banco-de-dados/
│   └── validacoes/
│
├── python/
│   ├── datas/
│   ├── strings/
│   ├── arquivos/
│   └── validacoes/
│
├── sql/
│   ├── mysql/
│   ├── postgresql/
│   └── consultas-uteis/
│
├── docs/
│   ├── padrao-documentacao.md
│   └── convencoes.md
│
├── README.md
└── LICENSE
```

<br>

# ✨ Exemplo de utilitário
Arquivos sempre terão o nome da função para melhor visualização:

Exemplo:

```txt
javascript/datas/formatarDataHora.js
php/strings/limparTexto.php
python/arquivos/lerCsv.py
sql/mysql/buscarUsuariosAtivos.sql
```

```txt
javascript/datas/formatarDataHora.js
```

```js
/**
 * Formata uma data e hora no formato "DD/MM/AAAA HH:mm:ss" a partir de uma string
 * no formato "YYYY-MM-DD HH:mm:ss".
 *
 * @since 29/12/2025
 * @author Pricila Oliveira
 * @updated by Pricila Oliveira
 * @param {string} valor Data e hora no formato "YYYY-MM-DD HH:mm:ss"
 * @returns {string} Data formatada ou string original se inválida
 */
function formatarDataHora(valor) {
    if (!valor) return ''

    const iso = valor.replace(' ', 'T')

    const data = new Date(iso)
    if (isNaN(data.getTime())) return valor

    return data.toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium',
    })
}

```

<br>

# 💅 Categorias de utilitários

Este repositório pode conter funções para:

- Formatação de datas
- Manipulação de strings
- Manipulação de arrays
- Manipulação de objetos
- Validação de dados
- Máscaras de campos
- Funções para banco de dados
- Scripts auxiliares
- Snippets reutilizáveis
- Helpers para debug
- Consultas SQL úteis

<br>

# 🧠 Padrão de documentação

Sempre que possível, as funções devem seguir um padrão de documentação.

Exemplo:

```js
/**
 * Descreve de forma objetiva o que a função faz.
 *
 * @since DD/MM/AAAA
 * @author Pricila Oliveira
 * @updated by Pricila Oliveira
 * @param {tipo} nomeParametro Descrição do parâmetro
 * @returns {tipo} Descrição do retorno
 */
```

<br>

# 🚀 Como usar
Clone o repositório:
```bash
git clone https://github.com/pricila-labs/daily-dev-utils.git
```

Acesse a pasta:

```bash
cd daily-dev-utils
```

Depois, navegue pela linguagem e categoria desejada.

Exemplo:

```txt
javascript/datas/formatarDataHora.js
```

<br>

## 🌷 Objetivo
O objetivo deste projeto não é criar uma biblioteca complexa, mas sim manter uma coleção elegante, didática e reutilizável de soluções pequenas.
Pense nele como um lugar para guardar aquelas funções que salvam tempo, evitam retrabalho e deixam o código mais bonito.

Porque código útil também pode ser organizado, documentado e aesthetic. ✨

---

Feito com ❤️ por **Pricila Oliveira**.