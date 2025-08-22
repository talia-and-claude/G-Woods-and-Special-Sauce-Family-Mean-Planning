// Recipe Database
const recipes = {
    batch: [
        {
            id: 'turkey-chili',
            name: 'Turkey Chili',
            description: 'Thick and hearty chili with ground turkey and beans. Perfect for meal prep.',
            url: 'https://houseofyumm.com/crockpot-turkey-chili/',
            tags: ['slow-cooker', 'healthy'],
            ingredients: [
                'Ground turkey (2 lbs)',
                'Black beans (2 cans)',
                'Kidney beans (2 cans)',
                'Diced tomatoes (2 cans)',
                'Onion',
                'Bell peppers (2)',
                'Garlic',
                'Chili powder',
                'Cumin',
                'Paprika',
                'Chicken broth'
            ]
        },
        {
            id: 'pulled-beef',
            name: 'Slow Cooker Pulled Beef',
            description: 'Tender shredded beef chuck roast. Great for sandwiches, tacos, or over rice.',
            url: 'https://www.marthastewart.com/868652/shredded-beef-chuck-roast',
            tags: ['slow-cooker', 'versatile'],
            ingredients: [
                'Chuck roast (3-4 lbs)',
                'Beef broth',
                'Onion soup mix',
                'Brown sugar',
                'Apple cider vinegar'
            ]
        },
        {
            id: 'coconut-chicken-rice',
            name: 'Coconut Sticky Chicken & Rice',
            description: 'One-pot comfort with coconut rice, tender chicken thighs, and cashews.',
            url: 'https://cooking.nytimes.com/recipes/1023047-sticky-coconut-chicken-and-rice',
            tags: ['one-pot', 'nyt-cooking'],
            ingredients: [
                'Chicken thighs (8)',
                'Jasmine rice (2 cups)',
                'Coconut milk (2 cans)',
                'Cashews',
                'Ginger',
                'Garlic',
                'Scallions',
                'Soy sauce',
                'Fish sauce'
            ]
        },
        {
            id: 'slow-cooker-pot-roast',
            name: 'Slow Cooker Pot Roast',
            description: 'Classic pot roast with red wine, herbs, and vegetables. Add mushrooms for extra flavor.',
            url: 'https://cooking.nytimes.com/recipes/1020845-slow-cooker-pot-roast',
            tags: ['slow-cooker', 'nyt-cooking'],
            ingredients: [
                'Chuck roast (3-4 lbs)',
                'Red wine',
                'Beef broth',
                'Carrots',
                'Potatoes',
                'Onion',
                'Mushrooms',
                'Garlic',
                'Fresh thyme',
                'Bay leaves'
            ]
        },
        {
            id: 'chicken-broccoli-casserole',
            name: 'Chicken Broccoli Rice Casserole',
            description: 'Comfort food classic - one-pot meal with chicken, broccoli, and cheesy rice.',
            url: 'https://cooking.nytimes.com/recipes/1024172-chicken-broccoli-rice-casserole',
            tags: ['casserole', 'one-pot', 'nyt-cooking'],
            ingredients: [
                'Chicken thighs',
                'Long grain rice',
                'Frozen broccoli',
                'Chicken stock',
                'Half-and-half',
                'Cheddar cheese',
                'Garlic',
                'Onion',
                'Salt',
                'Black pepper'
            ]
        },
        {
            id: 'the-soup',
            name: 'The Soup (Beans, Kale & Sausage)',
            description: 'Hearty soup with garbanzo beans, white beans, kale, and sausage.',
            url: 'https://www.foodnetwork.com/recipes/ellie-krieger/white-bean-and-sausage-soup-recipe-1943252',
            tags: ['soup', 'healthy'],
            cookTime: '30 minutes',
            instructions: [
                'Brown Italian sausage in large pot, breaking it up as it cooks',
                'Add diced onion and garlic, cook until fragrant (2-3 minutes)',
                'Add chicken broth, diced tomatoes, and both cans of beans',
                'Season with Italian seasoning and red pepper flakes',
                'Simmer for 15 minutes',
                'Add chopped kale in last 5 minutes until wilted',
                'Serve hot with crusty bread'
            ],
            ingredients: [
                'Italian sausage (1 lb)',
                'Garbanzo beans (2 cans)',
                'White beans (2 cans)',
                'Kale (1 bunch)',
                'Chicken broth',
                'Onion',
                'Garlic',
                'Diced tomatoes',
                'Italian seasoning',
                'Red pepper flakes'
            ]
        },
        {
            id: 'beef-stew-prunes',
            name: 'Beef Stew with Prunes',
            description: 'Rich beef stew with sweet potatoes, carrots, and prunes for depth.',
            url: 'https://cooking.nytimes.com/recipes/1767-beef-stew-with-prunes',
            tags: ['stew', 'nyt-cooking'],
            ingredients: [
                'Beef chuck (3 lbs)',
                'Prunes (1 cup)',
                'Sweet potatoes',
                'Carrots',
                'Onions',
                'Red wine',
                'Beef broth',
                'Tomato paste',
                'Bay leaves',
                'Fresh thyme'
            ]
        },
        {
            id: 'mushroom-chicken-orzo',
            name: 'One-Pot Mushroom Chicken Orzo',
            description: 'Creamy one-pot meal with chicken, mushrooms, and orzo pasta.',
            url: 'https://mylittleeater.com/healthy-toddler-mushroom-orzo/',
            tags: ['one-pot', 'pasta'],
            ingredients: [
                'Chicken thighs',
                'Orzo pasta',
                'Mushrooms (mixed)',
                'Chicken broth',
                'Heavy cream',
                'Parmesan cheese',
                'Onion',
                'Garlic',
                'Fresh thyme',
                'Spinach'
            ]
        },
        {
            id: 'beef-stroganoff',
            name: 'Slow Cooker Beef Stroganoff',
            description: 'Creamy beef stroganoff with mushrooms. Serve over egg noodles.',
            tags: ['slow-cooker', 'comfort-food'],
            ingredients: [
                'Beef stew meat (2 lbs)',
                'Mushrooms (1 lb)',
                'Onion',
                'Garlic',
                'Beef broth',
                'Cream of mushroom soup',
                'Sour cream',
                'Egg noodles',
                'Salt',
                'Black pepper'
            ]
        },
        {
            id: 'chicken-and-rice',
            name: 'One-Pot Chicken and Rice',
            description: 'Complete meal with chicken, rice, and vegetables all in one pot.',
            tags: ['one-pot', 'family-favorite'],
            ingredients: [
                'Chicken thighs (8)',
                'Long grain rice (2 cups)',
                'Chicken broth',
                'Mixed vegetables',
                'Onion',
                'Garlic',
                'Italian seasoning',
                'Salt',
                'Black pepper',
                'Olive oil'
            ]
        },
        {
            id: 'pork-carnitas',
            name: 'Slow Cooker Pork Carnitas',
            description: 'Tender pulled pork perfect for tacos, burritos, or bowls.',
            tags: ['slow-cooker', 'mexican'],
            ingredients: [
                'Pork shoulder (3-4 lbs)',
                'Oranges (2)',
                'Limes (2)',
                'Onion',
                'Garlic',
                'Cumin',
                'Chili powder',
                'Oregano',
                'Bay leaves',
                'Salt'
            ]
        },
        {
            id: 'loaded-baked-potato-soup',
            name: 'Slow Cooker Loaded Baked Potato Soup',
            description: 'Creamy potato soup with bacon, cheese, and chives.',
            tags: ['slow-cooker', 'comfort-food'],
            ingredients: [
                'Russet potatoes (3 lbs)',
                'Bacon (6 strips)',
                'Onion',
                'Garlic',
                'Chicken broth',
                'Heavy cream',
                'Cheddar cheese',
                'Chives',
                'Salt',
                'Black pepper'
            ]
        }
    ],
    quick: [
        {
            id: 'chicken-sweet-potato-asparagus',
            name: 'Chicken Thighs, Sweet Potato & Asparagus',
            description: 'Sheet pan dinner with protein, starch, and vegetables.',
            tags: ['sheet-pan', 'quick'],
            cookTime: '35 minutes',
            instructions: [
                'Preheat oven to 425°F',
                'Cut sweet potatoes into 1-inch cubes',
                'Toss sweet potatoes with olive oil, salt, and pepper. Spread on sheet pan',
                'Roast sweet potatoes for 15 minutes',
                'Season chicken thighs with salt, pepper, garlic powder, and paprika',
                'Add chicken thighs to sheet pan with sweet potatoes',
                'Trim asparagus ends and add to pan, drizzle with olive oil',
                'Roast everything together for 20 more minutes until chicken reaches 165°F',
                'Let rest 5 minutes before serving'
            ],
            ingredients: [
                'Chicken thighs (6)',
                'Sweet potatoes (3)',
                'Asparagus (1 bunch)',
                'Olive oil',
                'Salt',
                'Black pepper',
                'Garlic powder',
                'Paprika'
            ]
        },
        {
            id: 'pasta-riced-broccoli-sausage',
            name: 'Pasta with Riced Broccoli, Pesto & Sausage',
            description: 'Quick pasta dinner with riced broccoli, pesto, and Italian sausage.',
            tags: ['pasta', 'quick'],
            cookTime: '20 minutes',
            instructions: [
                'Start cooking pasta according to package directions',
                'Meanwhile, brown Italian sausage in large skillet, breaking up as it cooks',
                'Add minced garlic and cook 1 minute until fragrant',
                'Add riced broccoli to skillet, cook 3-4 minutes until tender',
                'Drain pasta, reserving 1/2 cup pasta water',
                'Add drained pasta to skillet with sausage and broccoli',
                'Stir in pesto and a splash of pasta water to create sauce',
                'Add red pepper flakes to taste',
                'Serve topped with grated Parmesan cheese'
            ],
            ingredients: [
                'Pasta (1 lb)',
                'Italian sausage (1 lb)',
                'Riced broccoli (2 cups)',
                'Pesto',
                'Parmesan cheese',
                'Olive oil',
                'Garlic',
                'Red pepper flakes'
            ]
        },
        {
            id: 'taco-night',
            name: 'Taco Night',
            description: 'Easy weeknight tacos with seasoned ground meat and all the fixings.',
            url: 'https://www.allrecipes.com/recipe/70343/easy-taco-meat/',
            tags: ['mexican', 'quick', 'family-favorite'],
            cookTime: '15 minutes',
            instructions: [
                'Brown ground beef or turkey in large skillet over medium-high heat',
                'Drain excess fat if needed',
                'Add taco seasoning and 1/4 cup water, stir to combine',
                'Simmer 5 minutes until sauce thickens',
                'Meanwhile, warm taco shells or tortillas',
                'Prep toppings: shred lettuce, dice tomatoes and avocado',
                'Set up taco bar with meat, shells, and all toppings',
                'Let everyone build their own tacos!',
                'Squeeze fresh lime over assembled tacos'
            ],
            ingredients: [
                'Ground beef or turkey (1 lb)',
                'Taco shells or tortillas',
                'Taco seasoning',
                'Lettuce',
                'Tomatoes',
                'Cheese',
                'Sour cream',
                'Salsa',
                'Avocado',
                'Lime'
            ]
        },
        {
            id: 'stir-fry-template',
            name: 'Quick Stir-Fry',
            description: 'Meat + vegetables + rice. Mix and match your favorites.',
            url: 'https://www.allrecipes.com/recipe/16700/basic-stir-fry/',
            tags: ['stir-fry', 'quick', 'versatile'],
            ingredients: [
                'Protein (chicken, beef, or shrimp)',
                'Mixed vegetables',
                'Rice',
                'Soy sauce',
                'Garlic',
                'Ginger',
                'Sesame oil',
                'Vegetable oil'
            ]
        },
        {
            id: 'grilled-chicken-veg',
            name: 'Grilled Chicken & Vegetables',
            description: 'Simple grilled protein with seasonal vegetables and starch.',
            tags: ['grilled', 'quick', 'healthy'],
            ingredients: [
                'Chicken breasts or thighs',
                'Seasonal vegetables',
                'Rice or quinoa',
                'Olive oil',
                'Lemon',
                'Herbs (rosemary, thyme)',
                'Salt',
                'Black pepper'
            ]
        },
        {
            id: 'sheet-pan-sausage-peppers',
            name: 'Sheet Pan Sausage & Peppers',
            description: 'Italian sausages with bell peppers, onions, and potatoes.',
            url: 'https://www.budgetbytes.com/sheet-pan-italian-sausage-and-vegetables/',
            tags: ['sheet-pan', 'quick'],
            ingredients: [
                'Italian sausages (6)',
                'Bell peppers (3)',
                'Red onion',
                'Small potatoes',
                'Olive oil',
                'Italian seasoning',
                'Salt',
                'Black pepper'
            ]
        },
        {
            id: 'chicken-quesadillas',
            name: 'Chicken Quesadillas',
            description: 'Quick and easy quesadillas with chicken, cheese, and peppers.',
            tags: ['mexican', 'quick', 'kid-friendly'],
            ingredients: [
                'Cooked chicken (shredded)',
                'Flour tortillas',
                'Cheese (Mexican blend)',
                'Bell peppers',
                'Onion',
                'Salsa',
                'Sour cream',
                'Olive oil'
            ]
        },
        {
            id: 'beef-broccoli-rice',
            name: 'Beef & Broccoli over Rice',
            description: 'Quick stir-fry style beef and broccoli served over rice.',
            tags: ['stir-fry', 'quick'],
            ingredients: [
                'Beef strips (1 lb)',
                'Broccoli florets',
                'Jasmine rice',
                'Soy sauce',
                'Garlic',
                'Ginger',
                'Cornstarch',
                'Sesame oil',
                'Vegetable oil'
            ]
        },
        {
            id: 'baked-ziti',
            name: 'Easy Baked Ziti',
            description: 'Pasta with meat sauce and cheese, baked until bubbly.',
            tags: ['pasta', 'casserole', 'kid-friendly'],
            ingredients: [
                'Ziti pasta (1 lb)',
                'Ground beef (1 lb)',
                'Marinara sauce',
                'Ricotta cheese',
                'Mozzarella cheese',
                'Parmesan cheese',
                'Italian seasoning',
                'Garlic',
                'Onion'
            ]
        },
        {
            id: 'honey-garlic-salmon',
            name: 'Honey Garlic Salmon & Vegetables',
            description: 'Sheet pan salmon with honey garlic glaze and roasted vegetables.',
            tags: ['sheet-pan', 'quick', 'healthy'],
            ingredients: [
                'Salmon fillets (4)',
                'Broccoli florets',
                'Sweet potato',
                'Honey',
                'Soy sauce',
                'Garlic',
                'Olive oil',
                'Rice or quinoa'
            ]
        }
    ]
};

