const {
    Client,
    logger,
    Variables,
    File
} = require("camunda-external-task-client-js");

// Configuração para o cliente
const config = {
    baseUrl: 'http://localhost:8080/engine-rest',
    use: logger
};


// Criar uma instância do cliente com configuração personalizada
const client = new Client(config);

// Inscrevendo no tópico: 'criarRecibo'
client.subscribe("cria-recibo", async function ({ task, taskService }) {
    // complete the task
    const date = new Date();
    const minute = date.getMinutes();
    const invoice = await new File({ localPath: "./assets/invoice.txt" }).load();
    const variables = new Variables().setAll({ invoice, date });

    console.log(date);
    console.log(minute);
    console.log(invoice);

    // Verifica se o minuto é par
    if (minute % 2 === 0) {
        await taskService.complete(task, variables);
    } else {
        await taskService.complete(task, null, variables);
    }
});