const veganMeals = {
    breakfast: [
        {
            title: "Breakfast Burrito",
            ingredients: [
                "1 whole wheat tortilla",
                "3 scrambled eggs",
                "1/4 cup black beans",
                "1/4 cup shredded cheese"
            ],
            calories: "789",
            image: "vegan-breakfast/breakfast-burrito.jpg"
        },
        {
            title: "Vegan Pancakes",
            ingredients: [
                "1 cup flour",
                "1 tbsp baking powder",
                "1 cup almond milk",
                "2 tbsp maple syrup",
                "1 tsp vanilla extract"
            ],
            calories: "350",
            image: "vegan-breakfast/vegan-pancakes.jpg"
        },
        {
            title: "Tofu Scramble",
            ingredients: [
                "200g firm tofu",
                "1/4 cup bell peppers",
                "1/4 cup spinach",
                "1/4 onion",
                "1 tbsp nutritional yeast"
            ],
            calories: "250",
            image: "vegan-breakfast/Vegan-Tofu-Scramble.jpg"
        },
        {
            title: "Chia Pudding",
            ingredients: [
                "3 tbsp chia seeds",
                "1 cup almond milk",
                "1 tbsp maple syrup",
                "1/4 cup berries",
                "1/4 cup granola"
            ],
            calories: "300",
            image: "vegan-breakfast/chia-pudding.jpg"
        },
        {
            title: "Avocado Toast",
            ingredients: [
                "1 slice whole grain bread",
                "1/2 avocado",
                "1/4 cup cherry tomatoes",
                "1 tbsp olive oil",
                "1 tsp lemon juice"
            ],
            calories: "280",
            image: "vegan-breakfast/California-Avocado-Toast.jpeg"
        },
        {
            title: "Vegan Smoothie Bowl",
            ingredients: [
                "1 banana",
                "1/2 cup almond milk",
                "1/4 cup spinach",
                "1/4 cup berries",
                "1 tbsp chia seeds"
            ],
            calories: "250",
            image: "vegan-breakfast/vegan-smoothie-bowl.jpg"
        }
    ],
    lunch: [
        {
            title: "Quinoa Salad",
            ingredients: [
                "1 cup quinoa",
                "1/2 cup cherry tomatoes",
                "1/4 cup cucumber",
                "1/4 cup red bell pepper",
                "2 tbsp olive oil",
                "1 tbsp lemon juice"
            ],
            calories: "350",
            image: "vegan-lunch/quinoa-salad.jpg"
        },
        {
            title: "Chickpea Wrap",
            ingredients: [
                "1 whole wheat wrap",
                "1/2 cup chickpeas",
                "1/4 cup lettuce",
                "1/4 cup tomatoes",
                "1 tbsp hummus",
                "1 tbsp tahini"
            ],
            calories: "400",
            image: "vegan-lunch/chickpea-wrap.jpg"
        },
        {
            title: "Lentil Soup",
            ingredients: [
                "1 cup lentils",
                "1/2 cup carrots",
                "1/2 cup celery",
                "1/2 onion",
                "2 cups vegetable broth",
                "1 tsp cumin"
            ],
            calories: "250",
            image: "vegan-lunch/lentil-soup.jpg"
        },
        {
            title: "Vegan Buddha Bowl",
            ingredients: [
                "1/2 cup brown rice",
                "1/4 cup chickpeas",
                "1/4 cup sweet potatoes",
                "1/4 cup broccoli",
                "1 tbsp tahini",
                "1 tsp lemon juice"
            ],
            calories: "450",
            image: "vegan-lunch/vegan-buddha-bowl.jpg"
        },
        {
            title: "Stuffed Bell Peppers",
            ingredients: [
                "2 bell peppers",
                "1/2 cup quinoa",
                "1/4 cup black beans",
                "1/4 cup corn",
                "1/4 cup diced tomatoes",
                "1 tbsp cilantro"
            ],
            calories: "300",
            image: "vegan-lunch/stuffed-pepper-bells.jpg"
        },
        {
            title: "Vegan Sushi Rolls",
            ingredients: [
                "1 cup sushi rice",
                "1 nori sheet",
                "1/4 avocado",
                "1/4 cucumber",
                "1/4 carrot",
                "1 tbsp soy sauce"
            ],
            calories: "200",
            image: "vegan-lunch/vegan-sushi-rolls.jpg"
        }
    ],
    dinner: [
        {
            title: "Vegan Chili",
            ingredients: [
                "1 can black beans",
                "1 can kidney beans",
                "1 can diced tomatoes",
                "1 onion",
                "1 bell pepper",
                "1 cup corn",
                "1 tbsp chili powder",
                "1 tsp cumin",
                "1/2 tsp paprika",
                "Salt and pepper to taste"
            ],
            calories: "300",
            image: "vegan-dinner/Vegan-Chili.jpg"
        },
        {
            title: "Vegan Stir Fry",
            ingredients: [
                "200g tofu",
                "1 cup broccoli",
                "1 carrot",
                "1 bell pepper",
                "1/2 onion",
                "2 tbsp soy sauce",
                "1 tbsp maple syrup",
                "1 tbsp sesame oil",
                "1/2 tsp ginger",
                "1/2 tsp garlic powder"
            ],
            calories: "350",
            image: "vegan-dinner/vegan-stir-fry.jpg"
        },
        {
            title: "Vegan Pasta Primavera",
            ingredients: [
                "200g pasta",
                "1 cup mixed vegetables",
                "1/2 onion",
                "2 cloves garlic",
                "1/2 cup cashew cream",
                "1/4 cup nutritional yeast",
                "1/2 tsp red pepper flakes",
                "Salt and pepper to taste"
            ],
            calories: "400",
            image: "vegan-dinner/pasta-primavera.jpg"
        },
        {
            title: "Vegan Curry",
            ingredients: [
                "200g tofu",
                "1 can chickpeas",
                "1 can coconut milk",
                "1 onion",
                "2 cloves garlic",
                "1 tbsp curry powder",
                "1 tsp turmeric",
                "1/2 tsp cayenne pepper",
                "Salt and pepper to taste"
            ],
            calories: "400",
            image: "vegan-dinner/vegan-tofu-stir-fry.jpg"
        },
        {
            title: "Vegan Burrito Bowl",
            ingredients: [
                "1 cup cooked rice",
                "1/2 cup black beans",
                "1/2 cup corn",
                "1/2 cup diced tomatoes",
                "1/4 cup diced onion",
                "1/4 cup chopped cilantro",
                "1/2 avocado",
                "1/4 cup salsa",
                "1/4 cup vegan sour cream"
            ],
            calories: "450",
            image: "vegan-dinner/Vegan-Burrito-Bowl.jpg"
        },
        {
            title: "Vegan Shepherd's Pie",
            ingredients: [
                "4 potatoes",
                "1 cup lentils",
                "1 onion",
                "2 carrots",
                "1 cup peas",
                "2 cloves garlic",
                "1/2 cup vegetable broth",
                "1 tbsp tomato paste",
                "1 tsp thyme",
                "1 tsp rosemary",
                "Salt and pepper to taste"
            ],
            calories: "400",
            image: "vegan-dinner/vegetarian-shepherdys-pie.jpg"
        }
    ]
};

export default veganMeals;