// Current meal plan
let currentMealPlan = {
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null
};

// Suggested weekly meal plan
const suggestedMealPlan = {
    sunday: 'slow-cooker-pot-roast',
    monday: 'leftover-note',  // Special marker for leftovers
    tuesday: 'chicken-sweet-potato-asparagus',
    wednesday: 'order-in-note',  // Special marker for order in
    thursday: 'pasta-riced-broccoli-sausage',
    friday: 'leftover-note',
    saturday: 'taco-night'
};

// DOM Elements
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const mealSlots = document.querySelectorAll('.meal-slot');
const modal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    loadCustomRecipes(); // Load custom recipes first
    renderRecipes();
    initializeMealSlots();
    loadSavedMealPlan();
    
    // Event listeners
    document.getElementById('share-list').addEventListener('click', shareShoppingList);
    document.getElementById('suggest-recipe').addEventListener('click', suggestNewRecipe);
    document.getElementById('add-custom-recipe').addEventListener('click', showAddCustomRecipeModal);
    document.getElementById('load-suggested-plan').addEventListener('click', loadSuggestedPlan);
    document.getElementById('generate-custom-shopping-list').addEventListener('click', generateCustomShoppingList);
    document.getElementById('generate-selected-days-list').addEventListener('click', generateSelectedDaysShoppingList);
    document.getElementById('save-week').addEventListener('click', saveCurrentWeek);
    document.getElementById('load-saved-week').addEventListener('click', showSavedWeeksModal);
    
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

