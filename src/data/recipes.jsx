// src/data/recipes.js
import tomatoSoupImg from "../assets/tomato-soup-recipe.jpg";
import chickenSoupImg from "../assets/chickensoup.jpg";
import vegetableSoupImg from "../assets/vegetablesoup.jpg";
import lentilSoupImg from "../assets/lentilsoup.jpeg";
import mushroomSoupImg from "../assets/mashroom soup.jpeg";
import dalImg from "../assets/dal-fry.webp";
import rotiImg from "../assets/roti.jpeg";
import sabziImg from "../assets/sabzi.jpeg";
import pohaImg from "../assets/poha.jpg";
import upmaImg from "../assets/upma.jpg";
import khichdiImg from "../assets/khichdi.jpeg";
import rajmaImg from "../assets/rajma.jpeg";
import choleImg from "../assets/chole.jpeg";
import alooParathaImg from "../assets/alooparatha.jpg";
import paneerCurryImg from "../assets/paneer-curry-recipe.webp";
import bhindiImg from "../assets/bhindi.jpeg";

import lemonRiceImg from "../assets/lemonrice.webp";
import curdRiceImg from "../assets/curdrice.webp";
import idliImg from "../assets/idli.jpg";
import dosaImg from "../assets/dosa.jpeg";
import pakoraImg from "../assets/pakora.jpg";
import kheerImg from "../assets/kheer.jpg";
import pulaoImg from "../assets/pulao.jpg";

