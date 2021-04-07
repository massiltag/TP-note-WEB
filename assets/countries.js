const countries = [
  {
    "column": [
      1,
      4,
      "AF",
      "AFG",
      "Afghanistan",
      "Afghanistan"
    ]
  },
  {
    "column": [
      2,
      8,
      "AL",
      "ALB",
      "Albanie",
      "Albania"
    ]
  },
  {
    "column": [
      3,
      10,
      "AQ",
      "ATA",
      "Antarctique",
      "Antarctica"
    ]
  },
  {
    "column": [
      4,
      12,
      "DZ",
      "DZA",
      "Algérie",
      "Algeria"
    ]
  },
  {
    "column": [
      5,
      16,
      "AS",
      "ASM",
      "Samoa Américaines",
      "American Samoa"
    ]
  },
  {
    "column": [
      6,
      20,
      "AD",
      "AND",
      "Andorre",
      "Andorra"
    ]
  },
  {
    "column": [
      7,
      24,
      "AO",
      "AGO",
      "Angola",
      "Angola"
    ]
  },
  {
    "column": [
      8,
      28,
      "AG",
      "ATG",
      "Antigua-et-Barbuda",
      "Antigua and Barbuda"
    ]
  },
  {
    "column": [
      9,
      31,
      "AZ",
      "AZE",
      "Azerbaïdjan",
      "Azerbaijan"
    ]
  },
  {
    "column": [
      10,
      32,
      "AR",
      "ARG",
      "Argentine",
      "Argentina"
    ]
  },
  {
    "column": [
      11,
      36,
      "AU",
      "AUS",
      "Australie",
      "Australia"
    ]
  },
  {
    "column": [
      12,
      40,
      "AT",
      "AUT",
      "Autriche",
      "Austria"
    ]
  },
  {
    "column": [
      13,
      44,
      "BS",
      "BHS",
      "Bahamas",
      "Bahamas"
    ]
  },
  {
    "column": [
      14,
      48,
      "BH",
      "BHR",
      "Bahreïn",
      "Bahrain"
    ]
  },
  {
    "column": [
      15,
      50,
      "BD",
      "BGD",
      "Bangladesh",
      "Bangladesh"
    ]
  },
  {
    "column": [
      16,
      51,
      "AM",
      "ARM",
      "Arménie",
      "Armenia"
    ]
  },
  {
    "column": [
      17,
      52,
      "BB",
      "BRB",
      "Barbade",
      "Barbados"
    ]
  },
  {
    "column": [
      18,
      56,
      "BE",
      "BEL",
      "Belgique",
      "Belgium"
    ]
  },
  {
    "column": [
      19,
      60,
      "BM",
      "BMU",
      "Bermudes",
      "Bermuda"
    ]
  },
  {
    "column": [
      20,
      64,
      "BT",
      "BTN",
      "Bhoutan",
      "Bhutan"
    ]
  },
  {
    "column": [
      21,
      68,
      "BO",
      "BOL",
      "Bolivie",
      "Bolivia"
    ]
  },
  {
    "column": [
      22,
      70,
      "BA",
      "BIH",
      "Bosnie-Herzégovine",
      "Bosnia and Herzegovina"
    ]
  },
  {
    "column": [
      23,
      72,
      "BW",
      "BWA",
      "Botswana",
      "Botswana"
    ]
  },
  {
    "column": [
      24,
      74,
      "BV",
      "BVT",
      "Île Bouvet",
      "Bouvet Island"
    ]
  },
  {
    "column": [
      25,
      76,
      "BR",
      "BRA",
      "Brésil",
      "Brazil"
    ]
  },
  {
    "column": [
      26,
      84,
      "BZ",
      "BLZ",
      "Belize",
      "Belize"
    ]
  },
  {
    "column": [
      27,
      86,
      "IO",
      "IOT",
      "Territoire Britannique de l'Océan Indien",
      "British Indian Ocean Territory"
    ]
  },
  {
    "column": [
      28,
      90,
      "SB",
      "SLB",
      "Îles Salomon",
      "Solomon Islands"
    ]
  },
  {
    "column": [
      29,
      92,
      "VG",
      "VGB",
      "Îles Vierges Britanniques",
      "British Virgin Islands"
    ]
  },
  {
    "column": [
      30,
      96,
      "BN",
      "BRN",
      "Brunéi Darussalam",
      "Brunei Darussalam"
    ]
  },
  {
    "column": [
      31,
      100,
      "BG",
      "BGR",
      "Bulgarie",
      "Bulgaria"
    ]
  },
  {
    "column": [
      32,
      104,
      "MM",
      "MMR",
      "Myanmar",
      "Myanmar"
    ]
  },
  {
    "column": [
      33,
      108,
      "BI",
      "BDI",
      "Burundi",
      "Burundi"
    ]
  },
  {
    "column": [
      34,
      112,
      "BY",
      "BLR",
      "Bélarus",
      "Belarus"
    ]
  },
  {
    "column": [
      35,
      116,
      "KH",
      "KHM",
      "Cambodge",
      "Cambodia"
    ]
  },
  {
    "column": [
      36,
      120,
      "CM",
      "CMR",
      "Cameroun",
      "Cameroon"
    ]
  },
  {
    "column": [
      37,
      124,
      "CA",
      "CAN",
      "Canada",
      "Canada"
    ]
  },
  {
    "column": [
      38,
      132,
      "CV",
      "CPV",
      "Cap-vert",
      "Cape Verde"
    ]
  },
  {
    "column": [
      39,
      136,
      "KY",
      "CYM",
      "Îles Caïmanes",
      "Cayman Islands"
    ]
  },
  {
    "column": [
      40,
      140,
      "CF",
      "CAF",
      "République Centrafricaine",
      "Central African"
    ]
  },
  {
    "column": [
      41,
      144,
      "LK",
      "LKA",
      "Sri Lanka",
      "Sri Lanka"
    ]
  },
  {
    "column": [
      42,
      148,
      "TD",
      "TCD",
      "Tchad",
      "Chad"
    ]
  },
  {
    "column": [
      43,
      152,
      "CL",
      "CHL",
      "Chili",
      "Chile"
    ]
  },
  {
    "column": [
      44,
      156,
      "CN",
      "CHN",
      "Chine",
      "China"
    ]
  },
  {
    "column": [
      45,
      158,
      "TW",
      "TWN",
      "Taïwan",
      "Taiwan"
    ]
  },
  {
    "column": [
      46,
      162,
      "CX",
      "CXR",
      "Île Christmas",
      "Christmas Island"
    ]
  },
  {
    "column": [
      47,
      166,
      "CC",
      "CCK",
      "Îles Cocos (Keeling)",
      "Cocos (Keeling) Islands"
    ]
  },
  {
    "column": [
      48,
      170,
      "CO",
      "COL",
      "Colombie",
      "Colombia"
    ]
  },
  {
    "column": [
      49,
      174,
      "KM",
      "COM",
      "Comores",
      "Comoros"
    ]
  },
  {
    "column": [
      50,
      175,
      "YT",
      "MYT",
      "Mayotte",
      "Mayotte"
    ]
  },
  {
    "column": [
      51,
      178,
      "CG",
      "COG",
      "République du Congo",
      "Republic of the Congo"
    ]
  },
  {
    "column": [
      52,
      180,
      "CD",
      "COD",
      "République Démocratique du Congo",
      "The Democratic Republic Of The Congo"
    ]
  },
  {
    "column": [
      53,
      184,
      "CK",
      "COK",
      "Îles Cook",
      "Cook Islands"
    ]
  },
  {
    "column": [
      54,
      188,
      "CR",
      "CRI",
      "Costa Rica",
      "Costa Rica"
    ]
  },
  {
    "column": [
      55,
      191,
      "HR",
      "HRV",
      "Croatie",
      "Croatia"
    ]
  },
  {
    "column": [
      56,
      192,
      "CU",
      "CUB",
      "Cuba",
      "Cuba"
    ]
  },
  {
    "column": [
      57,
      196,
      "CY",
      "CYP",
      "Chypre",
      "Cyprus"
    ]
  },
  {
    "column": [
      58,
      203,
      "CZ",
      "CZE",
      "République Tchèque",
      "Czech Republic"
    ]
  },
  {
    "column": [
      59,
      204,
      "BJ",
      "BEN",
      "Bénin",
      "Benin"
    ]
  },
  {
    "column": [
      60,
      208,
      "DK",
      "DNK",
      "Danemark",
      "Denmark"
    ]
  },
  {
    "column": [
      61,
      212,
      "DM",
      "DMA",
      "Dominique",
      "Dominica"
    ]
  },
  {
    "column": [
      62,
      214,
      "DO",
      "DOM",
      "République Dominicaine",
      "Dominican Republic"
    ]
  },
  {
    "column": [
      63,
      218,
      "EC",
      "ECU",
      "Équateur",
      "Ecuador"
    ]
  },
  {
    "column": [
      64,
      222,
      "SV",
      "SLV",
      "El Salvador",
      "El Salvador"
    ]
  },
  {
    "column": [
      65,
      226,
      "GQ",
      "GNQ",
      "Guinée Équatoriale",
      "Equatorial Guinea"
    ]
  },
  {
    "column": [
      66,
      231,
      "ET",
      "ETH",
      "Éthiopie",
      "Ethiopia"
    ]
  },
  {
    "column": [
      67,
      232,
      "ER",
      "ERI",
      "Érythrée",
      "Eritrea"
    ]
  },
  {
    "column": [
      68,
      233,
      "EE",
      "EST",
      "Estonie",
      "Estonia"
    ]
  },
  {
    "column": [
      69,
      234,
      "FO",
      "FRO",
      "Îles Féroé",
      "Faroe Islands"
    ]
  },
  {
    "column": [
      70,
      238,
      "FK",
      "FLK",
      "Îles (malvinas) Falkland",
      "Falkland Islands"
    ]
  },
  {
    "column": [
      71,
      239,
      "GS",
      "SGS",
      "Géorgie du Sud et les Îles Sandwich du Sud",
      "South Georgia and the South Sandwich Islands"
    ]
  },
  {
    "column": [
      72,
      242,
      "FJ",
      "FJI",
      "Fidji",
      "Fiji"
    ]
  },
  {
    "column": [
      73,
      246,
      "FI",
      "FIN",
      "Finlande",
      "Finland"
    ]
  },
  {
    "column": [
      74,
      248,
      "AX",
      "ALA",
      "Îles Åland",
      "Åland Islands"
    ]
  },
  {
    "column": [
      75,
      250,
      "FR",
      "FRA",
      "France",
      "France"
    ]
  },
  {
    "column": [
      76,
      254,
      "GF",
      "GUF",
      "Guyane Française",
      "French Guiana"
    ]
  },
  {
    "column": [
      77,
      258,
      "PF",
      "PYF",
      "Polynésie Française",
      "French Polynesia"
    ]
  },
  {
    "column": [
      78,
      260,
      "TF",
      "ATF",
      "Terres Australes Françaises",
      "French Southern Territories"
    ]
  },
  {
    "column": [
      79,
      262,
      "DJ",
      "DJI",
      "Djibouti",
      "Djibouti"
    ]
  },
  {
    "column": [
      80,
      266,
      "GA",
      "GAB",
      "Gabon",
      "Gabon"
    ]
  },
  {
    "column": [
      81,
      268,
      "GE",
      "GEO",
      "Géorgie",
      "Georgia"
    ]
  },
  {
    "column": [
      82,
      270,
      "GM",
      "GMB",
      "Gambie",
      "Gambia"
    ]
  },
  {
    "column": [
      83,
      275,
      "PS",
      "PSE",
      "Territoire Palestinien Occupé",
      "Occupied Palestinian Territory"
    ]
  },
  {
    "column": [
      84,
      276,
      "DE",
      "DEU",
      "Allemagne",
      "Germany"
    ]
  },
  {
    "column": [
      85,
      288,
      "GH",
      "GHA",
      "Ghana",
      "Ghana"
    ]
  },
  {
    "column": [
      86,
      292,
      "GI",
      "GIB",
      "Gibraltar",
      "Gibraltar"
    ]
  },
  {
    "column": [
      87,
      296,
      "KI",
      "KIR",
      "Kiribati",
      "Kiribati"
    ]
  },
  {
    "column": [
      88,
      300,
      "GR",
      "GRC",
      "Grèce",
      "Greece"
    ]
  },
  {
    "column": [
      89,
      304,
      "GL",
      "GRL",
      "Groenland",
      "Greenland"
    ]
  },
  {
    "column": [
      90,
      308,
      "GD",
      "GRD",
      "Grenade",
      "Grenada"
    ]
  },
  {
    "column": [
      91,
      312,
      "GP",
      "GLP",
      "Guadeloupe",
      "Guadeloupe"
    ]
  },
  {
    "column": [
      92,
      316,
      "GU",
      "GUM",
      "Guam",
      "Guam"
    ]
  },
  {
    "column": [
      93,
      320,
      "GT",
      "GTM",
      "Guatemala",
      "Guatemala"
    ]
  },
  {
    "column": [
      94,
      324,
      "GN",
      "GIN",
      "Guinée",
      "Guinea"
    ]
  },
  {
    "column": [
      95,
      328,
      "GY",
      "GUY",
      "Guyana",
      "Guyana"
    ]
  },
  {
    "column": [
      96,
      332,
      "HT",
      "HTI",
      "Haïti",
      "Haiti"
    ]
  },
  {
    "column": [
      97,
      334,
      "HM",
      "HMD",
      "Îles Heard et Mcdonald",
      "Heard Island and McDonald Islands"
    ]
  },
  {
    "column": [
      98,
      336,
      "VA",
      "VAT",
      "Saint-Siège (état de la Cité du Vatican)",
      "Vatican City State"
    ]
  },
  {
    "column": [
      99,
      340,
      "HN",
      "HND",
      "Honduras",
      "Honduras"
    ]
  },
  {
    "column": [
      100,
      344,
      "HK",
      "HKG",
      "Hong-Kong",
      "Hong Kong"
    ]
  },
  {
    "column": [
      101,
      348,
      "HU",
      "HUN",
      "Hongrie",
      "Hungary"
    ]
  },
  {
    "column": [
      102,
      352,
      "IS",
      "ISL",
      "Islande",
      "Iceland"
    ]
  },
  {
    "column": [
      103,
      356,
      "IN",
      "IND",
      "Inde",
      "India"
    ]
  },
  {
    "column": [
      104,
      360,
      "ID",
      "IDN",
      "Indonésie",
      "Indonesia"
    ]
  },
  {
    "column": [
      105,
      364,
      "IR",
      "IRN",
      "République Islamique d'Iran",
      "Islamic Republic of Iran"
    ]
  },
  {
    "column": [
      106,
      368,
      "IQ",
      "IRQ",
      "Iraq",
      "Iraq"
    ]
  },
  {
    "column": [
      107,
      372,
      "IE",
      "IRL",
      "Irlande",
      "Ireland"
    ]
  },
  {
    "column": [
      108,
      376,
      "IL",
      "ISR",
      "Israël",
      "Israel"
    ]
  },
  {
    "column": [
      109,
      380,
      "IT",
      "ITA",
      "Italie",
      "Italy"
    ]
  },
  {
    "column": [
      110,
      384,
      "CI",
      "CIV",
      "Côte d'Ivoire",
      "Côte d'Ivoire"
    ]
  },
  {
    "column": [
      111,
      388,
      "JM",
      "JAM",
      "Jamaïque",
      "Jamaica"
    ]
  },
  {
    "column": [
      112,
      392,
      "JP",
      "JPN",
      "Japon",
      "Japan"
    ]
  },
  {
    "column": [
      113,
      398,
      "KZ",
      "KAZ",
      "Kazakhstan",
      "Kazakhstan"
    ]
  },
  {
    "column": [
      114,
      400,
      "JO",
      "JOR",
      "Jordanie",
      "Jordan"
    ]
  },
  {
    "column": [
      115,
      404,
      "KE",
      "KEN",
      "Kenya",
      "Kenya"
    ]
  },
  {
    "column": [
      116,
      408,
      "KP",
      "PRK",
      "République Populaire Démocratique de Corée",
      "Democratic People's Republic of Korea"
    ]
  },
  {
    "column": [
      117,
      410,
      "KR",
      "KOR",
      "République de Corée",
      "Republic of Korea"
    ]
  },
  {
    "column": [
      118,
      414,
      "KW",
      "KWT",
      "Koweït",
      "Kuwait"
    ]
  },
  {
    "column": [
      119,
      417,
      "KG",
      "KGZ",
      "Kirghizistan",
      "Kyrgyzstan"
    ]
  },
  {
    "column": [
      120,
      418,
      "LA",
      "LAO",
      "République Démocratique Populaire Lao",
      "Lao People's Democratic Republic"
    ]
  },
  {
    "column": [
      121,
      422,
      "LB",
      "LBN",
      "Liban",
      "Lebanon"
    ]
  },
  {
    "column": [
      122,
      426,
      "LS",
      "LSO",
      "Lesotho",
      "Lesotho"
    ]
  },
  {
    "column": [
      123,
      428,
      "LV",
      "LVA",
      "Lettonie",
      "Latvia"
    ]
  },
  {
    "column": [
      124,
      430,
      "LR",
      "LBR",
      "Libéria",
      "Liberia"
    ]
  },
  {
    "column": [
      125,
      434,
      "LY",
      "LBY",
      "Jamahiriya Arabe Libyenne",
      "Libyan Arab Jamahiriya"
    ]
  },
  {
    "column": [
      126,
      438,
      "LI",
      "LIE",
      "Liechtenstein",
      "Liechtenstein"
    ]
  },
  {
    "column": [
      127,
      440,
      "LT",
      "LTU",
      "Lituanie",
      "Lithuania"
    ]
  },
  {
    "column": [
      128,
      442,
      "LU",
      "LUX",
      "Luxembourg",
      "Luxembourg"
    ]
  },
  {
    "column": [
      129,
      446,
      "MO",
      "MAC",
      "Macao",
      "Macao"
    ]
  },
  {
    "column": [
      130,
      450,
      "MG",
      "MDG",
      "Madagascar",
      "Madagascar"
    ]
  },
  {
    "column": [
      131,
      454,
      "MW",
      "MWI",
      "Malawi",
      "Malawi"
    ]
  },
  {
    "column": [
      132,
      458,
      "MY",
      "MYS",
      "Malaisie",
      "Malaysia"
    ]
  },
  {
    "column": [
      133,
      462,
      "MV",
      "MDV",
      "Maldives",
      "Maldives"
    ]
  },
  {
    "column": [
      134,
      466,
      "ML",
      "MLI",
      "Mali",
      "Mali"
    ]
  },
  {
    "column": [
      135,
      470,
      "MT",
      "MLT",
      "Malte",
      "Malta"
    ]
  },
  {
    "column": [
      136,
      474,
      "MQ",
      "MTQ",
      "Martinique",
      "Martinique"
    ]
  },
  {
    "column": [
      137,
      478,
      "MR",
      "MRT",
      "Mauritanie",
      "Mauritania"
    ]
  },
  {
    "column": [
      138,
      480,
      "MU",
      "MUS",
      "Maurice",
      "Mauritius"
    ]
  },
  {
    "column": [
      139,
      484,
      "MX",
      "MEX",
      "Mexique",
      "Mexico"
    ]
  },
  {
    "column": [
      140,
      492,
      "MC",
      "MCO",
      "Monaco",
      "Monaco"
    ]
  },
  {
    "column": [
      141,
      496,
      "MN",
      "MNG",
      "Mongolie",
      "Mongolia"
    ]
  },
  {
    "column": [
      142,
      498,
      "MD",
      "MDA",
      "République de Moldova",
      "Republic of Moldova"
    ]
  },
  {
    "column": [
      143,
      500,
      "MS",
      "MSR",
      "Montserrat",
      "Montserrat"
    ]
  },
  {
    "column": [
      144,
      504,
      "MA",
      "MAR",
      "Maroc",
      "Morocco"
    ]
  },
  {
    "column": [
      145,
      508,
      "MZ",
      "MOZ",
      "Mozambique",
      "Mozambique"
    ]
  },
  {
    "column": [
      146,
      512,
      "OM",
      "OMN",
      "Oman",
      "Oman"
    ]
  },
  {
    "column": [
      147,
      516,
      "NA",
      "NAM",
      "Namibie",
      "Namibia"
    ]
  },
  {
    "column": [
      148,
      520,
      "NR",
      "NRU",
      "Nauru",
      "Nauru"
    ]
  },
  {
    "column": [
      149,
      524,
      "NP",
      "NPL",
      "Népal",
      "Nepal"
    ]
  },
  {
    "column": [
      150,
      528,
      "NL",
      "NLD",
      "Pays-Bas",
      "Netherlands"
    ]
  },
  {
    "column": [
      151,
      530,
      "AN",
      "ANT",
      "Antilles Néerlandaises",
      "Netherlands Antilles"
    ]
  },
  {
    "column": [
      152,
      533,
      "AW",
      "ABW",
      "Aruba",
      "Aruba"
    ]
  },
  {
    "column": [
      153,
      540,
      "NC",
      "NCL",
      "Nouvelle-Calédonie",
      "New Caledonia"
    ]
  },
  {
    "column": [
      154,
      548,
      "VU",
      "VUT",
      "Vanuatu",
      "Vanuatu"
    ]
  },
  {
    "column": [
      155,
      554,
      "NZ",
      "NZL",
      "Nouvelle-Zélande",
      "New Zealand"
    ]
  },
  {
    "column": [
      156,
      558,
      "NI",
      "NIC",
      "Nicaragua",
      "Nicaragua"
    ]
  },
  {
    "column": [
      157,
      562,
      "NE",
      "NER",
      "Niger",
      "Niger"
    ]
  },
  {
    "column": [
      158,
      566,
      "NG",
      "NGA",
      "Nigéria",
      "Nigeria"
    ]
  },
  {
    "column": [
      159,
      570,
      "NU",
      "NIU",
      "Niué",
      "Niue"
    ]
  },
  {
    "column": [
      160,
      574,
      "NF",
      "NFK",
      "Île Norfolk",
      "Norfolk Island"
    ]
  },
  {
    "column": [
      161,
      578,
      "NO",
      "NOR",
      "Norvège",
      "Norway"
    ]
  },
  {
    "column": [
      162,
      580,
      "MP",
      "MNP",
      "Îles Mariannes du Nord",
      "Northern Mariana Islands"
    ]
  },
  {
    "column": [
      163,
      581,
      "UM",
      "UMI",
      "Îles Mineures Éloignées des États-Unis",
      "United States Minor Outlying Islands"
    ]
  },
  {
    "column": [
      164,
      583,
      "FM",
      "FSM",
      "États Fédérés de Micronésie",
      "Federated States of Micronesia"
    ]
  },
  {
    "column": [
      165,
      584,
      "MH",
      "MHL",
      "Îles Marshall",
      "Marshall Islands"
    ]
  },
  {
    "column": [
      166,
      585,
      "PW",
      "PLW",
      "Palaos",
      "Palau"
    ]
  },
  {
    "column": [
      167,
      586,
      "PK",
      "PAK",
      "Pakistan",
      "Pakistan"
    ]
  },
  {
    "column": [
      168,
      591,
      "PA",
      "PAN",
      "Panama",
      "Panama"
    ]
  },
  {
    "column": [
      169,
      598,
      "PG",
      "PNG",
      "Papouasie-Nouvelle-Guinée",
      "Papua New Guinea"
    ]
  },
  {
    "column": [
      170,
      600,
      "PY",
      "PRY",
      "Paraguay",
      "Paraguay"
    ]
  },
  {
    "column": [
      171,
      604,
      "PE",
      "PER",
      "Pérou",
      "Peru"
    ]
  },
  {
    "column": [
      172,
      608,
      "PH",
      "PHL",
      "Philippines",
      "Philippines"
    ]
  },
  {
    "column": [
      173,
      612,
      "PN",
      "PCN",
      "Pitcairn",
      "Pitcairn"
    ]
  },
  {
    "column": [
      174,
      616,
      "PL",
      "POL",
      "Pologne",
      "Poland"
    ]
  },
  {
    "column": [
      175,
      620,
      "PT",
      "PRT",
      "Portugal",
      "Portugal"
    ]
  },
  {
    "column": [
      176,
      624,
      "GW",
      "GNB",
      "Guinée-Bissau",
      "Guinea-Bissau"
    ]
  },
  {
    "column": [
      177,
      626,
      "TL",
      "TLS",
      "Timor-Leste",
      "Timor-Leste"
    ]
  },
  {
    "column": [
      178,
      630,
      "PR",
      "PRI",
      "Porto Rico",
      "Puerto Rico"
    ]
  },
  {
    "column": [
      179,
      634,
      "QA",
      "QAT",
      "Qatar",
      "Qatar"
    ]
  },
  {
    "column": [
      180,
      638,
      "RE",
      "REU",
      "Réunion",
      "Réunion"
    ]
  },
  {
    "column": [
      181,
      642,
      "RO",
      "ROU",
      "Roumanie",
      "Romania"
    ]
  },
  {
    "column": [
      182,
      643,
      "RU",
      "RUS",
      "Fédération de Russie",
      "Russian Federation"
    ]
  },
  {
    "column": [
      183,
      646,
      "RW",
      "RWA",
      "Rwanda",
      "Rwanda"
    ]
  },
  {
    "column": [
      184,
      654,
      "SH",
      "SHN",
      "Sainte-Hélène",
      "Saint Helena"
    ]
  },
  {
    "column": [
      185,
      659,
      "KN",
      "KNA",
      "Saint-Kitts-et-Nevis",
      "Saint Kitts and Nevis"
    ]
  },
  {
    "column": [
      186,
      660,
      "AI",
      "AIA",
      "Anguilla",
      "Anguilla"
    ]
  },
  {
    "column": [
      187,
      662,
      "LC",
      "LCA",
      "Sainte-Lucie",
      "Saint Lucia"
    ]
  },
  {
    "column": [
      188,
      666,
      "PM",
      "SPM",
      "Saint-Pierre-et-Miquelon",
      "Saint-Pierre and Miquelon"
    ]
  },
  {
    "column": [
      189,
      670,
      "VC",
      "VCT",
      "Saint-Vincent-et-les Grenadines",
      "Saint Vincent and the Grenadines"
    ]
  },
  {
    "column": [
      190,
      674,
      "SM",
      "SMR",
      "Saint-Marin",
      "San Marino"
    ]
  },
  {
    "column": [
      191,
      678,
      "ST",
      "STP",
      "Sao Tomé-et-Principe",
      "Sao Tome and Principe"
    ]
  },
  {
    "column": [
      192,
      682,
      "SA",
      "SAU",
      "Arabie Saoudite",
      "Saudi Arabia"
    ]
  },
  {
    "column": [
      193,
      686,
      "SN",
      "SEN",
      "Sénégal",
      "Senegal"
    ]
  },
  {
    "column": [
      194,
      690,
      "SC",
      "SYC",
      "Seychelles",
      "Seychelles"
    ]
  },
  {
    "column": [
      195,
      694,
      "SL",
      "SLE",
      "Sierra Leone",
      "Sierra Leone"
    ]
  },
  {
    "column": [
      196,
      702,
      "SG",
      "SGP",
      "Singapour",
      "Singapore"
    ]
  },
  {
    "column": [
      197,
      703,
      "SK",
      "SVK",
      "Slovaquie",
      "Slovakia"
    ]
  },
  {
    "column": [
      198,
      704,
      "VN",
      "VNM",
      "Viet Nam",
      "Vietnam"
    ]
  },
  {
    "column": [
      199,
      705,
      "SI",
      "SVN",
      "Slovénie",
      "Slovenia"
    ]
  },
  {
    "column": [
      200,
      706,
      "SO",
      "SOM",
      "Somalie",
      "Somalia"
    ]
  },
  {
    "column": [
      201,
      710,
      "ZA",
      "ZAF",
      "Afrique du Sud",
      "South Africa"
    ]
  },
  {
    "column": [
      202,
      716,
      "ZW",
      "ZWE",
      "Zimbabwe",
      "Zimbabwe"
    ]
  },
  {
    "column": [
      203,
      724,
      "ES",
      "ESP",
      "Espagne",
      "Spain"
    ]
  },
  {
    "column": [
      204,
      732,
      "EH",
      "ESH",
      "Sahara Occidental",
      "Western Sahara"
    ]
  },
  {
    "column": [
      205,
      736,
      "SD",
      "SDN",
      "Soudan",
      "Sudan"
    ]
  },
  {
    "column": [
      206,
      740,
      "SR",
      "SUR",
      "Suriname",
      "Suriname"
    ]
  },
  {
    "column": [
      207,
      744,
      "SJ",
      "SJM",
      "Svalbard etÎle Jan Mayen",
      "Svalbard and Jan Mayen"
    ]
  },
  {
    "column": [
      208,
      748,
      "SZ",
      "SWZ",
      "Swaziland",
      "Swaziland"
    ]
  },
  {
    "column": [
      209,
      752,
      "SE",
      "SWE",
      "Suède",
      "Sweden"
    ]
  },
  {
    "column": [
      210,
      756,
      "CH",
      "CHE",
      "Suisse",
      "Switzerland"
    ]
  },
  {
    "column": [
      211,
      760,
      "SY",
      "SYR",
      "République Arabe Syrienne",
      "Syrian Arab Republic"
    ]
  },
  {
    "column": [
      212,
      762,
      "TJ",
      "TJK",
      "Tadjikistan",
      "Tajikistan"
    ]
  },
  {
    "column": [
      213,
      764,
      "TH",
      "THA",
      "Thaïlande",
      "Thailand"
    ]
  },
  {
    "column": [
      214,
      768,
      "TG",
      "TGO",
      "Togo",
      "Togo"
    ]
  },
  {
    "column": [
      215,
      772,
      "TK",
      "TKL",
      "Tokelau",
      "Tokelau"
    ]
  },
  {
    "column": [
      216,
      776,
      "TO",
      "TON",
      "Tonga",
      "Tonga"
    ]
  },
  {
    "column": [
      217,
      780,
      "TT",
      "TTO",
      "Trinité-et-Tobago",
      "Trinidad and Tobago"
    ]
  },
  {
    "column": [
      218,
      784,
      "AE",
      "ARE",
      "Émirats Arabes Unis",
      "United Arab Emirates"
    ]
  },
  {
    "column": [
      219,
      788,
      "TN",
      "TUN",
      "Tunisie",
      "Tunisia"
    ]
  },
  {
    "column": [
      220,
      792,
      "TR",
      "TUR",
      "Turquie",
      "Turkey"
    ]
  },
  {
    "column": [
      221,
      795,
      "TM",
      "TKM",
      "Turkménistan",
      "Turkmenistan"
    ]
  },
  {
    "column": [
      222,
      796,
      "TC",
      "TCA",
      "Îles Turks et Caïques",
      "Turks and Caicos Islands"
    ]
  },
  {
    "column": [
      223,
      798,
      "TV",
      "TUV",
      "Tuvalu",
      "Tuvalu"
    ]
  },
  {
    "column": [
      224,
      800,
      "UG",
      "UGA",
      "Ouganda",
      "Uganda"
    ]
  },
  {
    "column": [
      225,
      804,
      "UA",
      "UKR",
      "Ukraine",
      "Ukraine"
    ]
  },
  {
    "column": [
      226,
      807,
      "MK",
      "MKD",
      "L'ex-République Yougoslave de Macédoine",
      "The Former Yugoslav Republic of Macedonia"
    ]
  },
  {
    "column": [
      227,
      818,
      "EG",
      "EGY",
      "Égypte",
      "Egypt"
    ]
  },
  {
    "column": [
      228,
      826,
      "GB",
      "GBR",
      "Royaume-Uni",
      "United Kingdom"
    ]
  },
  {
    "column": [
      229,
      833,
      "IM",
      "IMN",
      "Île de Man",
      "Isle of Man"
    ]
  },
  {
    "column": [
      230,
      834,
      "TZ",
      "TZA",
      "République-Unie de Tanzanie",
      "United Republic Of Tanzania"
    ]
  },
  {
    "column": [
      231,
      840,
      "US",
      "USA",
      "États-Unis",
      "United States"
    ]
  },
  {
    "column": [
      232,
      850,
      "VI",
      "VIR",
      "Îles Vierges des États-Unis",
      "U.S. Virgin Islands"
    ]
  },
  {
    "column": [
      233,
      854,
      "BF",
      "BFA",
      "Burkina Faso",
      "Burkina Faso"
    ]
  },
  {
    "column": [
      234,
      858,
      "UY",
      "URY",
      "Uruguay",
      "Uruguay"
    ]
  },
  {
    "column": [
      235,
      860,
      "UZ",
      "UZB",
      "Ouzbékistan",
      "Uzbekistan"
    ]
  },
  {
    "column": [
      236,
      862,
      "VE",
      "VEN",
      "Venezuela",
      "Venezuela"
    ]
  },
  {
    "column": [
      237,
      876,
      "WF",
      "WLF",
      "Wallis et Futuna",
      "Wallis and Futuna"
    ]
  },
  {
    "column": [
      238,
      882,
      "WS",
      "WSM",
      "Samoa",
      "Samoa"
    ]
  },
  {
    "column": [
      239,
      887,
      "YE",
      "YEM",
      "Yémen",
      "Yemen"
    ]
  },
  {
    "column": [
      240,
      891,
      "CS",
      "SCG",
      "Serbie-et-Monténégro",
      "Serbia and Montenegro"
    ]
  },
  {
    "column": [
      241,
      894,
      "ZM",
      "ZMB",
      "Zambie",
      "Zambia"
    ]
  }
]