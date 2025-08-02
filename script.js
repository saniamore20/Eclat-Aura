
// Initialize AOS animations
AOS.init();

// Product data
const products = {
  bracelet: ["images/products/bracelet1.jpg", "images/products/bracelet2.jpg"],
  ring: ["images/products/ring1.jpg", "images/products/ring2.jpg"],
  pendant: ["images/products/pendant1.jpg", "images/products/pendant2.jpg"],
  earring: ["images/products/earring1.jpg", "images/products/earring2.jpg"]
};

// Show product gallery for a category
function showProducts(type) {
  const viewer = document.getElementById('product-viewer');
  const container = document.getElementById('productContainer');
  container.innerHTML = "";

  products[type].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
  });

  viewer.classList.remove('hidden');
}

const items = document.querySelectorAll(".category-item");
const image = document.getElementById("category-image");

//curated
const imageMap = {
  bracelet: ["bracelet.jpg"],
  ring: ["pexels-pixabay-265804.jpg"],
  pendant: ["pexels-pixabay-39648 (1).jpg"], 
  nosering: ["pexels-say-straight-1400349-2735970.jpg"],
  anklet: ["pexels-rdne-8759864.jpg"]

 
};

items.forEach(item => {
  const type = item.dataset.type;

  item.addEventListener("mouseenter", () => {
    image.style.opacity = 0;

    setTimeout(() => {
      image.src = imageMap[type];
      image.style.opacity = 1;
    }, 150);

    // Manage active class
    document.querySelector(".category-item.active")?.classList.remove("active");
    item.classList.add("active");
  });
});


// Hide the product viewer
function hideViewer() {
  document.getElementById('product-viewer').classList.add('hidden');
}

// Smooth scroll polyfill (optional for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const categories = document.querySelectorAll(".category");
const displayImage = document.getElementById("display-image");

categories.forEach(cat => {
  cat.addEventListener("click", () => {
    // Remove 'active' class from others
    categories.forEach(c => c.classList.remove("active"));
    cat.classList.add("active");

    // Get preview img src inside clicked category
    const previewImg = cat.querySelector("img.preview");
    const newSrc = previewImg.getAttribute("src");

    // Animate display image
    displayImage.style.opacity = 0;
    setTimeout(() => {
      displayImage.setAttribute("src", newSrc);
      displayImage.style.opacity = 1;
    }, 200);
  });
});

const ripple = document.querySelector('.cursor-ripple');

document.addEventListener('mousemove', (e) => {
  ripple.style.top = `${e.clientY}px`;
  ripple.style.left = `${e.clientX}px`;
});



