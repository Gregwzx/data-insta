document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initializeAnimations();
  
  // Add interactive effects
  addInteractiveEffects();
  
  // Handle responsive behavior
  handleResponsive();
});

function initializeAnimations() {
  const elements = document.querySelectorAll('[class*="animate-"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

function addInteractiveEffects() {
  const featureCard = document.querySelector('.feature-card');
  const creditsLink = document.querySelector('.credits-link');
  const instagramInput = document.querySelector('.instagram-input');
  
  // Instagram input effects
  if (instagramInput) {
    instagramInput.addEventListener('input', function(e) {
      let value = e.target.value;
      
      // Auto-add @ if not present
      if (value && !value.startsWith('@')) {
        value = '@' + value;
        e.target.value = value;
      }
      
      // Remove invalid characters
      e.target.value = value.replace(/[^@a-zA-Z0-9._]/g, '');
    });
    
    instagramInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const username = this.value;
        if (username && username.length > 1) {
          console.log('Analyzing Instagram account:', username);
          // Here you would typically call your analysis function
          analyzeInstagramAccount(username);
        }
      }
    });
  }
  
  // Feature card hover effect
  if (featureCard) {
    featureCard.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
      this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
    });
    
    featureCard.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    });
    
    featureCard.addEventListener('click', function() {
      const username = document.querySelector('.instagram-input').value;
      if (username && username.length > 1) {
        analyzeInstagramAccount(username);
      } else {
        // Focus on input if empty
        document.querySelector('.instagram-input').focus();
      }
    });
  }
  
  // Credits link interaction
  if (creditsLink) {
    creditsLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1.05)';
      }, 100);
      
      // You can add navigation logic here
      console.log('Credits link clicked');
    });
  }
}

function handleResponsive() {
  function adjustLayout() {
    const container = document.querySelector('.main-container');
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    if (viewport.width < 1920) {
      container.style.transform = `scale(${viewport.width / 1920})`;
      container.style.transformOrigin = 'top center';
    } else {
      container.style.transform = 'none';
    }
  }
  
  window.addEventListener('resize', adjustLayout);
  adjustLayout(); // Initial call
}

// Utility functions
function createParticleEffect() {
  // Future enhancement: Add particle background effect
  console.log('Particle effect placeholder');
}

function handleKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
}

// Initialize keyboard navigation
handleKeyboardNavigation();

// Instagram analysis function
function analyzeInstagramAccount(username) {
  console.log(`Starting analysis for ${username}`);
  
  // Add loading state to the button
  const featureCard = document.querySelector('.feature-card');
  const featureText = document.querySelector('.feature-text');
  
  if (featureCard && featureText) {
    const originalText = featureText.textContent;
    featureText.textContent = 'Analisando...';
    featureCard.style.opacity = '0.7';
    
    // Simulate analysis (replace with actual API call)
    setTimeout(() => {
      featureText.textContent = originalText;
      featureCard.style.opacity = '1';
      
      // Here you would show results or navigate to results page
      alert(`Análise concluída para ${username}!`);
    }, 2000);
  }
}
