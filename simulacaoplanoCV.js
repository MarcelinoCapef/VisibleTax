const preloadloadingIcon = document.getElementById("loading-icon-simulation");
const preloaderSimulation = document.getElementById("preloader");
preloadloadingIcon.style.background = "#28343e";
preloadloadingIcon.style.padding = "10px";
preloadloadingIcon.style.borderRadius = "6px";
preloadloadingIcon.style.boxShadow = "0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.2)";
if (preloaderSimulation) {
    preloaderSimulation.style.display = "none";
    preloaderSimulation.style.opacity = 1;
    preloaderSimulation.style.position = "fixed";
    preloaderSimulation.style.top = 0;
    preloaderSimulation.style.left = 0;
    preloaderSimulation.style.width = "100%";
    preloaderSimulation.style.height = "100%";
}



 $("#cpf-simulator").mask("999.999.999-99");

var urlConsulta = "https://ici002.capef.com.br/apiconsulta";
var urlSimulacao = "https://ici002.capef.com.br/apiplanomercado";

async function setupToken({ url }) {
        const authResponse = await fetch(`${url}/Auth/Access-Token`, {
            method: "POST",
            body: JSON.stringify({
                userName: authUserName,
                password: authPassword
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!authResponse.ok) {
            throw new Error("Failed to obtain authentication token");
        }

        const authData = await authResponse.json();
        token = authData.access_Token;

        localStorage.setItem(url, token);
}
