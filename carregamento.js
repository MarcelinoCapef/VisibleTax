var urlSimulacao = "https://ici002.capef.com.br/apisimuladorcvme";

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
            document.getElementById("txcarregamento").value = taxaCarregamento.cv;
        }
        if (taxaAssistido) {
            document.getElementById("txadminunica").value = taxaAssistido.cv;
        }

    } catch (error) {
        console.error("Erro ao carregar as taxas:", error);
    }
}

carregarTaxas();
