

// Attractions Data
const attractions = [
  {
    id: 1,
    name: "GTR (Gayathri Tiffin Room)",
    category: "Food",
    description: "Famous for authentic Masala Dosa with red chutney and Set Dosa since the 1960s. A heritage breakfast spot offering healthy, non-oily food at affordable prices.",
    rating: 4.5,
    distance: "1.1 km from KSIC Silk Factory",
    image: "https://pplx-res.cloudinary.com/image/upload/v1758392400/pplx_project_search_images/4269a56233621c64c276c476438609d2137766b0.png",
    location: "Chamundipuram, Mysuru",
    price: "₹150 for two",
    highlights: ["Masala Dosa", "Set Dosa", "Khara Bath"],
    lat: 12.2898,
    lng: 76.6412
  },
  {
    id: 2,
    name: "Vinayaka Mylari",
    category: "Food",
    description: "Iconic eatery since 1938 serving heavenly butter dosa cooked over wood fire. Only 6 tables, so expect a 30-minute wait on weekends.",
    rating: 4.8,
    distance: "1.2 km from Mysuru Palace",
    image: "https://pplx-res.cloudinary.com/image/upload/v1760811282/pplx_project_search_images/5e826d363b25b1a72bec1d86105a7ef3839e9896.png",
    location: "Nazarbad Main Road, Mysuru",
    price: "₹150 for two",
    highlights: ["Butter Dosa", "Butter Masala Dosa", "Kashi Halwa"],
    lat: 12.3076,
    lng: 76.6489
  },
  {
    id: 3,
    name: "Malgudi Coffee Shop & Bakery",
    category: "Food",
    description: "Historic café in a 1916 palace built by the Maharaja. India's first women-run café serving authentic Mysuru filter coffee.",
    rating: 4.3,
    distance: "2 km from Kukkarahalli Lake",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    location: "Near University of Mysuru Campus",
    price: "₹450 for two",
    highlights: ["Mysuru Filter Coffee", "Lemon Drizzle Cake", "Date & Walnut Cake"],
    lat: 12.3115,
    lng: 76.6269
  },
  {
    id: 4,
    name: "Hotel RRR",
    category: "Food",
    description: "Iconic restaurant best known for biryani, fish fry, and mutton served on banana leaf in traditional South Indian style.",
    rating: 4.6,
    distance: "City Center",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    location: "VV Mohalla, Mysuru",
    price: "₹500 for two",
    highlights: ["Biryani", "Fish Fry", "Mutton Dishes"],
    lat: 12.3017,
    lng: 76.6419
  },
  {
    id: 5,
    name: "Roy's Cafe",
    category: "Food",
    description: "Charming café in an old house transformed into a community space. Features live music, workshops, and relaxed vibes with lots of greenery.",
    rating: 4.4,
    distance: "Gokulam",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    location: "Gokulam, Mysuru",
    price: "₹700 for two",
    highlights: ["Live Music", "Art Workshops", "Relaxed Atmosphere"],
    lat: 12.2825,
    lng: 76.6102
  },
  {
    id: 6,
    name: "Mysuru Palace (Amba Vilas)",
    category: "Culture",
    description: "Magnificent Indo-Saracenic palace built between 1897-1912. Features ornate Durbar Hall, jewel-encrusted golden throne, and 97,000 lights illumination on Sundays.",
    rating: 5.0,
    distance: "City Center",
    image: "https://pplx-res.cloudinary.com/image/upload/v1761834085/pplx_project_search_images/9ede9243fe87dfb9f7f1f584157768660bf3dfc1.png",
    location: "Sayyaji Rao Road, Mysuru",
    price: "₹120 entry",
    highlights: ["Golden Throne", "Durbar Hall", "Sunday Illumination"],
    lat: 12.3051,
    lng: 76.6551
  },
  {
    id: 7,
    name: "Jaganmohan Palace",
    category: "Culture",
    description: "Oldest palace in Mysuru, now houses an Art Gallery with a brilliant collection of 6,500 artifacts and traditional paintings.",
    rating: 4.4,
    distance: "Near Mysuru Palace",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    location: "Mysuru City Center",
    price: "₹20 entry",
    highlights: ["Art Gallery", "Traditional Paintings", "Historical Artifacts"],
    lat: 12.3064,
    lng: 76.6532
  },
  {
    id: 8,
    name: "Folklore Museum",
    category: "Culture",
    description: "Brilliant repository of folk culture housed in Jayalakshmi Vilas Mansion. Features 6,500 indigenously-made artifacts from Karnataka.",
    rating: 4.3,
    distance: "University Campus",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80",
    location: "University of Mysuru",
    price: "₹30 entry",
    highlights: ["Wooden Figurines", "Rural Costumes", "Decorative Masks"],
    lat: 12.3145,
    lng: 76.6321
  },
  {
    id: 9,
    name: "Chamundi Hill Temple",
    category: "Historical",
    description: "Sacred temple atop Chamundi Hill with panoramic city views. Features the giant Nandi statue and ancient Mahishasura statue.",
    rating: 4.7,
    distance: "13 km from City Center",
    image: "https://pplx-res.cloudinary.com/image/upload/v1761834085/pplx_project_search_images/bfecdffa2ce629f44a4789803da4213224f1a09a.png",
    location: "Chamundi Hills, Mysuru",
    price: "Free entry",
    highlights: ["Nandi Statue", "City Views", "Ancient Temple"],
    lat: 12.2746,
    lng: 76.6729
  },
  {
    id: 10,
    name: "St. Philomena's Cathedral",
    category: "Historical",
    description: "One of the largest churches in India, built in Neo-Gothic style with stunning stained glass windows and twin spires.",
    rating: 4.6,
    distance: "2 km from Palace",
    image: "https://pplx-res.cloudinary.com/image/upload/v1755759094/pplx_project_search_images/a3a9e3015ef9fca927ec4f92fecd0687ec2cf02e.png",
    location: "Ashoka Road, Mysuru",
    price: "Free entry",
    highlights: ["Neo-Gothic Architecture", "Stained Glass", "Twin Spires"],
    lat: 12.3093,
    lng: 76.6393
  },
  {
    id: 11,
    name: "Tipu Sultan's Summer Palace",
    category: "Historical",
    description: "Historical palace showcasing the architectural brilliance of Tipu Sultan's era with beautiful gardens and intricate carvings.",
    rating: 4.2,
    distance: "25 km from Mysuru",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800",
    location: "Srirangapatna",
    price: "₹15 entry",
    highlights: ["Historical Architecture", "Beautiful Gardens", "Tipu Sultan Heritage"],
    lat: 12.4216,
    lng: 76.6947
  },
  {
    id: 12,
    name: "Brindavan Gardens",
    category: "Nature",
    description: "Sprawling 60-acre garden adjacent to KRS Dam with terraced lawns, musical fountains, and colorful flower beds. Evening light show is mesmerizing.",
    rating: 4.5,
    distance: "24 km from City",
    image: "https://pplx-res.cloudinary.com/image/upload/v1755057812/pplx_project_search_images/c84521637e25f8e8eaf08fbb16039cb14c73069c.png",
    location: "Near KRS Dam, Mysuru",
    price: "₹50 entry",
    highlights: ["Musical Fountain", "Light Show", "Terraced Gardens"],
    lat: 12.4244,
    lng: 76.5719
  },
  {
    id: 13,
    name: "Karanji Lake",
    category: "Nature",
    description: "Serene lake with aviary, butterfly park, and walking trails. Perfect for nature lovers and bird watching enthusiasts.",
    rating: 4.4,
    distance: "3 km from Palace",
    image: "https://pplx-res.cloudinary.com/image/upload/v1761726740/pplx_project_search_images/297ab9c771dc38e11b41b83cb5f1b0f7350ff15c.png",
    location: "Mysuru City",
    price: "₹10 entry",
    highlights: ["Bird Watching", "Butterfly Park", "Nature Walks"],
    lat: 12.2886,
    lng: 76.6631
  },
  {
    id: 14,
    name: "Kukkarahalli Lake",
    category: "Nature",
    description: "Popular walking track around a beautiful lake. A favorite spot for morning walks and peaceful evening strolls.",
    rating: 4.3,
    distance: "Near University",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
    location: "Saraswatipuram, Mysuru",
    price: "Free entry",
    highlights: ["Walking Track", "Peaceful Atmosphere", "Scenic Views"],
    lat: 12.3089,
    lng: 76.6289
  },
  {
    id: 15,
    name: "Mysuru Zoo",
    category: "Nature",
    description: "One of India's oldest zoos established in 1892. Home to diverse wildlife including rare species and well-maintained habitats.",
    rating: 4.5,
    distance: "2 km from Palace",
    image: "https://pplx-res.cloudinary.com/image/upload/v1761834104/pplx_project_search_images/ee6e1d98decb4fe69035d2e6d631aef4b67b6746.png",
    location: "Indira Nagar, Mysuru",
    price: "₹130 entry (weekday)",
    highlights: ["Diverse Wildlife", "Historic Zoo", "Family Friendly"],
    lat: 12.3016,
    lng: 76.6696
  },
  {
    id: 16,
    name: "Devaraja Market",
    category: "Shopping",
    description: "Vibrant 130-year-old market filled with flowers, spices, sandalwood, silk, and local produce. A sensory delight with antique architecture.",
    rating: 4.6,
    distance: "Near Palace",
    image: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80",
    location: "City Center, Mysuru",
    price: "Free entry",
    highlights: ["Spices", "Flowers", "Sandalwood", "Silk Products"],
    lat: 12.3055,
    lng: 76.6547
  },
  {
    id: 17,
    name: "Mysuru Silk Factory",
    category: "Shopping",
    description: "Government-run silk factory where you can witness silk weaving and purchase authentic Mysuru silk sarees and products.",
    rating: 4.4,
    distance: "5 km from City",
    image: "https://pplx-res.cloudinary.com/image/upload/v1755067213/pplx_project_search_images/30cf4caf3726fa05ae14cfd61024d5f4c542deba.png",
    location: "Mananthody Road, Mysuru",
    price: "Free tour",
    highlights: ["Silk Weaving", "Authentic Sarees", "Factory Tour"],
    lat: 12.2876,
    lng: 76.6298
  },
  {
    id: 18,
    name: "Cauvery Arts & Crafts",
    category: "Shopping",
    description: "Government emporium featuring authentic sandalwood products, rosewood items, and traditional Mysuru crafts.",
    rating: 4.3,
    distance: "City Center",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    location: "Sayyaji Rao Road, Mysuru",
    price: "Free entry",
    highlights: ["Sandalwood Products", "Handicrafts", "Traditional Art"],
    lat: 12.3042,
    lng: 76.6538
  }
];

