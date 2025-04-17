const posts = [
    {
      title: "5 dicas para uma pele mais saudável",
      content: "Manter uma rotina de cuidados com a pele é essencial. Hidratação, proteção solar e limpeza são fundamentais para um rosto radiante."
    },
    {
      title: "Como cuidar do cabelo naturalmente",
      content: "Evite excesso de calor, invista em óleos naturais e use shampoos sem sulfato. Seu cabelo vai agradecer!"
    },
    {
      title: "Maquiagem leve para o dia a dia",
      content: "Use tons neutros, base leve e destaque sua beleza natural com um bom iluminador."
    }
  ];
  
  window.onload = () => {
    const postSection = document.getElementById('posts');
    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      postSection.appendChild(div);
    });
  
    // Menu responsivo
    const menuToggle = document.getElementById("menuToggle");
    const menuList = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });
  
    // Newsletter fake
    const form = document.getElementById("newsletterForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Obrigado por assinar nossa newsletter!");
      form.reset();
    });
  };
  