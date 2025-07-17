// Definição das opções de borda recheada (permanece a mesma)
const bordas = [
  { nome: "Borda Catupiry", preco: 0 },
  { nome: "Mussarela", preco: 15.00 },
  { nome: "Cheddar", preco: 15.00 },
  { nome: "Chocolate", preco: 15.00 },
  { nome: "Vulcão Mussarela", preco: 15.00 },
  { nome: "Vulcão Cheddar", preco: 15.00 },
  { nome: "Vulcão Catupiry", preco: 15.00 },
  { nome: "Vulcão Chocolate", preco: 15.00 },
];

// --- Seção de Pizzas Salgadas ---
const pizzas = [
  {
    id: 1,
    nome: "A moda do Chef",
    imagem: "img/amodadochefe.png",
    precoBase: 75.00,
    precoBroto: 40.00,
    ingredientes: ["Contra Filé", "Tomate", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.00 }
    ],
    categoria: "pizzaSalgada" // Nova propriedade para identificar a categoria
  },
  {
    id: 2,
    nome: "A moda da Casa",
    imagem: "embreve.png",
    precoBase: 57.0,
    precoBroto: 35.0,
    ingredientes: ["Presunto", "Catupiry", "Champignon", "Lombo", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 3,
    nome: "A moda do Pizzaiolo",
    imagem: "embreve.png",
    precoBase: 55.00,
    precoBroto: 35.00,
    ingredientes: ["Atum", "Cebola", "Ovo", "Catupiry", "Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 4,
    nome: "A Boa",
    imagem: "embreve.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Escarola", "Catupiry", "Lombo", "Milho", "Alho Frito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 5,
    nome: "Alho do Norte",
    imagem: "embreve.png",
    precoBase: 50.00,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Alho", "Parmesão", "Bacon", "Champignon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 6,
    nome: "Bacon",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Ovo", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 7,
    nome: "Baianinha",
    imagem: "embreve.png",
    precoBase: 47.00,
    precoBroto: 35.0,
    ingredientes: ["Calabresa móida", "Cebola", "Tomate", "Catupiry"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 8,
    nome: "Bauru",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Tomate", "Presunto", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 9,
    nome: "Boa Dica",
    imagem: "embreve.png",
    precoBase: 49.00,
    precoBroto: 35.0,
    ingredientes: ["Presunto", "Ovo", "Ervilha", "Tomate", "Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 10,
    nome: "Brócolis",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Brócolis Refogado", "Catupiry", " Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 11,
    nome: "Baiana",
    imagem: "embreve.png",
    precoBase: 49.00,
    precoBroto: 35.0,
    ingredientes: ["Calabresa Fatiada", "Pimenta Seca", "Pimentão", "Cebola", "Ovo", "Mussarela",],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 12,
    nome: "Caipira",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Frango", "Milho", "Bacon", "Cebola"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 13,
    nome: "Calabresa",
    imagem: "img/calabresa.png",
    precoBase: 39.00,
    precoBroto: 30.0,
    ingredientes: ["Calabresa Fatiada", "Cebola"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 14,
    nome: "Calapiry",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa Fatiada", "Catupiry"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 15,
    nome: "Deliciosa",
    imagem: "embreve.png",
    precoBase: 52.00,
    precoBroto: 35.0,
    ingredientes: ["Atum Sólido", "Cebola", "Tomate", "Mussarela", "Palmito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 16,
    nome: "Dois Queijos",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Catupiry"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 17,
    nome: "Dorabelle",
    imagem: "embreve.png",
    precoBase: 50.00,
    precoBroto: 35.0,
    ingredientes: ["Frango", "Catupiry", "Milho", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 18,
    nome: "Escarola",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Escarola Refogada", "Cebola", "Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 19,
    nome: "Francesa",
    imagem: "embreve.png",
    precoBase: 52.00,
    precoBroto: 35.0,
    ingredientes: ["Presunto", "Champignon", "Catupiry", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 20,
    nome: "Frango com Catupiry",
    imagem: "img/frangocomcatupiry.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Peito de Frango desfiado"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },

  {
    id: 21,
    nome: "Frangolino",
    imagem: "embreve.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Peito de Frango desfiado", "Tomate", "Creme de Leite", "Milho", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 22,
    nome: "Gaúcha",
    imagem: "embreve.png",
    precoBase: 57.0,
    precoBroto: 35.0,
    ingredientes: ["Presunto", "Cebola", "Mussarela", "Lombo", "Palmito", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 23,
    nome: "Grécia",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa Fatiada", "Ovo", "Cebola", "Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 24,
    nome: "Loira",
    imagem: "embreve.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela", "Frango", "Milho", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 25,
    nome: "Lombo 1",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Lombo Fatiado", "Alho Frito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 26,
    nome: "Lombo 2",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Lombo Fatiado", "Palmito", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 27,
    nome: "LaGrasia",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Peito de Frango desfiado", "Bacon", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 28,
    nome: "Marguerita",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Tomate", "Parmesão", "Manjericão"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 29,
    nome: "Mista",
    imagem: "embreve.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela", "Calabresa Fatiada", "Palmito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 30,
    nome: "Morena",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa moída", "Catupiry", "Ovo", "Bacon", "Pimenta Seca"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 31,
    nome: "Mussarela",
    imagem: "img/mussarela.png",
    precoBase: 40.0,
    precoBroto: 30.0,
    ingredientes: ["Mussarela de 1ª"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 32,
    nome: "Modinha",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Frango Desfiado", "Calabresa", "Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 33,
    nome: "Napolitana",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Tomate", "Parmesão"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 34,
    nome: "Palmito",
    imagem: "embreve.png",
    precoBase: 45.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Palmito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 35,
    nome: "Paulista",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Atum", "Palmito", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 36,
    nome: "Paulistano",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Lombo Fatiado", "Tomate", "Bacon", "Cebola"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 37,
    nome: "Portuguesa",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Presunto", "Cebola", "Ervilha", "Mussarela", "Ovo"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 38,
    nome: "Peruana",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Peito de Peru", "Tomate", "Catupiry", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 39,
    nome: "Quatro Queijos",
    imagem: "img/4queijos.png",
    precoBase: 55.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Catupiry", "Provolone", "Parmesão"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 40,
    nome: "Requinte",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Peito de Frango desfiado", "Milho", "Cheddar"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 41,
    nome: "Saborosa",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Atum", "Cebola", "Ovo", "Ervilha", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },

  {
    id: 42,
    nome: "Toscana",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa", "Cebola", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 43,
    nome: "Três Queijos",
    imagem: "embreve.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela", "Provolone"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 44,
    nome: "Vila Rio Branco",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa", "Tomate", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 45,
    nome: "Alho",
    imagem: "embreve.png",
    precoBase: 44.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Alho Frito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 46,
    nome: "A Preferida",
    imagem: "embreve.png",
    precoBase: 55.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela", "Carne Seca", "Pimentão", "Palmito", "Pimenta"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 47,
    nome: "Catumilho",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Milho"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 48,
    nome: "Piripiri",
    imagem: "embreve.png",
    precoBase: 47.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa Moída", "Cebola", "Mussarela", "Pimenta Seca"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 49,
    nome: "Peito de Peru",
    imagem: "embreve.png",
    precoBase: 57.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela de Búfala", "Peito de Peru", "Palmito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 50,
    nome: "Atum com Mussarela",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Atum", "Cebola", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 51,
    nome: "Camarão",
    imagem: "img/camarao.png",
    precoBase: 70.0,
    precoBroto: 45.0,
    ingredientes: ["Mussarela", "Camarão"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 52,
    nome: "Carne Seca 1",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Carne Seca", "Cebola", "Mussarela", "Alho"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 53,
    nome: "Carne Seca 2",
    imagem: "embreve.png",
    precoBase: 55.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela", "Carne Seca", "Tomate", "Alho Poró", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 54,
    nome: "Jardineira",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Brocólis", "Escarola", "Milho", "Palmito"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 55,
    nome: "Mineirinha",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Calabresa Moída", "Catupiry", "Cebola", "Champignon", "Mussarela", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 56,
    nome: "Pepperone",
    imagem: "embreve.png",
    precoBase: 57.0,
    precoBroto: 35.0,
    ingredientes: ["Catupiry", "Mussarela", "Pepperone"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 57,
    nome: "Portuga",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Peito de Peru", "Ervilha", "Ovo", "Pimentão", "Bacon"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 58,
    nome: "Nordestina",
    imagem: "embreve.png",
    precoBase: 55.0,
    precoBroto: 35.0,
    ingredientes: ["Carne Seca", "Mandioca", "Mussarela"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
  {
    id: 59,
    nome: "Batatosa",
    imagem: "embreve.png",
    precoBase: 49.0,
    precoBroto: 35.0,
    ingredientes: ["Mussarela", "Batata Frita", "Orégano"],
    extras: [
      { nome: "bacon", preco: 7.0 },
      { nome: "cheddar", preco: 15.0 }
    ],
    categoria: "pizzaSalgada"
  },
];

// --- Seção de Pizzas Doces ---
const pizzasDoces = [
  {
    id: 60,
    nome: "Banana",
    imagem: "img/banana.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Banana", "Chocolate", "Canela", "Leite Condensado"],
    extras: [],
    categoria: "pizzaDoce"
  },
  {
    id: 61,
    nome: "Morango",
    imagem: "img/morango.png",
    precoBase: 55.0,
    precoBroto: 37.0,
    ingredientes: ["Morango", "Chocolate", "Leite Condensado"],
    extras: [],
    categoria: "pizzaDoce"
  },
  {
    id: 62,
    nome: "Prestígio",
    imagem: "img/prestigio.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Coco Ralado", "Chocolate", "Leite Condensado"],
    extras: [],
    categoria: "pizzaDoce"
  },
  {
    id: 63,
    nome: "Romeu e Julieta",
    imagem: "embreve.png",
    precoBase: 52.0,
    precoBroto: 35.0,
    ingredientes: ["Goiabada", "Mussarela"],
    extras: [],
    categoria: "pizzaDoce"
  },
  {
    id: 64,
    nome: "Kit Kat",
    imagem: "img/kitkat.png",
    precoBase: 65.0,
    precoBroto: 40.0,
    ingredientes: ["Kit Kat", "Chocolate"],
    extras: [],
    categoria: "pizzaDoce"
  },
  {
    id: 65,
    nome: "M&M'S",
    imagem: "embreve.png",
    precoBase: 50.0,
    precoBroto: 35.0,
    ingredientes: ["Chocolate", "M&M'S"],
    extras: [],
    categoria: "pizzaDoce"
  },
];

// --- Seção de Esfihas ---
const esfihas = [
  {
    id: 66,
    nome: "Carne",
    imagem: "embreve.png",
    precoBase: 2.50,
    categoria: "esfiha"
  },
  {
    id: 67,
    nome: "Queijo",
    imagem: "embreve.png",
    precoBase: 4.00,
    categoria: "esfiha"
  },
  {
    id: 68,
    nome: "Calabresa",
    imagem: "embreve.png",
    precoBase: 2.50,
    categoria: "esfiha"
  },
  {
    id: 69,
    nome: "Frango com Catupiry",
    imagem: "embreve.png",
    precoBase: 4.50,
    categoria: "esfiha"
  },
  {
    id: 70,
    nome: "Frango com Queijo",
    imagem: "embreve.png",
    precoBase: 4.50,
    categoria: "esfiha"
  },
  {
    id: 71,
    nome: "Presunto com Queijo",
    imagem: "embreve.png",
    precoBase: 5.00,
    categoria: "esfiha"
  },
  {
    id: 72,
    nome: "Atum com Queijo",
    imagem: "embreve.png",
    precoBase: 5.00,
    categoria: "esfiha"
  },
  {
    id: 73,
    nome: "Camarão com Queijo",
    imagem: "embreve.png",
    precoBase: 12.00,
    categoria: "esfiha"
  },
  {
    id: 74,
    nome: "Catupiry",
    imagem: "embreve.png",
    precoBase: 4.00,
    categoria: "esfiha"
  },
  {
    id: 75,
    nome: "Escarola com Queijo",
    imagem: "embreve.png",
    precoBase: 4.50,
    categoria: "esfiha"
  },
  {
    id: 76,
    nome: "Calabresa com Queijo",
    imagem: "embreve.png",
    precoBase: 4.50,
    categoria: "esfiha"
  },
  // Adicione mais esfihas salgadas aqui
];

// --- Seção de Esfihas Doces ---
const esfihasDoces = [
  {
    id: 77,
    nome: "Chocolate",
    imagem: "embreve.png",
    precoBase: 6.0,
    categoria: "esfihaDoce"
  },
  {
    id: 78,
    nome: "Goiabada com Queijo",
    imagem: "embreve.png",
    precoBase: 9.0,
    categoria: "esfihaDoce"
  },
  {
    id: 79,
    nome: "Banana",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaDoce"
  },
  {
    id: 80,
    nome: "Prestígio",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaDoce"
  },
  {
    id: 81,
    nome: "Banana com Mussarela",
    imagem: "embreve.png",
    precoBase: 8.0,
    categoria: "esfihaDoce"
  },
  {
    id: 82,
    nome: "M&M'S",
    imagem: "embreve.png",
    precoBase: 8.0,
    categoria: "esfihaDoce"
  },
  {
    id: 83,
    nome: "Brigadeiro",
    imagem: "embreve.png",
    precoBase: 8.0,
    categoria: "esfihaDoce"
  },

  // Adicione mais esfihas doces aqui
];

// --- Seção de Esfihas Fechadas ---
const esfihasFechadas = [
  {
    id: 84,
    nome: "Carne",
    imagem: "embreve.png",
    precoBase: 5.0,
    categoria: "esfihaFechada"
  },
  {
    id: 85,
    nome: "Queijo",
    imagem: "embreve.png",
    precoBase: 5.0,
    categoria: "esfihaFechada"
  },
  {
    id: 86,
    nome: "Frango",
    imagem: "embreve.png",
    precoBase: 5.0,
    categoria: "esfihaFechada"
  },
  {
    id: 87,
    nome: "Calabresa",
    imagem: "embreve.png",
    precoBase: 5.0,
    categoria: "esfihaFechada"
  },
  {
    id: 88,
    nome: "Atum",
    imagem: "embreve.png",
    precoBase: 5.0,
    categoria: "esfihaFechada"
  },
  {
    id: 89,
    nome: "Calabresa com Queijo",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaFechada"
  },
  {
    id: 90,
    nome: "Carne com Queijo",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaFechada"
  },
  {
    id: 91,
    nome: "Frango com Queijo",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaFechada"
  },
  {
    id: 92,
    nome: "Frango com Catupiry",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaFechada"
  },
  {
    id: 93,
    nome: "Carne Seca",
    imagem: "embreve.png",
    precoBase: 7.0,
    categoria: "esfihaFechada"
  },
  // Adicione mais esfihas fechadas aqui
];

// --- Seção de Porções ---
const porcoes = [
  {
    id: 94,
    nome: "Mista",
    imagem: "img/porcao.png",
    precoBase: 80.0,
    categoria: "porcao"
  },
  {
    id: 95,
    nome: "Carne de Sol com Mandioca",
    imagem: "embreve.png",
    precoBase: 70.0,
    categoria: "porcao"
  },
  {
    id: 96,
    nome: "Batata Frita",
    imagem: "embreve.png",
    precoBase: 20.0,
    categoria: "porcao"
  },
  {
    id: 97,
    nome: "Contra Filé",
    imagem: "embreve.png",
    precoBase: 60.0,
    categoria: "porcao"
  },
  {
    id: 98,
    nome: "Calabresa",
    imagem: "embreve.png",
    precoBase: 30.0,
    categoria: "porcao"
  },
  {
    id: 99,
    nome: "Frango a Passarinho",
    imagem: "embreve.png",
    precoBase: 35.0,
    categoria: "porcao"
  },
  // Adicione mais porções aqui
];

// --- Seção de Beirutes ---
const beirutes = [
  {
    id: 100,
    nome: "Contra Filé",
    imagem: "embreve.png",
    precoBase: 45.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  },
  {
    id: 102,
    nome: "Peito de Peru",
    imagem: "embreve.png",
    precoBase: 40.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  },
  {
    id: 103,
    nome: "Frango Desfiado",
    imagem: "embreve.png",
    precoBase: 37.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  },
  {
    id: 104,
    nome: "Bacon",
    imagem: "embreve.png",
    precoBase: 40.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  },
  {
    id: 105,
    nome: "Calabresa",
    imagem: "embreve.png",
    precoBase: 32.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  },
  {
    id: 106,
    nome: "Carne Seca",
    imagem: "embreve.png",
    precoBase: 45.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  },
  {
    id: 107,
    nome: "Quatro Queijos",
    imagem: "embreve.png",
    precoBase: 45.0,
    ingredientes: ["Pão sírio", "Mussarela", "Presunto", "Maionese", "Ovo", "Alface", "Tomate"],
    extras: [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Catupiry", preco: 4.0 },
      { nome: "Cheddar", preco: 4.0 }
    ],
    categoria: "beirute",
  }   // Adicione mais beirutes aqui
];

// --- Seção A la Carte ---
const aLaCarte = [
  {
    id: 108,
    nome: "Carne Seca Acebolada",
    imagem: "embreve.png",
    precoBase: 40.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 109,
    nome: "Omelete Misto",
    imagem: "embreve.png",
    precoBase: 23.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 110,
    nome: "Calabresa Acebolada",
    imagem: "embreve.png",
    precoBase: 23.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 111,
    nome: "Filé de Frango",
    imagem: "embreve.png",
    precoBase: 25.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 112,
    nome: "Filé de Frango a Milanesa",
    imagem: "embreve.png",
    precoBase: 29.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 113,
    nome: "Contra Filé Grelhado",
    imagem: "embreve.png",
    precoBase: 30.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 114,
    nome: "Contra Filé Acebolado",
    imagem: "embreve.png",
    precoBase: 32.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 115,
    nome: "Contra Filé a Cavalo",
    imagem: "embreve.png",
    precoBase: 34.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  },
  {
    id: 116,
    nome: "Contra Filé a Milanesa",
    imagem: "embreve.png",
    precoBase: 35.0,
    ingredientes: ["Arroz", "Feijão", "Fritas", "Saladas"],
    categoria: "aLaCarte",
  }

  // Adicione mais itens A la Carte aqui
];

// --- Seção Lanches ---
const lanches = [
  {
    id: 117,
    nome: "X-Bacon",
    imagem: "embreve.png",
    precoBase: 24.0,
    extras: [{ nome: "bacon", preco: 4.0 }],
    categoria: "lanche"
  },
  {
    id: 118,
    nome: "X-Burguer",
    imagem: "embreve.png",
    precoBase: 21.0,
    extras: [{ nome: "ovo", preco: 3.0 }],
    categoria: "lanche"
  },
  {
    id: 119,
    nome: "X-Tudo",
    imagem: "img/xtudo.png",
    precoBase: 26.0,
    extras: [{ nome: "ovo", preco: 3.0 }],
    categoria: "lanche"
  },
  {
    id: 120,
    nome: "X-Salada",
    imagem: "embreve.png",
    precoBase: 24.0,
    extras: [{ nome: "ovo", preco: 3.0 }],
    categoria: "lanche"
  },
  {
    id: 121,
    nome: "X-Egg",
    imagem: "embreve.png",
    precoBase: 23.0,
    extras: [{ nome: "ovo", preco: 3.0 }],
    categoria: "lanche"
  },
  // Adicione mais lanches aqui
];

// --- Seção Pastéis ---
const pasteis = [
  {
    id: 122,
    nome: "Calabresa",
    imagem: "embreve.png",
    precoBase: 10.0,
    categoria: "pastel",
  },
  {
    id: 123,
    nome: "Queijo",
    imagem: "embreve.png",
    precoBase: 10.0,
    categoria: "pastel",
  },
  {
    id: 124,
    nome: "Pizza",
    imagem: "embreve.png",
    precoBase: 10.0,
    categoria: "pastel",
  },
  {
    id: 125,
    nome: "Bauru",
    imagem: "embreve.png",
    precoBase: 10.0,
    categoria: "pastel",
  },
  {
    id: 126,
    nome: "Carne",
    imagem: "embreve.png",
    precoBase: 10.0,
    categoria: "pastel",
  },
  {
    id: 127,
    nome: "Queijo",
    imagem: "embreve.png",
    precoBase: 10.0,
    categoria: "pastel",
  },
  {
    id: 123,
    nome: "Frango com Catupiry",
    imagem: "embreve.png",
    precoBase: 12.0,
    categoria: "pastel",
  },
  // Adicione mais pasteis aqui
];

// --- Seção Bebidas ---
const bebidas = [
  {
    id: 124,
    nome: "Coca-Cola Lata",
    imagem: "img/cocalata.jpg",
    precoBase: 6.0,
    categoria: "bebida"
  },
  {
    id: 125,
    nome: "Guaraná Lata",
    imagem: "img/guaranalata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 126,
    nome: "Fanta Laranja Lata",
    imagem: "img/fantalaranjalata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 127,
    nome: "Fanta Uva Lata",
    imagem: "img/fantauvalata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 128,
    nome: "Sprite Lata",
    imagem: "img/spritelata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 129,
    nome: "Soda Lata",
    imagem: "img/sodalata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 130,
    nome: "Água Tônica Lata",
    imagem: "img/aguatonicalata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 131,
    nome: "Schweppes Lata",
    imagem: "img/schweppeslata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 132,
    nome: "Dell Vale Lata",
    imagem: "img/dellvalelata.jpg",
    precoBase: 6.00,
    categoria: "bebida"
  },
  {
    id: 133,
    nome: " Coca Cola 2L",
    imagem: "img/coca2l.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 134,
    nome: "Tubaína 2L",
    imagem: "img/tubaina2l.jpg",
    precoBase: 15.00,
    categoria: "bebida"
  },
  {
    id: 135,
    nome: "Dolly 2L",
    imagem: "img/dolly2.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 136,
    nome: "It 2L",
    imagem: "img/it2l.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 138,
    nome: "Red Bull",
    imagem: "img/redbull.jpg",
    precoBase: 15.00,
    categoria: "bebida"
  },
  {
    id: 139,
    nome: "Monster",
    imagem: "img/monster.jpg",
    precoBase: 12.00,
    categoria: "bebida"
  },
  {
    id: 140,
    nome: "Água sem Gás 500ml",
    imagem: "img/aguasgas.jpg",
    precoBase: 3.50,
    categoria: "bebida"
  },
  {
    id: 141,
    nome: "Água com Gás 500ml",
    imagem: "img/aguacgas.jpg",
    precoBase: 4.50,
    categoria: "bebida"
  },
  {
    id: 142,
    nome: "Água sem Gás 1,5L",
    imagem: "img/aguasgas1.jpg",
    precoBase: 7.00,
    categoria: "bebida"
  },
  {
    id: 143,
    nome: "Dell Vale 1L",
    imagem: "img/dellvale1.jpg",
    precoBase: 15.00,
    categoria: "bebida"
  },
  {
    id: 144,
    nome: "Suco Prat's 1L",
    imagem: "img/prats.jpg",
    precoBase: 12.00,
    categoria: "bebida"
  },
  {
    id: 145,
    nome: "Suco Natural Acerola 350ml",
    imagem: "img/acerola1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 146,
    nome: "Suco Natural Abacaxi 350ml",
    imagem: "img/abacaxi1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 147,
    nome: "Suco Natural Manga 350ml",
    imagem: "img/manga1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 148,
    nome: "Suco Natural Limão 350ml",
    imagem: "img/limao1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 149,
    nome: "Suco Natural Melância 350ml",
    imagem: "img/melancia1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 150,
    nome: "Suco Natural Maracujá 350ml",
    imagem: "img/maracuja1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 151,
    nome: "Suco Natural Morango 350ml",
    imagem: "img/morango1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 152,
    nome: "Suco Natural Laranja 350ml",
    imagem: "img/laranja1.jpg",
    precoBase: 10.00,
    categoria: "bebida"
  },
  {
    id: 153,
    nome: "Suco Natural Acerola 1L",
    imagem: "img/acerola1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 154,
    nome: "Suco Natural Abacaxi 1L",
    imagem: "img/abacaxi1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 155,
    nome: "Suco Natural Manga 1L",
    imagem: "img/manga1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 156,
    nome: "Suco Natural Limão 1L",
    imagem: "img/limao1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 157,
    nome: "Suco Natural Melância 1L",
    imagem: "img/melancia1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 158,
    nome: "Suco Natural Maracujá 1L",
    imagem: "img/maracuja1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 159,
    nome: "Suco Natural Morango 1L",
    imagem: "img/morango1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },
  {
    id: 160,
    nome: "Suco Natural Laranja 1L",
    imagem: "img/laranja1.jpg",
    precoBase: 17.00,
    categoria: "bebida"
  },

  // Adicione mais bebidas aqui
];

const cervejas600ml = [
  {
    id: 161,
    nome: "Skol 600ml",
    imagem: "img/skol600.jpg",
    precoBase: 10.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 162,
    nome: "Itaipava 600ml",
    imagem: "img/itaipava600.jpg",
    precoBase: 10.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 163,
    nome: "Petra 600ml",
    imagem: "img/petra600.jpg",
    precoBase: 12.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 164,
    nome: "Amstel 600ml",
    imagem: "img/amstel600.jpg",
    precoBase: 12.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 165,
    nome: "Original 600ml",
    imagem: "img/original600.jpg",
    precoBase: 12.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 166,
    nome: "Brahma 600ml",
    imagem: "img/brahma600.jpg",
    precoBase: 12.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 167,
    nome: "Spaten 600ml",
    imagem: "img/spaten600.jpg",
    precoBase: 12.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 168,
    nome: "Eisenbahn 600ml",
    imagem: "img/eisenbahn600.jpg",
    precoBase: 11.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 169,
    nome: "Heineken 600ml",
    imagem: "img/heineken.jpg",
    precoBase: 15.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 170,
    nome: "Cerveja Lata 350ml",
    imagem: "img/cervejalata350.jpg",
    precoBase: 6.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 171,
    nome: "Cerveja Latão 550ml",
    imagem: "img/cervejalata550.jpg",
    precoBase: 8.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 172,
    nome: "Cerveja Latinha 269ml",
    imagem: "img/cervejalata269.jpg",
    precoBase: 5.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  {
    id: 173,
    nome: "Longneck",
    imagem: "img/longneck.jpg",
    precoBase: 12.00,
    ingredientes: ["Cerveja Pilsen"],
    extras: [],
    categoria: "cerveja600ml",
  },
  // Adicione mais cervejas de 600ml aqui
];


// Carrinho e controle de meio a meio (permanece o mesmo)
let carrinho = { itens: [], total: 0 };
let totalCarrinho = 0;
let meioMeioSelecionado = { primeira: null, segunda: null, tamanho: "normal", borda: bordas };

// --- Função principal para renderizar todas as seções ---
function renderizarTodasAsSecoes() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Limpa o conteúdo atual

  // Array de objetos para controlar a renderização de cada seção
  const secoes = [
    { titulo: "Pizzas Salgadas", dados: pizzas, tipo: "pizzaSalgada", podeTerMeioMeio: true, podeTerBorda: true, podeTerTamanho: true },
    { titulo: "Pizzas Doces", dados: pizzasDoces, tipo: "pizzaDoce", podeTerMeioMeio: false, podeTerBorda: true, podeTerTamanho: true },
    { titulo: "Esfihas", dados: esfihas, tipo: "esfiha", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Esfihas Doces", dados: esfihasDoces, tipo: "esfihaDoce", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Esfihas Fechadas", dados: esfihasFechadas, tipo: "esfihaFechada", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Porções", dados: porcoes, tipo: "porcao", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Beirutes", dados: beirutes, tipo: "beirute", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "A la Carte", dados: aLaCarte, tipo: "aLaCarte", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Lanches", dados: lanches, tipo: "lanche", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Pastéis", dados: pasteis, tipo: "pastel", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Bebidas", dados: bebidas, tipo: "bebida", podeTerMeioMeio: false, podeTerBorda: false, podeTerTamanho: false },
    { titulo: "Cervejas 600ml", dados: cervejas600ml, tipo: "cerveja600ml" }
  ];

  secoes.forEach(secao => {
    if (secao.dados.length > 0) { // Renderiza apenas se houver itens na seção
      const sectionElement = document.createElement('section');
      sectionElement.innerHTML = `<h2 class="section-title">${secao.titulo}</h2>`;
      const grid = document.createElement('div');
      grid.className = 'grid';

      secao.dados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card'; // Nome genérico para o card
        let precoDisplay = `R$${item.precoBase.toFixed(2)}`;

        if (item.precoBroto) { // Se for pizza, exibe o preço broto
          precoDisplay = `Normal: R$${item.precoBase.toFixed(2)} | Broto: R$${item.precoBroto.toFixed(2)}`;
        }

        const ingredientsList = item.ingredientes && item.ingredientes.length > 0
          ? `<p><strong>Ingredientes:</strong></p><ul class="ingredients-list">${item.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>`
          : '';

        const meioMeioButton = secao.podeTerMeioMeio
          ? `<button class="button" onclick="iniciarMeioMeio(${item.id})">Meio a Meio</button>`
          : '';

        card.innerHTML = `
          <h3>${item.nome}</h3>
          <img src="${item.imagem}" alt="${item.nome}">
          ${ingredientsList}
          <p>${precoDisplay}</p>
          <button class="button" onclick="abrirModalItem(${item.id}, '${secao.tipo}')">Adicionar</button>
          ${meioMeioButton}
        `;
        grid.appendChild(card);
      });
      sectionElement.appendChild(grid);
      app.appendChild(sectionElement);
    }
  });

  atualizarCarrinho();
}

// --- Modal para escolher tamanho, borda e extras ---
function abrirModalItem(itemId, tipoItem) {
  let item;
  let dataSource;

  // Determinar a fonte de dados com base no tipoItem
  if (tipoItem === "pizzaSalgada") dataSource = pizzas;
  else if (tipoItem === "pizzaDoce") dataSource = pizzasDoces;
  else if (tipoItem === "esfiha") dataSource = esfihas;
  else if (tipoItem === "esfihaDoce") dataSource = esfihasDoces;
  else if (tipoItem === "esfihaFechada") dataSource = esfihasFechadas;
  else if (tipoItem === "porcao") dataSource = porcoes;
  else if (tipoItem === "beirute") dataSource = beirutes;
  else if (tipoItem === "aLaCarte") dataSource = aLaCarte;
  else if (tipoItem === "lanche") dataSource = lanches;
  else if (tipoItem === "pastel") dataSource = pasteis;
  else if (tipoItem === "bebida") dataSource = bebidas;
  else if (tipoItem === "cerveja600ml") dataSource = cervejas600ml;
  else return; // Caso o tipoItem não seja reconhecido

  item = dataSource.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.createElement('div');
  modal.className = 'modal-bg';

  let tamanhoOptions = '';
  if (tipoItem === "pizzaSalgada" || tipoItem === "pizzaDoce") {
    tamanhoOptions = `
      <p>Escolha o tamanho:</p>
      <select id="tamanhoItem">
        <option value="normal" selected>Normal - R$${item.precoBase.toFixed(2)}</option>
        <option value="broto">Broto - R$${item.precoBroto.toFixed(2)}</option>
      </select>
    `;
  } else {
    // Para outros itens, exibe apenas o preço base, não há opção de tamanho diferente por enquanto
    tamanhoOptions = `
      <p>Preço: R$${item.precoBase.toFixed(2)}</p>
      <input type="hidden" id="tamanhoItem" value="normal">
    `;
  }

  let bordaOptions = '';
  if (tipoItem === "pizzaSalgada" || tipoItem === "pizzaDoce") {
    bordaOptions = `
      <p>Borda recheada:</p>
      <select id="bordaItem">
        ${bordas.map((b, i) => {
      if (tipoItem === 'pizzaDoce') {
        return b.nome === "Chocolate" ? `<option value="${i}">${b.nome} ${b.preco > 0 ? `(+R$${b.preco.toFixed(2)})` : ''}</option>` : '';
      } else if (tipoItem === 'pizzaSalgada') {
        return b.nome === "Chocolate" ? '' : `<option value="${i}">${b.nome} ${b.preco > 0 ? `(+R$${b.preco.toFixed(2)})` : ''}</option>`;
      }
      return ''; // Não deveria chegar aqui para pizzas
    }).join('')}
      </select>
    `;
  } else {
    bordaOptions = `<input type="hidden" id="bordaItem" value="0">`; // Não há borda para outros itens
  }

  let extrasOptions = '';
  if (item.extras && item.extras.length > 0) {
    extrasOptions = `
      <p>Adicionais:</p>
      ${item.extras.map((extra, i) => `
        <label>
          <input type="checkbox" class="extra-item" data-price="${extra.preco}" value="${extra.nome}">
          ${extra.nome} (+R$${extra.preco.toFixed(2)})
        </label><br>
      `).join('')}
    `;
  }

  let totalCarrinho = 0;
  modal.innerHTML = `
    <div class="modal">
      <h2>${item.nome}</h2>
      ${tamanhoOptions}
      ${bordaOptions}
      ${extrasOptions}
      <button class="button" onclick="confirmarAdicionar(${item.id}, '${tipoItem}')">Adicionar ao carrinho</button>
      <button class="button" onclick="fecharModal()">Cancelar</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function fecharModal() {
  const modal = document.querySelector('.modal-bg');
  if (modal) modal.remove();
}

function confirmarAdicionar(itemId, tipoItem) {
  let item;
  let dataSource;

  if (tipoItem === "pizzaSalgada") dataSource = pizzas;
  else if (tipoItem === "pizzaDoce") dataSource = pizzasDoces;
  else if (tipoItem === "esfiha") dataSource = esfihas;
  else if (tipoItem === "esfihaDoce") dataSource = esfihasDoces;
  else if (tipoItem === "esfihaFechada") dataSource = esfihasFechadas;
  else if (tipoItem === "porcao") dataSource = porcoes;
  else if (tipoItem === "beirute") dataSource = beirutes;
  else if (tipoItem === "aLaCarte") dataSource = aLaCarte;
  else if (tipoItem === "lanche") dataSource = lanches;
  else if (tipoItem === "pastel") dataSource = pasteis;
  else if (tipoItem === "bebida") dataSource = bebidas;
  else if (tipoItem === "cerveja600ml") dataSource = cervejas600ml;
  else return;

  item = dataSource.find(i => i.id === itemId);
  if (!item) return;

  let preco = item.precoBase;
  let tamanho = 'N/A';
  let borda = { nome: "N/A", preco: 0 };
  let extrasSelecionados = [];

  // Lógica para tamanho (apenas pizzas)
  const tamanhoSelect = document.getElementById('tamanhoItem');
  if (tamanhoSelect && (tipoItem === "pizzaSalgada" || tipoItem === "pizzaDoce")) {
    tamanho = tamanhoSelect.value;
    preco = tamanho === "broto" ? item.precoBroto : item.precoBase;
  }

  // Lógica para borda (apenas pizzas)
  const bordaSelect = document.getElementById('bordaItem');
  if (bordaSelect && (tipoItem === "pizzaSalgada" || tipoItem === "pizzaDoce")) {
    const bordaIndex = parseInt(bordaSelect.value);
    borda = bordas[bordaIndex];
    preco += borda.preco;
  }

  // Lógica para extras
  const checkboxesExtras = document.querySelectorAll('.extra-item:checked');
  checkboxesExtras.forEach(checkbox => {
    const extraNome = checkbox.value;
    const extraPreco = parseFloat(checkbox.dataset.price);
    extrasSelecionados.push({ nome: extraNome, preco: extraPreco });
    preco += extraPreco;
  });

  console.log(item);

  carrinho.itens.push({
    item, // O item original completo
    nomePersonalizado: item.nome, // Para facilitar a exibição no carrinho
    tamanho,
    borda,
    extrasSelecionados,
    preco, // Preço total do item com tamanho, borda e extras
    quantidade: 1,
    meioMeio: false,
    categoria: tipoItem // Adiciona a categoria para diferenciação no carrinho
  });
  fecharModal();
  showToast("Produto adicionado!");
  atualizarCarrinho();
}

// Lógica para meio a meio (exclusivo para pizzas salgadas)
function iniciarMeioMeio(pizzaId) {
  meioMeioSelecionado.primeira = pizzas.find(p => p.id === pizzaId);
  meioMeioSelecionado.segunda = null;

  const modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal">
      <h2>Meio a Meio - Primeira metade: ${meioMeioSelecionado.primeira.nome}</h2>
      <p>Escolha a segunda metade:</p>
      <select id="segundaMetadeSelect">
        ${pizzas.filter(p => p.id !== pizzaId).map(p => `<option value="${p.id}">${p.nome}</option>`).join('')}
      </select>
      <p>Escolha o tamanho:</p>
      <select id="tamanhoMeioMeio">
        <option value="normal" selected>Normal</option>
        <option value="broto">Broto</option>
      </select>
      <p>Borda recheada:</p>
      <select id="bordaMeioMeio">
        ${bordas.map((b, i) => b.nome === "Chocolate" ? '' : `<option value="${i}">${b.nome} ${b.preco > 0 ? `(+R$${b.preco.toFixed(2)})` : ''}</option>`).join('')}
      </select>
      <button class="button" onclick="confirmarMeioMeio()">Adicionar ao carrinho</button>
      <button class="button" onclick="fecharModal()">Cancelar</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function confirmarMeioMeio() {
  const segundaId = parseInt(document.getElementById('segundaMetadeSelect').value);
  meioMeioSelecionado.segunda = pizzas.find(p => p.id === segundaId);
  const tamanho = document.getElementById('tamanhoMeioMeio').value;
  const bordaIndex = parseInt(document.getElementById('bordaMeioMeio').value);
  const borda = bordas[bordaIndex];

  let precoPrimeira = tamanho === "broto" ? meioMeioSelecionado.primeira.precoBroto : meioMeioSelecionado.primeira.precoBase;
  let precoSegunda = tamanho === "broto" ? meioMeioSelecionado.segunda.precoBroto : meioMeioSelecionado.segunda.precoBase;
  let preco = Math.max(precoPrimeira, precoSegunda) + borda.preco;

  carrinho.itens.push({
    meioMeio: true,
    primeira: meioMeioSelecionado.primeira,
    segunda: meioMeioSelecionado.segunda,
    tamanho,
    borda,
    preco,
    quantidade: 1,
    categoria: "pizzaSalgada" // Mantém a categoria para meio a meio
  });
  showToast("Produto adicionado!");
  fecharModal();
  atualizarCarrinho();
}

// --- Carrinho ---
function atualizarCarrinho() {
  const sidebar = document.getElementById('cart-sidebar');
  sidebar.innerHTML = '';
  const carrinhoDiv = document.createElement('div');
  carrinhoDiv.className = 'cart';
  carrinhoDiv.innerHTML = '<h3>Carrinho</h3>';
  let total = 0;

  if (carrinho.itens.length === 0) {
    carrinhoDiv.innerHTML += '<p>Seu carrinho está vazio.</p>';
  }

  carrinho.itens.forEach((item, index) => {

    let desc;
    if (item.meioMeio) {
      desc = `Meio a Meio: ${item.primeira.nome} / ${item.segunda.nome} (${item.tamanho}) - Borda: ${item.borda.nome}`;
    } else {
      desc = `${item.nomePersonalizado}`;
      if (item.tamanho && item.tamanho !== 'N/A') {
        desc += ` (${item.tamanho})`;
      }
      if (item.borda && item.borda.nome !== 'N/A') {
        desc += ` - Borda: ${item.borda.nome}`;
      }
      if (item.extrasSelecionados && item.extrasSelecionados.length > 0) {
        desc += ` + ${item.extrasSelecionados.map(e => e.nome).join(', ')}`;
      }
    }
    total += item.preco * item.quantidade;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${desc} - R$${(item.preco * item.quantidade).toFixed(2)}</span>
      <button class="remove-btn" onclick="removerDoCarrinho(${index})">&times;</button>
    `;
    carrinhoDiv.appendChild(itemDiv);
  });
  carrinho.total = total;
  totalCarrinho = total;
  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<strong>Total: R$${total.toFixed(2)}</strong>`;
  carrinhoDiv.appendChild(totalDiv);

  const finalizarBtn = document.createElement('button');
  finalizarBtn.className = 'button';
  finalizarBtn.textContent = 'Finalizar Pedido'; // Texto do botão atualizado
  finalizarBtn.onclick = finalizarPedido; // Chama a nova função
  finalizarBtn.disabled = carrinho.itens.length === 0;
  carrinhoDiv.appendChild(finalizarBtn);

  const limparBtn = document.createElement('button');
  limparBtn.className = 'button';
  limparBtn.textContent = 'Limpar Carrinho';
  limparBtn.style.background = '#c00';
  limparBtn.style.color = '#fff';
  limparBtn.onclick = limparCarrinho;
  carrinhoDiv.appendChild(limparBtn);

  sidebar.appendChild(carrinhoDiv);
}

function limparCarrinho() {
  carrinho.itens = [];
  atualizarCarrinho();
  fecharMenuMobile();
  showToast("Carrinho limpo!");
}

function removerDoCarrinho(index) {
  carrinho.itens.splice(index, 1);
  atualizarCarrinho();
  showToast("Produto removido!");
}

// Fecha menu hambúrguer ao finalizar ou limpar no mobile
function fecharMenuMobile() {
  const cartToggle = document.getElementById('cart-toggle');
  if (window.innerWidth <= 700 && cartToggle) {
    cartToggle.checked = false;
  }
}

// NOVA FUNÇÃO: Finaliza o pedido salvando no localStorage e redirecionando
function finalizarPedido() {
  if (carrinho.itens.length === 0) {
    showToast("Seu carrinho está vazio!");
    return;
  }

  // Salva o carrinho no localStorage antes de redirecionar
  localStorage.setItem('carrinho', JSON.stringify(carrinho.itens));
  localStorage.setItem('totalCarrinho', totalCarrinho.toFixed(2)); // Certifique-se que 'totalCarrinho' está sendo atualizado em 'renderizarCarrinho' ou 'atualizarCarrinho'

  // Redireciona para a página de checkout
  window.location.href = 'checkout.html';

  fecharMenuMobile(); // Garante que o menu móvel seja fechado
}

// Inicialização
window.onload = () => {
  renderizarTodasAsSecoes();
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = 'toast';
  }, 1800);
}
