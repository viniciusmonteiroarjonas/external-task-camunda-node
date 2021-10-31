const { Client, logger, Variables } = require('camunda-external-task-client-js');

const axios = require('axios');

const config = {
    baseUrl: 'http://localhost:8080/engine-rest',
    use: logger,
    asyncResponseTimeout: 10000,
};

const client = new Client(config);

client.subscribe("consulta-cep", async function ({ task, taskService }) {

    // Get Variable camunda
    const cep = task.variables.get("cep");
    console.log(cep);

    // Chamando a API viaCEP usando o Axios ...

    axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            console.log(response.data);

            // Criando uma instância de variavel ...
            const processVariables = new Variables();

            // Setando variavel com o endereço no camunda ...
            processVariables.set("dados_endereco", response.data);

            // Completando a task ...
            taskService.complete(task, processVariables);
        })
        .catch((error) => {
            console.log(error);
        });

    client.subscribe("salva-dados-banco", async function ({ task, taskService }) {
        // Implementar cadastro no banco de dados
        const processVariables = new Variables();
        processVariables.set("cliente_registrado", true);

        // Completando a task ...
        taskService.complete(task, processVariables);
    });
});
