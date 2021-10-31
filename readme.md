# Introdução - 

Projeto desenvolvido utilizando o camunda para modelar os diagramas, e node para fazer a comunicação com a engine.

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


# Modelagem do BPMN - Cadastro Cliente

<img src="diagramas/img/cadastro_cliente.png">

# Modelagem do BPMN - Processo de Encomenda

<img src="diagramas/img/processo_encomenda.png">


# Como rodar o projeto