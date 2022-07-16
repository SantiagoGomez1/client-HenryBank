export const dataa = [
  {
    id: 1,
    fullName: "Santiago Gomez",
    image: "https://images.ole.com.ar/2021/11/26/WAiNp6lrL_340x340__1.jpg",
    birthday: "26-09-1999",
    years: 22,
  },
  {
    id: 2,
    fullName: "Maximiliano Guerra",
    image: "https://images.ole.com.ar/2021/11/26/WAiNp6lrL_340x340__1.jpg",
    birthday: "25-03-1997",
    years: 25,
  },
  {
    id: 3,
    fullName: "Brian Vazquez",
    image:
      "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/06/hipertextual-mark-zuckerberg-defiende-ante-sus-empleados-decision-no-censurar-donald-trump-2020065553.jpg?fit=2000%2C1333&ssl=1",
    birthday: "26-09-2002",
    years: 20,
    capital: "25000,00",
    cbu:"12-42-24-1445",
    movimientos: [
      {
        id: 1,
        name: "Apple",
        date: "May 25, 2022",
        amount: "-$2400,00",
        icon: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png",
      },
      {
        id: 2,
        name: "Shell",
        date: "May 25, 2022",
        amount: "-$2400,00",
        icon: "http://assets.stickpng.com/images/5954bb45deaf2c03413be353.png",
      },
      {
        id: 3,
        name: "Amazon",
        date: "May 25, 2022",
        amount: "-$2400,00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      },
      {
        id: 4,
        name: "Netflix",
        date: "May 25, 2022",
        amount: "-$2400,00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png",
      },
      {
        id: 5,
        name: "Carrefour",
        date: "May 25, 2022",
        amount: "-$2400,00",
        icon: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
      },
      {
        id: 6,
        name: "Twitch",
        date: "May 25, 2022",
        amount: "-$2400,00",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968819.png",
      },
    ],
    movements:
    {
      "recharges": [
          {
              "idOp": "56a7b306-7a25-4c6f-855c-c00cf2ee197d",
              "image-icon-paper": "plus-circle-outline",
              "amount": "+80125",
              "date": "15/7/2022",
              "hour": "19:25:17"
          },
          {
              "idOp": "100dfb2b-0d80-40fd-bbeb-40d2c75f35d3",
              "image-icon-paper": "plus-circle-outline",
              "amount": "+125",
              "date": "15/7/2022",
              "hour": "19:26:10"
          }
      ],
      "transactionsReceived": [
          {
              "idOp": "e684b93f-4caa-4020-8f5e-90cfcd18c2b5",
              "image-icon-paper": "arrow-right-bold-circle-outline",
              "amount": "+1000",
              "date": "15/7/2022",
              "hour": "19:26:19",
              "accountOrigin": {
                  "cub": "2062978342105074575922",
                  "alias": "max.henrybank",
                  "name": "Maxi",
                  "lastName": "Henry"
              }
          },
          {
              "idOp": "12e496e4-d3c2-4c57-b707-60bb94b923c3",
              "image-icon-paper": "arrow-right-bold-circle-outline",
              "amount": "+125",
              "date": "15/7/2022",
              "hour": "19:27:4",
              "accountOrigin": {
                  "cub": "2656963117137294745888",
                  "alias": "pedro.henrybank",
                  "name": "Pedro",
                  "lastName": "Picapiedra"
              }
          },          
          {
              "idOp": "45f42b32-1718-44bc-9d7a-a93fba3ad2d7",
              "image-icon-paper": "arrow-right-bold-circle-outline",
              "amount": "+100",
              "date": "15/7/2022",
              "hour": "19:34:6",
              "accountOrigin": {
                  "cub": "7292795404641973481232",
                  "alias": "prueba.henrybank",
                  "name": "Santiago",
                  "lastName": "Gomez"
              }
          }
      ],
      "transactionsSent": [
          {
              "idOp": "12e496e4-d3c2-4c57-b757-60bb94b923c3",
              "image-icon-paper": "arrow-left-bold-circle-outline",
              "amount": "-125",
              "date": "15/7/2022",
              "hour": "19:27:4",
              "accountDestiny": {
                  "cub": "2656963117137294745888",
                  "alias": "pedro.henrybank",
                  "name": "Pedro",
                  "lastName": "Picapiedra"
              }
          },
          {
              "idOp": "80d9ef8c-0d87-4dee-aa2c-b228497f2781",
              "image-icon-paper": "arrow-left-bold-circle-outline",
              "amount": "-689",
              "date": "15/7/2022",
              "hour": "19:29:24",
              "accountDestiny": {
                  "cub": "2062978342105074575922",
                  "alias": "max.henrybank",
                  "name": "Maxi",
                  "lastName": "Henry"
              }
          }
      ],
      "buyCrypto": [
          {
              "id": 11,
              "image-icon-paper": "arrow-left-bold-circle-outline",
              "image": {
                  "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
                  "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
                  "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              },
              "name": "bitcoin",
              "amount": "-10000",
              "date": "15/7/2022",
              "hour": "19:32:36"
          },
          {
              "id": 13,
              "image-icon-paper": "arrow-left-bold-circle-outline",
              "image": {
                  "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
                  "small": "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
                  "large": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
              },
              "name": "matic-network",
              "amount": "-10000",
              "date": "15/7/2022",
              "hour": "19:33:43"
          },
      ],
      "sellCrypto": [
          {
            "id": 1,
            "image-icon-paper": "arrow-left-bold-circle-outline",
            "image": {
                "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
                "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
                "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            },
            "name": "bitcoin",
            "amount": "-10000",
            "date": "15/7/2022",
            "hour": "19:32:36"
          },
          {
          "id": 3,
          "image-icon-paper": "arrow-left-bold-circle-outline",
          "image": {
              "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
              "small": "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
              "large": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
          },
          "name": "matic-network",
          "amount": "-10000",
          "date": "15/7/2022",
          "hour": "19:33:43"
          },
      ],
      "pendingLockedStake": [
          {
              "idOp": 61,
              "image-icon-paper": "arrow-left-bold-circle-outline",
              "amount": "-700",
              "date": "15/7/2022",
              "hour": "19:25:42"
          },
          {
              "idOp": 65,
              "image-icon-paper": "arrow-left-bold-circle-outline",
              "amount": "-666",
              "date": "15/7/2022",
              "hour": "19:35:4"
          }
      ],
      "finalizedLockedStake": [
          {
              "idOp": 62,
              "image-icon-paper": "arrow-right-bold-circle-outline",
              "amount": "+80160",
              "date": "15/7/2022",
              "hour": "19:32"
          }
      ]
  }
  },
  {
    id: 4,
    fullName: "Gabriel Cordoba",
    image:
      "http://c.files.bbci.co.uk/13B2D/production/_119158608_a7b4e374-12ac-4adc-bb8d-ce4eb857fbc2.jpg",
    birthday: "26-09-2004",
    years: 18,
  },
  {
    id: 5,
    fullName: "Yeison Villegas",
    image:
      "http://c.files.bbci.co.uk/13B2D/production/_119158608_a7b4e374-12ac-4adc-bb8d-ce4eb857fbc2.jpg",
    birthday: "26-09-1999",
    years: 22,
  },
];
