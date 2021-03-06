import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './style.css';

const Header = () => (
    <div className='header-bar' >
        <a href='https://veronicorn.github.io/unit18-recipeapp/' id='refresh-link'><i class="fas fa-utensils"></i> RecipeApp</a>
    </div>
);

const DirectoryView = (props) => (
    <div>
        <SearchForm searchValFromSearchFormProp={props.searchValFromDirectoryView} handleChange={props.handleChange} selectRecipes={props.selectRecipes} />
        {props.selectedRecipes.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} key={recipe.id} detailRecipe={props.detailRecipe} />)}
    </div>
);

const SearchForm = (props) => (
    <form>
        <input value={props.searchValFromSearchFormProp} onChange={props.handleChange} placeholder='Search Text Here' type='search' />
        &nbsp;&nbsp;
        <button onClick={props.selectRecipes}>SEARCH</button>
    </form>
);

const RecipeCard = (props) => (
    <div className='recipe-card' onClick={() => props.detailRecipe(props.id)}>
        {props.name}
    </div>
);

const DetailView = (props) => (
    <div className='recipe-details'>
        <div className='recipe-name'>
            {props.detailedRecipe.name}
        </div>
        <div className='recipe-ingredients'>
            <h1>INGREDIENTS</h1>
            <ul>
                {props.detailedRecipe.ingredients ? props.detailedRecipe.ingredients.map(ingredient => <li className='list-items'>{ingredient}</li>) : null}
            </ul>
        </div>
        <div className='recipe-instructions'>
            <h1>INSTRUCTIONS</h1>
            <ul>
                {props.detailedRecipe.instructions ? props.detailedRecipe.instructions.map(instruction => <li className='list-items'>{instruction}</li>) : null}
            </ul>
        </div>
    </div>
);

class App extends React.Component {

