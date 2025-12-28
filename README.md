# 📸 Image Upload & Preview (HTML, CSS e JavaScript)

Este projeto demonstra a implementação de um formulário de upload de imagens utilizando HTML, CSS e JavaScript puro, com foco em validação, preview da imagem e boas práticas no uso das APIs nativas do navegador.

## 🚀 Funcionalidades

- Upload de arquivos de imagem
- Validação de tipo de arquivo (image/*)
- Validação de tamanho máximo do arquivo
- Preview da imagem antes do envio
- Exibição do nome do arquivo selecionado

## 🧪 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 📂 Estrutura do Projeto

.
├── index.html        # Estrutura do formulário
├── styles.css        # Estilização da interface
├── script.js         # Lógica de validação e preview
└── README.md         # Documentação do projeto

## 📋 Regras de Validação

- Apenas arquivos de imagem são aceitos
- Tamanho máximo permitido: 5MB
- Upload ignorado caso nenhum arquivo seja selecionado

## 🖼️ Preview da Imagem

O preview é feito utilizando a API URL.createObjectURL, que gera uma URL temporária para exibição da imagem sem carregá-la completamente na memória.

## ▶️ Como executar

Abra o arquivo index.html diretamente no navegador ou utilize uma extensão como Live Server.

---

Desenvolvido por Guilherme Rosário Alves
