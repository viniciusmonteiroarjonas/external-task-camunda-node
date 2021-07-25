# Introdução

Projeto desenvolvido utilizando o camunda para modelar o fluxo de consulta de um CEP, utilizamos um script task para setar uma varíavel contendo um CEP, e em seguida executamos a task service consulta-cep, para retornar um json de dados, que consumimos da API https://viacep.com.br, e posteriormente setamos uma variavel com os dados do endereço e na sequência salvamos na base de dados Mysql.

# Modelagem do BPMN

<img src="fluxo.png">

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
