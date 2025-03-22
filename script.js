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
        id: 1,
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
  