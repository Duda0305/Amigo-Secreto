
// lista onde ficam os particiantes
let participantes = ["Ana", "João" , "Bruno" , "Carla" , "Diego", "Eduardo", "Duda"] ;

//Atualiza a lista de participantes na tela assim que a página carregar
window.onload=function () {
    atualizarLista();
    
}

// Função para adicionar um nome
function adicionarAmigo() {
    const input = 
    document.getElementById("name");
    const nome = input.ariaValueMax.trim();

    if (nome && !
        participantes.includes(nome) ) {
            participantes.push(nome);
            atualizarLista();
             } else {
                alert("Digite um nome válido e que não esteja repetido!");
             }
            input.vale = "";
            }

            // Atualiza a lista na tela
            function atualizarLista() {
                const lista =
                document.getElementById("lista");
                lista.innerHTML = "";
                participantes.forEach(p => {
                    const li =
                    document.createElement("li");
                    li.textContent = p;
                    lista.appendChild(li);
                });
            }
// Função para sortear 
function sortearAmigos-() {
    if (participantes.length < 2) {
        alert("É preciso pelo menos 2 participantes!");
        return;
    }
     let sorteio = [...participantes];
     let resultado = {};


     // Embaralha a lista
     sorteio.sort(( ) => Math.random() - 0.5);

     for (let i = 0; i < 
        participantes.length; i++ ) {
            if (sorteio[i] ===
                participantes[i] ){
                    [sorteio[i], sorteio[(i + 1) % participantes.length]] = [sorteio[(i + 1)% participantes.length], sorteio[i]];
                }
        }
        mostrarResultado(resultado);
}

// Mostra o resultado na tela
function
 mostrarResultado(resultado) {
    const lista =
    document.getElementById("resultado");
    lista.innerHTML = "";
    for (let pessoa in resultado) {
        const li =
        document.createElement("li");
        li.textContent = `${pessoa} -> 
        ${resultado[pessoa]}`;
        lista.appendChild(li);
}
}

