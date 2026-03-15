// ===== JavaScript - Dynamic Menu for Hammer Coffee & Pastry =====

// Add class to body to indicate JS is active
document.body.classList.add('js-active');

// ===== MENU DATA OBJECT - EASILY EDITABLE =====
const menuData = {
    pastries: [
        { name: "Boxegna (custard-filled cream puff)", price: 60 },
        { name: "Mille feuille", price: 60 },
        { name: "Custard cake", price: 60 },
        { name: "Chocolate cake", price: 60 },
        { name: "Banana cake", price: 60 },
        { name: "English cake", price: 60 },
        { name: "Croissant", price: 60 },
         { name: "Brownie", price: 70 }
    ],
    drinks: {
        hotTea: [
            { name: "TEA", price: 80 },
            { name: "GREEN TEA", price: 90 },
            { name: "GINGER TEA", price: 90 },
            { name: "GINGER WITH HONEY", price: 120 },
            { name: "SPECIAL TEA", price: 150 },
            { name: "HOT CHOCOLATE", price: 200 },
            { name: "PEANUT TEA", price: 130 }
        ],
        espresso: [
            { name: "ESPRESSO", price: 110 },
            { name: "DOUBLE ESPRESSO", price: 140 },
            { name: "SYPHON COFFEE", price: 80 },
            { name: "TEA ESPRESSO", price: 90 },
            { name: "MACCHIATO", price: 130 },
            { name: "DOUBLE MACCHIATO", price: 170 },
            { name: "FASTING MACCHIATO", price: 250 },
            { name: "CAFÉ LATTE", price: 150 },
            { name: "CAPPUCCINO", price: 180 },
            { name: "PEANUT COFFEE", price: 130 }
        ],
        coldDrinks: [
            { name: "ICE LATTE", price: 210 },
            { name: "FASTING ICE LATTE", price: 250 },
            { name: "ICE COFFEE", price: 150 },
            { name: "ICE TEA", price: 130 },
            { name: "WATER", price: 100 }
        ]
    },
    footer: "✧ Sweet cakes, strong coffee and a bright day. ✧"
};

// ===== FUNCTION TO CREATE MENU ITEM HTML =====
// USING THE CORRECT VERSION WITH menu-item-inner
function createMenuItem(item) {
    const li = document.createElement('li');
    li.className = 'menu-item';
    
    // Create inner wrapper for the bubble background
    const innerDiv = document.createElement('div');
    innerDiv.className = 'menu-item-inner';
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = item.name;
    
    const priceSpan = document.createElement('span');
    priceSpan.className = 'item-price';
    priceSpan.textContent = `${item.price} Br`;
    
    // Assemble: name + price go inside innerDiv, innerDiv goes inside li
    innerDiv.appendChild(nameSpan);
    innerDiv.appendChild(priceSpan);
    li.appendChild(innerDiv);
    
    return li;
}

// ===== FUNCTION TO CREATE SUBSECTION =====
function createSubsection(title, items) {
    const subsection = document.createElement('div');
    subsection.className = 'subsection';
    
    const titleEl = document.createElement('h3');
    titleEl.className = 'subsection-title';
    titleEl.textContent = title;
    subsection.appendChild(titleEl);
    
    const ul = document.createElement('ul');
    ul.className = 'menu-items';
    
    items.forEach(item => {
        ul.appendChild(createMenuItem(item));
    });
    
    subsection.appendChild(ul);
    return subsection;
}

// ===== BUILD THE COMPLETE DYNAMIC MENU =====
function buildDynamicMenu() {
    const dynamicMenu = document.getElementById('dynamicMenu');
    if (!dynamicMenu) return;
    
    // Clear any existing content
    dynamicMenu.innerHTML = '';
    
    // ===== CAKES SECTION =====
    const cakesSection = document.createElement('section');
    cakesSection.className = 'menu-section';
    
    const cakesTitle = document.createElement('h2');
    cakesTitle.className = 'section-title';
    cakesTitle.textContent = 'CAKES';
    cakesSection.appendChild(cakesTitle);
    
    const cakesUl = document.createElement('ul');
    cakesUl.className = 'menu-items';
    
    menuData.cakes.forEach(cake => {
        cakesUl.appendChild(createMenuItem(cake));
    });
    
    cakesSection.appendChild(cakesUl);
    dynamicMenu.appendChild(cakesSection);
    
    // ===== DRINKS SECTION =====
    const drinksSection = document.createElement('section');
    drinksSection.className = 'menu-section';
    
    const drinksTitle = document.createElement('h2');
    drinksTitle.className = 'section-title';
    drinksTitle.textContent = 'DRINKS';
    drinksSection.appendChild(drinksTitle);
    
    // Add Hot Tea subsection
    drinksSection.appendChild(createSubsection('HOT TEA', menuData.drinks.hotTea));
    
    // Add Espresso & Coffee subsection
    drinksSection.appendChild(createSubsection('ESPRESSO & COFFEE', menuData.drinks.espresso));
    
    // Add Cold Drinks subsection
    drinksSection.appendChild(createSubsection('COLD DRINKS', menuData.drinks.coldDrinks));
    
    dynamicMenu.appendChild(drinksSection);
    
    // ===== FOOTER =====
    const footer = document.createElement('div');
    footer.className = 'menu-footer';
    
    const footerP = document.createElement('p');
    footerP.textContent = menuData.footer;
    footer.appendChild(footerP);
    
    dynamicMenu.appendChild(footer);
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    buildDynamicMenu();
});

// ===== HELPER FUNCTIONS FOR FUTURE UPDATES =====
window.updateMenu = {
    addCake: function(name, price) {
        menuData.cakes.push({ name, price });
        buildDynamicMenu();
    },
    addHotTea: function(name, price) {
        menuData.drinks.hotTea.push({ name, price });
        buildDynamicMenu();
    },
    addEspresso: function(name, price) {
        menuData.drinks.espresso.push({ name, price });
        buildDynamicMenu();
    },
    addColdDrink: function(name, price) {
        menuData.drinks.coldDrinks.push({ name, price });
        buildDynamicMenu();
    }
};
