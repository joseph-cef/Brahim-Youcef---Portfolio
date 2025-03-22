const projects = [
  {
    id: 1,
    title: "CefEncrypt - Text Encryption Tool",
    shortDescription: "A lightweight web app for text encryption and decryption with a custom key.",
    detailedDescription: `
      <p>CefEncrypt is a modern web-based encryption platform allowing users to securely encrypt and decrypt text data directly in their browser. Built with HTML, CSS, and JavaScript, CefEncrypt offers a cyberpunk-inspired interface with a matrix rain background and smooth animations.</p>
      
      <strong>Key Features:</strong>
      <ul>
        <li>Custom Key Encryption/Decryption (XOR algorithm)</li>
        <li>Real-time typing animation with skip option</li>
        <li>Copy result to clipboard functionality</li>
        <li>Responsive design for desktop and mobile</li>
        <li>Cyberpunk Matrix rain effect background</li>
      </ul>

      <strong>Technologies Used:</strong>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Vanilla JavaScript</li>
      </ul>
    `,
    image: "img/projectimg/project01.png",
    demo: "https://joseph-cef.github.io/josEncrypt/",
    github: "https://github.com/joseph-cef/josEncrypt"
  },

  {
      id: 2,
      title: "HadEncrypt - Text Encryption Tool",
      shortDescription: "A lightweight web app for text encryption and decryption with a custom key.",
      detailedDescription: `
        <p>Encrypt is a modern web-based encryption platform allowing users to securely encrypt and decrypt text data directly in their browser. Built with HTML, CSS, and JavaScript, HadEncrypt offers a cyberpunk-inspired interface with a matrix rain background and smooth animations.</p>
        
        <strong>Key Features:</strong>
        <ul>
          <li>Custom Key Encryption/Decryption (XOR algorithm)</li>
          <li>Real-time typing animation with skip option</li>
          <li>Copy result to clipboard functionality</li>
          <li>Responsive design for desktop and mobile</li>
          <li>Cyberpunk Matrix rain effect background</li>
        </ul>
  
        <strong>Technologies Used:</strong>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Vanilla JavaScript</li>
        </ul>
      `,
      image: "img/projectimg/project02.png",
      demo: "https://joseph-cef.github.io/HadEncrypt/",
      github: "https://github.com/joseph-cef/HadEncrypt"
    },
    
  {
    id: 3,
    title: "Luxury Scents",
    shortDescription: "Luxury Scents - Login & E-commerce UI A responsive web application featuring a user authentication system and an elegant e-commerce interface for displaying men’s and women’s perfumes. Built with HTML, CSS, and JavaScript, using LocalStorage for user management.",
    detailedDescription: `
<p><strong>Luxury Scents</strong> is a modern, web-based e-commerce platform designed to showcase and sell premium <strong>men's and women's perfumes</strong>. It features an intuitive user interface with a clean and elegant design, offering a seamless shopping experience across devices. Built entirely with HTML, CSS, and Vanilla JavaScript, this project integrates a simple yet effective <strong>user authentication system</strong> using LocalStorage, allowing users to register, log in, and securely access the perfume store.</p>

<strong>Key Features:</strong>
<ul>
<li>User Registration and Login with LocalStorage</li>
<li>Dedicated product pages for both men's and women's fragrances</li>
<li>Clean and responsive UI design with smooth transitions and hover effects</li>
<li>Simple navigation and user flow for improved user experience</li>
<li>Fully responsive layout optimized for both desktop and mobile devices</li>
</ul>

<strong>Technologies Used:</strong>
<ul>
<li>HTML5</li>
<li>CSS3 (Flexbox & Grid)</li>
<li>Vanilla JavaScript (LocalStorage for authentication)</li>
</ul>

    `,
    image: "img/projectimg/project03.png",
    demo: "https://joseph-cef.github.io/Luxury-Scents/",
    github: "https://github.com/joseph-cef/Luxury-Scents"
  },
  
  {
    id: 4,
    title: "TechZone - E-Commerce Platform",
    shortDescription: "A simple e-commerce platform for buying and selling laptops and smartphones.",
    detailedDescription: `
      <p>TechZone is a lightweight e-commerce web platform built with HTML, CSS, and JavaScript. It allows users to browse, add products to the cart, and manage orders with a simple and clean interface.</p>
      
      <strong>Key Features:</strong>
      <ul>
        <li>Product categories for laptops and smartphones</li>
        <li>Shopping cart with quantity management</li>
        <li>User authentication with local storage</li>
        <li>Admin panel for product management</li>
        <li>Dark and light mode support</li>
      </ul>
  
      <strong>Technologies Used:</strong>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Vanilla JavaScript</li>
        <li>LocalStorage for data persistence</li>
      </ul>
    `,
    image: "img/projectimg/project04.png",
    demo: "https://joseph-cef.github.io/TechZone---E-Commerce-Platform/",
    github: "https://github.com/joseph-cef/TechZone---E-Commerce-Platform"
  },

    {
      "id": 5,
      "title": "CS - Learning Platform",
      "shortDescription": "CS - An interactive learning platform designed for first-year Computer Science students, offering structured lessons, exercises, and an AI-powered assistant for personalized learning.",
      "detailedDescription": `
    <p><strong>CS</strong> is a dynamic and interactive web-based learning platform built to support <strong>first-year Computer Science students</strong>. The platform provides a structured and engaging educational experience with well-organized lessons, exercises, and resources. It also integrates an <strong>AI-powered assistant</strong> to enhance personalized learning and academic support.</p>
    
    <strong>Key Features:</strong>
    <ul>
    <li>Organized course materials and structured lessons</li>
    <li>Interactive exercises and quizzes to reinforce learning</li>
    <li>AI-powered assistant for academic guidance</li>
    <li>Responsive and user-friendly UI design</li>
    <li>Seamless navigation and enhanced user experience</li>
    <li>Community forum for peer discussions and collaborations</li>
    </ul>
    
    <strong>Technologies Used:</strong>
    <ul>
    <li>HTML5 & CSS3 (Modern UI Design)</li>
    <li>JavaScript (Dynamic Content Handling)</li>
    <li>Firebase (User Authentication & Database)</li>
    <li>AI Integration for Personalized Learning</li>
    </ul>
      `,
      "image": "img/projectimg/project05.png",
      "demo": "https://joseph-cef.github.io/CS-Year-1-LMD-Learning-Platform/",
      "github": "https://github.com/joseph-cef/CS-Year-1-LMD-Learning-Platform"
    }
    
  
 
];

// Inject projects into the index page
const projectContainer = document.getElementById("projects-list");

if (projectContainer) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("currentProject", JSON.stringify(project));
      window.location.href = "project.html";
    });

    projectContainer.appendChild(card);
  });
}
