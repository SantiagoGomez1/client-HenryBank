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
          "idOp": "529be36d-174a-4129-aec9-49769ae8c91d",
          "image-icon-paper": "plus",
          "amount": "+10000",
          "date": "14/6/2022",
          "hour": "23:42:51"
      },
      {
          "idOp": "8c597f0f-7c59-4025-b8cb-cadee79734ca",
          "image-icon-paper": "plus",
          "amount": "+80125",
          "date": "14/6/2022",
          "hour": "23:49:6"
      }
  ],
  "transactionsReceived": [
      {
          "idOp": "cd2673d1-75a2-43ba-89fe-0a0c62369c12",
          "image-icon-paper": "transfer-down",
          "amount": "+1239",
          "date": "14/6/2022",
          "hour": "23:53:4",
          "accountOrigin": {
              "cub": "8916461009058174658977",
              "alias": "pedro.henrybank",
              "name": "Pedro",
              "lastName": "Picapiedra"
          }
      },
      {
          "idOp": "4d09f6f7-7df5-4149-af2c-0e7801907771",
          "image-icon-paper": "transfer-down",
          "amount": "+1239",
          "date": "14/6/2022",
          "hour": "23:53:58",
          "accountOrigin": {
              "cub": "8916461009058174658977",
              "alias": "pedro.henrybank",
              "name": "Pedro",
              "lastName": "Picapiedra"
          }
      }
  ],
  "transactionsSent": [
      {
          "idOp": "fb8baff8-6f6c-4c14-9e02-c9aa507c53ce",
          "image-icon-paper": "transfer-up",
          "amount": "-200",
          "date": "14/6/2022",
          "hour": "23:49:18",
          "accountDestiny": {
              "cub": "0112929937902179307118",
              "alias": "pablo.henrybank",
              "name": "Pablo",
              "lastName": "Picapiedra"
          }
      },
      {
          "idOp": "cd2673d1-75a2-43ba-89fe-0a0c62369c12",
          "image-icon-paper": "transfer-up",
          "amount": "-1239",
          "date": "14/6/2022",
          "hour": "23:53:4",
          "accountDestiny": {
              "cub": "8916461009058174658977",
              "alias": "pedro.henrybank",
              "name": "Pedro",
              "lastName": "Picapiedra"
          }
      },
  ],
  "buyCrypto": [
      {
          "id": 1,
          "image": {
              "thumb": "https://assets.coingecko.com/coins/images/17385/thumb/Tether_full_logo_dm.png?1627537298",
              "small": "https://assets.coingecko.com/coins/images/17385/small/Tether_full_logo_dm.png?1627537298",
              "large": "https://assets.coingecko.com/coins/images/17385/large/Tether_full_logo_dm.png?1627537298"
          },
          "name": "tether-eurt",
          "amount": "-10000",
          "date": "14/6/2022",
          "hour": "22:37:3"
      },
      {
          "id": 22,
          "image": {
              "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
              "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
              "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          },
          "name": "bitcoin",
          "amount": "-100000",
          "date": "14/6/2022",
          "hour": "23:36:4"
      }
  ],
  "sellCrypto": [
      {
          "id": 5,
          "image": {
              "thumb": "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
              "small": "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707",
              "large": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
          },
          "name": "tether",
          "amount": "+2498.8075",
          "date": "14/6/2022",
          "hour": "22:43:32"
      },      
      {
          "id": 21,
          "image": {
              "thumb": "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
              "small": "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707",
              "large": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
          },
          "name": "tether",
          "amount": "+2498.8075",
          "date": "14/6/2022",
          "hour": "23:14:8"
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
