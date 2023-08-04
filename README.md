# company-tree

## Query

{
  makeCompanyTree {
    id
    createdAt
    name
    parentId
    cost
    children {
      id
      createdAt
      name
      parentId
      cost
      children {
        id
        createdAt
        name
        parentId
        cost
      }
    }
  }
}

## Response

{
  "data": {
    "makeCompanyTree": [
      {
        "id": "uuid-1",
        "createdAt": "2021-02-26T00:55:36.632Z",
        "name": "Webprovise Corp",
        "parentId": "0",
        "cost": 52983,
        "children": [
          {
            "id": "uuid-t1",
            "createdAt": "2020-08-27T00:22:26.927Z",
            "name": "Garry Schuppe",
            "parentId": "uuid-1",
            "cost": 362,
            "children": []
          },
          {
            "id": "uuid-t3",
            "createdAt": "2020-05-18T16:41:55.992Z",
            "name": "Cheyenne Turcotte",
            "parentId": "uuid-1",
            "cost": 859,
            "children": []
          },
          {
            "id": "uuid-2",
            "createdAt": "2021-02-25T10:35:32.978Z",
            "name": "Stamm LLC",
            "parentId": "uuid-1",
            "cost": 5199,
            "children": [
              {
                "id": "uuid-t2",
                "createdAt": "2020-11-08T22:44:37.483Z",
                "name": "Alison Kohler Sr.",
                "parentId": "uuid-2",
                "cost": 835
              },
              {
                "id": "uuid-t4",
                "createdAt": "2020-07-24T16:17:38.334Z",
                "name": "Marielle Bartoletti",
                "parentId": "uuid-2",
                "cost": 191
              },
              {
                "id": "uuid-t5",
                "createdAt": "2020-06-22T16:55:07.503Z",
                "name": "Dejah Ullrich MD",
                "parentId": "uuid-2",
                "cost": 403
              },
              {
                "id": "uuid-4",
                "createdAt": "2021-02-25T06:11:47.519Z",
                "name": "Price and Sons",
                "parentId": "uuid-2",
                "cost": 1340
              },
              {
                "id": "uuid-7",
                "createdAt": "2021-02-25T07:56:32.335Z",
                "name": "Zieme - Mills",
                "parentId": "uuid-2",
                "cost": 1636
              },
              {
                "id": "uuid-19",
                "createdAt": "2021-02-25T21:06:18.777Z",
                "name": "Schneider - Adams",
                "parentId": "uuid-2",
                "cost": 794
              }
            ]
          },
          {
            "id": "uuid-3",
            "createdAt": "2021-02-25T15:16:30.887Z",
            "name": "Blanda, Langosh and Barton",
            "parentId": "uuid-1",
            "cost": 15713,
            "children": [
              {
                "id": "uuid-t6",
                "createdAt": "2021-02-03T02:45:23.546Z",
                "name": "Danial Barrows V",
                "parentId": "uuid-3",
                "cost": 383
              },
              {
                "id": "uuid-t7",
                "createdAt": "2020-12-05T02:54:03.345Z",
                "name": "Mrs. Jettie Effertz",
                "parentId": "uuid-3",
                "cost": 104
              },
              {
                "id": "uuid-t8",
                "createdAt": "2020-09-11T14:23:44.472Z",
                "name": "Seamus Reynolds",
                "parentId": "uuid-3",
                "cost": 698
              },
              {
                "id": "uuid-t9",
                "createdAt": "2020-10-04T03:21:25.901Z",
                "name": "Mittie Vandervort",
                "parentId": "uuid-3",
                "cost": 500
              },
              {
                "id": "uuid-t10",
                "createdAt": "2020-11-10T04:33:03.837Z",
                "name": "Mayra Pouros",
                "parentId": "uuid-3",
                "cost": 393
              },
              {
                "id": "uuid-t11",
                "createdAt": "2021-02-14T19:15:08.763Z",
                "name": "Pete Orn",
                "parentId": "uuid-3",
                "cost": 999
              },
              {
                "id": "uuid-t12",
                "createdAt": "2020-07-18T23:22:52.102Z",
                "name": "Selina Dibbert",
                "parentId": "uuid-3",
                "cost": 770
              },
              {
                "id": "uuid-5",
                "createdAt": "2021-02-25T13:35:57.923Z",
                "name": "Hane - Windler",
                "parentId": "uuid-3",
                "cost": 1288
              },
              {
                "id": "uuid-6",
                "createdAt": "2021-02-26T01:41:06.479Z",
                "name": "Vandervort - Bechtelar",
                "parentId": "uuid-3",
                "cost": 2512
              },
              {
                "id": "uuid-9",
                "createdAt": "2021-02-25T16:02:49.099Z",
                "name": "Kuhic - Swift",
                "parentId": "uuid-3",
                "cost": 3086
              },
              {
                "id": "uuid-17",
                "createdAt": "2021-02-25T11:17:52.132Z",
                "name": "Rohan, Mayer and Haley",
                "parentId": "uuid-3",
                "cost": 4072
              },
              {
                "id": "uuid-20",
                "createdAt": "2021-02-26T01:51:25.421Z",
                "name": "Kunde, Armstrong and Hermann",
                "parentId": "uuid-3",
                "cost": 908
              }
            ]
          },
          {
            "id": "uuid-8",
            "createdAt": "2021-02-25T23:47:57.596Z",
            "name": "Bartell - Mosciski",
            "parentId": "uuid-1",
            "cost": 28817,
            "children": [
              {
                "id": "uuid-t26",
                "createdAt": "2020-10-15T11:08:32.062Z",
                "name": "Dr. Eudora Stroman",
                "parentId": "uuid-8",
                "cost": 32
              },
              {
                "id": "uuid-t27",
                "createdAt": "2020-06-15T06:37:13.895Z",
                "name": "Keara Trantow",
                "parentId": "uuid-8",
                "cost": 484
              },
              {
                "id": "uuid-t28",
                "createdAt": "2021-02-13T04:20:14.070Z",
                "name": "Chadd Lebsack",
                "parentId": "uuid-8",
                "cost": 146
              },
              {
                "id": "uuid-t29",
                "createdAt": "2020-11-19T12:55:19.924Z",
                "name": "Rachael Bauch",
                "parentId": "uuid-8",
                "cost": 740
              },
              {
                "id": "uuid-t30",
                "createdAt": "2020-05-26T11:14:26.763Z",
                "name": "Alana Hettinger",
                "parentId": "uuid-8",
                "cost": 689
              },
              {
                "id": "uuid-t53",
                "createdAt": "2020-11-26T12:25:04.216Z",
                "name": "Mireille Boyer",
                "parentId": "uuid-8",
                "cost": 71
              },
              {
                "id": "uuid-t54",
                "createdAt": "2020-12-03T02:01:25.427Z",
                "name": "Maude Bergstrom",
                "parentId": "uuid-8",
                "cost": 443
              },
              {
                "id": "uuid-10",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "cost": 4288
              },
              {
                "id": "uuid-11",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "cost": 12236
              },
              {
                "id": "uuid-13",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "cost": 1686
              },
              {
                "id": "uuid-15",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "cost": 4725
              },
              {
                "id": "uuid-16",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "cost": 3277
              }
            ]
          },
          {
            "id": "uuid-18",
            "createdAt": "2021-02-26T02:31:22.154Z",
            "name": "Walter, Schmidt and Osinski",
            "parentId": "uuid-1",
            "cost": 2033,
            "children": [
              {
                "id": "uuid-t90",
                "createdAt": "2020-12-12T20:48:29.658Z",
                "name": "Cortney VonRueden",
                "parentId": "uuid-18",
                "cost": 100
              },
              {
                "id": "uuid-t93",
                "createdAt": "2020-07-29T11:51:18.010Z",
                "name": "Steve Schiller",
                "parentId": "uuid-18",
                "cost": 44
              },
              {
                "id": "uuid-t97",
                "createdAt": "2021-02-21T21:36:36.726Z",
                "name": "Ms. Percy Herzog",
                "parentId": "uuid-18",
                "cost": 652
              },
              {
                "id": "uuid-t98",
                "createdAt": "2020-08-07T15:04:43.643Z",
                "name": "Mariam Volkman",
                "parentId": "uuid-18",
                "cost": 817
              },
              {
                "id": "uuid-t99",
                "createdAt": "2020-11-13T01:52:19.030Z",
                "name": "Annamarie Cormier",
                "parentId": "uuid-18",
                "cost": 119
              },
              {
                "id": "uuid-t100",
                "createdAt": "2021-01-13T21:09:18.547Z",
                "name": "Walter Gerhold",
                "parentId": "uuid-18",
                "cost": 301
              }
            ]
          }
        ]
      }
    ]
  }
}