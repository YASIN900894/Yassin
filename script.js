// script.js

const categories = {
    hackers: [
      { title: "قصة هكر 1", content: "تفاصيل قصة الهكر 1..." },
      { title: "قصة هكر 2", content: "تفاصيل قصة الهكر 2..." }
    ],
    crimes: [
      { title: "قصة جريمة 1", content: "تفاصيل جريمة 1..." },
      { title: "قصة جريمة 2", content: "تفاصيل جريمة 2..." }
    ]
  };
  
  function loadCategory(category) {
    const container = document.getElementById('latest-stories');
    container.innerHTML = '';
    
    categories[category].forEach(story => {
      const storyCard = document.createElement('div');
      storyCard.classList.add('story-card');
      
      const title = document.createElement('h3');
      title.textContent = story.title;
      storyCard.appendChild(title);
      
      const content = document.createElement('p');
      content.textContent = story.content;
      storyCard.appendChild(content);
      
      container.appendChild(storyCard);
    });
  }
  
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      loadCategory(event.target.textContent.toLowerCase());
    });
  });
  