// State Management (Using in-memory storage instead of localStorage)
let favorites = [];
let reviews = [];
let currentCategory = 'all';
let currentRatingFilter = 'all';
let searchQuery = '';
let selectedReviewRating = 0;

// Initialize App
function initApp() {
  // Show splash screen for 5 seconds
  setTimeout(() => {
    hideSplashScreen();
  }, 5000);
  
  // Populate attraction select in review form
  populateAttractionSelect();
  
  // Render initial attractions
  renderAttractions();
}

// Splash Screen
function skipSplash() {
  hideSplashScreen();
}

function hideSplashScreen() {
  const splash = document.getElementById('splash-screen');
  const nav = document.getElementById('main-nav');
  const main = document.getElementById('main-content');
  
  splash.classList.add('hidden');
  nav.classList.remove('hidden');
  main.classList.remove('hidden');
}

// Navigation
function navigateTo(section) {
  // Hide all sections
  document.querySelectorAll('.category-section, .favorites-section, .reviews-section').forEach(sec => {
    sec.classList.add('hidden');
  });
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Show selected section
  if (section === 'home') {
    document.getElementById('attractions').classList.remove('hidden');
    document.querySelector('a[href="#home"]').classList.add('active');
    document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth' });
  } else if (section === 'attractions') {
    document.getElementById('attractions').classList.remove('hidden');
    document.querySelector('a[href="#attractions"]').classList.add('active');
    document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
  } else if (section === 'favorites') {
    document.getElementById('favorites').classList.remove('hidden');
    document.querySelector('a[href="#favorites"]').classList.add('active');
    renderFavorites();
    document.getElementById('favorites').scrollIntoView({ behavior: 'smooth' });
  } else if (section === 'reviews') {
    document.getElementById('reviews').classList.remove('hidden');
    document.querySelector('a[href="#reviews"]').classList.add('active');
    renderReviews();
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Close mobile menu if open
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('active');
}

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

// Search Functionality with Autocomplete
let searchTimeout;

function handleSearch() {
  const input = document.getElementById('search-input');
  searchQuery = input.value.toLowerCase().trim();
  
  // Debounce search for performance
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    if (searchQuery.length > 0) {
      showAutocomplete();
    } else {
      hideAutocomplete();
    }
    renderAttractions();
  }, 150);
}

