const agents = [
  {
    name: "Jett",
    role: "Duelista",
    origin: "Coreia do Sul",
    description: "Rapida e imprevisivel, Jett domina confrontos agressivos com muita mobilidade.",
    skill: "Avanco veloz e controle vertical",
    style: "Ataque rapido",
    image: "https://liquipedia.net/commons/images/2/2c/Jett_Artwork.png"
  },
  {
    name: "Phoenix",
    role: "Duelista",
    origin: "Reino Unido",
    description: "Phoenix usa o fogo para atacar, se curar e abrir espaco para o time.",
    skill: "Fogo ofensivo",
    style: "Entrada agressiva",
    image: "https://static.wikia.nocookie.net/valorant/images/9/90/Phoenix_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202811"
  },
  {
    name: "Sage",
    role: "Sentinela",
    origin: "China",
    description: "Sage ajuda o time com cura, barreiras e suporte em momentos decisivos.",
    skill: "Cura e barreiras",
    style: "Defesa e suporte",
    image: "https://static.wikia.nocookie.net/valorant/images/7/7e/Sage_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20260317170220"
  },
  {
    name: "Sova",
    role: "Iniciador",
    origin: "Russia",
    description: "Sova revela inimigos e coleta informacoes importantes para o time.",
    skill: "Reconhecimento",
    style: "Informacao a distancia",
    image: "https://static.wikia.nocookie.net/valorant/images/c/c5/Sova_Artwork_Full.png/revision/latest?cb=20220810202832"
  },
  {
    name: "Viper",
    role: "Controladora",
    origin: "Estados Unidos",
    description: "Viper controla areas do mapa com veneno e dificulta o avanco inimigo.",
    skill: "Veneno e controle de espaco",
    style: "Controle territorial",
    image: "https://static.wikia.nocookie.net/valorant/images/8/85/Viper_Artwork_Full.png/revision/latest?cb=20220810202837"
  },
  {
    name: "Omen",
    role: "Controlador",
    origin: "Origem desconhecida",
    description: "Omen usa sombras para confundir inimigos e aparecer em lugares inesperados.",
    skill: "Teleportes e fumacas",
    style: "Engano e flanco",
    image: "https://static.wikia.nocookie.net/valorant/images/0/0e/Omen_Artwork_Full.png/revision/latest?cb=20220810202807"
  }
];

const grid = document.getElementById("characterGrid");

function showAgent(agent) {
  document.getElementById("detailImage").src = agent.image;
  document.getElementById("detailImage").alt = agent.name;
  document.getElementById("detailRole").textContent = agent.role;
  document.getElementById("detailName").textContent = agent.name;
  document.getElementById("detailOrigin").textContent = "Origem: " + agent.origin;
  document.getElementById("detailDescription").textContent = agent.description;
  document.getElementById("detailSkill").textContent = agent.skill;
  document.getElementById("detailStyle").textContent = agent.style;
}

grid.innerHTML = agents.map((agent, index) => `
  <article class="character-card ${index === 0 ? "active" : ""}">
    <button type="button" onclick="selectAgent(${index})">
      <img class="card-image" src="${agent.image}" alt="${agent.name}">
      <div class="card-copy">
        <span class="card-role">${agent.role}</span>
        <h3 class="card-name">${agent.name}</h3>
        <p class="card-origin">${agent.origin}</p>
      </div>
    </button>
  </article>
`).join("");

function selectAgent(index) {
  showAgent(agents[index]);

  document.querySelectorAll(".character-card").forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === index);
  });
}

showAgent(agents[0]);
window.selectAgent = selectAgent;
