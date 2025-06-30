document.addEventListener("DOMContentLoaded", () => {
  // About Section
  const aboutText = `I am a Fintech Product Engineer with a strong foundation in Java development, specializing in technologies like Spring Boot, Angular, Hibernate, and Oracle SQL. I’m passionate about building robust, scalable applications that enhance user experience and drive innovation in the financial sector.<br><br>I thrive in collaborative environments and enjoy working closely with cross-functional teams to deliver high-quality, impactful software solutions. With a deep interest in emerging fintech trends, I’m always eager to learn, innovate, and contribute to the future of financial technology.`;

  document.getElementById("about-text").innerHTML = aboutText;

  // Skills Section - Single Card
  const skills = {
    "Languages": ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    "Web Technologies": ["JSP", "Servlet"],
    "Frameworks & Libraries": ["Spring Boot", "Hibernate", "Angular", "Node.js", "Express.js"],
    "Databases": ["MySQL", "Oracle", "MongoDB"],
    "Tools & Platforms": ["Git", "Postman", "Eclipse", "VS Code"],
    "Others": ["REST APIs", "JSON", "MVC Architecture", "Agile Methodology"]
  };

  const skillsCard = document.getElementById("skills-card");
  let skillsHTML = "";

  for (const category in skills) {
    skillsHTML += `<h3>${category}</h3><ul>`;
    skills[category].forEach(skill => {
      skillsHTML += `<li>${skill}</li>`;
    });
    skillsHTML += `</ul><br>`;
  }

  skillsCard.innerHTML = skillsHTML;

  // Experience Section
  const experienceData = [
    {
      title: "Intellect Design Arena Ltd",
      duration: "Aug 2024 - Present | Product Engineer",
      description: "I work on the Supply Chain Finance (SCF) product, where I’m responsible for resolving production issues, implementing change requests (CRs), and maintaining application stability across all environments. <br/><br/>I focus on delivering robust, maintainable code that ensures seamless operations and enhances overall product performance. I also actively contribute to real-time issue resolution and technical improvements, helping the SCF product run efficiently in critical banking workflows."
    },
    {
      title: "7-teri",
      duration: "July 2023 - Present | Founder/Developer",
      description: "7-Teri is my independent tech venture where I offer tailored digital solutions to individuals and small businesses. Through 7-Teri, I provide services such as responsive website development and desktop application development using Java Swing. <br/><br/>This side project reflects my passion for technology and solving real-world problems with clean and effective software."
    }
  ];

  const experienceContainer = document.getElementById("experience-container");
  experienceData.forEach(exp => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${exp.title}</h3>
      <p><strong>Duration:</strong> ${exp.duration}</p>
      <p>${exp.description}</p>
    `;
    experienceContainer.appendChild(card);
  });

  // Services Section
  const servicesData = [
    {
      title: "7-teri - Website Development",
      description: "Professional websites for startups and small businesses — simple, fast, and affordable",
      link: ""
    },
    {
      title: "Coding Classes",
      description: "Personalized coding lessons in Java, Web Development, and more.",
      link: "https://forms.gle/o74md94juFBqQnXL6"
    }
  ];

  const servicesContainer = document.getElementById("services-container");
  servicesData.forEach(service => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <a href="${service.link}" class="service-btn">Click Here</a>
    `;
    servicesContainer.appendChild(card);
  });
});
