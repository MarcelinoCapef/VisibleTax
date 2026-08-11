var urlSimulacao = "https://ici002.capef.com.br/apisimuladorcvme/Simulador/Criterios";

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
            document.getElementById("txcarregamento").value =
                (taxaCarregamento.cv * 100).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "%";
        }

        if (taxaAssistido) {
            document.getElementById("txadminunica").value =
                (taxaAssistido.cv * 100).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "%";
        }

    } catch (error) {
        console.error("Erro ao carregar as taxas:", error);
    }
}

carregarTaxas();
