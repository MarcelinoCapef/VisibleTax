var urlSimulacao = "https://ici002.capef.com.br/apiplanomercado/Simulador/Criterios";

async function carregarTaxas() {
    try {
        const response = await fetch(urlSimulacao);

        if (!response.ok) {
            throw new Error("Erro ao consultar o endpoint: " + response.status);
        }

        const dados = await response.json();

        const taxaCarregamento = dados.find(
            item => item.descricao === "Taxa de carregamento (sobre contribuição)"
        );

        const taxaAssistido = dados.find(
            item => item.descricao === "Taxa de carregamento (sobre assistido)"
        );

        if (taxaCarregamento) {
            const valor = (taxaCarregamento.cv * 100).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + "%";

            document.querySelectorAll(".txcarregamento").forEach(elemento => {
                elemento.textContent = valor;
            });
        }

        if (taxaAssistido) {
            const valor = (taxaAssistido.cv * 100).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + "%";

            document.querySelectorAll(".txadminunica").forEach(elemento => {
                elemento.textContent = valor;
            });
        }

    } catch (error) {
        console.error("Erro ao carregar as taxas:", error);
    }
}

carregarTaxas();
