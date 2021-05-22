# Introdução

Projeto desenvolvido utilizando o camunda para modelar o fluxo de cadastro de usuário no sistema, enviando uma e-mail de boas vindas para ele como confirmação do cadastro.

# Instalação do camunda

## Pré requisitos

- Java Runtime Environment 1.8+

## Instalando utilizando o docker

```sh
docker pull camunda/camunda-bpm-platform:run-latest
docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:run-latest
```

## Instalando manualmente

Segue o link abaixo para baixar o camunda, e também o camunda modeler.

<https://camunda.com/download/>