    state = {
        recipeList: [
            {
                id: 1,
                name: 'Chicken Pot Pie',
                ingredients:
                    [
                        '1 box Pillsbury™ refrigerated pie crusts, softened as directed on box',
                        '1/3 cup butter or margarine',
                        '1/3 cup chopped onion',
                        '1/3 cup all-purpose flour',
                        '1/2 teaspoon salt',
                        '1/4 teaspoon pepper',
                        '1 3/4 cups chicken broth',
                        '1/2 cup milk',
                        '2 1/2 cups shredded cooked chicken',
                        '2 cups frozen mixed vegetables, thawed'

                    ],
                instructions:
                    [
                        '1. Heat oven to 425°F. Make pie crusts as directed on box for Two-Crust Pie using 9-inch glass pie pan.',
                        '2. In 2-quart saucepan, melt butter over medium heat. Add onion; cook 2 minutes, stirring frequently, until tender. Stir in flour, salt and pepper until well blended. Gradually stir in broth and milk, cooking and stirring until bubbly and thickened.',
                        '3. Stir in chicken and mixed vegetables. Remove from heat. Spoon chicken mixture into crust-lined pan. Top with second crust; seal edge and flute. Cut slits in several places in top crust.',
                        '4. Bake 30 to 40 minutes or until crust is golden brown. During last 15 to 20 minutes of baking, cover crust edge with strips of foil to prevent excessive browning. Let stand 5 minutes before serving.'
                    ]
            },
            {
                id: 2,
                name: 'Brown Butter Scallops with Parmesan Risotto',
                ingredients:
                    [
                        '1 tablespoon butter',
                        '1 minced clove garlic or 1 minced shallot(or both)',
                        '1 cup arborio rice',
                        '1 / 2 cup white wine',
                        '3-ish cups of chicken broth',
                        '1 / 2 cup Parmesan cheese',
                        '1 tablespoon grapeseed oil',
                        '1 pound jumbo scallops',
                        '1 tablespoon olive oil',
                        '1 clove minced garlic',
                        '4 cups spinach or kale',
                        '3 tablespoons butter'

                    ],
                instructions:
                    [
                        'For the Risotto: In a large non-stick skillet over medium heat, melt the butter. Add the garlic or shallots and saute for a minute or two, until soft and fragrant. Add the arborio rice, stir to coat with butter. Add the white wine and enjoy the sizzles. Add the broth, 1/2 cup at a time, and simmer/stir after each addition until the rice is soft and creamy. I usually err on the side of more liquid to get a creamier texture. Add the parmesan and stir until incorporated. Salt + pepper to taste.',
                        'For the Seared Scallops: Heat oil in nonstick skillet. Pat scallops dry (VERY DRY, as dry as possible), sprinkle with salt, and add to pan. They should sizzle (if not, you need a hotter pan.) Shake gently to prevent sticking. After 2-3 minutes, flip each scallop over. They should have a pretty golden-brown exterior and an opaque inside. Transfer to a paper towel lined plate to absorb excess oil. Serve immediately.',
                        'For the Sautéed Spinach: Heat the oil over medium low heat. Add the garlic, stir for a minute to get the flavor going. Add the spinach or kale and stir until wilted.',
                        'For the Brown Butter: Put a few tablespoons of butter in a clean skillet over medium heat and stir it while watching it closely – when it starts to look golden and foamy, remove from heat, transfer to a heat-proof bowl to cool slightly, then drizzle over the risotto, scallops, and greens.'

                    ]
            },
            {
                id: 3,
                name: 'Baked Salmon with Lemon and Dill',
                ingredients:
                    [
                        'One 1 1/2-pound salmon fillet, or two 12-ounce fillets, preferably wild-caught',
                        '1 tablespoon olive oil',
                        'Salt and fresh ground black pepper',
                        '1 lemon, cut into slices',
                        '3 to 4 sprigs of fresh dill, plus more for serving',
                        '1/2 cup dry white wine, such as Sauvignon blanc (substitute: fish stock, chicken stock, or water)'
                    ],
                instructions:
                    [
                        '1. Heat oven to 325 degrees. Lightly oil and season both sides of the salmon with salt and pepper.',
                        '2. Arrange lemon slices and fresh herbs on the bottom of a baking dish large enough to fit the salmon, and then place the salmon, skin-side down, onto the bed of lemon and herbs. Pour wine (or stock) into the baking dish, and then cover with aluminum foil.',
                        '3. Bake the salmon until the fish flakes and white bubbles of protein appear on the surface, 12 to 30 minutes, depending on the thickness of the fillets. Check the salmon after 10 minutes to see it’s progress. Checking the temperature of the salmon using an internal thermometer is the best way to prevent overcooking. You want the thickest part of the salmon to read 125 degrees F. Take the salmon out of the oven and loosely cover with foil for 5 minutes (the fish will continue to cook during this time). Serve, scattered with chopped fresh herbs on top.'

                    ]
            },
            {
                id: 4,
                name: 'Cilantro Lime Chicken',
                ingredients:
                    [
                        '8 chicken thighs, bone in, skin on',
                        'Private Reserve Extra Virgin Olive Oil',
                        '6 garlic cloves, roughly chopped',
                        '1 cup dry white wine',
                        '2 limes, juice',
                        '2 cups chicken broth',
                        '1 bunch cilantro, stems removed, chopped; more for garnish',
                        '1 tbsp seasoned salt',
                        '1 tsp sweet Spanish paprika (or hot paprika, if you like)',
                        '1 tsp black pepper',
                        '1 tbsp garlic powder',
                        '1/2 tsp ground nutmeg'
                    ],
                instructions:
                    [
                        '1. Preheat your oven to 375 degrees F.',
                        '2. In a small bowl, mix the spices.Pat the chicken thighs dry, and season each thigh on both sides with the spice mix.Be sure to season underneath the skin as well.Let the chicken thighs sit in room temperature for about 15 minutes.',
                        '3. When ready, heat 1-2 tbsp of olive oil in a cast iron skillet with a lid like this one.Brown the chicken thighs deeply on both sides in the heated oil.Remove from skillet and set aside briefly.',
                        '4. Lower the heat and deglaze the skillet with the white wine.Let cook to reduce and then add the broth.',
                        '5. Bring the liquid to a simmer then add lime juice and garlic.',
                        '6. Now return the chicken to the skillet; and toss in the cilantro.Bring to a high- simmer for about 5 minutes or so.',
                        '7. Cover and transfer to the 375 degree heated oven for 45 minutes or until chicken is cooked through.',
                        '8. Remove from the oven and let sit for 5 minutes before serving.Garnish with more cilantro, if you like.A simple fattoush salad and a side of rice, couscous or Greek potatoes complete this chicken dinner.'
                    ]
            },
            {
                id: 5,
                name: 'Pad See Ew with Chicken',
                ingredients:
                    [
                        '2 pounds fresh wide rice noodles',
                        '3/4 to 1 pound chicken breast (or thigh, cut into strips)',
                        '2 cups Chinese broccoli (also known as gai lan, regular broccoli, or baby bok choy)',
                        '4 cloves garlic (minced)',
                        '1 egg',
                        '2 to 3 tablespoons sherry (or cooking sherry)',
                        '1/2 cup fresh coriander (for serving)',
                        '1 tablespoon oyster sauce',
                        '2 tablespoon soy sauce',
                        '1 teaspoon brown sugar',
                        '1 tablespoon soy sauce',
                        '1 teaspoon dark soy sauce',
                        '2 tablespoon fish sauce',
                        '1/4 teaspoon white pepper',
                        '1 tablespoon lime juice',
                        '1/3 to 1/2 teaspoon cayenne pepper (or 1 to 2 teaspoon Thai chili sauce)'
                    ],
                instructions:
                    [
                        '1. Mix together the marinade and pour it over the chicken. Stir well and set aside to marinate while you prepare the other ingredients.',
                        '2. Combine stir-fry sauce ingredients together in a cup and set near the stove.',
                        '3. Heat a wok or very large frying pan over medium-high heat. Add 2 tablespoons oil and swirl around, then add the garlic. Stir-fry 30 seconds to release the fragrance.',
                        '4. Add the marinated chicken and stir-fry 5 minutes, or until chicken is cooked. When wok/pan becomes too dry, add a little sherry (1 tablespoon at a time) to keep ingredients frying nicely.',
                        '5. Add the vegetables and continue stir-frying 1 to 2 minutes, or until vegetables have slightly softened but are still bright green. Add 1 more tablespoon sherry when pan becomes dry.',
                        '6. Push ingredients to the side. Add another 2 teaspoons oil, then crack the egg into this space.',
                        '7. Quickly stir-fry to scramble the egg.',
                        '8. Add the noodles and pour the stir-fry sauce over.',
                        '9. Using 2 utensils and a gentle tossing-type motion, stir-fry everything together until noodles are a consistent color and have softened (about 2 to 3 minutes). Avoid over-frying your noodles or they will break and turn soggy.',
                        '10. Taste-test the noodles for salt. Add more fish sauce until desired taste is achieved. If too salty, add more lime juice. To serve, gently lift noodles onto a platter and top with fresh coriander. Serve with Thai chili sauce on the side.',
                    ]
            },
            {
                id: 6,
                name: 'Baked Eggplant Parmesan',
                ingredients:
                    [
                        '2 medium eggplants, sliced into 1/2-inch thick rounds',
                        'salt',
                        '1 1/2 cups Panko breadcrumbs',
                        '1 Tablespoon Italian seasoning, homemade or store-bought',
                        '2 eggs (or 1 egg + 2 egg whites)',
                        'cooking spray (or olive oil in a Misto)',
                        '1 (25 ounce) jar DeLallo Tomato Basil Pomodoro Fresco Tomato Sauce',
                        '2 cups grated Mozzarella cheese (I used part-skim)',
                        '2/3 cup finely-grated Parmesan cheese',
                        '1/2 cup loosely-packed chopped or julienned fresh basil'
                    ],
                instructions:
                    [
                        '1. Optional first step: If you have extra time and would like to remove some of the bitterness of the eggplant, sprinkle each round with a pinch of salt.  Then place the rounds in a colander in the sink to drain, or place them on a few paper towels for about 30 minutes.  Rinse the salt off with water, then proceed with the recipe.',
                        '2. Preheat oven to 425°F.  Prepare two baking sheets with parchment paper, and set aside.',
                        '3. In a shallow bowl, whisk together Panko breadcrumbs, Italian seasoning and 1 teaspoon salt until combined.  In a separate bowl, whisk the eggs until smooth.  Dip an eggplant round on both sides in the whisked egg mixture, then immediately dip it in the breadcrumb mixture until the eggplant is completely coated, then set on a parchment-covered baking sheet.  Repeat with the remaining eggplant rounds until they are all evenly spaced on the baking sheets.',
                        '4. Bake for 20 minutes, flipping once halfway through, until the breadcrumbs are toasted and slightly golden.  Remove from the oven and set aside.',
                        '5. Spread 1/2 cup tomato sauce evenly over the bottom of an 11 x 8-inch baking dish.  Place half of the eggplant in a (mostly) even layer along the bottom of the baking dish.  Spread an additional 1 cup of tomato sauce evenly over the eggplant.  Then sprinkle 1 cup Mozzarella cheese evenly over the sauce, followed by 1/3 cup Parmesan cheese, followed by 1/4 cup of the fresh basil.  Repeat with another layer of the remaining eggplant, then tomato sauce, then Mozzarella, then Parmesan cheese.',
                        '6. Bake for 15-20 minutes until the cheese is melted and starts to turn slightly golden around the edges, and the sauce is bubbly.  Remove and sprinkle with the remaining basil.  Serve immediately.'
                    ]
            },
            {
                id: 7,
                name: 'Coconut Lentil Curry',
                ingredients:
                    [
                        '2 tablespoons coconut oil',
                        '1 tablespoon each: cumin seeds and coriander seeds',
                        '1 head of garlic, chopped (10-12 cloves)',
                        '1 – 28-ounce can of crushed tomatoes',
                        '2 tablespoons ginger, chopped',
                        '1 tablespoon turmeric',
                        '2 teaspoons sea salt',
                        '1 cup dried brown lentils',
                        'Optional: 1-2 teaspoons cayenne powder',
                        '1 – 15-ounce can coconut milk',
                        'A few handfuls of cherry tomatoes',
                        '1 cup chopped cilantro'
                    ],
                instructions:
                    [
                        '1. Heat the coconut oil in a large pot or skillet over medium-high heat. Add the cumin and coriander seeds and toast until they start to brown, about 45 seconds. Add the garlic to the pot and let it brown, about 2 minutes.',
                        '2. Add the can of crushed tomatoes, ginger, turmeric, and sea salt to the pot and cook, stirring the pot a few times, for 5 minutes. Add the lentils and, if using, the cayenne powder, and 3 cups of water to the pot and bring it to a boil. Reduce the heat to low, cover the pot, and let it simmer for 35-40 minutes, or until the lentils are soft. Stir the pot a few times to prevent the lentils from sticking to the bottom. If the curry starts to look dry, add an extra 1/2 – 1 cup of water.',
                        '3. Once the lentils are soft, add the coconut milk and cherry tomatoes and bring the pot back to a simmer. Remove the pot from the heat and stir in the cilantro.'
                    ]
            },
            {
                id: 8,
                name: 'Sicilian Pasta with Almonds and Anchovies',
                ingredients:
                    [
                        '1 lb rigatoni pasta',
                        '1/2 cup good grated Parmesan cheese',
                        '3/4 cup raw or roasted almonds',
                        '12 roasted garlic cloves, or 3 raw cloves',
                        '2 red chili peppers, stemmed and rough chopped, seeds and all (I used red jalapenos)',
                        '1 large handful fresh basil leaves',
                        '2 Tbsp anchovy paste (or 4 whole anchovies)',
                        '1 heaping cup cherry tomatoes',
                        'a big handful pitted green olives',
                        'olive oil',
                        'grated Parmesan cheese',
                        'baby basil leaves',
                        'a few olives, rough chopped',
                        'fresh cracked black pepper'
                    ],
                instructions:
                    [
                        '1. Cook the pasta just shy of the package time, you want it to be al dente.',
                        '2. Meanwhile put the cheese, almonds, garlic, peppers, basil and anchovies into a food processor and pulse until well combined, about 20 pulses.',
                        '3. Add the tomatoes and olives and continue pulsing until everything looks evenly chopped, about another 20 pulses.',
                        '4. Add a glug of olive oil and pulse once or twice more. You should have a nice, loose pesto now. Taste it and add some salt and pepper.',
                        '5. Drain the pasta, reserving a cup of the cooking liquid. Toss the pasta with lots of the pesto. You may not need all of it.',
                        '6. Serve nice and hot, garnished with more cheese, baby basil leaves, a few more rough chopped olives, and lots of fresh cracked pepper.'
                    ]
            },
            {
                id: 9,
                name: 'Greek Orzo and Grilled Shrimp Salad',
                ingredients:
                    [
                        '3/4 pound orzo, cooked al dente',
                        '1 large cucumber, seeded, quartered lengthwise, and sliced',
                        '3 green onions, thinly sliced',
                        '1 pint grape tomatoes, halved',
                        '1/4 cup chopped fresh dill, plus extra for garnish',
                        '1/4 cup white wine vinegar',
                        '3 tablespoons Dijon mustard',
                        '1/2 cup olive oil, plus additional for brushing shrimp',
                        'Salt and freshly ground pepper',
                        '3/4 pound feta cheese, crumbled',
                        '16 medium shrimp, peeled and de-veined'
                    ],
                instructions:
                    [
                        '1. Combine orzo, cucumber, green onions, and tomatoes in a large bowl. Place dill, vinegar, and mustard in a blender and blend until smooth. With the motor running, slowly add the olive oil and blend until emulsified. Season with salt and pepper, to taste. Pour the vinaigrette over the orzo mixture and stir well to combine. Gently fold in the feta cheese.',
                        '2. Heat grill to high. Brush shrimp with oil and season with salt and pepper. Grill for approximately 2 minutes per side or until just cooked through. Divide orzo salad among 4 take-out containers or plates and top with 4 shrimp. Garnish with additional dill.'
                    ]
            },
            {
                id: 10,
                name: 'Portabella Veggie Burgers',
                ingredients:
                    [
                        '2 cups portabella mushrooms, cubed (smaller pieces); gills removed',
                        '2 cups cooked black beans, rinsed and divided',
                        '1 cup minced broccoli, fresh only',
                        '1/2 cup red onion, minced',
                        '3 XL eggs, beaten',
                        '1/2 cup plus 2 Tbl Panko or Gluten Free Panko',
                        '1 Tbl Montreal Steak Seasoning',
                        '1 Tbl Worcestershire *for full vegetarian style use one that does not contain anchovies',
                        '2 Tbl minced garlic',
                        '3/4 cup fresh grated Parmesan *Look for vegetarian or vegan Parmesan cheese if you do not eat animal products',
                        'Olive oil'
                    ],
                instructions:
                    [
                        '1. In a large bowl add 1 cup of black beans and mash with a masher (chunks are OK).',
                        '2. Next, add in the mushrooms (preferred sauteed), the rest of the beans, broccoli, garlic, onion, Worcestershire and steak seasoning.',
                        '3. Mix just until coated.',
                        '4. Add in the eggs, cheese and bread crumbs and mix gently with a large spoon until the mixture is combined.',
                        '5. Set aside while you place a medium non-stick pan over medium heat and add in 2 Tbl of oil.',
                        '6. Once the oil starts to shimmer (about a minute or two), using dampened hands (the mixture will stick to you if you don’t), scoop a 1/2 cup of mixture into the palm of your hand and gently shape into a burger all the while pressing together. The mixture should hold a burger shape. If it doesn’t add just a Tbl more of bread crumbs.',
                        '7. Place in the oil and cook for 3-5 minutes per side or until golden brown and a crust has formed on each side.',
                        '8. Serve with hummus, guacamole or steak sauce.'
                    ]
            },
            {
                id: 11,
                name: 'French Toast Roll-ups',
                ingredients:
                    [
                        '8 slices white sandwich bread',
                        'softened cream cheese , diced strawberries, or Nutella',
                        '2 eggs',
                        '3 tablespoons milk',
                        '1/3 cup granulated sugar',
                        '1 heaping teaspoon ground cinnamon',
                        'butter, for greasing the pan'
                    ],
                instructions:
                    [
                        '1. Cut the crust from each slice of bread and flatten it out with a rolling pin.',
                        '2. Place about 1-2 teaspoons of your chosen filling 1 inch from one end of the bread in a strip. Roll the bread up tightly and repeat with the remaining pieces of bread. I really like cream cheese with diced strawberries as one combination and Nutella with diced strawberries as another combination.',
                        '3. In a shallow bowl whisk the eggs and milk until well combined. In a separate shallow bowl mix the sugar with the cinnamon.',
                        '4. Heat a skillet set over medium heat and melt a tablespoon of butter.',
                        '5. Dip each bread roll in the egg mixture coating well and then place them in the pan seam side down. Cook in batches until golden brown, turning them to cook and brown on all sides, about 2 minutes per side. Add butter to the pan as needed.',
                        '6. Add cooked rolls immediately from the pan to the cinnamon sugar and roll until completely covered in sugar. You can serve with syrup for dipping but I think they are perfectly good all by themselves.'
                    ]
            },
            {
                id: 12,
                name: 'Lentil and Black Bean Soup',
                ingredients:
                    [
                        '1 tbsp olive oil',
                        '1/2 large onion, chopped',
                        '2 large stalks celery, diced',
                        '2 cloves garlic, minced',
                        '2 tsp smoked paprika',
                        '2 bay leaves',
                        '1 (14 oz.) can diced tomatoes',
                        '1 cup dried brown lentils',
                        '4 3/4 cup low-sodium vegetable or chicken broth, divided',
                        '3 cups water',
                        '1 (14 oz.) can black beans, drained and rinsed',
                        '1/4 cup chopped parsley',
                        'Salt and pepper to taste'
                    ],
                instructions:
                    [
                        '1. Heat olive oil in a large sauce pan set over medium heat. Add onions and celery and cook, stirring occasionally, until the vegetables are beginning to soften, 6 to 7 minutes.',
                        '2. Add garlic, smoked paprika and bay leaves and saute for 30 seconds.',
                        '3. Stir in diced tomatoes with juices, lentils, 3 cups vegetable or chicken broth and 3 cups water. Increase heat to medium-high and bring the mixture to a boil. Reduce the heat slightly and cook, stirring occasionally, until lentils are tender, 25 to 35 minutes.',
                        '4. Remove from the heat and let cool for about 10 minutes. Remove and discard the bay leaves. Transfer half of the lentil mixture, half of the black beans and ¾ cup vegetable or chicken broth to the bowl of a blender or food processor. Pulse until combined, but not pureed. It should be a chunky texture.',
                        '5. Pour the blender mixture back into the lentils in the saucepan, along with the remaining 1 cup of chicken broth and remaining black beans. Stir and reheat over medium heat. Stir in parsley. Season with salt and pepper to taste. Serve.'
                    ]
            },
            {
                id: 13,
                name: 'Thai Coconut Curry Butternut Squash Soup',
                ingredients:
                    [
                        '1 tablespoon canola oil',
                        '2 cloves garlic, minced',
                        '1 small yellow onion, diced',
                        '1 teaspoon ginger, freshly grated',
                        '2 tablespoons Thai red curry paste',
                        '2 cups chicken or vegetable broth',
                        '1 medium-sized butternut squash, peeled, seeded, and cut into 1″ cubes (about 4 cups)',
                        '1 (15-ounce) can coconut milk, divided',
                        'Juice of 1 lime',
                        '1/2 teaspoon salt, plus more to taste',
                        '1/4 teaspoon freshly ground pepper, plus more to taste',
                        'Sriracha to taste, optional',
                        '1/3 cup cilantro, chopped, to garnish',
                        '1/3 cup unsalted, dry-roasted peanuts, chopped, to garnish',
                        'Naan, to serve, optional'
                    ],
                instructions:
                    [
                        '1. Heat the oil in a large soup pot over medium heat. Add in the garlic and onion, and saute until soft and fragrant, about 3 minutes. Add in the ginger and curry paste and stir to combine with the onion and garlic. Cook for 3 more minutes, stirring often. Add in the raw butternut squash cubes and slowly pour in the broth, stirring to combine. Season with salt and pepper. Bring to a boil and then reduce heat to a simmer and cover. Cook for 20 minutes, or until butternut squash is tender. Remove from heat and let cool for a few minutes.',
                        '2. Pour the soup into a blender in batches and blend until smooth, or use an immersion blender to blend in the pot or slow cooker.',
                        '3. Before serving, remove the soup from the heat and mix in the coconut milk (saving a few tablespoons to garnish) and lime juice (if using). Mix well. Season with additional salt and pepper, if desired, and add sriracha to taste for extra spice, if using.',
                        '4. Pour into bowls and drizzle the remaining coconut milk on top. Swirl the coconut milk with a spoon. Sprinkle with chopped cilantro and chopped peanuts. Serve warm with naan bread.'
                    ]
            },
            {
                id: 14,
                name: 'Cranberry Bundt Cake with White Chocolate Glaze',
                ingredients:
                    [
                        '3 cup all-purpose flour',
                        '2 tsp baking powder',
                        '1 tsp baking soda',
                        '1/2 tsp salt',
                        '1 3/4 cup granulated sugar',
                        '1 1/2 sticks (12 Tbsunsalted butter softened',
                        '3 large eggs room temperature',
                        '1 tsp vanilla extract',
                        '1 cup buttermilk or sour milk see note',
                        '1 1/2 cup fresh cranberries big ones chopped in half',
                        '3/4 cup white chocolate chips',
                        '3 Tbsp cream or half and half',
                        '3/4 cup powdered sugar'
                    ],
                instructions:
                    [
                        '1. Preheat your oven to 350 degrees.',
                        '2. If using sour milk: place 1 Tbsp of white vinegar in a measuring cup and fill with enough milk to make 1 cup. Stir few times and let sit for 2 to 3 minutes.',
                        '3. In a large mixing bowl, whisk together the dry ingredients (flour, baking powder, soda and salt). Set aside.',
                        '4. Generously grease and flour the bundt pan. Set aside.',
                        '5. In a large mixing bowl of a stand mixer, beat together butter and sugar until light and fluffy. Add eggs, one at a time, beating well after each addition. Add vanilla and beat well again.',
                        '6. With the mixer on low speed, add the dry ingredients alternating with buttermilk. Increase the speed to medium and beat for 2 minutes.',
                        '7. Stir in cranberries.',
                        '8. Pour the batter into prepared pan.',
                        '9. Bake for 40 to 50 minutes, or until the toothpick inserted in the center comes out clean.',
                        '10. Cool the cake for 2 minutes in the pan. Place a cake plate over the top of the pan and carefully flip it upside down. If the cake will not release right away, tap the pan gently until it does. Cool cake completely before glazing.',
                        '11. To make the glaze: Melt chocolate and cream in a double boiler. Let cool slightly. Whisk in powdered sugar. Glaze the cake.'
                    ]
            },
            {
                id: 15,
                name: 'Lemon Meltaway Cookies',
                ingredients:
                    [
                        '14 tablespoons unsalted butter, room temperature',
                        '1/2 cup powdered sugar',
                        '1 tablespoon lemon zest, packed - about 2 lemons',
                        '2 tablespoons fresh lemon juice, about 1 lemon',
                        '1 1/2 cups unbleached all-purpose flour',
                        '1/4 cup cornstarch',
                        '1/4 teaspoon salt',
                        '1 cup powdered sugar',
                        '2-3 tablespoons fresh lemon juice',
                        '1 teaspoon lemon zest for garnish if desired'
                    ],
                instructions:
                    [
                        '1. In the bowl of a stand mixer fitted with the paddle attachment, beat the butter on medium speed until creamy. Add 1/2 cup of powdered sugar and beat until light and fluffy.',
                        '2. Add 1 tablespoon of lemon zest and 2 tablespoons of fresh lemon juice. Gently blend on low until incorporated, scrapping down sides with a spatula as needed.',
                        '3. In a small mixing bowl combine the flour, cornstarch and salt. Whisk together.',
                        '4. Add the flour in four batches to the creamed butter and lemon mixture. Blend on medium low until each is incorporated.',
                        '5. Place the cookie dough in a small bowl and cover with plastic wrap. Refrigerate for 1 hour.',
                        '6. To bake the cookies, preheat oven to 350F. Line a baking sheet with parchment paper.',
                        '7. Scoop a level spoonful of dough using a 1-inch cookie scoop. Roll each into a tight ball and place two inches apart on the parchment lined baking sheet.',
                        '8. If you want to make cookie discs, press each dough ball to the desired thickness using the bottom of a flat glass covered with a small piece of wax paper.',
                        '9. Bake for 13 minutes at 350F until lightly browned around the edges. Slide the parchment paper and baked cookies onto a wire rack to cool.',
                        '10. Repeat with a new piece of parchment paper placed on a cooled cookie sheet. Cool cookies completely if using a glaze. If covering in confectioners sugar, allow the hot cookies to cool for a minute then toss in 1 cup of powdered sugar to coat. Cool completely on the wire rack.',
                        '11. To make the glaze, mix together 1 cup of powdered sugar and 2 tablespoons fresh squeezed lemon juice. Add more lemon juice or sugar as needed to reach desired consistency. Spread on each cookie and garnish with lemon zest if desired. Allow the glaze to fully set then store cookies in a cool place or refrigerator.'
                    ]
            }
        ],

        searchVal: '',

        selectedRecipes: [],

        detailedRecipe: {}
    };

    handleChange = (event) => {
        this.setState({ searchVal: event.target.value });
    };

    selectRecipes = (event) => {
        event.preventDefault();
        const filteredRecipes = this.state.recipeList.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase()));
        this.detailRecipe(filteredRecipes[0].id);
        this.setState({ selectedRecipes: filteredRecipes });
    };

    detailRecipe = (id) => {
        this.setState({ detailedRecipe: [] });
        this.setState({ detailedRecipe: this.state.recipeList.find(recipe => recipe.id === id) })
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <DirectoryView
                    // recipeList={this.state.recipeList} clickHandler={this.detailedRecipe}
                    searchValFromDirectoryView={this.state.searchVal}
                    handleChange={this.handleChange}
                    selectedRecipes={this.state.selectedRecipes}
                    selectRecipes={this.selectRecipes}
                    detailRecipe={this.detailRecipe}
                />
                <DetailView
                    detailedRecipe={this.state.detailedRecipe}
                />
            </div>
        )
    };
};

ReactDOM.render(<App />, document.getElementById('root'));