//Lista de jogos Indie::

StardewValley = {
  Titulo: "Stardew Valley",
  Genero: "RPG/Simulação",
  AnoDeLançamento: 2016,
  DisponivelParaWindows: true,
  OnlineMultiplayer: true,
  MetaScore: 89,
  PublicadoraDeveloper: ["ConcernedApe", "Eric Barone"],
};

Blasphemous = {
  Titulo: "Blasphemous",
  Genero: "Metroidvania/Hack and slash",
  AnoDeLançamento: 2019,
  DisponivelParaWindows: true,
  OnlineMultiplayer: false,
  MetaScore: 82,
  PublicadoraDeveloper: ["Team17", "The Game Kitchen"],
};

HotlineMiami = {
  Titulo: "Hotline Miami",
  Genero: "Shoot'em up/Ação",
  AnoDeLançamento: 2012,
  DisponivelParaWindows: true,
  OnlineMultiplayer: false,
  MetaScore: 85,
  PublicadoraDeveloper: ["Dennaton Games", "Devolver Digital"],
};

DeadCells = {
  Titulo: "Dead Cells",
  Genero: "Metroidvania/Roguelike",
  AnoDeLançamento: 2018,
  DisponivelParaWindows: true,
  OnlineMultiplayer: false,
  MetaScore: 89,
  PublicadoraDeveloper: ["Motion Twin"],
};

Celeste = {
  Titulo: "Celeste",
  Genero: "Action/Platformer2D",
  AnoDeLançamento: 2018,
  DisponivelParaWindows: true,
  OnlineMultiplayer: false,
  MetaScore: 92,
  PublicadoraDeveloper: ["Maddy Thorson & Noel", "Berry/MiniBoss"],
};

const Jogos = [];

if (StardewValley.OnlineMultiplayer) {
  Jogos.push(StardewValley);
} else {
  alert(
    `O jogo: ${StardewValley.Titulo} não tem Online Multiplayer, portanto não foi adicionado`
  );
}

if (Blasphemous.OnlineMultiplayer) {
  Jogos.push(Blasphemous);
} else {
  alert(
    `O jogo ${Blasphemous.Titulo} não tem Online Multiplayer, portanto não foi adicionado`
  );
}

if (HotlineMiami.OnlineMultiplayer) {
  Jogos.push(HotlineMiami);
} else {
  alert(
    `O jogo ${HotlineMiami.Titulo} não tem Online Multiplayer, portanto não foi adicionado`
  );
}

if (DeadCells.OnlineMultiplayer) {
  Jogos.push(DeadCells);
} else {
  alert(
    `O jogo ${DeadCells.Titulo} não tem Online Multiplayer, portanto não foi adicionado`
  );
}

if (Celeste.OnlineMultiplayer) {
  Jogos.push(Celeste);
} else {
  alert(
    `O jogo ${Celeste.Titulo} não tem Online Multiplayer, portanto não foi adicionado`
  );
}

console.log(Jogos);