function initializeTabs() {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show target content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
}

function renderRecipes() {
    const batchContainer = document.getElementById('batch-recipes');
    const quickContainer = document.getElementById('quick-recipes');
    
    // Render batch recipes
    recipes.batch.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe, 'batch');
        batchContainer.appendChild(recipeCard);
    });
    
    // Render quick recipes
    recipes.quick.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe, 'quick');
        quickContainer.appendChild(recipeCard);
    });
}

function createRecipeCard(recipe, type) {
    const card = document.createElement('div');
    card.className = `recipe-card ${type}${recipe.isCustom ? ' custom' : ''}`;
    card.dataset.recipeId = recipe.id;
    
    const tagsHtml = recipe.tags.map(tag => 
        `<span class="tag ${tag.replace('-', '-')}">${tag}</span>`
    ).join('');
    
    const cookTimeDisplay = recipe.cookTime ? 
        `<div class="cook-time">⏱️ ${recipe.cookTime}</div>` : '';
    
    const hasInstructions = recipe.instructions ? 
        '<span class="tag instructions-tag">📝 Instructions</span>' : '';
    
    const hasLink = recipe.url ? 
        '<span class="tag link-tag">🔗 Recipe Link</span>' : '';
    
    const customBadge = recipe.isCustom ? 
        '<span class="custom-recipe-badge">My Recipe</span>' : '';
    
    // Add emoji based on recipe type
    const typeEmoji = type === 'batch' ? '🍲' : '⚡';
    
    card.innerHTML = `
        <div class="recipe-header">
            <div class="recipe-selection">
                <input type="checkbox" id="select-${recipe.id}" class="recipe-checkbox" onclick="event.stopPropagation()">
                <label for="select-${recipe.id}" class="checkbox-label" onclick="event.stopPropagation()">
                    <span class="checkmark">✓</span>
                </label>
            </div>
            <div class="recipe-type-emoji">${typeEmoji}</div>
            <div class="recipe-title">${recipe.name}${customBadge}</div>
        </div>
        ${cookTimeDisplay}
        <div class="recipe-description">${recipe.description}</div>
        <div class="recipe-tags">
            ${tagsHtml}
            ${hasInstructions}
            ${hasLink}
        </div>
        <div class="recipe-actions">
            <div class="add-to-day-container">
                <button class="add-to-day-btn" onclick="event.stopPropagation(); toggleDayDropdown('${recipe.id}')">
                    📅 Add to Day
                </button>
                <div class="day-dropdown" id="dropdown-${recipe.id}">
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'sunday')">Sunday</div>
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'monday')">Monday</div>
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'tuesday')">Tuesday</div>
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'wednesday')">Wednesday</div>
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'thursday')">Thursday</div>
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'friday')">Friday</div>
                    <div class="dropdown-item" onclick="event.stopPropagation(); addRecipeToDay('${recipe.id}', 'saturday')">Saturday</div>
                </div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.matches('.recipe-checkbox') && !e.target.matches('.checkbox-label') && !e.target.matches('.checkmark')) {
            showRecipeModal(recipe);
        }
    });
    
    return card;
}

function showRecipeModal(recipe) {
    const ingredientsList = recipe.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    const instructionsList = recipe.instructions ? 
        recipe.instructions.map((instruction, index) => 
            `<li><strong>Step ${index + 1}:</strong> ${instruction}</li>`
        ).join('') : '';
    
    const cookTimeDisplay = recipe.cookTime ? `<p><strong>Cook Time:</strong> ${recipe.cookTime}</p>` : '';
    
    const urlLink = recipe.url ? 
        `<p style="margin-top: 15px;"><a href="${recipe.url}" target="_blank" style="color: #007bff; text-decoration: none;">🔗 View Original Recipe →</a></p>` : '';
    
    const instructionsSection = recipe.instructions ? `
        <h3 style="margin-top: 25px; color: #2c3e50;">Instructions:</h3>
        <ol style="padding-left: 20px; line-height: 1.6;">${instructionsList}</ol>
    ` : '';
    
    modalBody.innerHTML = `
        <h2 style="color: #2c3e50; margin-bottom: 10px;">${recipe.name}</h2>
        <p style="color: #6c757d; font-style: italic; margin-bottom: 15px;">${recipe.description}</p>
        ${cookTimeDisplay}
        ${urlLink}
        
        <h3 style="margin-top: 25px; color: #2c3e50;">Ingredients:</h3>
        <ul style="padding-left: 20px; line-height: 1.6;">${ingredientsList}</ul>
        
        ${instructionsSection}
        
        <div style="margin-top: 30px; text-align: center;">
            <button class="btn primary" onclick="addToMealPlan('${recipe.id}')">Add to Meal Plan</button>
            ${recipe.isCustom ? `<button class="btn secondary" style="margin-left: 10px;" onclick="deleteCustomRecipe('${recipe.id}')">🗑️ Delete Recipe</button>` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

function initializeMealSlots() {
    mealSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            const day = slot.dataset.day;
            showMealSelector(day, slot);
        });
    });
}

function showMealSelector(day, slot) {
    const isBatchDay = day === 'sunday';
    const availableRecipes = isBatchDay ? recipes.batch : [...recipes.batch, ...recipes.quick];
    
    const recipeOptions = availableRecipes.map(recipe => 
        `<div class="recipe-option" data-recipe-id="${recipe.id}">
            <strong>${recipe.name}</strong>
            <p>${recipe.description}</p>
        </div>`
    ).join('');
    
    modalBody.innerHTML = `
        <h2>Choose a meal for ${day.charAt(0).toUpperCase() + day.slice(1)}</h2>
        <div class="recipe-selector">
            ${recipeOptions}
        </div>
        
        <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e9ecef;">
            <h3 style="margin-bottom: 15px; color: #5d8a3a;">Or choose a non-cooking option:</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <button class="btn secondary" onclick="addSpecialMealToDay('${day}', 'leftovers')" style="background: rgba(74, 144, 226, 0.1); border-color: #4a90e2; color: #2c5282;">
                    🥄 Leftovers
                </button>
                <button class="btn secondary" onclick="addSpecialMealToDay('${day}', 'order-in')" style="background: rgba(244, 162, 97, 0.1); border-color: #f4a261; color: #c05621;">
                    🥡 Order In
                </button>
            </div>
        </div>
        
        <div style="margin-top: 20px;">
            <button class="btn secondary" onclick="clearDayMeal('${day}')">Remove Meal</button>
        </div>
    `;
    
    // Add click listeners to recipe options
    document.querySelectorAll('.recipe-option').forEach(option => {
        option.style.cursor = 'pointer';
        option.style.padding = '10px';
        option.style.margin = '10px 0';
        option.style.border = '2px solid #e9ecef';
        option.style.borderRadius = '8px';
        
        option.addEventListener('click', () => {
            const recipeId = option.dataset.recipeId;
            addMealToDay(day, recipeId);
            modal.style.display = 'none';
        });
        
        option.addEventListener('mouseenter', () => {
            option.style.borderColor = '#6a994e';
            option.style.backgroundColor = '#f0f8f0';
        });
        
        option.addEventListener('mouseleave', () => {
            option.style.borderColor = '#e9ecef';
            option.style.backgroundColor = 'transparent';
        });
    });
    
    modal.style.display = 'block';
}

function addMealToDay(day, recipeId) {
    const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
    if (!recipe) return;
    
    currentMealPlan[day] = recipeId;
    updateMealSlot(day, recipe);
    saveMealPlan();
}