const recipes = [
  {
    id: 1,
    name: "Dal Tadka",
    image: dalImg,
    ingredients: ["toor dal", "onion", "tomato", "garlic", "ghee"],
    instructions: [
      "Wash and soak toor dal for 20 minutes.",
      "Pressure cook dal with turmeric and salt until soft.",
      "In a pan, heat ghee, add cumin seeds and garlic.",
      "Sauté onion and tomato until golden.",
      "Mix cooked dal with this tadka and simmer 5 minutes.",
      "Garnish with coriander leaves and serve hot with rice or roti."
    ],
    nutrition: { calories: 280, protein: "12g", fat: "8g", carbs: "36g" },
  },
  {
    id: 2,
    name: "Chapati / Roti",
    image: rotiImg,
    ingredients: ["wheat flour", "water", "salt"],
    instructions: [
      "Mix flour, salt, and water to make soft dough.",
      "Knead for 8–10 minutes, cover and rest for 20 minutes.",
      "Divide dough into small balls and roll into thin circles.",
      "Cook on hot tawa until brown spots appear on both sides.",
      "Optionally puff directly on flame and serve hot."
    ],
    nutrition: { calories: 120, protein: "3g", fat: "1g", carbs: "25g" },
  },
  {
    id: 3,
    name: "Aloo Sabzi",
    image: sabziImg,
    ingredients: ["potato", "onion", "tomato", "spices"],
    instructions: [
      "Peel and chop potatoes into cubes.",
      "Heat oil, add cumin and onion, sauté till golden.",
      "Add tomato, turmeric, chili, coriander powder.",
      "Cook until masala releases oil.",
      "Add potatoes, salt, little water and cover.",
      "Cook until potatoes are tender, garnish with coriander."
    ],
    nutrition: { calories: 200, protein: "4g", fat: "7g", carbs: "32g" },
  },
  {
    id: 4,
    name: "Poha",
    image: pohaImg,
    ingredients: ["poha", "onion", "green chili", "lemon"],
    instructions: [
      "Wash poha in a strainer and keep aside.",
      "Heat oil, add mustard seeds, curry leaves, onion, and green chili.",
      "Add turmeric, salt and mix well.",
      "Add soaked poha, stir gently for 2–3 minutes.",
      "Switch off flame, squeeze lemon juice, garnish with coriander."
    ],
    nutrition: { calories: 250, protein: "5g", fat: "6g", carbs: "45g" },
  },
  {
    id: 5,
    name: "Upma",
    image: upmaImg,
    ingredients: ["rava", "onion", "carrot", "green chili"],
    instructions: [
      "Dry roast rava until aromatic and keep aside.",
      "Heat oil, add mustard seeds, curry leaves, onion, and chili.",
      "Add chopped vegetables and sauté for 2 minutes.",
      "Add 3 cups water, salt, bring to boil.",
      "Add rava slowly while stirring to avoid lumps.",
      "Cook until fluffy, garnish with coriander."
    ],
    nutrition: { calories: 220, protein: "6g", fat: "5g", carbs: "40g" },
  },
  {
    id: 6,
    name: "Khichdi",
    image: khichdiImg,
    ingredients: ["rice", "moong dal", "turmeric", "ghee"],
    instructions: [
      "Wash rice and moong dal together.",
      "Pressure cook with turmeric, salt and 3 cups water.",
      "Prepare tadka with ghee, cumin, ginger.",
      "Mix tadka into khichdi and simmer 2 minutes.",
      "Serve hot with pickle or papad."
    ],
    nutrition: { calories: 300, protein: "10g", fat: "9g", carbs: "48g" },
  },
  {
    id: 7,
    name: "Rajma Curry",
    image: rajmaImg,
    ingredients: ["rajma", "onion", "tomato", "spices"],
    instructions: [
      "Soak rajma overnight and pressure cook until soft.",
      "Make masala with onion, tomato, ginger, garlic, and spices.",
      "Add boiled rajma and 1 cup water.",
      "Cook for 15 minutes on medium flame.",
      "Garnish with coriander and serve with rice."
    ],
    nutrition: { calories: 400, protein: "15g", fat: "10g", carbs: "60g" },
  },
  {
    id: 8,
    name: "Chole",
    image: choleImg,
    ingredients: ["chickpeas", "onion", "tomato", "spices"],
    instructions: [
      "Soak chickpeas overnight and pressure cook until soft.",
      "Prepare onion-tomato masala with ginger, garlic, and spices.",
      "Add chickpeas and 1.5 cups water, simmer 15 minutes.",
      "Add garam masala, garnish with coriander.",
      "Serve with bhature or rice."
    ],
    nutrition: { calories: 380, protein: "14g", fat: "9g", carbs: "58g" },
  },
  {
    id: 9,
    name: "Aloo Paratha",
    image: alooParathaImg,
    ingredients: ["wheat flour", "potato", "green chili", "spices"],
    instructions: [
      "Make dough with wheat flour, water, and salt.",
      "Boil and mash potatoes, mix with chili and spices.",
      "Stuff potato mixture into dough balls and roll gently.",
      "Cook on tawa with ghee until golden spots appear.",
      "Serve hot with curd or pickle."
    ],
    nutrition: { calories: 320, protein: "7g", fat: "10g", carbs: "50g" },
  },
  {
    id: 10,
    name: "Paneer Curry",
    image: paneerCurryImg,
    ingredients: ["paneer", "onion", "tomato", "spices", "cream"],
    instructions: [
      "Heat oil, sauté onion, ginger, garlic until golden.",
      "Add tomato puree and spices, cook until oil separates.",
      "Add paneer cubes, mix gently.",
      "Add cream and simmer for 5 minutes.",
      "Serve hot with naan or roti."
    ],
    nutrition: { calories: 420, protein: "16g", fat: "24g", carbs: "28g" },
  },
  {
    id: 11,
    name: "Bhindi Masala",
    image: bhindiImg,
    ingredients: ["bhindi", "onion", "tomato", "spices"],
    instructions: [
      "Wash and dry bhindi, chop into pieces.",
      "Heat oil, sauté onion until golden.",
      "Add tomato and spices, cook until soft.",
      "Add bhindi, cover and cook until tender.",
      "Serve with roti."
    ],
    nutrition: { calories: 180, protein: "4g", fat: "7g", carbs: "25g" },
  },
  {
    id: 12,
    name: "Lemon Rice",
    image: lemonRiceImg,
    ingredients: ["rice", "lemon", "green chili", "curry leaves"],
    instructions: [
      "Cook rice and let it cool slightly.",
      "Heat oil, add mustard seeds, curry leaves, chili.",
      "Add turmeric and mix with rice.",
      "Squeeze lemon juice, mix well and serve."
    ],
    nutrition: { calories: 250, protein: "5g", fat: "6g", carbs: "45g" },
  },
  {
    id: 13,
    name: "Curd Rice",
    image: curdRiceImg,
    ingredients: ["rice", "curd", "curry leaves", "green chili"],
    instructions: [
      "Cook rice and let it cool.",
      "Add curd, salt and mix well.",
      "Prepare tempering with oil, mustard, curry leaves, chili.",
      "Mix tempering into rice and serve chilled."
    ],
    nutrition: { calories: 230, protein: "6g", fat: "5g", carbs: "42g" },
  },
  {
    id: 14,
    name: "Idli",
    image: idliImg,
    ingredients: ["rice", "urad dal", "fenugreek seeds"],
    instructions: [
      "Soak rice and urad dal separately for 6 hours.",
      "Grind into smooth batter, ferment overnight.",
      "Grease idli molds, pour batter.",
      "Steam for 10 minutes until fluffy.",
      "Serve with sambar and chutney."
    ],
    nutrition: { calories: 150, protein: "4g", fat: "1g", carbs: "32g" },
  },
  {
    id: 15,
    name: "Dosa",
    image: dosaImg,
    ingredients: ["rice", "urad dal", "fenugreek seeds"],
    instructions: [
      "Prepare dosa batter by soaking, grinding, and fermenting like idli.",
      "Heat tawa, spread batter thinly.",
      "Drizzle oil and cook until crisp.",
      "Fold and serve with chutney and sambar."
    ],
    nutrition: { calories: 180, protein: "4g", fat: "3g", carbs: "35g" },
  },
  {
    id: 16,
    name: "Pakora",
    image: pakoraImg,
    ingredients: ["besan", "onion", "green chili", "spices"],
    instructions: [
      "Mix besan with onion, chili, salt, and water to make batter.",
      "Heat oil for deep frying.",
      "Drop spoonfuls into oil and fry until golden.",
      "Serve hot with chutney."
    ],
    nutrition: { calories: 220, protein: "6g", fat: "12g", carbs: "22g" },
  },
  {
    id: 17,
    name: "Kheer",
    image: kheerImg,
    ingredients: ["rice", "milk", "sugar", "dry fruits"],
    instructions: [
      "Wash and soak rice for 30 minutes.",
      "Boil milk, add rice and cook until soft.",
      "Add sugar and simmer until creamy.",
      "Garnish with dry fruits, serve warm or chilled."
    ],
    nutrition: { calories: 300, protein: "8g", fat: "10g", carbs: "45g" },
  },
  {
    id: 18,
    name: "Vegetable Pulao",
    image: pulaoImg,
    ingredients: ["rice", "vegetables", "spices"],
    instructions: [
      "Wash and soak rice for 20 minutes.",
      "Heat oil, sauté whole spices, onion, and vegetables.",
      "Add rice, water, and salt.",
      "Cook until rice is fluffy.",
      "Serve hot with raita."
    ],
    nutrition: { calories: 320, protein: "7g", fat: "9g", carbs: "55g" },
  },
  {
    id: 19,
    name: "Tomato Soup",
    image: tomatoSoupImg,
    ingredients: ["tomatoes", "onion", "garlic", "vegetable broth", "salt", "pepper"],
    instructions: [
      "Chop tomatoes, onion, and garlic.",
      "Sauté onion and garlic until soft.",
      "Add tomatoes and cook until mushy.",
      "Pour in vegetable broth and simmer for 15 minutes.",
      "Blend until smooth and season with salt and pepper."
    ],
    nutrition: { calories: 120, protein: "3g", fat: "2g", carbs: "22g" }
  },
  {
    id: 20,
    name: "Chicken Soup",
    image: chickenSoupImg,
    ingredients: ["chicken", "carrots", "celery", "onion", "garlic", "chicken broth", "salt", "pepper"],
    instructions: [
      "Boil chicken in broth until cooked.",
      "Add chopped carrots, celery, onion, and garlic.",
      "Simmer for 20 minutes.",
      "Season with salt and pepper.",
      "Serve hot."
    ],
    nutrition: { calories: 180, protein: "20g", fat: "6g", carbs: "10g" }
  },
  {
    id: 22,
    name: "Vegetable Soup",
    image: vegetableSoupImg,
    ingredients: ["carrots", "beans", "peas", "potatoes", "onion", "vegetable broth", "salt", "pepper"],
    instructions: [
      "Chop all vegetables.",
      "Sauté onion until translucent.",
      "Add remaining vegetables and cook for 5 minutes.",
      "Add vegetable broth and simmer for 20 minutes.",
      "Season with salt and pepper."
    ],
    nutrition: { calories: 140, protein: "5g", fat: "2g", carbs: "25g" }
  },
  {
    id: 23,
    name: "Lentil Soup",
    image: lentilSoupImg,
    ingredients: ["red lentils", "onion", "garlic", "carrots", "spices", "vegetable broth", "salt", "pepper"],
    instructions: [
      "Rinse lentils thoroughly.",
      "Sauté onion, garlic, and carrots.",
      "Add lentils and vegetable broth.",
      "Cook until lentils are soft (20-25 minutes).",
      "Blend slightly and season with spices, salt, and pepper."
    ],
    nutrition: { calories: 200, protein: "12g", fat: "3g", carbs: "35g" }
  },
  {
    id: 24,
    name: "Mushroom Soup",
    image: mushroomSoupImg,
    ingredients: ["mushrooms", "onion", "garlic", "cream", "vegetable broth", "salt", "pepper"],
    instructions: [
      "Chop mushrooms, onion, and garlic.",
      "Sauté onion and garlic until soft.",
      "Add mushrooms and cook until tender.",
      "Pour in vegetable broth and simmer for 10 minutes.",
      "Blend partially, add cream, and season with salt and pepper."
    ],
    nutrition: { calories: 160, protein: "4g", fat: "8g", carbs: "18g" }
  }
];

export default recipes;