function handleSearchFocus() {
  const input = document.getElementById('search-input');
  if (input.value.trim().length > 0) {
    showAutocomplete();
  }
}

function handleSearchClick() {
  const input = document.getElementById('search-input');
  if (input.value.trim().length > 0) {
    showAutocomplete();
  }
}

function showAutocomplete() {
  const dropdown = document.getElementById('autocomplete-dropdown');
  const query = searchQuery;
  
  if (!query) {
    hideAutocomplete();
    return;
  }
  
  // Filter attractions by name, category, and highlights
  const matches = attractions.filter(attraction => {
    const nameMatch = attraction.name.toLowerCase().includes(query);
    const categoryMatch = attraction.category.toLowerCase().includes(query);
    const highlightsMatch = attraction.highlights.some(h => h.toLowerCase().includes(query));
    const descriptionMatch = attraction.description.toLowerCase().includes(query);
    
    return nameMatch || categoryMatch || highlightsMatch || descriptionMatch;
  }).slice(0, 8); // Show top 8 results
  
  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="autocomplete-empty">
        <div class="autocomplete-empty-icon">🔍</div>
        <p>No attractions found for "${document.getElementById('search-input').value}"</p>
      </div>
    `;
    dropdown.classList.remove('hidden');
    return;
  }
  
  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      'Food': '🍽️',
      'Culture': '🎭',
      'Nature': '🌳',
      'Shopping': '🛍️',
      'Historical': '🏛️'
    };
    return icons[category] || '📍';
  };
  
  // Highlight matching text
  const highlightText = (text, query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };
  
  const stars = (rating) => '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
  
  dropdown.innerHTML = matches.map(attraction => `
    <div class="autocomplete-item" onclick="selectAttraction(${attraction.id})">
      <span class="autocomplete-icon">${getCategoryIcon(attraction.category)}</span>
      <div class="autocomplete-details">
        <div class="autocomplete-name">${highlightText(attraction.name, query)}</div>
        <div class="autocomplete-category">${attraction.category} • ${attraction.distance}</div>
      </div>
      <span class="autocomplete-rating">${stars(attraction.rating)} ${attraction.rating}</span>
    </div>
  `).join('');
  
  dropdown.classList.remove('hidden');
}

function hideAutocomplete() {
  const dropdown = document.getElementById('autocomplete-dropdown');
  dropdown.classList.add('hidden');
}

function selectAttraction(id) {
  hideAutocomplete();
  
  // Clear search input
  document.getElementById('search-input').value = '';
  searchQuery = '';
  
  // Scroll to attractions section
  document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
  
  // Wait for scroll, then open modal
  setTimeout(() => {
    viewDetails(id);
  }, 500);
}

// Close autocomplete when clicking outside
document.addEventListener('click', function(event) {
  const searchContainer = document.querySelector('.search-container');
  const dropdown = document.getElementById('autocomplete-dropdown');
  
  if (searchContainer && !searchContainer.contains(event.target)) {
    hideAutocomplete();
  }
});

// Handle keyboard navigation in autocomplete
document.addEventListener('keydown', function(event) {
  const dropdown = document.getElementById('autocomplete-dropdown');
  if (dropdown && !dropdown.classList.contains('hidden')) {
    if (event.key === 'Escape') {
      hideAutocomplete();
      document.getElementById('search-input').blur();
    }
  }
});

// Filter by Category
function filterByCategory(category) {
  currentCategory = category;
  
  // Update active tab
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.closest('.category-tab').classList.add('active');
  
  renderAttractions();
}

// Apply Filters
function applyFilters() {
  currentRatingFilter = document.getElementById('rating-filter').value;
  renderAttractions();
}

function clearFilters() {
  currentCategory = 'all';
  currentRatingFilter = 'all';
  searchQuery = '';
  
  document.getElementById('search-input').value = '';
  document.getElementById('rating-filter').value = 'all';
  
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector('[data-category="all"]').classList.add('active');
  
  renderAttractions();
}

// Render Attractions
function renderAttractions() {
  const grid = document.getElementById('attractions-grid');
  const noResults = document.getElementById('no-results');
  
  // Filter attractions
  let filtered = attractions.filter(attraction => {
    // Category filter
    if (currentCategory !== 'all' && attraction.category !== currentCategory) {
      return false;
    }
    
    // Rating filter
    if (currentRatingFilter !== 'all') {
      const minRating = parseInt(currentRatingFilter);
      if (attraction.rating < minRating) {
        return false;
      }
    }
    
    // Search filter
    if (searchQuery && !attraction.name.toLowerCase().includes(searchQuery) && 
        !attraction.description.toLowerCase().includes(searchQuery)) {
      return false;
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  grid.innerHTML = filtered.map(attraction => createAttractionCard(attraction)).join('');
}

// Create Attraction Card
function createAttractionCard(attraction) {
  const isFavorite = favorites.some(fav => fav.id === attraction.id);
  const stars = '★'.repeat(Math.floor(attraction.rating)) + (attraction.rating % 1 >= 0.5 ? '½' : '');
  
  return `
    <div class="attraction-card">
      <div class="card-image-container">
        <img src="${attraction.image}" alt="${attraction.name}" class="card-image">
        <span class="card-category">${attraction.category}</span>
        <button class="card-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${attraction.id})">
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <h3 class="card-title">${attraction.name}</h3>
        <div class="card-rating">
          <span class="stars">${stars}</span>
          <span class="rating-value">${attraction.rating}</span>
        </div>
        <div class="card-distance">📍 ${attraction.distance}</div>
        <p class="card-description">${attraction.description}</p>
        <div class="card-footer">
          <span class="card-price">${attraction.price}</span>
          <button class="btn btn-primary" onclick="viewDetails(${attraction.id})">
            View Details
          </button>
        </div>
      </div>
    </div>
  `;
}

// Toggle Favorite
function toggleFavorite(id) {
  const attraction = attractions.find(a => a.id === id);
  const index = favorites.findIndex(fav => fav.id === id);
  
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Removed from favorites');
  } else {
    favorites.push(attraction);
    showToast('Added to favorites ❤️');
  }
  
  updateFavoritesCount();
  renderAttractions();
  
  // If we're on favorites page, re-render
  if (!document.getElementById('favorites').classList.contains('hidden')) {
    renderFavorites();
  }
}

// Update Favorites Count
function updateFavoritesCount() {
  document.getElementById('favorites-count').textContent = favorites.length;
}

// Render Favorites
function renderFavorites() {
  const grid = document.getElementById('favorites-grid');
  const empty = document.getElementById('empty-favorites');
  
  if (favorites.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  
  empty.classList.add('hidden');
  grid.innerHTML = favorites.map(attraction => createAttractionCard(attraction)).join('');
}

// View Details Modal
function viewDetails(id) {
  const attraction = attractions.find(a => a.id === id);
  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  const isFavorite = favorites.some(fav => fav.id === attraction.id);
  
  const stars = '★'.repeat(Math.floor(attraction.rating)) + (attraction.rating % 1 >= 0.5 ? '½' : '');
  
  modalBody.innerHTML = `
    <img src="${attraction.image}" alt="${attraction.name}" class="modal-image">
    <div class="modal-body-content">
      <h2 class="modal-title">${attraction.name}</h2>
      <div class="modal-meta">
        <div class="meta-item">
          <span class="meta-label">Category</span>
          <span class="meta-value">${attraction.category}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Rating</span>
          <span class="meta-value">
            <span class="stars" style="color: #DAA520;">${stars}</span> ${attraction.rating}
          </span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Location</span>
          <span class="meta-value">${attraction.location}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Distance</span>
          <span class="meta-value">${attraction.distance}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Price</span>
          <span class="meta-value">${attraction.price}</span>
        </div>
      </div>
      <p class="modal-description">${attraction.description}</p>
      <div class="modal-highlights">
        <h3>Highlights</h3>
        <div class="highlights-list">
          ${attraction.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
      <div class="modal-map">
        <iframe 
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${attraction.lat},${attraction.lng}&zoom=15&maptype=roadmap"
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"
          title="${attraction.name} Location">
        </iframe>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="toggleFavorite(${attraction.id}); viewDetails(${attraction.id});">
          ${isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>
        <button class="btn btn-secondary" onclick="writeReview(${attraction.id})">
          ✍️ Write a Review
        </button>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('detail-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Write Review from Modal
function writeReview(attractionId) {
  // Close modal
  closeModal();
  
  // Navigate to reviews section
  navigateTo('reviews');
  
  // Pre-populate attraction in form
  setTimeout(() => {
    const attractionSelect = document.getElementById('attraction-select');
    attractionSelect.value = attractionId;
    
    // Focus on the form
    document.getElementById('reviewer-name').focus();
    
    // Smooth scroll to form
    document.querySelector('.review-form-card').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }, 300);
}

// Reviews
function populateAttractionSelect() {
  const select = document.getElementById('attraction-select');
  select.innerHTML = '<option value="">Select an attraction</option>' + 
    attractions.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
}

function setRating(rating) {
  selectedReviewRating = rating;
  document.querySelectorAll('.star').forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function submitReview(event) {
  event.preventDefault();
  
  const name = document.getElementById('reviewer-name').value;
  const attractionId = parseInt(document.getElementById('attraction-select').value);
  const comment = document.getElementById('review-comment').value;
  
  if (!selectedReviewRating) {
    showToast('Please select a rating');
    return;
  }
  
  const attraction = attractions.find(a => a.id === attractionId);
  
  const review = {
    id: Date.now(),
    name,
    attractionId,
    attractionName: attraction.name,
    rating: selectedReviewRating,
    comment,
    date: new Date().toLocaleDateString()
  };
  
  reviews.unshift(review);
  
  // Reset form
  document.getElementById('review-form').reset();
  selectedReviewRating = 0;
  document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
  
  showToast('Review submitted successfully! 🎉');
  renderReviews();
}

function renderReviews() {
  const reviewsList = document.getElementById('reviews-list');
  const noReviews = document.getElementById('no-reviews');
  
  if (reviews.length === 0) {
    noReviews.classList.remove('hidden');
    reviewsList.innerHTML = '';
    return;
  }
  
  noReviews.classList.add('hidden');
  reviewsList.innerHTML = reviews.map(review => {
    const stars = '★'.repeat(review.rating);
    return `
      <div class="review-item">
        <div class="review-header">
          <span class="reviewer-name">${review.name}</span>
          <span class="review-stars" style="color: #DAA520;">${stars}</span>
        </div>
        <div class="review-attraction">📍 ${review.attractionName}</div>
        <p class="review-comment">${review.comment}</p>
      </div>
    `;
  }).join('');
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initApp);