function addSpecialMealToDay(day, mealType) {
    if (mealType === 'leftovers') {
        currentMealPlan[day] = 'leftover-note';
        updateMealSlotWithNote(day, 'Leftovers', '🍽️ Enjoy leftovers from another day!');
    } else if (mealType === 'order-in') {
        currentMealPlan[day] = 'order-in-note';
        updateMealSlotWithNote(day, 'Order In', '🥡 Pizza, Thai, or your favorite!');
    }
    
    saveMealPlan();
    modal.style.display = 'none';
    
    // Show success notification
    const mealTypeName = mealType === 'leftovers' ? 'Leftovers' : 'Order In';
    showNotification(`Set ${day.charAt(0).toUpperCase() + day.slice(1)} to ${mealTypeName}!`, 'success');
}

function updateMealSlot(day, recipe) {
    const slot = document.querySelector(`[data-day="${day}"]`);
    
    // Clear any existing special classes
    slot.classList.remove('leftovers-meal', 'takeout-meal');
    slot.classList.add('has-meal');
    
    // Determine emoji based on recipe type
    const recipeType = [...recipes.batch, ...recipes.quick].find(r => r.id === recipe.id);
    let emoji = '🍽️'; // default
    
    if (recipes.batch.find(r => r.id === recipe.id)) {
        emoji = '🍲'; // batch cooking
    } else if (recipes.quick.find(r => r.id === recipe.id)) {
        emoji = '⚡'; // quick weeknight
    }
    
    // Create clickable link if recipe has URL
    let recipeName = recipe.name;
    if (recipe.url) {
        recipeName = `<a href="${recipe.url}" target="_blank" class="recipe-link">${recipe.name} 🔗</a>`;
    }
    
    slot.innerHTML = `<div class="meal-emoji">${emoji}</div><span class="meal-name">${recipeName}</span>`;
}

function clearDayMeal(day) {
    currentMealPlan[day] = null;
    const slot = document.querySelector(`[data-day="${day}"]`);
    slot.classList.remove('has-meal');
    slot.innerHTML = '<span class="placeholder">+ Add Meal</span>';
    saveMealPlan();
    modal.style.display = 'none';
}

function addToMealPlan(recipeId) {
    // This function is called from the recipe modal - could enhance to show day selector
    modal.style.display = 'none';
    alert('Click on a day in your weekly plan to add this recipe!');
}

function generateShoppingList() {
    const plannedMeals = Object.values(currentMealPlan).filter(mealId => mealId);
    
    if (plannedMeals.length === 0) {
        alert('Add some meals to your weekly plan first!');
        return;
    }
    
    const allIngredients = [];
    
    plannedMeals.forEach(mealId => {
        const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === mealId);
        if (recipe) {
            allIngredients.push(...recipe.ingredients);
        }
    });
    
    // Group ingredients by category
    const groceryCategories = {
        'Meat & Poultry': [],
        'Vegetables': [],
        'Pantry & Dry Goods': [],
        'Dairy': [],
        'Other': []
    };
    
    allIngredients.forEach(ingredient => {
        const lower = ingredient.toLowerCase();
        
        if (lower.includes('chicken') || lower.includes('beef') || lower.includes('turkey') || 
            lower.includes('sausage') || lower.includes('ground') || lower.includes('chuck')) {
            groceryCategories['Meat & Poultry'].push(ingredient);
        } else if (lower.includes('broccoli') || lower.includes('asparagus') || lower.includes('sweet potato') ||
                  lower.includes('onion') || lower.includes('garlic') || lower.includes('carrot') ||
                  lower.includes('mushroom') || lower.includes('pepper') || lower.includes('kale') ||
                  lower.includes('spinach') || lower.includes('tomato') || lower.includes('lettuce')) {
            groceryCategories['Vegetables'].push(ingredient);
        } else if (lower.includes('cheese') || lower.includes('milk') || lower.includes('cream') ||
                  lower.includes('sour cream') || lower.includes('half-and-half')) {
            groceryCategories['Dairy'].push(ingredient);
        } else if (lower.includes('rice') || lower.includes('pasta') || lower.includes('beans') ||
                  lower.includes('broth') || lower.includes('oil') || lower.includes('flour') ||
                  lower.includes('sauce') || lower.includes('seasoning') || lower.includes('spice')) {
            groceryCategories['Pantry & Dry Goods'].push(ingredient);
        } else {
            groceryCategories['Other'].push(ingredient);
        }
    });
    
    // Remove duplicates and sort
    Object.keys(groceryCategories).forEach(category => {
        groceryCategories[category] = [...new Set(groceryCategories[category])].sort();
    });
    
    displayShoppingList(groceryCategories);
    
    // Switch to shopping list tab
    document.querySelector('[data-tab="shopping"]').click();
}

function displayShoppingList(categories) {
    const shoppingListContainer = document.getElementById('shopping-list');
    
    let html = '';
    
    Object.entries(categories).forEach(([category, items]) => {
        if (items.length > 0) {
            html += `
                <div class="shopping-section">
                    <h4>${category}</h4>
                    ${items.map(item => `
                        <div class="shopping-item">
                            <input type="checkbox" id="item-${item.replace(/\s+/g, '-')}">
                            <label for="item-${item.replace(/\s+/g, '-')}">${item}</label>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    });
    
    if (html === '') {
        html = '<p class="empty-state">No ingredients found. Add some meals to your weekly plan!</p>';
    }
    
    shoppingListContainer.innerHTML = html;
    
    // Add checkbox functionality
    document.querySelectorAll('.shopping-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const item = this.closest('.shopping-item');
            if (this.checked) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked');
            }
        });
    });
}

