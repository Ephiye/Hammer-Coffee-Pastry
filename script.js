// ===== JavaScript - Dynamic Menu for Hammer Coffee & Pastry =====

// Add class to body to indicate JS is active
document.body.classList.add('js-active');

// ===== MENU DATA OBJECT - EASILY EDITABLE =====
const menuData = {
    cakes: [
        { name: "Boxegna (custard-filled cream puff)", price: 70 },
        { name: "Mille feuille", price: 70 },
        { name: "Custard cake", price: 70 },
        { name: "Chocolate cake", price: 70 },
        { name: "Banana cake", price: 140 },
        { name: "English cake", price: 200 },
        { name: "Orange cake", price: 140 },
        { name:  "Croissant" , price: 150 },
        { name: "Chocolate croissant", price: 190 },
        { name: "Chocolate danish", price: 190 },
        { name :"Tiramisu cake", price:230 },
        { name :"Caramel toffee cake", price:230},
        { name :"Black forest gateau", price:230}
    ],
    tortas: [
        { name: "1kg Mille feuille", price: 3500 },
        { name: "1kg Custard cake", price: 3000 },
        { name: "1kg Chocolate cake", price: 3500 }
    ],
    drinks: {
        hotTea: [
            { name: "TEA", price: 90 },
            { name: "GREEN TEA", price: 100 },
            { name: "GINGER TEA", price: 100 },
            { name: "GINGER WITH HONEY", price: 120 },
            { name: "SPECIAL TEA", price: 230 },
            { name: "HOT CHOCOLATE", price: 200 },
            { name: "PEANUT TEA", price: 150 }
        ],
        espresso: [
            { name: "ESPRESSO", price: 110 },
            { name: "DOUBLE ESPRESSO", price: 140 },
            { name: "SYPHON COFFEE", price: 80 },
            { name: "TEA ESPRESSO", price: 90 },
            { name: "MACCHIATO", price: 150 },
            { name: "DOUBLE MACCHIATO", price: 250 },
            { name: "FASTING MACCHIATO", price: 250 },
            { name: "CAFÉ LATTE", price: 260 },
            { name: "CAPPUCCINO", price: 180 },
            { name: "PEANUT COFFEE", price: 150 }
        ],
        coldDrinks: [
            { name: "ICE LATTE", price: 300 },
            { name: "FASTING ICE LATTE", price: 320 },
            { name: "ICE COFFEE", price: 150 },
            { name: "ICE TEA", price: 130 },
            { name: "WATER", price: 100 }
        ]
    },
    footer: "✧ Sweet cakes, strong coffee and a bright day. ✧"
};

// ===== FUNCTION TO CREATE MENU ITEM HTML =====
function createMenuItem(item) {
    const li = document.createElement('li');
    li.className = 'menu-item';
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = item.name;
    
    const priceSpan = document.createElement('span');
    priceSpan.className = 'item-price';
    // FIXED: Added backticks for template literal
    priceSpan.textContent = `${item.price} Br`;
    
    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    
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
    
    // ===== PASTRIES SECTION =====
    const pastriesSection = document.createElement('section');
    pastriesSection.className = 'menu-section';
    
    const pastriesTitle = document.createElement('h2');
    pastriesTitle.className = 'section-title';
    pastriesTitle.textContent = 'PASTRIES';
    pastriesSection.appendChild(pastriesTitle);
    
    const pastriesUl = document.createElement('ul');
    pastriesUl.className = 'menu-items';
    
    menuData.cakes.forEach(cake => {
        pastriesUl.appendChild(createMenuItem(cake));
    });
    
    pastriesSection.appendChild(pastriesUl);
    dynamicMenu.appendChild(pastriesSection);
    
    // ===== TORTAS SECTION =====
    const tortasSection = document.createElement('section');
    tortasSection.className = 'menu-section';
    
    const tortasTitle = document.createElement('h2');
    tortasTitle.className = 'section-title';
    tortasTitle.textContent = 'TORTAS (WHOLE CAKES)';
    tortasSection.appendChild(tortasTitle);
    
    const tortasUl = document.createElement('ul');
    tortasUl.className = 'menu-items';
    
    menuData.tortas.forEach(torta => {
        tortasUl.appendChild(createMenuItem(torta));
    });
    
    tortasSection.appendChild(tortasUl);
    dynamicMenu.appendChild(tortasSection);
    
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
    addTorta: function(name, price) {
        menuData.tortas.push({ name, price });
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
