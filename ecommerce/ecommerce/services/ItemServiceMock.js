const itemList = [
  {
    id: 1,
    titulo: "Aspirador de pó",
    descricao:
      "Aspirador de Pó Vertical e Portátil de Mão 2 em 1 WAP HIGH SPEED 1000W 1,2 litros Filtro HEPA 127V",
    valor: 150.99,
    imagem: require("../assets/products/aspirador.jpg"),
  },
  {
    id: 2,
    titulo: "Power Bank",
    descricao: "Belkin BPB006BT USB-C 10000mAh Power Bank",
    valor: 90.99,
    imagem: require("../assets/products/power-bank.jpg"),
  },
  {
    id: 3,
    titulo: "Smartphone",
    descricao:
      "Smartphone Samsung Galaxy A32 128GB Violeta 4G - 4GB RAM Tela 6,4 Câm. Quádrupla + Selfie 20MP",
    valor: 1150.99,
    imagem: require("../assets/products/smartphone.jpg"),
  }
];

export const getItens = () => {
  return itemList;
};