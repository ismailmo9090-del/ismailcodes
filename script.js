// Theme functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Check for saved theme preference or use system preference
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
  }
}

// Toggle theme function
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Loading animation
function initLoadingAnimation() {
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Simulate loading time
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    
    // Remove loading screen from DOM after animation
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }, 2500); // 2.5 seconds loading time
}

// Initialize animations for elements
function initAnimations() {
  // Add animation delay to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.setProperty('--animation-order', index);
  });
  
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = '0.2s';
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);
  
  // Observe all animate-able elements
  document.querySelectorAll('.section-title, .project-card, .about-content, .contact-content').forEach(el => {
    observer.observe(el);
  });
}

// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80; // Adjust for navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'var(--surface-color)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'var(--surface-color)';
    navbar.style.backdropFilter = 'none';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize loading animation
  initLoadingAnimation();
  
  // Initialize theme
  initTheme();
  
  // Initialize animations
  initAnimations();
  
  // Add event listeners
  themeToggle.addEventListener('click', toggleTheme);
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Add smooth scrolling to nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
  
  // Initial navbar state
  handleNavbarScroll();
});

// Export functions for global access
window.scrollToSection = scrollToSection;
// Installation guide functionality
function initInstallationGuide() {
  // Add click tracking for download buttons
  const downloadButtons = document.querySelectorAll('.download-btn');
  downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
      // You can add analytics here if needed
      console.log('Download button clicked:', this.href);
    });
  });
}

// Initialize installation guide
document.addEventListener('DOMContentLoaded', function() {
  initInstallationGuide();
});
// Enhanced installation tracking
function trackInstall(appName) {
  // Track installation clicks
  console.log(`Installation started for: ${appName}`);
  
  // You can add analytics here
  // Example: Google Analytics, Facebook Pixel, etc.
  
  // Show installation confirmation
  setTimeout(() => {
    showInstallationToast();
  }, 1000);
}

function showInstallationToast() {
  // Create toast notification
  const toast = document.createElement('div');
  toast.className = 'installation-toast';
  toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">📱</span>
            <div class="toast-text">
                <strong>Installation Started</strong>
                <p>Please complete the installation in the package installer</p>
            </div>
        </div>
    `;
  
  document.body.appendChild(toast);
  
  // Remove toast after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Initialize enhanced installation features
function initEnhancedInstallation() {
  // Add loading state to install buttons
  const installButtons = document.querySelectorAll('.install-btn');
  installButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Add loading animation
      this.classList.add('loading');
      setTimeout(() => {
        this.classList.remove('loading');
      }, 2000);
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initEnhancedInstallation();
});