function shareShoppingList() {
    const shoppingText = generateShoppingText();
    
    if (navigator.share) {
        navigator.share({
            title: 'Family Shopping List',
            text: shoppingText
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shoppingText).then(() => {
            alert('Shopping list copied to clipboard!');
        });
    }
}

function generateShoppingText() {
    const sections = document.querySelectorAll('.shopping-section');
    let text = '🛒 Family Shopping List\n\n';
    
    sections.forEach(section => {
        const category = section.querySelector('h4').textContent;
        text += `${category}:\n`;
        
        const items = section.querySelectorAll('.shopping-item label');
        items.forEach(item => {
            text += `• ${item.textContent}\n`;
        });
        text += '\n';
    });
    
    return text;
}

function suggestNewRecipe() {
    // Show ingredient input modal first
    modalBody.innerHTML = `
        <h2>💡 Recipe Suggestion</h2>
        <p style="color: #5d8a3a; margin-bottom: 20px;">What ingredients do you have in your fridge? (Optional - leave blank for random suggestion)</p>
        
        <div style="margin-bottom: 20px;">
            <label for="ingredient-input" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                Enter ingredients separated by commas:
            </label>
            <input 
                type="text" 
                id="ingredient-input" 
                placeholder="e.g. chicken, rice, broccoli, garlic"
                style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px;"
            />
            <small style="color: #5d8a3a; font-style: italic;">
                Try ingredients like: chicken, beef, rice, pasta, tomatoes, onion, garlic, beans, etc.
            </small>
        </div>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <button class="btn primary" onclick="findRecipeByIngredients()">🔍 Find Recipe</button>
            <button class="btn secondary" onclick="getRandomRecipe()">🎲 Random Recipe</button>
            <button class="btn secondary" onclick="modal.style.display = 'none'">Cancel</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function findRecipeByIngredients() {
    const ingredientInput = document.getElementById('ingredient-input').value.trim();
    
    if (!ingredientInput) {
        getRandomRecipe();
        return;
    }
    
    const userIngredients = ingredientInput.toLowerCase().split(',').map(ing => ing.trim());
    const recipePool = getAllRecipePool();
    
    // Score recipes based on ingredient matches
    const scoredRecipes = recipePool.map(recipe => {
        const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
        let score = 0;
        let matchedIngredients = [];
        
        userIngredients.forEach(userIng => {
            const matches = recipeIngredients.some(recipeIng => 
                recipeIng.includes(userIng) || userIng.includes(recipeIng.split('(')[0].trim())
            );
            if (matches) {
                score++;
                matchedIngredients.push(userIng);
            }
        });
        
        return {
            ...recipe,
            score,
            matchedIngredients,
            matchPercentage: Math.round((score / userIngredients.length) * 100)
        };
    }).filter(recipe => recipe.score > 0);
    
    if (scoredRecipes.length === 0) {
        // No matches found, suggest a random recipe
        modalBody.innerHTML = `
            <h2>🤔 No Perfect Matches</h2>
            <p style="color: #5d8a3a; margin-bottom: 20px;">
                We couldn't find recipes that match your ingredients exactly, but here's a great recipe you might like:
            </p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="btn primary" onclick="getRandomRecipe()">🎲 Get Random Recipe</button>
                <button class="btn secondary" onclick="suggestNewRecipe()">🔍 Try Different Ingredients</button>
                <button class="btn secondary" onclick="modal.style.display = 'none'">Close</button>
            </div>
        `;
        return;
    }
    
    // Sort by score (highest first) and get the best match
    scoredRecipes.sort((a, b) => b.score - a.score);
    const bestMatch = scoredRecipes[0];
    
    showRecipeSuggestion(bestMatch, userIngredients);
}

function getRandomRecipe() {
    const recipePool = getAllRecipePool();
    const randomRecipe = recipePool[Math.floor(Math.random() * recipePool.length)];
    showRecipeSuggestion(randomRecipe);
}

function getAllRecipePool() {
    return [
        {
            type: 'batch',
            name: 'Slow Cooker Chicken Teriyaki',
            description: 'Sweet and savory chicken thighs with vegetables over rice. Perfect for meal prep.',
            tags: ['slow-cooker', 'asian-inspired'],
            ingredients: [
                'Chicken thighs (8)',
                'Soy sauce',
                'Brown sugar',
                'Rice vinegar',
                'Garlic',
                'Ginger',
                'Broccoli florets',
                'Jasmine rice',
                'Sesame seeds',
                'Green onions'
            ]
        },
        {
            type: 'quick',
            name: 'Loaded Sweet Potato & Black Bean Bowls',
            description: 'Roasted sweet potatoes with black beans, avocado, and cilantro lime dressing.',
            tags: ['healthy', 'quick', 'vegetarian-option'],
            ingredients: [
                'Sweet potatoes (4)',
                'Black beans (2 cans)',
                'Avocado (2)',
                'Lime',
                'Cilantro',
                'Red onion',
                'Greek yogurt',
                'Cumin',
                'Olive oil',
                'Optional: grilled chicken'
            ]
        },
        {
            type: 'batch',
            name: 'Slow Cooker White Chicken Chili',
            description: 'Creamy white chili with chicken, white beans, and green chiles.',
            tags: ['slow-cooker', 'comfort-food'],
            ingredients: [
                'Chicken breasts (2 lbs)',
                'White beans (3 cans)',
                'Green chiles (2 cans)',
                'Chicken broth',
                'Onion',
                'Garlic',
                'Cumin',
                'Cream cheese',
                'Monterey Jack cheese',
                'Cilantro'
            ]
        },
        {
            type: 'quick',
            name: 'Mediterranean Chicken Bowls',
            description: 'Seasoned chicken with cucumber, tomatoes, olives, and tzatziki.',
            tags: ['healthy', 'quick', 'mediterranean'],
            ingredients: [
                'Chicken thighs',
                'Cucumber',
                'Cherry tomatoes',
                'Red onion',
                'Kalamata olives',
                'Feta cheese',
                'Greek yogurt',
                'Lemon',
                'Oregano',
                'Rice or quinoa'
            ]
        },
        {
            type: 'quick',
            name: 'Chicken Fried Rice',
            description: 'Quick and easy fried rice with chicken and vegetables.',
            tags: ['quick', 'one-pot', 'asian-inspired'],
            ingredients: [
                'Cooked rice (3 cups)',
                'Chicken breast (2)',
                'Eggs (3)',
                'Frozen peas',
                'Carrots',
                'Onion',
                'Garlic',
                'Soy sauce',
                'Sesame oil',
                'Green onions'
            ]
        },
        {
            type: 'batch',
            name: 'Beef and Vegetable Stew',
            description: 'Hearty slow-cooked stew with tender beef and root vegetables.',
            tags: ['slow-cooker', 'comfort-food', 'one-pot'],
            ingredients: [
                'Beef stew meat (2 lbs)',
                'Potatoes (4 large)',
                'Carrots (4)',
                'Celery (3 stalks)',
                'Onion (2)',
                'Garlic',
                'Beef broth',
                'Tomato paste',
                'Bay leaves',
                'Thyme'
            ]
        },
        {
            type: 'quick',
            name: 'Spaghetti Aglio e Olio',
            description: 'Simple Italian pasta with garlic, olive oil, and red pepper flakes.',
            tags: ['quick', 'italian', 'vegetarian-option'],
            ingredients: [
                'Spaghetti (1 lb)',
                'Garlic (6 cloves)',
                'Olive oil',
                'Red pepper flakes',
                'Fresh parsley',
                'Parmesan cheese',
                'Salt',
                'Black pepper'
            ]
        },
        {
            type: 'batch',
            name: 'Moroccan Chicken Tagine',
            description: 'Aromatic slow-cooked chicken with apricots and warm spices.',
            tags: ['slow-cooker', 'moroccan', 'exotic'],
            ingredients: [
                'Chicken thighs (8)',
                'Onions (2)',
                'Dried apricots',
                'Chickpeas (1 can)',
                'Tomatoes (1 can)',
                'Ginger',
                'Cinnamon',
                'Cumin',
                'Chicken broth',
                'Almonds'
            ]
        },
        {
            type: 'quick',
            name: 'Shrimp Scampi',
            description: 'Garlicky shrimp in white wine butter sauce over pasta.',
            tags: ['quick', 'seafood', 'italian'],
            ingredients: [
                'Large shrimp (1 lb)',
                'Linguine (1 lb)',
                'Garlic (6 cloves)',
                'White wine',
                'Butter',
                'Lemon',
                'Fresh parsley',
                'Red pepper flakes',
                'Olive oil'
            ]
        }
    ];
}

function showRecipeSuggestion(recipe, userIngredients = null) {
    const ingredientsList = recipe.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    const tagsHtml = recipe.tags.map(tag => 
        `<span class="tag ${tag.replace('-', '-')}">${tag}</span>`
    ).join('');
    
    let matchInfo = '';
    if (userIngredients && recipe.matchedIngredients) {
        matchInfo = `
            <div style="background: rgba(106, 153, 78, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #6a994e;">
                <h4 style="color: #2d5016; margin-bottom: 8px;">🎯 Ingredient Match: ${recipe.matchPercentage}%</h4>
                <p style="margin: 0; color: #5d8a3a;">
                    <strong>Your ingredients used:</strong> ${recipe.matchedIngredients.join(', ')}
                </p>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <h2>💡 ${userIngredients ? 'Recipe Match' : 'Suggested Recipe'}</h2>
        ${matchInfo}
        <div class="recipe-title" style="font-size: 1.3rem; margin-bottom: 10px;">${recipe.name}</div>
        <div class="recipe-tags" style="margin-bottom: 15px;">${tagsHtml}</div>
        <p style="margin-bottom: 20px;">${recipe.description}</p>
        <h3>Ingredients:</h3>
        <ul style="margin-bottom: 20px;">${ingredientsList}</ul>
        <p style="font-style: italic; color: #6c757d; margin-bottom: 20px;">
            ${userIngredients ? 'This recipe matches some of your available ingredients!' : 'This is a recipe suggestion based on your cooking style!'} You can add it to your meal plan or get another suggestion.
        </p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn primary" onclick="addSuggestedRecipe('${btoa(JSON.stringify(recipe))}')">⭐ Add to My Recipes</button>
            <button class="btn primary" onclick="${userIngredients ? 'findRecipeByIngredients()' : 'getRandomRecipe()'}">Get Another Suggestion</button>
            <button class="btn secondary" onclick="suggestNewRecipe()">🔍 New Search</button>
            <button class="btn secondary" onclick="modal.style.display = 'none'">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function showAddCustomRecipeModal() {
    modalBody.innerHTML = `
        <h2>➕ Add Your Recipe</h2>
        <p style="color: #5d8a3a; margin-bottom: 25px;">Add a recipe from the internet or create your own!</p>
        
        <form id="custom-recipe-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div>
                <label for="recipe-name" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                    Recipe Name *
                </label>
                <input 
                    type="text" 
                    id="recipe-name" 
                    required
                    placeholder="e.g. Mom's Famous Lasagna"
                    style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px;"
                />
            </div>
            
            <div>
                <label for="recipe-url" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                    Recipe URL (Optional)
                </label>
                <input 
                    type="url" 
                    id="recipe-url" 
                    placeholder="https://example.com/recipe"
                    style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px;"
                />
                <small style="color: #5d8a3a; font-style: italic;">
                    If you found this recipe online, paste the link here
                </small>
            </div>
            
            <div>
                <label for="recipe-description" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                    Description *
                </label>
                <textarea 
                    id="recipe-description" 
                    required
                    rows="3"
                    placeholder="Brief description of the dish..."
                    style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px; resize: vertical;"
                ></textarea>
            </div>
            
            <div>
                <label for="recipe-type" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                    Recipe Type *
                </label>
                <select 
                    id="recipe-type" 
                    required
                    style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px;"
                >
                    <option value="">Select type...</option>
                    <option value="batch">🍲 Sunday Batch Cooking</option>
                    <option value="quick">⚡ Quick Weeknight Meal</option>
                </select>
            </div>
            
            <div>
                <label for="recipe-ingredients" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                    Ingredients * <small style="font-weight: 400; color: #5d8a3a;">(one per line)</small>
                </label>
                <textarea 
                    id="recipe-ingredients" 
                    required
                    rows="8"
                    placeholder="Ground beef (1 lb)
Onion (1 large)
Garlic (3 cloves)
Crushed tomatoes (1 can)
Italian seasoning
Salt and pepper"
                    style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px; resize: vertical;"
                ></textarea>
            </div>
            
            <div>
                <label for="recipe-tags" style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d5016;">
                    Tags <small style="font-weight: 400; color: #5d8a3a;">(comma-separated, optional)</small>
                </label>
                <input 
                    type="text" 
                    id="recipe-tags" 
                    placeholder="e.g. comfort-food, italian, one-pot"
                    style="width: 100%; padding: 12px; border: 2px solid #b5d6a3; border-radius: 8px; font-size: 16px;"
                />
                <small style="color: #5d8a3a; font-style: italic;">
                    Common tags: comfort-food, healthy, italian, mexican, vegetarian, one-pot, slow-cooker
                </small>
            </div>
        </form>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 25px;">
            <button class="btn primary" onclick="saveCustomRecipe()">💾 Save Recipe</button>
            <button class="btn secondary" onclick="modal.style.display = 'none'">Cancel</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function saveCustomRecipe() {
    const name = document.getElementById('recipe-name').value.trim();
    const url = document.getElementById('recipe-url').value.trim();
    const description = document.getElementById('recipe-description').value.trim();
    const type = document.getElementById('recipe-type').value;
    const ingredientsText = document.getElementById('recipe-ingredients').value.trim();
    const tagsText = document.getElementById('recipe-tags').value.trim();
    
    // Validation
    if (!name || !description || !type || !ingredientsText) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }
    
    // Parse ingredients (split by lines, clean up)
    const ingredients = ingredientsText
        .split('\n')
        .map(ing => ing.trim())
        .filter(ing => ing.length > 0);
    
    if (ingredients.length === 0) {
        alert('Please add at least one ingredient');
        return;
    }
    
    // Parse tags
    const tags = tagsText ? 
        tagsText.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag.length > 0) : 
        [];
    
    // Create recipe object
    const recipe = {
        id: 'custom-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
        name,
        description,
        type,
        ingredients,
        tags,
        url: url || null,
        isCustom: true,
        dateAdded: new Date().toLocaleDateString()
    };
    
    // Add to appropriate recipe collection
    if (type === 'batch') {
        recipes.batch.push(recipe);
    } else {
        recipes.quick.push(recipe);
    }
    
    // Save to localStorage
    localStorage.setItem('customRecipes', JSON.stringify(getCustomRecipes()));
    
    // Re-render recipes
    const batchContainer = document.getElementById('batch-recipes');
    const quickContainer = document.getElementById('quick-recipes');
    batchContainer.innerHTML = '';
    quickContainer.innerHTML = '';
    renderRecipes();
    
    // Close modal and show success
    modal.style.display = 'none';
    showNotification(`✅ Added "${name}" to your recipes!`, 'success');
    
    // Switch to recipes tab to show the new recipe
    document.querySelector('[data-tab="recipes"]').click();
}

function deleteCustomRecipe(recipeId) {
    // Find the recipe to get its name for confirmation
    const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
    
    if (!recipe || !recipe.isCustom) {
        alert('This recipe cannot be deleted.');
        return;
    }
    
    if (confirm(`Delete "${recipe.name}"? This cannot be undone.`)) {
        // Remove from batch or quick recipes
        recipes.batch = recipes.batch.filter(r => r.id !== recipeId);
        recipes.quick = recipes.quick.filter(r => r.id !== recipeId);
        
        // Update localStorage
        localStorage.setItem('customRecipes', JSON.stringify(getCustomRecipes()));
        
        // Re-render recipes
        const batchContainer = document.getElementById('batch-recipes');
        const quickContainer = document.getElementById('quick-recipes');
        batchContainer.innerHTML = '';
        quickContainer.innerHTML = '';
        renderRecipes();
        
        // Close modal and show success
        modal.style.display = 'none';
        showNotification(`🗑️ Deleted "${recipe.name}"`, 'success');
    }
}

function addSuggestedRecipe(encodedRecipe) {
    try {
        const recipe = JSON.parse(atob(encodedRecipe));
        
        // Generate a unique ID for the recipe
        recipe.id = 'custom-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        
        // Add to the appropriate recipe collection
        if (recipe.type === 'batch') {
            recipes.batch.push(recipe);
        } else {
            recipes.quick.push(recipe);
        }
        
        // Save to localStorage
        localStorage.setItem('customRecipes', JSON.stringify(getCustomRecipes()));
        
        // Re-render the recipe grids to show the new recipe
        const batchContainer = document.getElementById('batch-recipes');
        const quickContainer = document.getElementById('quick-recipes');
        
        // Clear and re-render
        batchContainer.innerHTML = '';
        quickContainer.innerHTML = '';
        renderRecipes();
        
        // Close modal and show success message
        modal.style.display = 'none';
        
        // Switch to recipes tab to show the added recipe
        document.querySelector('[data-tab="recipes"]').click();
        
        // Show success notification
        showNotification(`⭐ Added "${recipe.name}" to your recipes!`, 'success');
        
    } catch (error) {
        console.error('Error adding recipe:', error);
        alert('Sorry, there was an error adding the recipe. Please try again.');
    }
}

function getCustomRecipes() {
    // Return only the custom recipes (those with IDs starting with 'custom-')
    const customBatch = recipes.batch.filter(r => r.id.startsWith('custom-'));
    const customQuick = recipes.quick.filter(r => r.id.startsWith('custom-'));
    return { batch: customBatch, quick: customQuick };
}

function loadCustomRecipes() {
    try {
        const saved = localStorage.getItem('customRecipes');
        if (saved) {
            const customRecipes = JSON.parse(saved);
            // Add custom recipes to the main collections
            if (customRecipes.batch) {
                recipes.batch.push(...customRecipes.batch);
            }
            if (customRecipes.quick) {
                recipes.quick.push(...customRecipes.quick);
            }
        }
    } catch (error) {
        console.error('Error loading custom recipes:', error);
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 4000);
}

function loadSuggestedPlan() {
    if (confirm('This will replace your current meal plan with a sample week. Continue?')) {
        currentMealPlan = { ...suggestedMealPlan };
        
        // Clear existing slots
        mealSlots.forEach(slot => {
            slot.classList.remove('has-meal');
            slot.innerHTML = '<span class="placeholder">+ Add Meal</span>';
        });
        
        // Load the suggested plan
        Object.entries(currentMealPlan).forEach(([day, recipeId]) => {
            if (recipeId === 'leftover-note') {
                updateMealSlotWithNote(day, 'Leftovers', '🍽️ Enjoy leftovers from Sunday!');
            } else if (recipeId === 'order-in-note') {
                updateMealSlotWithNote(day, 'Order In', '🥡 Pizza, Thai, or your favorite!');
            } else {
                const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
                if (recipe) {
                    updateMealSlot(day, recipe);
                }
            }
        });
        
        saveMealPlan();
        
        // Switch to planner tab to show the loaded plan
        document.querySelector('[data-tab="planner"]').click();
    }
}


function generateCustomShoppingList() {
    const selectedCheckboxes = document.querySelectorAll('.recipe-checkbox:checked');
    
    if (selectedCheckboxes.length === 0) {
        alert('Please select at least one recipe to generate a shopping list!');
        return;
    }
    
    const selectedRecipeIds = Array.from(selectedCheckboxes).map(cb => 
        cb.id.replace('select-', '')
    );
    
    const allIngredients = [];
    
    selectedRecipeIds.forEach(recipeId => {
        const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
        if (recipe) {
            allIngredients.push(...recipe.ingredients);
        }
    });
    
    generateShoppingListFromIngredients(allIngredients);
}


function generateSelectedDaysShoppingList() {
    const selectedDayCheckboxes = document.querySelectorAll('.day-checkbox:checked');
    
    if (selectedDayCheckboxes.length === 0) {
        alert('Please select at least one day to generate a shopping list!');
        return;
    }
    
    const selectedDays = Array.from(selectedDayCheckboxes).map(cb => 
        cb.id.replace('select-', '')
    );
    
    const allIngredients = [];
    
    selectedDays.forEach(day => {
        const mealId = currentMealPlan[day];
        if (mealId && mealId !== 'leftover-note' && mealId !== 'order-in-note') {
            const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === mealId);
            if (recipe) {
                allIngredients.push(...recipe.ingredients);
            }
        }
    });
    
    if (allIngredients.length === 0) {
        alert('No recipes found for the selected days. Add some meals to your plan first!');
        return;
    }
    
    generateShoppingListFromIngredients(allIngredients);
}

function generateShoppingListFromIngredients(allIngredients) {
    // Group ingredients by category (same logic as original function)
    const groceryCategories = {
        'Meat & Poultry': [],
        'Vegetables': [],
        'Pantry & Dry Goods': [],
        'Dairy': [],
        'Other': []
    };
    
    allIngredients.forEach(ingredient => {
        const lower = ingredient.toLowerCase();
        
        if (lower.includes('chicken') || lower.includes('beef') || lower.includes('turkey') || 
            lower.includes('sausage') || lower.includes('ground') || lower.includes('chuck')) {
            groceryCategories['Meat & Poultry'].push(ingredient);
        } else if (lower.includes('broccoli') || lower.includes('asparagus') || lower.includes('sweet potato') ||
                  lower.includes('onion') || lower.includes('garlic') || lower.includes('carrot') ||
                  lower.includes('mushroom') || lower.includes('pepper') || lower.includes('kale') ||
                  lower.includes('spinach') || lower.includes('tomato') || lower.includes('lettuce')) {
            groceryCategories['Vegetables'].push(ingredient);
        } else if (lower.includes('cheese') || lower.includes('milk') || lower.includes('cream') ||
                  lower.includes('sour cream') || lower.includes('half-and-half')) {
            groceryCategories['Dairy'].push(ingredient);
        } else if (lower.includes('rice') || lower.includes('pasta') || lower.includes('beans') ||
                  lower.includes('broth') || lower.includes('oil') || lower.includes('flour') ||
                  lower.includes('sauce') || lower.includes('seasoning') || lower.includes('spice')) {
            groceryCategories['Pantry & Dry Goods'].push(ingredient);
        } else {
            groceryCategories['Other'].push(ingredient);
        }
    });
    
    // Remove duplicates and sort
    Object.keys(groceryCategories).forEach(category => {
        groceryCategories[category] = [...new Set(groceryCategories[category])].sort();
    });
    
    displayShoppingList(groceryCategories);
    
    // Switch to shopping list tab
    document.querySelector('[data-tab="shopping"]').click();
}

function toggleDayDropdown(recipeId) {
    const dropdown = document.getElementById(`dropdown-${recipeId}`);
    const recipeCard = dropdown.closest('.recipe-card');
    const isVisible = dropdown.style.display === 'block';
    
    // Close all other dropdowns first and reset z-index
    document.querySelectorAll('.day-dropdown').forEach(dd => {
        dd.style.display = 'none';
        dd.closest('.recipe-card').style.zIndex = '';
    });
    
    // Toggle this dropdown
    if (isVisible) {
        dropdown.style.display = 'none';
        recipeCard.style.zIndex = '';
    } else {
        dropdown.style.display = 'block';
        recipeCard.style.zIndex = '10000';
    }
}

function addRecipeToDay(recipeId, day) {
    const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
    if (recipe) {
        // Add to meal plan
        addMealToDay(day, recipeId);
        
        // Close dropdown and reset z-index
        const dropdown = document.getElementById(`dropdown-${recipeId}`);
        const recipeCard = dropdown.closest('.recipe-card');
        dropdown.style.display = 'none';
        recipeCard.style.zIndex = '';
        
        // Show success notification
        showNotification(`Added "${recipe.name}" to ${day.charAt(0).toUpperCase() + day.slice(1)}!`, 'success');
        
        // Switch to planner tab to show the update
        setTimeout(() => {
            document.querySelector('[data-tab="planner"]').click();
        }, 1000);
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.matches('.add-to-day-btn') && !event.target.matches('.dropdown-item')) {
        document.querySelectorAll('.day-dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
            dropdown.closest('.recipe-card').style.zIndex = '';
        });
    }
});

function saveMealPlan() {
    localStorage.setItem('familyMealPlan', JSON.stringify(currentMealPlan));
}

function saveCurrentWeek() {
    // Check if there are any meals planned
    const hasAnyMeals = Object.values(currentMealPlan).some(meal => meal !== null);
    
    if (!hasAnyMeals) {
        alert('Please add some meals to your week before saving!');
        return;
    }
    
    // Prompt for week name
    const weekName = prompt('Give this week a name (e.g., "Easy Week", "Comfort Food Week", "Quick Meals"):');
    
    if (!weekName || weekName.trim() === '') {
        return;
    }
    
    // Get existing saved weeks
    const savedWeeks = getSavedWeeks();
    
    // Create the saved week object
    const weekToSave = {
        id: 'week-' + Date.now(),
        name: weekName.trim(),
        mealPlan: { ...currentMealPlan },
        savedDate: new Date().toLocaleDateString(),
        mealCount: Object.values(currentMealPlan).filter(meal => meal !== null).length
    };
    
    // Add to saved weeks
    savedWeeks.push(weekToSave);
    
    // Save to localStorage
    localStorage.setItem('savedWeeks', JSON.stringify(savedWeeks));
    
    // Show success notification
    showNotification(`💾 Saved "${weekName}" successfully!`, 'success');
}

function getSavedWeeks() {
    try {
        const saved = localStorage.getItem('savedWeeks');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading saved weeks:', error);
        return [];
    }
}

function showSavedWeeksModal() {
    const savedWeeks = getSavedWeeks();
    
    if (savedWeeks.length === 0) {
        alert('No saved weeks yet! Save your current week first by clicking "💾 Save This Week".');
        return;
    }
    
    const weeksHtml = savedWeeks.map(week => {
        return `
            <div class="saved-week-item" data-week-id="${week.id}">
                <div class="saved-week-header">
                    <h4>${week.name}</h4>
                    <div class="saved-week-info">
                        <span class="meal-count">${week.mealCount} meals</span>
                        <span class="saved-date">Saved ${week.savedDate}</span>
                    </div>
                </div>
                <div class="saved-week-actions">
                    <button class="btn secondary small-btn" onclick="previewSavedWeek('${week.id}')">👀 Preview</button>
                    <button class="btn primary small-btn" onclick="loadSavedWeek('${week.id}')">📂 Load Week</button>
                    <button class="btn secondary small-btn" onclick="deleteSavedWeek('${week.id}')">🗑️ Delete</button>
                </div>
            </div>
        `;
    }).join('');
    
    modalBody.innerHTML = `
        <h2>📂 Your Saved Weeks</h2>
        <p style="color: #5d8a3a; margin-bottom: 20px;">Choose a saved week to load into your planner:</p>
        <div class="saved-weeks-list">
            ${weeksHtml}
        </div>
        <div style="margin-top: 20px; text-align: center;">
            <button class="btn secondary" onclick="modal.style.display = 'none'">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function previewSavedWeek(weekId) {
    const savedWeeks = getSavedWeeks();
    const weekToPreview = savedWeeks.find(week => week.id === weekId);
    
    if (!weekToPreview) {
        alert('Could not find that saved week.');
        return;
    }
    
    // Create preview of the week's meals
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let previewHtml = '';
    let totalIngredients = [];
    
    days.forEach((day, index) => {
        const mealId = weekToPreview.mealPlan[day];
        let mealDisplay = '<span style="color: #6c757d; font-style: italic;">No meal planned</span>';
        
        if (mealId) {
            if (mealId === 'leftover-note') {
                mealDisplay = '<span style="color: #4a90e2;">🥄 Leftovers</span>';
            } else if (mealId === 'order-in-note') {
                mealDisplay = '<span style="color: #f4a261;">🥡 Order In</span>';
            } else {
                const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === mealId);
                if (recipe) {
                    mealDisplay = `<span style="color: #2d5016; font-weight: 500;">${recipe.name}</span>`;
                    totalIngredients.push(...recipe.ingredients);
                }
            }
        }
        
        previewHtml += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee; background: ${index % 2 === 0 ? 'rgba(248, 249, 250, 0.5)' : 'transparent'};">
                <strong style="color: #2d5016; min-width: 100px;">${dayNames[index]}:</strong>
                <div style="flex: 1; text-align: left; margin-left: 15px;">${mealDisplay}</div>
            </div>
        `;
    });
    
    // Create ingredient summary
    const uniqueIngredients = [...new Set(totalIngredients)];
    const ingredientCount = uniqueIngredients.length;
    
    modalBody.innerHTML = `
        <h2>👀 Preview: ${weekToPreview.name}</h2>
        <div style="margin-bottom: 25px;">
            <div style="display: flex; gap: 20px; margin-bottom: 20px; font-size: 14px;">
                <span style="color: #5d8a3a;"><strong>Saved:</strong> ${weekToPreview.savedDate}</span>
                <span style="color: #5d8a3a;"><strong>Meals:</strong> ${weekToPreview.mealCount}</span>
                <span style="color: #5d8a3a;"><strong>Ingredients:</strong> ${ingredientCount}</span>
            </div>
        </div>
        
        <div style="border: 2px solid #b5d6a3; border-radius: 12px; overflow: hidden; margin-bottom: 25px;">
            <div style="background: linear-gradient(135deg, #b5d6a3 0%, #a3c892 100%); padding: 15px; text-align: center;">
                <h3 style="margin: 0; color: #2d5016;">Weekly Meal Plan</h3>
            </div>
            <div>
                ${previewHtml}
            </div>
        </div>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <button class="btn primary" onclick="loadSavedWeek('${weekId}')">📂 Load This Week</button>
            <button class="btn secondary" onclick="showSavedWeeksModal()">← Back to Saved Weeks</button>
            <button class="btn secondary" onclick="modal.style.display = 'none'">Close</button>
        </div>
    `;
}

function loadSavedWeek(weekId) {
    const savedWeeks = getSavedWeeks();
    const weekToLoad = savedWeeks.find(week => week.id === weekId);
    
    if (!weekToLoad) {
        alert('Could not find that saved week.');
        return;
    }
    
    if (confirm(`Load "${weekToLoad.name}" and replace your current meal plan?`)) {
        // Load the meal plan
        currentMealPlan = { ...weekToLoad.mealPlan };
        
        // Clear existing slots
        mealSlots.forEach(slot => {
            slot.classList.remove('has-meal', 'leftovers-meal', 'takeout-meal');
            slot.innerHTML = '<span class="placeholder">+ Add Meal</span>';
        });
        
        // Update the UI with the loaded plan
        Object.entries(currentMealPlan).forEach(([day, recipeId]) => {
            if (recipeId) {
                if (recipeId === 'leftover-note') {
                    updateMealSlotWithNote(day, 'Leftovers', '🍽️ Enjoy leftovers from another day!');
                } else if (recipeId === 'order-in-note') {
                    updateMealSlotWithNote(day, 'Order In', '🥡 Pizza, Thai, or your favorite!');
                } else {
                    const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
                    if (recipe) {
                        updateMealSlot(day, recipe);
                    }
                }
            }
        });
        
        saveMealPlan();
        modal.style.display = 'none';
        
        showNotification(`📂 Loaded "${weekToLoad.name}" successfully!`, 'success');
    }
}

function deleteSavedWeek(weekId) {
    const savedWeeks = getSavedWeeks();
    const weekToDelete = savedWeeks.find(week => week.id === weekId);
    
    if (!weekToDelete) {
        return;
    }
    
    if (confirm(`Delete "${weekToDelete.name}"? This cannot be undone.`)) {
        const updatedWeeks = savedWeeks.filter(week => week.id !== weekId);
        localStorage.setItem('savedWeeks', JSON.stringify(updatedWeeks));
        
        // Refresh the modal
        showSavedWeeksModal();
        
        showNotification(`🗑️ Deleted "${weekToDelete.name}"`, 'success');
    }
}

function loadSavedMealPlan() {
    const saved = localStorage.getItem('familyMealPlan');
    if (saved) {
        currentMealPlan = JSON.parse(saved);
    } else {
        // Load suggested meal plan for new users
        currentMealPlan = { ...suggestedMealPlan };
    }
    
    // Restore meal slots
    Object.entries(currentMealPlan).forEach(([day, recipeId]) => {
        if (recipeId) {
            if (recipeId === 'leftover-note') {
                updateMealSlotWithNote(day, 'Leftovers', '🍽️ Enjoy leftovers from Sunday!');
            } else if (recipeId === 'order-in-note') {
                updateMealSlotWithNote(day, 'Order In', '🥡 Pizza, Thai, or your favorite!');
            } else {
                const recipe = [...recipes.batch, ...recipes.quick].find(r => r.id === recipeId);
                if (recipe) {
                    updateMealSlot(day, recipe);
                }
            }
        }
    });
}

function updateMealSlotWithNote(day, title, description) {
    const slot = document.querySelector(`[data-day="${day}"]`);
    
    // Clear any existing special classes
    slot.classList.remove('leftovers-meal', 'takeout-meal');
    slot.classList.add('has-meal');
    
    let emoji = '🍽️'; // default
    let specialClass = '';
    
    if (title === 'Leftovers') {
        emoji = '🥄'; // leftovers emoji (spoon represents reheating/serving leftovers)
        specialClass = 'leftovers-meal';
    } else if (title === 'Order In') {
        emoji = '🥡'; // takeout emoji
        specialClass = 'takeout-meal';
    }
    
    if (specialClass) {
        slot.classList.add(specialClass);
    }
    
    slot.innerHTML = `<div class="meal-emoji">${emoji}</div><div class="meal-name">${title}</div><div style="font-size: 12px; opacity: 0.8;">${description}</div>`;
}