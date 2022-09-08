//Lista de jogos Indie::

const Titulo1 = "Stardew Valley"
const Genero1 = "RPG/Simulação"
const AnoDeLançamento1 = 2016
const DisponivelParaWindows1 = true
const OnlineMultiplayer1= true
const MetaScore1 = 89
const PublicadoraDeveloper1 = ("ConcernedApe e Eric Barone")

console.log("Titulo:", Titulo1.toUpperCase());
console.log("Genero:", Genero1.toUpperCase());
console.log("Ano de lançamento:", AnoDeLançamento1);
console.log("Disponivel para Windows?", DisponivelParaWindows1);
console.log("Tem online Multplayer?", OnlineMultiplayer1);
console.log("O MetaScore desse jogo é:", MetaScore1, "de 100");
console.log("Este jogo foi publicado e desenvolvido por:", PublicadoraDeveloper1);

const Titulo2 = "Blasphemous"
const Genero2 = "Metroidvania/Hack and slash"
const AnoDeLançamento2 = 2019
const DisponivelParaWindows2 = true
const OnlineMultiplayer2 = false
const MetaScore2 = 82
const PublicadoraDeveloper2 = ("Team17 e The Game Kitchen")


console.log("Titulo:" , Titulo2.toUpperCase())
console.log("Genero: ", Genero2.toUpperCase())
console.log("Ano de lançamento:" , AnoDeLançamento2)
console.log("Disponivel para Windows?" , DisponivelParaWindows2);
console.log("Tem online Multplayer?" , OnlineMultiplayer2);
console.log("O MetaScore desse jogo é:" , MetaScore2, "de 100");
console.log("Este jogo foi publicado e desenvolvido por:", PublicadoraDeveloper2);


const Titulo3 = "Hotline Miami"
const Genero3 = "Shoot'em up/Ação"
const AnoDeLançamento3 = 2012
const DisponivelParaWindows3 = true
const OnlineMultiplayer3 = false
const MetaScore3 = 85
const PublicadoraDeveloper3 = ("Dennaton Games e Devolver Digital")


console.log("Titulo:" , Titulo3.toUpperCase())
console.log("Genero:" , Genero3.toUpperCase())
console.log("Ano de lançamento:" , AnoDeLançamento3)
console.log("Disponivel para Windows?" , DisponivelParaWindows3);
console.log("Tem online Multplayer?" , OnlineMultiplayer3);
console.log("O MetaScore desse jogo é:" , MetaScore3, "de 100");
console.log("Este jogo foi publicado e desenvolvido por:", PublicadoraDeveloper3);


const Titulo4 = "Dead Cells"
const Genero4 = "Metroidvania/Roguelike"
const AnoDeLançamento4 = 2018
const DisponivelParaWindows4 = true
const OnlineMultiplayer4 = false
const MetaScore4 = 89
const PublicadoraDeveloper4 = ("Motion Twin")


console.log("Titulo:" , Titulo4.toUpperCase())
console.log("Genero:" , Genero4.toUpperCase())
console.log("Ano de lançamento:" , AnoDeLançamento4)
console.log("Disponivel para Windows?" , DisponivelParaWindows4);
console.log("Tem online Multplayer?" , OnlineMultiplayer4);
console.log("O MetaScore desse jogo é:" , MetaScore4, "de 100");
console.log("Este jogo foi publicado e desenvolvido por:", PublicadoraDeveloper4);


const Titulo5 = "Celeste"
const Genero5 = "Action/Platformer2D"
const AnoDeLançamento5 = 2018
const DisponivelParaWindows5 = true
const OnlineMultiplayer5 = false
const MetaScore5 = 92
const PublicadoraDeveloper5 = ("Maddy Thorson & Noel e Berry & MiniBoss")


console.log("Titulo:" , Titulo5.toUpperCase())
console.log("Genero:" , Genero5.toUpperCase())
console.log("Ano de lançamento:" , AnoDeLançamento5)
console.log("Disponivel para Windows?" , DisponivelParaWindows5);
console.log("Tem online Multplayer?" , OnlineMultiplayer5);
console.log("O MetaScore desse jogo é:" , MetaScore5, "de 100");
console.log("Este jogo foi publicado e desenvolvido por", PublicadoraDeveloper5);

//Calculando o MetaScore médio dos 5 jogos
const MédiaMetaScore = ((MetaScore1 + MetaScore2 + MetaScore3 + MetaScore4 + MetaScore5)/5)
const TodosSãoMultplayerOnline = (OnlineMultiplayer1 && OnlineMultiplayer2 && OnlineMultiplayer3 && OnlineMultiplayer4 && OnlineMultiplayer5) 

console.log("A média de MetaScore desta lista de jogos é:" , MédiaMetaScore);
console.log("Todos os jogos dessa lista tem Multiplayer Online?", TodosSãoMultplayerOnline);


