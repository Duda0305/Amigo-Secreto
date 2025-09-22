# Amigo-Secreto
# Amigo Secreto - Challenge Alura

## Descrição
Este é o projeto **Amigo Secreto**, desenvolvido como parte do **Challenge da Alura**.  
O objetivo é criar uma página interativa onde é possível:  
- Adicionar participantes;  
- Listar os participantes;  
- Sortear os amigos secretos garantindo que ninguém tire a si mesmo;  
- Mostrar o resultado do sorteio na tela.

O projeto utiliza **HTML, CSS e JavaScript**.

---

## Funcionalidades

1. **Adicionar participante**  
   - Digite o nome no campo e clique em **Adicionar**.  
   - O nome será adicionado à lista de participantes.  
   - Não é permitido adicionar nomes repetidos ou vazios.

2. **Sortear amigo secreto**  
   - Clique no botão **Sortear**.  
   - Cada participante será atribuído a outro participante aleatoriamente.  
   - Ninguém poderá tirar a si mesmo.

3. **Mostrar resultado**  
   - O resultado do sorteio aparece em uma lista na tela no formato:  
     ```
     Ana → Bruno
     Bruno → Carla
     Carla → Diego
     ```

---

## Tecnologias utilizadas
- **HTML**: Estrutura da página.  
- **CSS**: Estilização da página.  
- **JavaScript**: Lógica para adicionar participantes, sortear e mostrar os resultados.

---

## Código JavaScript

```javascript
// Array com nomes já adicionados
let participantes = ["Ana", "Bruno", "Carla", "Diego", "Eduardo"];

// Atualiza a lista de participantes na tela assim que a página carregar
window.onload = function() {
  atualizarLista();
};

// Função para adicionar um nome manualmente pelo input
function adicionarNome() {
  const input = document.getElementById("nome");
  const nome = input.value.trim();

  if (nome && !participantes.includes(nome)) {
    participantes.push(nome);
    atualizarLista();
  } else {
    alert("Digite um nome válido e que não esteja repetido!");
  }

  input.value = "";
}

// Atualiza a lista de participantes na tela
function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  participantes.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    lista.appendChild(li);
  });
}

// Função para sortear o amigo secreto
function sortear() {
  if (participantes.length < 2) {
    alert("É preciso pelo menos 2 participantes!");
    return;
  }

  let sorteio = [...participantes];
  let resultado = {};

  sorteio.sort(() => Math.random() - 0.5);

  for (let i = 0; i < participantes.length; i++) {
    if (sorteio[i] === participantes[i]) {
      [sorteio[i], sorteio[(i + 1) % participantes.length]] =
        [sorteio[(i + 1) % participantes.length], sorteio[i]];
    }
    resultado[participantes[i]] = sorteio[i];
  }

  mostrarResultado(resultado);
}

// Mostra o resultado do sorteio na tela
function mostrarResultado(resultado) {
  const lista = document.getElementById("resultado");
  lista.innerHTML = "";

  for (let pessoa in resultado) {
    const li = document.createElement("li");
    li.textContent = `${pessoa} → ${resultado[pessoa]}`;
    lista.appendChild(li);
  }
}