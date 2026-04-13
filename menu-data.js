/**
 * The Elite Peak — Menu Data
 *
 * Edit this file to update prices, add/remove items, or add new categories.
 * Changes take effect immediately on the next page refresh — no HTML editing needed.
 *
 * Structure:
 *   Each category has an id, label, tabLabel, and one or more sections.
 *   Each section has a layout ("grid" or "table") and an items array.
 *   Grid items:  { "name": "...", "price": 000 }
 *   Table items: { "name": "...", "prices": [000, 000, ...] }  ← use null for "—"
 *   Add a note under a name: { "name": "...", "price": 000, "note": "..." }
 */

var MENU_DATA = {
  "categories": [
    {
      "id": "soup",
      "label": "Soup",
      "tabLabel": "Soup",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Vegetable Soup", "price": 640 },
            { "name": "Chicken Soup",   "price": 800 },
            { "name": "Mutton Soup",    "price": 1070 }
          ]
        }
      ]
    },
    {
      "id": "noodles",
      "label": "Noodles",
      "tabLabel": "Noodles",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Vegetable Noodles", "price": 560 },
            { "name": "Egg Noodles",       "price": 650 },
            { "name": "Chicken Noodles",   "price": 750 },
            { "name": "Fish Noodles",      "price": 810 },
            { "name": "Sea Food Noodles",  "price": 1300 },
            { "name": "Mixed Noodles",     "price": 1350 }
          ]
        }
      ]
    },
    {
      "id": "pasta",
      "label": "Macaroni / Pasta",
      "tabLabel": "Macaroni / Pasta",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Vegetable Macaroni", "price": 560 },
            { "name": "Egg Macaroni",       "price": 670 },
            { "name": "Chicken Macaroni",   "price": 790 },
            { "name": "Chicken Pasta",      "price": 840 }
          ]
        }
      ]
    },
    {
      "id": "fried-rice",
      "label": "Fried Rice",
      "tabLabel": "Fried Rice",
      "note": "Regular (01 serve) \u00b7 Medium (02) \u00b7 Large (03)",
      "sections": [
        {
          "layout": "table",
          "columns": ["Item", "Regular", "Medium", "Large"],
          "items": [
            { "name": "Vegetable Fried Rice", "prices": [580,  1160, 1740] },
            { "name": "Egg Fried Rice",        "prices": [690,  1380, 2070] },
            { "name": "Chicken Fried Rice",    "prices": [760,  1520, 2280] },
            { "name": "Fish Fried Rice",       "prices": [1060, 2120, 3180] },
            { "name": "Sea Food Fried Rice",   "prices": [1170, 2340, 3510] },
            { "name": "Mixed Fried Rice",      "prices": [1240, 2480, 3720] }
          ]
        }
      ]
    },
    {
      "id": "kottu",
      "label": "Kottu Rotti / Rotti",
      "tabLabel": "Kottu Rotti",
      "sections": [
        {
          "layout": "table",
          "columns": ["Item", "Normal", "With Cheese"],
          "items": [
            { "name": "Vegetable Kottu",      "prices": [580,  880]  },
            { "name": "Egg Kottu",            "prices": [690,  990]  },
            { "name": "Mixed Kottu",          "prices": [1240, 1540] },
            { "name": "Chicken Kottu",        "prices": [760,  1060] },
            { "name": "Mutton Kottu",         "prices": [1480, 1780] },
            { "name": "Sea Food Kottu",       "prices": [1170, 1470] },
            { "name": "Masala Chicken Kottu", "prices": [1050, null] },
            { "name": "Egg Dolphin",          "prices": [850,  null] },
            { "name": "Chicken Dolphin",      "prices": [970,  null] }
          ]
        }
      ]
    },
    {
      "id": "biryani",
      "label": "Biryani / Nase Goreng",
      "tabLabel": "Biryani",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Vegetable Biriyani",   "price": 650  },
            { "name": "Chicken Biriyani",     "price": 1100 },
            { "name": "Mutton Biriyani",      "price": 1600 },
            { "name": "Chicken Nase Goreng",  "price": 1000 },
            { "name": "Sea Food Nase Goreng", "price": 1240 }
          ]
        },
        {
          "subtitle": "Biryani Sawaan",
          "subtitleNote": "Can be served to 5 people",
          "layout": "grid",
          "items": [
            { "name": "Chicken Sawaan", "price": 6440, "note": "Serves 5 people" },
            { "name": "Mutton Sawaan",  "price": 8640, "note": "Serves 5 people" }
          ]
        }
      ]
    },
    {
      "id": "curries",
      "label": "Curries",
      "tabLabel": "Curries",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Dhal Curry",     "price": 530  },
            { "name": "Potato Curry",   "price": 480  },
            { "name": "Vegetable Kurma","price": 850  },
            { "name": "Egg Curry",      "price": 460  },
            { "name": "Fish Curry",     "price": 820  },
            { "name": "Chicken Curry",  "price": 720  },
            { "name": "Chicken Kurma",  "price": 1300, "note": "Boneless" },
            { "name": "Mutton Curry",   "price": 1800, "note": "Serves 3 people" }
          ]
        }
      ]
    },
    {
      "id": "devilled",
      "label": "Devilled",
      "tabLabel": "Devilled",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Devilled Soya",    "price": 670  },
            { "name": "Devilled Chicken", "price": 1300 },
            { "name": "Devilled Fish",    "price": 1900, "note": "Thalapath" },
            { "name": "Devilled Prawns",  "price": 1900 },
            { "name": "Devilled Sausage", "price": 1120 }
          ]
        }
      ]
    },
    {
      "id": "fried",
      "label": "Fried Dishes",
      "tabLabel": "Fried Dishes",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Butter Fried Fish",      "price": 1900 },
            { "name": "Butter Fried Prawn",     "price": 1900 },
            { "name": "Chicken Fry",            "price": 1320 },
            { "name": "Crispy Chicken",         "price": 1500 },
            { "name": "Fish Fry",               "price": 2000 },
            { "name": "Hot Butter Cuttle Fish", "price": 1800 }
          ]
        }
      ]
    },
    {
      "id": "stew",
      "label": "Stew",
      "tabLabel": "Stew & Chop Suey",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Chicken Stew", "price": 1470 },
            { "name": "Mutton Stew",  "price": 1870 }
          ]
        },
        {
          "subtitle": "Chop Suey",
          "layout": "grid",
          "items": [
            { "name": "Vegetable Chop Suey", "price": 770  },
            { "name": "Sea Food Chop Suey",  "price": 2490 }
          ]
        }
      ]
    },
    {
      "id": "egg",
      "label": "Egg",
      "tabLabel": "Egg",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Omelette",                  "price": 400 },
            { "name": "Chicken Omelette",          "price": 670 },
            { "name": "Sausage Omelette",          "price": 660 },
            { "name": "Chicken & Cheese Omelette", "price": 760 },
            { "name": "Cheese Omelette",           "price": 720 }
          ]
        }
      ]
    },
    {
      "id": "special",
      "label": "Chef's Special Dish",
      "tabLabel": "Chef's Special",
      "note": "\u23f1 45 minute preparation",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Kili Parotta",               "price": 970  },
            { "name": "Kili Parotta with Omelette", "price": 1100 },
            { "name": "Dum Parotta",                "price": 1999 },
            { "name": "Paal Parotta",               "price": 1050 },
            { "name": "Chatti Pathiri",             "price": 1950 },
            { "name": "Chilli Parotta",             "price": 1990 }
          ]
        }
      ]
    },
    {
      "id": "saturday",
      "label": "Saturday's Special",
      "tabLabel": "Saturday's Special",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Veg String Hoppers Kottu",     "price": 580  },
            { "name": "Egg String Hoppers Kottu",     "price": 690  },
            { "name": "Chicken String Hoppers Kottu", "price": 760  },
            { "name": "Seafood String Hoppers Kottu", "price": 1200 },
            { "name": "Mixed Seafood Kottu",          "price": 1320 }
          ]
        }
      ]
    },
    {
      "id": "rice-curry",
      "label": "Rice & Curry",
      "tabLabel": "Rice & Curry",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Vegetable Rice & Curry", "price": 430 },
            { "name": "Egg Rice & Curry",       "price": 530 },
            { "name": "Chicken Rice & Curry",   "price": 650 },
            { "name": "Fish Rice & Curry",      "price": 830, "note": "Thalapath" }
          ]
        }
      ]
    },
    {
      "id": "juice",
      "label": "Fresh Juice & Milkshakes",
      "tabLabel": "Juice & Drinks",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Vanilla Lassi",        "price": 550 },
            { "name": "Lime Juice",           "price": 480 },
            { "name": "Papaya Juice",         "price": 380 },
            { "name": "Carrot Juice",         "price": 420 },
            { "name": "Water Melon Juice",    "price": 450 },
            { "name": "Mixed Fruit Juice",    "price": 480 },
            { "name": "Avocado Juice",        "price": 480, "note": "Seasonal" },
            { "name": "Faluda",               "price": 550 },
            { "name": "Vanilla Milkshake",    "price": 500 },
            { "name": "Chocolate Milkshake",  "price": 500 },
            { "name": "Strawberry Milkshake", "price": 500 },
            { "name": "Milo Milkshake",       "price": 550 },
            { "name": "Banana Milkshake",     "price": 500 }
          ]
        },
        {
          "subtitle": "Drinks",
          "layout": "grid",
          "items": [
            { "name": "Mineral Water (1.5L)", "price": 130 },
            { "name": "Coca Cola (500ml)",    "price": 220 },
            { "name": "Coca Cola (1 Litre)",  "price": 320 },
            { "name": "Sprite (500ml)",       "price": 200 },
            { "name": "Sprite (1 Litre)",     "price": 300 },
            { "name": "Fanta",                "price": 200 },
            { "name": "Black Coffee",         "price": 150 },
            { "name": "Milk Coffee",          "price": 200 },
            { "name": "Black Tea",            "price": 100 },
            { "name": "Milk Tea",             "price": 200 }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "Desserts",
      "tabLabel": "Desserts",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Fruit Salad",                "price": 570 },
            { "name": "Vanilla Ice Cream",          "price": 570 },
            { "name": "Chocolate Ice Cream",        "price": 570 },
            { "name": "Strawberry Ice Cream",       "price": 570 },
            { "name": "Elite Special Ice Cream",    "price": 620 },
            { "name": "Fruit Salad with Ice Cream", "price": 620 }
          ]
        }
      ]
    },
    {
      "id": "savor",
      "label": "Savor Bites",
      "tabLabel": "Savor Bites & BBQ",
      "note": "\u23f1 40 minute preparation",
      "sections": [
        {
          "layout": "grid",
          "items": [
            { "name": "Chicken Fry 1 kg",           "price": 3500 },
            { "name": "Chicken Fry \u00bdkg",        "price": 1900 },
            { "name": "Fish Fry Thalapath 1 kg",    "price": 5000 },
            { "name": "Fish Fry Thalapath \u00bdkg", "price": 2700 }
          ]
        },
        {
          "subtitle": "BBQ",
          "layout": "grid",
          "items": [
            { "name": "BBQ Chicken 1 kg",  "price": 3500 },
            { "name": "BBQ Chicken \u00bdkg", "price": 1900 }
          ]
        }
      ]
    },
    {
      "id": "south-indian",
      "label": "South Indian",
      "tabLabel": "South Indian",
      "note": "\"Every Spice Has a Soul\"",
      "subtitleStyle": "si",
      "sections": [
        {
          "subtitle": "Golden Puri Escapade",
          "layout": "grid",
          "items": [
            { "name": "Puri", "price": 590, "note": "1 set = 3 puris \u00b7 with Potato Masala" }
          ]
        },
        {
          "subtitle": "Wholewheat Wonders",
          "layout": "grid",
          "items": [
            { "name": "Chappati", "price": 475, "note": "1 set = 3 \u00b7 with Potato Masala" }
          ]
        },
        {
          "subtitle": "Bowls of Bliss \u2014 Kurma",
          "layout": "grid",
          "items": [
            { "name": "Vegetable Kurma", "price": 850  },
            { "name": "Chicken Kurma",   "price": 1300 },
            { "name": "Mutton Kurma",    "price": 2000 },
            { "name": "Paneer Kurma",    "price": 950  },
            { "name": "Prawns Kurma",    "price": 1850 }
          ]
        },
        {
          "subtitle": "Naan-tastic Eats",
          "layout": "grid",
          "items": [
            { "name": "Butter Naan", "price": 320 },
            { "name": "Garlic Naan", "price": 320 },
            { "name": "Plain Naan",  "price": 250 }
          ]
        },
        {
          "subtitle": "Paratha Delights",
          "layout": "grid",
          "items": [
            { "name": "Indian Paratha", "price": 95  },
            { "name": "Egg Paratha",    "price": 180 },
            { "name": "Nool Paratha",   "price": 120 },
            { "name": "Cheese Paratha", "price": 220 },
            { "name": "Aloo Paratha",   "price": 320 }
          ]
        }
      ]
    }
  ]
};
