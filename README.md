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
                "cost": 835,
                "children": []
              },
              {
                "id": "uuid-t4",
                "createdAt": "2020-07-24T16:17:38.334Z",
                "name": "Marielle Bartoletti",
                "parentId": "uuid-2",
                "cost": 191,
                "children": []
              },
              {
                "id": "uuid-t5",
                "createdAt": "2020-06-22T16:55:07.503Z",
                "name": "Dejah Ullrich MD",
                "parentId": "uuid-2",
                "cost": 403,
                "children": []
              },
              {
                "id": "uuid-4",
                "createdAt": "2021-02-25T06:11:47.519Z",
                "name": "Price and Sons",
                "parentId": "uuid-2",
                "cost": 1340,
                "children": [
                  {
                    "id": "uuid-t13",
                    "createdAt": "2020-06-04T13:00:40.095Z",
                    "name": "Rocio Ziemann",
                    "parentId": "uuid-4",
                    "cost": 137
                  },
                  {
                    "id": "uuid-t14",
                    "createdAt": "2020-03-22T08:50:17.996Z",
                    "name": "Mr. Adela Casper",
                    "parentId": "uuid-4",
                    "cost": 761
                  },
                  {
                    "id": "uuid-t15",
                    "createdAt": "2020-05-20T10:59:49.490Z",
                    "name": "Ms. Elijah Crooks",
                    "parentId": "uuid-4",
                    "cost": 442
                  }
                ]
              },
              {
                "id": "uuid-7",
                "createdAt": "2021-02-25T07:56:32.335Z",
                "name": "Zieme - Mills",
                "parentId": "uuid-2",
                "cost": 1636,
                "children": [
                  {
                    "id": "uuid-t22",
                    "createdAt": "2020-06-15T00:50:54.420Z",
                    "name": "Mrs. Darryl Kilback",
                    "parentId": "uuid-7",
                    "cost": 955
                  },
                  {
                    "id": "uuid-t23",
                    "createdAt": "2020-10-26T10:44:43.608Z",
                    "name": "Lillie Skiles",
                    "parentId": "uuid-7",
                    "cost": 431
                  },
                  {
                    "id": "uuid-t24",
                    "createdAt": "2020-03-11T10:53:29.826Z",
                    "name": "Zelda Kuhlman",
                    "parentId": "uuid-7",
                    "cost": 201
                  },
                  {
                    "id": "uuid-t25",
                    "createdAt": "2020-03-26T19:13:39.947Z",
                    "name": "Marshall Hand",
                    "parentId": "uuid-7",
                    "cost": 49
                  }
                ]
              },
              {
                "id": "uuid-19",
                "createdAt": "2021-02-25T21:06:18.777Z",
                "name": "Schneider - Adams",
                "parentId": "uuid-2",
                "cost": 794,
                "children": [
                  {
                    "id": "uuid-t91",
                    "createdAt": "2020-05-17T09:47:56.298Z",
                    "name": "Mr. Gerda Dietrich",
                    "parentId": "uuid-19",
                    "cost": 685
                  },
                  {
                    "id": "uuid-t92",
                    "createdAt": "2021-02-06T01:10:40.954Z",
                    "name": "Ezra Huels",
                    "parentId": "uuid-19",
                    "cost": 109
                  }
                ]
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
                "cost": 383,
                "children": []
              },
              {
                "id": "uuid-t7",
                "createdAt": "2020-12-05T02:54:03.345Z",
                "name": "Mrs. Jettie Effertz",
                "parentId": "uuid-3",
                "cost": 104,
                "children": []
              },
              {
                "id": "uuid-t8",
                "createdAt": "2020-09-11T14:23:44.472Z",
                "name": "Seamus Reynolds",
                "parentId": "uuid-3",
                "cost": 698,
                "children": []
              },
              {
                "id": "uuid-t9",
                "createdAt": "2020-10-04T03:21:25.901Z",
                "name": "Mittie Vandervort",
                "parentId": "uuid-3",
                "cost": 500,
                "children": []
              },
              {
                "id": "uuid-t10",
                "createdAt": "2020-11-10T04:33:03.837Z",
                "name": "Mayra Pouros",
                "parentId": "uuid-3",
                "cost": 393,
                "children": []
              },
              {
                "id": "uuid-t11",
                "createdAt": "2021-02-14T19:15:08.763Z",
                "name": "Pete Orn",
                "parentId": "uuid-3",
                "cost": 999,
                "children": []
              },
              {
                "id": "uuid-t12",
                "createdAt": "2020-07-18T23:22:52.102Z",
                "name": "Selina Dibbert",
                "parentId": "uuid-3",
                "cost": 770,
                "children": []
              },
              {
                "id": "uuid-5",
                "createdAt": "2021-02-25T13:35:57.923Z",
                "name": "Hane - Windler",
                "parentId": "uuid-3",
                "cost": 1288,
                "children": [
                  {
                    "id": "uuid-t16",
                    "createdAt": "2020-12-28T04:31:15.286Z",
                    "name": "Thad Schaefer",
                    "parentId": "uuid-5",
                    "cost": 234
                  },
                  {
                    "id": "uuid-t17",
                    "createdAt": "2020-04-11T14:11:08.201Z",
                    "name": "Rudy Langosh",
                    "parentId": "uuid-5",
                    "cost": 477
                  },
                  {
                    "id": "uuid-t18",
                    "createdAt": "2020-07-14T12:06:55.826Z",
                    "name": "Miss Jacques Dickinson",
                    "parentId": "uuid-5",
                    "cost": 577
                  }
                ]
              },
              {
                "id": "uuid-6",
                "createdAt": "2021-02-26T01:41:06.479Z",
                "name": "Vandervort - Bechtelar",
                "parentId": "uuid-3",
                "cost": 2512,
                "children": [
                  {
                    "id": "uuid-t19",
                    "createdAt": "2020-11-01T14:33:11.222Z",
                    "name": "Harry Rohan",
                    "parentId": "uuid-6",
                    "cost": 872
                  },
                  {
                    "id": "uuid-t20",
                    "createdAt": "2020-07-30T21:09:46.836Z",
                    "name": "Rebeca Breitenberg",
                    "parentId": "uuid-6",
                    "cost": 735
                  },
                  {
                    "id": "uuid-t21",
                    "createdAt": "2020-09-03T10:10:46.544Z",
                    "name": "Misael Jones V",
                    "parentId": "uuid-6",
                    "cost": 905
                  }
                ]
              },
              {
                "id": "uuid-9",
                "createdAt": "2021-02-25T16:02:49.099Z",
                "name": "Kuhic - Swift",
                "parentId": "uuid-3",
                "cost": 3086,
                "children": [
                  {
                    "id": "uuid-t31",
                    "createdAt": "2020-04-09T12:40:55.409Z",
                    "name": "Mrs. Zion Parisian",
                    "parentId": "uuid-9",
                    "cost": 906
                  },
                  {
                    "id": "uuid-t32",
                    "createdAt": "2020-09-18T21:35:10.111Z",
                    "name": "Greg Ernser",
                    "parentId": "uuid-9",
                    "cost": 774
                  },
                  {
                    "id": "uuid-t33",
                    "createdAt": "2020-08-22T05:33:58.816Z",
                    "name": "Marcos Thompson",
                    "parentId": "uuid-9",
                    "cost": 932
                  },
                  {
                    "id": "uuid-t34",
                    "createdAt": "2020-06-16T20:39:46.139Z",
                    "name": "Katrina Konopelski",
                    "parentId": "uuid-9",
                    "cost": 474
                  }
                ]
              },
              {
                "id": "uuid-17",
                "createdAt": "2021-02-25T11:17:52.132Z",
                "name": "Rohan, Mayer and Haley",
                "parentId": "uuid-3",
                "cost": 4072,
                "children": [
                  {
                    "id": "uuid-t82",
                    "createdAt": "2020-07-05T05:55:27.520Z",
                    "name": "Citlalli Zieme",
                    "parentId": "uuid-17",
                    "cost": 228
                  },
                  {
                    "id": "uuid-t83",
                    "createdAt": "2021-01-22T11:02:33.244Z",
                    "name": "Uriah Glover",
                    "parentId": "uuid-17",
                    "cost": 738
                  },
                  {
                    "id": "uuid-t84",
                    "createdAt": "2020-10-25T23:17:14.661Z",
                    "name": "Rosanna Macejkovic",
                    "parentId": "uuid-17",
                    "cost": 401
                  },
                  {
                    "id": "uuid-t85",
                    "createdAt": "2021-02-19T23:04:06.358Z",
                    "name": "Ms. Sylvan Flatley",
                    "parentId": "uuid-17",
                    "cost": 654
                  },
                  {
                    "id": "uuid-t86",
                    "createdAt": "2020-04-01T12:54:18.290Z",
                    "name": "Miguel Hegmann",
                    "parentId": "uuid-17",
                    "cost": 439
                  },
                  {
                    "id": "uuid-t87",
                    "createdAt": "2020-06-09T02:19:51.125Z",
                    "name": "Leta Rowe",
                    "parentId": "uuid-17",
                    "cost": 887
                  },
                  {
                    "id": "uuid-t88",
                    "createdAt": "2020-10-02T17:55:24.795Z",
                    "name": "Syble Ondricka",
                    "parentId": "uuid-17",
                    "cost": 157
                  },
                  {
                    "id": "uuid-t89",
                    "createdAt": "2020-08-01T04:58:11.375Z",
                    "name": "Mrs. Jerod Rowe",
                    "parentId": "uuid-17",
                    "cost": 568
                  }
                ]
              },
              {
                "id": "uuid-20",
                "createdAt": "2021-02-26T01:51:25.421Z",
                "name": "Kunde, Armstrong and Hermann",
                "parentId": "uuid-3",
                "cost": 908,
                "children": [
                  {
                    "id": "uuid-t94",
                    "createdAt": "2020-07-09T16:42:45.161Z",
                    "name": "Alana Predovic",
                    "parentId": "uuid-20",
                    "cost": 622
                  },
                  {
                    "id": "uuid-t95",
                    "createdAt": "2020-07-23T12:37:49.649Z",
                    "name": "Nathanael O'Hara",
                    "parentId": "uuid-20",
                    "cost": 217
                  },
                  {
                    "id": "uuid-t96",
                    "createdAt": "2020-04-12T07:20:09.933Z",
                    "name": "Myah Doyle DVM",
                    "parentId": "uuid-20",
                    "cost": 69
                  }
                ]
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
                "cost": 32,
                "children": []
              },
              {
                "id": "uuid-t27",
                "createdAt": "2020-06-15T06:37:13.895Z",
                "name": "Keara Trantow",
                "parentId": "uuid-8",
                "cost": 484,
                "children": []
              },
              {
                "id": "uuid-t28",
                "createdAt": "2021-02-13T04:20:14.070Z",
                "name": "Chadd Lebsack",
                "parentId": "uuid-8",
                "cost": 146,
                "children": []
              },
              {
                "id": "uuid-t29",
                "createdAt": "2020-11-19T12:55:19.924Z",
                "name": "Rachael Bauch",
                "parentId": "uuid-8",
                "cost": 740,
                "children": []
              },
              {
                "id": "uuid-t30",
                "createdAt": "2020-05-26T11:14:26.763Z",
                "name": "Alana Hettinger",
                "parentId": "uuid-8",
                "cost": 689,
                "children": []
              },
              {
                "id": "uuid-t53",
                "createdAt": "2020-11-26T12:25:04.216Z",
                "name": "Mireille Boyer",
                "parentId": "uuid-8",
                "cost": 71,
                "children": []
              },
              {
                "id": "uuid-t54",
                "createdAt": "2020-12-03T02:01:25.427Z",
                "name": "Maude Bergstrom",
                "parentId": "uuid-8",
                "cost": 443,
                "children": []
              },
              {
                "id": "uuid-10",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "cost": 4288,
                "children": [
                  {
                    "id": "uuid-t35",
                    "createdAt": "2020-05-04T02:07:36.180Z",
                    "name": "Newton Homenick",
                    "parentId": "uuid-10",
                    "cost": 315
                  },
                  {
                    "id": "uuid-t36",
                    "createdAt": "2020-04-07T02:28:42.819Z",
                    "name": "Hollie Langosh PhD",
                    "parentId": "uuid-10",
                    "cost": 970
                  },
                  {
                    "id": "uuid-t37",
                    "createdAt": "2020-03-28T20:31:19.127Z",
                    "name": "Nathanial Medhurst",
                    "parentId": "uuid-10",
                    "cost": 870
                  },
                  {
                    "id": "uuid-t38",
                    "createdAt": "2020-12-20T23:47:00.542Z",
                    "name": "Quinten Reilly",
                    "parentId": "uuid-10",
                    "cost": 486
                  },
                  {
                    "id": "uuid-t39",
                    "createdAt": "2020-08-05T11:36:31.376Z",
                    "name": "Laisha Kihn",
                    "parentId": "uuid-10",
                    "cost": 501
                  },
                  {
                    "id": "uuid-t50",
                    "createdAt": "2020-05-30T18:56:02.675Z",
                    "name": "Norma Olson IV",
                    "parentId": "uuid-10",
                    "cost": 38
                  },
                  {
                    "id": "uuid-t51",
                    "createdAt": "2021-02-02T23:41:02.013Z",
                    "name": "Lucas Jacobson",
                    "parentId": "uuid-10",
                    "cost": 469
                  },
                  {
                    "id": "uuid-t52",
                    "createdAt": "2020-05-11T02:43:03.298Z",
                    "name": "Miss Isom Stokes",
                    "parentId": "uuid-10",
                    "cost": 639
                  }
                ]
              },
              {
                "id": "uuid-11",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "cost": 12236,
                "children": [
                  {
                    "id": "uuid-t40",
                    "createdAt": "2020-06-30T22:02:09.569Z",
                    "name": "Candida Little",
                    "parentId": "uuid-11",
                    "cost": 705
                  },
                  {
                    "id": "uuid-t41",
                    "createdAt": "2020-06-09T00:20:02.515Z",
                    "name": "Judson Rowe",
                    "parentId": "uuid-11",
                    "cost": 889
                  },
                  {
                    "id": "uuid-t42",
                    "createdAt": "2020-07-14T08:31:41.218Z",
                    "name": "Antonia Nitzsche",
                    "parentId": "uuid-11",
                    "cost": 873
                  },
                  {
                    "id": "uuid-t43",
                    "createdAt": "2021-01-06T03:21:36.639Z",
                    "name": "Brenna Fadel",
                    "parentId": "uuid-11",
                    "cost": 405
                  },
                  {
                    "id": "uuid-12",
                    "createdAt": "2021-02-25T06:44:56.245Z",
                    "name": "Swaniawski Inc",
                    "parentId": "uuid-11",
                    "cost": 2110
                  },
                  {
                    "id": "uuid-14",
                    "createdAt": "2021-02-25T15:22:08.098Z",
                    "name": "Weimann, Runolfsson and Hand",
                    "parentId": "uuid-11",
                    "cost": 7254
                  }
                ]
              },
              {
                "id": "uuid-13",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "cost": 1686,
                "children": [
                  {
                    "id": "uuid-t47",
                    "createdAt": "2020-11-18T18:46:16.407Z",
                    "name": "Nona Jerde MD",
                    "parentId": "uuid-13",
                    "cost": 577
                  },
                  {
                    "id": "uuid-t48",
                    "createdAt": "2020-06-11T21:13:32.007Z",
                    "name": "Edd Johnson",
                    "parentId": "uuid-13",
                    "cost": 237
                  },
                  {
                    "id": "uuid-t49",
                    "createdAt": "2020-10-04T20:14:56.425Z",
                    "name": "Danielle Hettinger",
                    "parentId": "uuid-13",
                    "cost": 872
                  }
                ]
              },
              {
                "id": "uuid-15",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "cost": 4725,
                "children": [
                  {
                    "id": "uuid-t70",
                    "createdAt": "2020-04-15T01:33:52.860Z",
                    "name": "Ms. Concepcion Treutel",
                    "parentId": "uuid-15",
                    "cost": 941
                  },
                  {
                    "id": "uuid-t71",
                    "createdAt": "2020-05-11T11:00:15.595Z",
                    "name": "Joan Kertzmann",
                    "parentId": "uuid-15",
                    "cost": 845
                  },
                  {
                    "id": "uuid-t72",
                    "createdAt": "2021-01-01T19:36:37.530Z",
                    "name": "Sherman Ward",
                    "parentId": "uuid-15",
                    "cost": 999
                  },
                  {
                    "id": "uuid-t73",
                    "createdAt": "2020-11-14T20:09:01.990Z",
                    "name": "Fannie Bosco",
                    "parentId": "uuid-15",
                    "cost": 954
                  },
                  {
                    "id": "uuid-t74",
                    "createdAt": "2020-03-14T10:11:25.968Z",
                    "name": "Hyman D'Amore",
                    "parentId": "uuid-15",
                    "cost": 923
                  },
                  {
                    "id": "uuid-t75",
                    "createdAt": "2020-05-15T16:56:58.803Z",
                    "name": "Gust Ruecker",
                    "parentId": "uuid-15",
                    "cost": 63
                  }
                ]
              },
              {
                "id": "uuid-16",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "cost": 3277,
                "children": [
                  {
                    "id": "uuid-t76",
                    "createdAt": "2020-12-19T00:12:12.570Z",
                    "name": "Giovanna Johnston",
                    "parentId": "uuid-16",
                    "cost": 53
                  },
                  {
                    "id": "uuid-t77",
                    "createdAt": "2020-04-14T19:49:46.148Z",
                    "name": "Wiley Kihn",
                    "parentId": "uuid-16",
                    "cost": 718
                  },
                  {
                    "id": "uuid-t78",
                    "createdAt": "2020-08-02T16:13:29.610Z",
                    "name": "Mia Lowe",
                    "parentId": "uuid-16",
                    "cost": 691
                  },
                  {
                    "id": "uuid-t79",
                    "createdAt": "2020-07-03T16:25:22.680Z",
                    "name": "Garry Treutel",
                    "parentId": "uuid-16",
                    "cost": 482
                  },
                  {
                    "id": "uuid-t80",
                    "createdAt": "2020-09-13T04:16:06.700Z",
                    "name": "Cyril Sipes",
                    "parentId": "uuid-16",
                    "cost": 812
                  },
                  {
                    "id": "uuid-t81",
                    "createdAt": "2020-04-13T21:50:45.872Z",
                    "name": "Jameson Berge",
                    "parentId": "uuid-16",
                    "cost": 521
                  }
                ]
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
                "cost": 100,
                "children": []
              },
              {
                "id": "uuid-t93",
                "createdAt": "2020-07-29T11:51:18.010Z",
                "name": "Steve Schiller",
                "parentId": "uuid-18",
                "cost": 44,
                "children": []
              },
              {
                "id": "uuid-t97",
                "createdAt": "2021-02-21T21:36:36.726Z",
                "name": "Ms. Percy Herzog",
                "parentId": "uuid-18",
                "cost": 652,
                "children": []
              },
              {
                "id": "uuid-t98",
                "createdAt": "2020-08-07T15:04:43.643Z",
                "name": "Mariam Volkman",
                "parentId": "uuid-18",
                "cost": 817,
                "children": []
              },
              {
                "id": "uuid-t99",
                "createdAt": "2020-11-13T01:52:19.030Z",
                "name": "Annamarie Cormier",
                "parentId": "uuid-18",
                "cost": 119,
                "children": []
              },
              {
                "id": "uuid-t100",
                "createdAt": "2021-01-13T21:09:18.547Z",
                "name": "Walter Gerhold",
                "parentId": "uuid-18",
                "cost": 301,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
}