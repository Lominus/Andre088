// Subscrbe YouTube Tamzidan Mahdiyin

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Animasi Menulis

const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

 <script>

            // Inisialisasi library AOS
            AOS.init({ offset: 0 });

            // Fungsi untuk menampilkan menu hamburger
            function hamburg() {
                const navbar = document.querySelector(".dropdown")
                navbar.style.transform = "translateY(0px)"
            }

            // Fungsi untuk menyembunyikan menu hamburger
            function cancel() {
                const navbar = document.querySelector(".dropdown")
                navbar.style.transform = "translateY(-500px)"
            }

            // Fungsi untuk menampilkan daftar Project
            function showProjects() {
                const aboutContent = document.getElementById('aboutContent');
                aboutContent.innerHTML = `
                <a href="about.html" class="back-button" onclick="restoreInitialContent()">
                    <i class="fas fa-arrow-left"></i> Back
                </a>
                <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <h1>My Projects</h1>
                </div>
                <div class="content-grid">
                    ${generateProjectCards()}
                </div>
            `;
                AOS.refresh();
            }

            // Fungsi untuk menampilkan daftar Experience
            function showExperience() {
                const aboutContent = document.getElementById('aboutContent');
                aboutContent.innerHTML = `
                <a href="about.html" class="back-button" onclick="restoreInitialContent()">
                    <i class="fas fa-arrow-left"></i> Back
                </a>
                <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <h1>My Experience</h1>
                </div>
                <div class="content-grid">
                    ${generateExperienceCards()}
                </div>
            `;
                AOS.refresh();
            }

            // Fungsi untuk menampilkan daftar Clients
            function showClients() {
                const aboutContent = document.getElementById('aboutContent');
                aboutContent.innerHTML = `
                <a href="about.html" class="back-button" onclick="restoreInitialContent()">
                    <i class="fas fa-arrow-left"></i> Back
                </a>
                <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <h1>Client Success Stories</h1>
                </div>
                <div class="content-grid">
                    ${generateClientCards()}
                </div>
            `;
                AOS.refresh();
            }

            // Fungsi untuk menampilkan daftar Awards
            function showAwards() {
                const aboutContent = document.getElementById('aboutContent');
                aboutContent.innerHTML = `
                <a href="about.html" class="back-button" onclick="restoreInitialContent()">
                    <i class="fas fa-arrow-left"></i> Back
                </a>
                <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <h1>Awards & Recognition</h1>
                </div>
                <div class="content-grid">
                    ${generateAwardCards()}
                </div>
            `;
                AOS.refresh();
            }

            // Fungsi pembantu untuk menghasilkan kartu project
            function generateProjectCards() {
                const projects = [
                    {
                        title: "E-Commerce Platform",
                        image: "img/zoro.jpg",
                        description: "A full-stack e-commerce solution with payment integration",
                        technologies: ["React", "Node.js", "MongoDB"]
                    },
                    {
                        title: "Portfolio Website",
                        image: "img/zoro.jpg",
                        description: "Responsive portfolio website with modern animations",
                        technologies: ["HTML", "CSS", "JavaScript"]
                    },
                    {
                        title: "Task Management App",
                        image: "img/zoro.jpg",
                        description: "Mobile-first task management application",
                        technologies: ["Vue.js", "Firebase"]
                    }
                    // Add more projects as needed
                ];

                return projects.map(project => `
                <div class="content-card" data-aos="fade-up">
                    <div class="card-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="card-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="technologies">
                            ${project.technologies.map(tech => `
                                <span class="technology-tag">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
            }

            // Fungsi pembantu untuk menghasilkan kartu experience
            function generateExperienceCards() {
                const experiences = [
                    {
                        title: "Senior Web Developer",
                        company: "Tech Solutions Inc.",
                        period: "2021 - Present",
                        description: "Leading frontend development team and implementing modern web solutions"
                    },
                    {
                        title: "Frontend Developer",
                        company: "Digital Agency",
                        period: "2019 - 2021",
                        description: "Developed responsive websites and web applications"
                    }
                    // Add more experiences as needed
                ];

                return experiences.map(exp => `
                <div class="content-card" data-aos="fade-up">
                    <div class="card-info">
                        <h3>${exp.title}</h3>
                        <h4>${exp.company}</h4>
                        <p class="period">${exp.period}</p>
                        <p>${exp.description}</p>
                    </div>
                </div>
            `).join('');
            }

            // Fungsi pembantu untuk menghasilkan kartu client
            function generateClientCards() {
                const clients = [
                    {
                        name: "Ell Udin",
                        company: "Innovation Corp",
                        image: "img/zoro.jpg",
                        testimonial: "Outstanding work on our company website redesign!"
                    },
                    {
                        name: "Ell Ucup",
                        company: "Tech Startup",
                        image: "img/zoro.jpg",
                        testimonial: "Delivered our app ahead of schedule with excellent quality"
                    }
                    // Add more clients as needed
                ];

                return clients.map(client => `
                <div class="content-card" data-aos="fade-up">
                    <div class="card-image">
                        <img src="${client.image}" alt="${client.name}">
                    </div>
                    <div class="card-info">
                        <h3>${client.name}</h3>
                        <h4>${client.company}</h4>
                        <p class="client-testimonial">"${client.testimonial}"</p>
                    </div>
                </div>
            `).join('');
            }

            // Fungsi pembantu untuk menghasilkan kartu award
            function generateAwardCards() {
                const awards = [
                    {
                        title: "Best Web Design",
                        organization: "Design Awards 2023",
                        description: "Recognition for exceptional web design and user experience"
                    },
                    {
                        title: "Innovation Award",
                        organization: "Tech Summit 2022",
                        description: "Awarded for innovative use of emerging technologies"
                    }
                    // Add more awards as needed
                ];

                return awards.map(award => `
                <div class="content-card" data-aos="fade-up">
                    <div class="card-info">
                        <div class="award-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <h3>${award.title}</h3>
                        <h4>${award.organization}</h4>
                        <p>${award.description}</p>
                    </div>
                </div>
            `).join('');
            }

            // Fungsi untuk mengembalikan konten awal
            function restoreInitialContent() {
                const aboutContent = document.getElementById('aboutContent');
                aboutContent.innerHTML = `
                <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <h1>About Me</h1>
                </div>
                <div class="about-grid">
                    <div class="about-image" data-aos="fade-right" data-aos-duration="1500">
                        <img src="img/zoro.jpg" alt="About Image">
                    </div>
                    <div class="about-text" data-aos="fade-left" data-aos-duration="1500">
                        <h2>Who Am I?</h2>
                        <p>I'm a passionate developer and designer with a keen eye for detail and a drive for creating
                            innovative digital solutions. With expertise in web development, UI/UX design, and content
                            creation, I bring ideas to life through code and creativity.</p>
                        <p>My journey in technology began with a simple curiosity and has evolved into a professional
                            pursuit of excellence in digital craftsmanship.</p>

                        <div class="stats">
                            <div class="stat-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" onclick="showProjects()">
                                <h3>50+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div class="stat-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" onclick="showExperience()">
                                <h3>3+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div class="stat-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600" onclick="showClients()">
                                <h3>20+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div class="stat-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800" onclick="showAwards()">
                                <h3>15+</h3>
                                <p>Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
                AOS.refresh();
            }

        </script>

// Subscrbe YouTube Tamzidan Mahdiyin
