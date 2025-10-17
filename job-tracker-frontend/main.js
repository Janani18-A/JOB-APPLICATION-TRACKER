//  // ===== Storage & Utilities =====
//     const STORAGE_KEY = 'jobtrack_profile';
//     const JOBS_STORAGE_KEY = 'jobtrack_jobs';
//     const JOB_LISTINGS_KEY = 'jobtrack_listings';
    
//     let profile = JSON.parse(localStorage.getItem("jobtrack_profile") || '{}');
//     let jobsData = JSON.parse(localStorage.getItem(JOBS_STORAGE_KEY) || '{"applied": [], "saved": []}');
//     let jobListings = [];
//     let filteredJobs = [];
 
// document.addEventListener("DOMContentLoaded", () => {
//   const sidebarName = document.getElementById("sidebarName");
//   const sidebarEmail = document.getElementById("sidebarEmail");
//   const avatar = document.getElementById("avatar");

//   // If profile has data, populate sidebar
//   sidebarName.textContent = profile.name || "John Doe";
//   sidebarEmail.textContent = profile.email || "johndoe@gmail.com";

//   // Optional: set avatar first letter dynamically
//   if (profile.name) {
//     avatar.textContent = profile.name.charAt(0).toUpperCase();
//   } else {
//     avatar.textContent = "J";
//   }
// });
// ===== Storage & Utilities =====
const STORAGE_KEY = 'jobtrack_profile';
const JOBS_STORAGE_KEY = 'jobtrack_jobs';
const JOB_LISTINGS_KEY = 'jobtrack_listings';

// Load profile from localStorage or default
let profile = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let jobsData = JSON.parse(localStorage.getItem(JOBS_STORAGE_KEY) || '{"applied": [], "saved": []}');
let jobListings = [];
let filteredJobs = [];

// Save profile function (updates localStorage and sidebar)
function saveProfile() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));

    // Update sidebar immediately
    const sidebarName = document.getElementById("sidebarName");
    const sidebarEmail = document.getElementById("sidebarEmail");
    const avatar = document.getElementById("avatar");

    sidebarName.textContent = profile.name || "John Doe";
    sidebarEmail.textContent = profile.email || "johndoe@gmail.com";
    avatar.textContent = profile.name ? profile.name.charAt(0).toUpperCase() : "J";

    console.log("✅ Profile saved and UI updated:", profile);
}

// Populate sidebar on page load
document.addEventListener("DOMContentLoaded", () => {
    const sidebarName = document.getElementById("sidebarName");
    const sidebarEmail = document.getElementById("sidebarEmail");
    const avatar = document.getElementById("avatar");

    sidebarName.textContent = profile.name || "John Doe";
    sidebarEmail.textContent = profile.email || "johndoe@gmail.com";
    avatar.textContent = profile.name ? profile.name.charAt(0).toUpperCase() : "J";
});

// Example: Update profile and save permanently
// You can run this in your console or call from a form:
profile.name = "John Doe";
profile.email = "john@example.com";
saveProfile(); // This writes to localStorage and updates sidebar

    // Generate sample job listings
    function generateJobListings() {
      return [
  {
    id: 1,
    company: "IBM",
    position: "Application Developer - Cloud",
    role: "Full Stack",
    eligibility: "Bachelor's / Master's in CS or IT",
    salary: "₹6 - ₹10 LPA (Expected)",
    experience: "0-2 Years",
    location: "Bangalore, India",
    description: "IBM is hiring for Application Developer - Cloud to work on innovative cloud applications for enterprise clients.<br><br><strong>Responsibilities:</strong><br>• Design and develop scalable cloud-native applications using microservices architecture<br>• Implement CI/CD pipelines and automate deployment processes<br>• Work with cloud services (AWS, Azure, IBM Cloud) and container technologies<br>• Collaborate with cross-functional teams in agile development environment<br>• Perform code reviews and ensure software quality standards<br><br><strong>Requirements:</strong><br>• Strong programming skills in Java/Python/Node.js<br>• Experience with cloud platforms and DevOps practices<br>• Knowledge of database systems and RESTful APIs<br>• Understanding of software development lifecycle<br><br><strong>Perks:</strong><br>• Comprehensive health insurance coverage<br>• Flexible working hours and remote options<br>• Continuous learning and certification opportunities<br>• Global exposure and career growth paths"
  },
  {
    id: 2,
    company: "HCL Technologies",
    position: "Software Developer",
    role: "Full Stack Developer",
    eligibility: "BE/B.Tech/M.Tech",
    salary: "₹3.5 - ₹6 LPA",
    experience: "Freshers / 1-2 Years",
    location: "Chennai / Bangalore",
    description: "HCL Technologies is seeking passionate Software Developers to build enterprise-grade solutions.<br><br><strong>Responsibilities:</strong><br>• Develop and maintain web applications using modern JavaScript frameworks<br>• Design responsive user interfaces and ensure cross-browser compatibility<br>• Implement backend services and database integration<br>• Collaborate with product managers and UX designers<br>• Write clean, maintainable code and participate in code reviews<br><br><strong>Requirements:</strong><br>• Proficiency in JavaScript, Node.js, React/Angular<br>• Understanding of database concepts and SQL<br>• Knowledge of version control systems (Git)<br>• Strong problem-solving and analytical skills<br><br><strong>Perks:</strong><br>• Structured training and mentorship programs<br>• Health and wellness benefits<br>• Performance-based bonuses<br>• Opportunities for international assignments"
  },
  {
    id: 3,
    company: "Google",
    position: "Frontend Developer",
    role: "UI / UX Engineer",
    eligibility: "Bachelor's in CS / IT",
    salary: "₹20 - ₹35 LPA (Expected)",
    experience: "2-5 Years",
    location: "Hyderabad, India",
    description: "Join Google UI Engineering Team to build fast, accessible web interfaces.<br><br><strong>Responsibilities:</strong><br>• Develop scalable and reusable components using React.js<br>• Collaborate with UX designers and backend engineers<br>• Optimize web performance and ensure accessibility standards<br>• Implement responsive designs and cross-browser compatibility<br>• Participate in design reviews and technical discussions<br><br><strong>Requirements:</strong><br>• Strong skills in HTML, CSS, JavaScript, React<br>• Familiarity with REST APIs & testing frameworks<br>• Excellent UI/UX understanding and attention to detail<br>• Experience with build tools and version control systems<br><br><strong>Perks:</strong><br>• Free meals and comprehensive health insurance<br>• Work-from-anywhere flexibility options<br>• Stock grants and performance bonuses<br>• Continuous learning and development programs"
  },
  {
    id: 4,
    company: "Microsoft",
    position: "Software Engineer",
    role: "Backend Developer",
    eligibility: "B.E/B.Tech/M.Tech in CS",
    salary: "₹14 - ₹25 LPA",
    experience: "1-4 Years",
    location: "Hyderabad / Remote",
    description: "Microsoft is hiring passionate developers for its cloud services division.<br><br><strong>Responsibilities:</strong><br>• Design and develop scalable backend services using .NET Core<br>• Implement cloud-native solutions on Azure platform<br>• Write unit tests and ensure code quality standards<br>• Collaborate with distributed teams across time zones<br>• Troubleshoot and optimize application performance<br><br><strong>Requirements:</strong><br>• Experience with .NET Core, C#, SQL Server<br>• Knowledge of cloud computing and microservices architecture<br>• Understanding of DevOps practices and CI/CD pipelines<br>• Strong algorithms and data structures knowledge<br><br><strong>Perks:</strong><br>• Remote-friendly work culture<br>• Comprehensive health and wellness benefits<br>• Stock options and retirement plans<br>• Professional development budget"
  },
  {
    id: 5,
    company: "Amazon",
    position: "SDE I / II",
    role: "Software Engineer",
    eligibility: "CS/IT Graduates",
    salary: "₹18 - ₹28 LPA",
    experience: "1-3 Years",
    location: "Chennai, India",
    description: "Amazon is hiring engineers to scale its e-commerce platform.<br><br><strong>Responsibilities:</strong><br>• Build RESTful APIs and microservices architecture<br>• Write optimized SQL queries and database design<br>• Implement scalable solutions for high-traffic systems<br>• Participate in on-call rotation and incident management<br>• Collaborate with product teams on feature development<br><br><strong>Requirements:</strong><br>• Proficiency in Java/Python and web technologies<br>• Strong knowledge of algorithms and data structures<br>• Experience with AWS services and distributed systems<br>• Excellent problem-solving and debugging skills<br><br><strong>Perks:</strong><br>• Health insurance and RSUs (Restricted Stock Units)<br>• Work from home flexibility<br>• Career growth and mentorship programs<br>• Employee discount on Amazon products"
  },
  {
    id: 6,
    company: "Infosys",
    position: "System Engineer",
    role: "Full Stack Developer",
    eligibility: "BE/B.Tech/ME/M.Tech",
    salary: "₹3.5 - ₹6 LPA",
    experience: "Freshers",
    location: "Pune / Bangalore",
    description: "Infosys is looking for passionate entry-level developers.<br><br><strong>Responsibilities:</strong><br>• Develop and maintain web applications using Angular/Node.js<br>• Write efficient, clean code following best practices<br>• Debug and troubleshoot existing applications<br>• Collaborate with team members on project deliverables<br>• Participate in agile ceremonies and sprint planning<br><br><strong>Requirements:</strong><br>• Good problem-solving and analytical skills<br>• Eagerness to learn new technologies and frameworks<br>• Basic understanding of programming concepts<br>• Strong communication and teamwork abilities<br><br><strong>Perks:</strong><br>• Training at Mysore campus with accommodation<br>• Comprehensive health insurance coverage<br>• Career growth and promotion opportunities<br>• On-site international opportunities"
  },
  {
    id: 7,
    company: "TCS",
    position: "Assistant System Engineer",
    role: "Developer / Tester",
    eligibility: "Any Engineering Graduate",
    salary: "₹3.6 - ₹5.5 LPA",
    experience: "Freshers",
    location: "Pan India",
    description: "Join TCS for large-scale IT projects across various domains.<br><br><strong>Responsibilities:</strong><br>• Code, test and debug programs according to specifications<br>• Work with cross-functional teams on project delivery<br>• Participate in requirement analysis and design discussions<br>• Create technical documentation and user manuals<br>• Support application maintenance and enhancements<br><br><strong>Requirements:</strong><br>• Logical and analytical thinking skills<br>• Strong foundation in any programming language<br>• Good communication and interpersonal skills<br>• Willingness to learn and adapt to new technologies<br><br><strong>Perks:</strong><br>• Job security and stable career growth<br>• Onsite opportunities across global locations<br>• Comprehensive training and certification support<br>• Health and life insurance coverage"
  },
  {
    id: 8,
    company: "Wipro",
    position: "Project Engineer",
    role: "Developer / Support Engineer",
    eligibility: "BE/B.Tech/ME/M.Tech/MCA",
    salary: "₹3 - ₹4.5 LPA",
    experience: "Freshers",
    location: "India (Hybrid)",
    description: "Wipro invites graduates for the Project Engineer role.<br><br><strong>Responsibilities:</strong><br>• Assist in design and implementation of software solutions<br>• Handle production support and incident management<br>• Collaborate with senior developers on complex tasks<br>• Participate in code reviews and quality assurance<br>• Learn and apply new technologies as required<br><br><strong>Requirements:</strong><br>• Good communication and teamwork skills<br>• Basic understanding of coding principles<br>• Willingness to work in shifts if required<br>• Strong learning agility and adaptability<br><br><strong>Perks:</strong><br>• Certification training and skill development<br>• Onsite travel programs to client locations<br>• Performance-linked incentives<br>• Comprehensive medical insurance"
  },
  {
    id: 9,
    company: "Capgemini",
    position: "Associate Consultant",
    role: "Developer / Analyst",
    eligibility: "BE/B.Tech / MCA",
    salary: "₹3 - ₹5 LPA",
    experience: "Freshers",
    location: "Pune / Bangalore",
    description: "Capgemini is hiring fresh graduates as Associate Consultants.<br><br><strong>Responsibilities:</strong><br>• Participate in software development projects and initiatives<br>• Assist in testing, documentation and deployment activities<br>• Coordinate with teams and clients for project requirements<br>• Learn and apply industry best practices and standards<br>• Support senior consultants in delivery activities<br><br><strong>Requirements:</strong><br>• Basic coding knowledge and technical aptitude<br>• Willingness to learn new technologies and domains<br>• Good analytical and problem-solving skills<br>• Strong communication and presentation abilities<br><br><strong>Perks:</strong><br>• Clear career progression paths<br>• Training and certification opportunities<br>• Global exposure and client interactions<br>• Work-life balance initiatives"
  },
  {
    id: 10,
    company: "Adobe",
    position: "Frontend Engineer",
    role: "Frontend Developer",
    eligibility: "B.Tech / M.Tech in CS",
    salary: "₹18 - ₹30 LPA",
    experience: "2-5 Years",
    location: "Bangalore / Hyderabad",
    description: "Adobe is looking for talented frontend engineers to build creative cloud solutions.<br><br><strong>Responsibilities:</strong><br>• Develop reusable UI components and design systems<br>• Optimize performance and accessibility of web applications<br>• Work in cross-functional teams on product features<br>• Implement responsive designs and ensure browser compatibility<br>• Collaborate with UX researchers and product designers<br><br><strong>Requirements:</strong><br>• Expertise in React.js/Angular/Vue.js frameworks<br>• Strong HTML, CSS, JavaScript fundamentals<br>• Good design sense and attention to detail<br>• Experience with build tools and testing frameworks<br><br><strong>Perks:</strong><br>• Comprehensive health and wellness benefits<br>• Flexible work schedules and remote options<br>• Employee stock purchase program<br>• Creative and innovative work environment"
  },
  {
    id: 11,
    company: "Cisco",
    position: "Network Engineer",
    role: "Backend / Network Specialist",
    eligibility: "B.Tech / M.Tech / B.Sc",
    salary: "₹12 - ₹20 LPA",
    experience: "1-3 Years",
    location: "Bangalore / Pune",
    description: "Cisco is hiring Network Engineers to manage enterprise networks.<br><br><strong>Responsibilities:</strong><br>• Configure routers, switches and network infrastructure<br>• Monitor and troubleshoot network performance issues<br>• Work with cloud networking solutions and SD-WAN<br>• Implement network security policies and protocols<br>• Collaborate with global teams on network design<br><br><strong>Requirements:</strong><br>• CCNA/CCNP certification preferred<br>• Knowledge of network protocols and technologies<br>• Experience with network monitoring tools<br>• Understanding of cloud networking concepts<br><br><strong>Perks:</strong><br>• Health & wellness programs and gym memberships<br>• Global exposure and cross-cultural experiences<br>• Stock options and performance bonuses<br>• Continuous learning and certification support"
  },
  {
    id: 12,
    company: "VMware",
    position: "Cloud Solutions Engineer",
    role: "Backend / Cloud Developer",
    eligibility: "BE/B.Tech / M.Tech",
    salary: "₹15 - ₹28 LPA",
    experience: "2-4 Years",
    location: "Bangalore / Hyderabad",
    description: "VMware is seeking Cloud Solutions Engineers for its cloud infrastructure team.<br><br><strong>Responsibilities:</strong><br>• Develop cloud automation tools and scripts<br>• Deploy and maintain cloud services and applications<br>• Work with DevOps pipelines and infrastructure as code<br>• Collaborate with customers on solution architecture<br>• Troubleshoot and resolve cloud infrastructure issues<br><br><strong>Requirements:</strong><br>• Experience with cloud platforms (AWS, Azure, GCP)<br>• Proficiency in Python/Go/Shell scripting<br>• Knowledge of container technologies and orchestration<br>• Understanding of networking and security principles<br><br><strong>Perks:</strong><br>• Learning and development programs<br>• Global collaboration and team events<br>• Comprehensive health insurance<br>• Stock grants and equity programs"
  },
  {
    id: 13,
    company: "Deloitte",
    position: "Analyst / Developer",
    role: "Developer",
    eligibility: "BE/B.Tech / MCA",
    salary: "₹4 - ₹7 LPA",
    experience: "Freshers",
    location: "Mumbai / Pune / Bangalore",
    description: "Deloitte is hiring freshers for technology and analytics roles.<br><br><strong>Responsibilities:</strong><br>• Support development and testing of business applications<br>• Assist in process automation and digital transformation<br>• Work with internal tools and client systems<br>• Participate in requirement gathering and analysis<br>• Learn and apply consulting methodologies<br><br><strong>Requirements:</strong><br>• Basic coding skills and logical thinking<br>• Analytical mindset and problem-solving approach<br>• Good communication and presentation skills<br>• Willingness to travel for client engagements<br><br><strong>Perks:</strong><br>• Training and mentoring programs<br>• Career growth opportunities across domains<br>• Global mobility and transfer options<br>• Professional certification support"
  },
  {
    id: 14,
    company: "Cognizant",
    position: "Software Engineer",
    role: "Full Stack Developer",
    eligibility: "BE/B.Tech / ME / MCA",
    salary: "₹3.5 - ₹6 LPA",
    experience: "Freshers / 1-2 Years",
    location: "Chennai / Pune",
    description: "Cognizant is hiring software engineers to build enterprise solutions.<br><br><strong>Responsibilities:</strong><br>• Develop and maintain web applications and services<br>• Collaborate in agile teams on project delivery<br>• Support existing software systems and applications<br>• Participate in code reviews and quality processes<br>• Learn and apply new technologies and frameworks<br><br><strong>Requirements:</strong><br>• Knowledge of JavaScript, Node.js, Angular/React<br>• Good communication and teamwork skills<br>• Understanding of software development lifecycle<br>• Problem-solving and analytical abilities<br><br><strong>Perks:</strong><br>• Training programs and skill development<br>• Career growth and promotion opportunities<br>• Health and wellness benefits<br>• Global project exposure"
  },
  {
    id: 15,
    company: "SAP",
    position: "Application Developer",
    role: "Backend Developer",
    eligibility: "B.Tech / M.Tech in CS/IT",
    salary: "₹15 - ₹28 LPA",
    experience: "2-5 Years",
    location: "Bangalore",
    description: "SAP is hiring backend developers to maintain ERP solutions.<br><br><strong>Responsibilities:</strong><br>• Develop backend APIs and microservices<br>• Optimize database performance and queries<br>• Work on cloud-integrated ERP systems<br>• Implement security and compliance features<br>• Collaborate with functional consultants<br><br><strong>Requirements:</strong><br>• Expertise in Java/Python/SQL programming<br>• Cloud experience and certifications preferred<br>• Understanding of enterprise software architecture<br>• Knowledge of SAP technologies is a plus<br><br><strong>Perks:</strong><br>• Global exposure and international opportunities<br>• Certification programs and training<br>• Comprehensive benefits package<br>• Innovation and research opportunities"
  },
  {
    id: 16,
    company: "Meta",
    position: "Frontend Engineer",
    role: "UI / UX Developer",
    eligibility: "B.Tech / M.Tech in CS",
    salary: "₹25 - ₹45 LPA",
    experience: "2-5 Years",
    location: "Hyderabad / Remote",
    description: "Meta is looking for frontend engineers to build social media experiences.<br><br><strong>Responsibilities:</strong><br>• Build scalable UI components and design systems<br>• Collaborate with product designers on user experiences<br>• Optimize web/mobile performance and loading times<br>• Implement A/B tests and data-driven improvements<br>• Work on accessibility and internationalization<br><br><strong>Requirements:</strong><br>• Strong skills in React/TypeScript/CSS/HTML<br>• Excellent UI/UX design sensibilities<br>• Experience with performance optimization<br>• Knowledge of web security best practices<br><br><strong>Perks:</strong><br>• Remote flexibility and work-life balance<br>• Global exposure and impact at scale<br>• Stock options and competitive compensation<br>• Comprehensive health and wellness benefits"
  },
  {
    id: 17,
    company: "Twitter",
    position: "Backend Engineer",
    role: "Developer",
    eligibility: "B.Tech / M.Tech / MCA",
    salary: "₹18 - ₹30 LPA",
    experience: "2-4 Years",
    location: "Bangalore / Remote",
    description: "Twitter is hiring backend engineers to build and scale APIs.<br><br><strong>Responsibilities:</strong><br>• Implement RESTful services and API endpoints<br>• Optimize database queries and system performance<br>• Collaborate across global engineering teams<br>• Design scalable and resilient systems<br>• Participate in on-call rotation and incident response<br><br><strong>Requirements:</strong><br>• Proficiency in Java/Python/SQL programming<br>• Cloud infrastructure and DevOps knowledge<br>• Experience with distributed systems<br>• Understanding of caching and performance optimization<br><br><strong>Perks:</strong><br>• Work remotely with flexible hours<br>• Employee stock options and bonuses<br>• Learning and development stipend<br>• Comprehensive health coverage"
  },
  {
    id: 18,
    company: "Qualcomm",
    position: "Embedded Software Engineer",
    role: "Developer",
    eligibility: "B.Tech / M.Tech in ECE / CS",
    salary: "₹15 - ₹25 LPA",
    experience: "1-3 Years",
    location: "Bangalore",
    description: "Qualcomm is hiring embedded software engineers to work on IoT and mobile solutions.<br><br><strong>Responsibilities:</strong><br>• Develop embedded software for mobile devices<br>• Work with hardware teams on system integration<br>• Optimize performance for mobile applications<br>• Debug and resolve system-level issues<br>• Implement power management features<br><br><strong>Requirements:</strong><br>• Strong C/C++/Python programming skills<br>• Knowledge of embedded systems and RTOS<br>• Understanding of hardware-software interaction<br>• Experience with debugging tools and techniques<br><br><strong>Perks:</strong><br>• Health benefits and insurance coverage<br>• Employee stock options and grants<br>• Research and innovation opportunities<br>• Global collaboration with experts"
  },
  {
    id: 19,
    company: "HP",
    position: "QA Engineer",
    role: "Tester",
    eligibility: "BE/B.Tech / MCA",
    salary: "₹4 - ₹7 LPA",
    experience: "Freshers / 1 Year",
    location: "Bangalore / Pune",
    description: "HP is hiring QA engineers for hardware and software testing.<br><br><strong>Responsibilities:</strong><br>• Test software modules and system integration<br>• Document bugs, issues and improvement suggestions<br>• Collaborate with development teams on quality<br>• Develop and execute test plans and cases<br>• Participate in product design reviews<br><br><strong>Requirements:</strong><br>• Manual and automation testing skills<br>• Basic programming and scripting knowledge<br>• Understanding of testing methodologies<br>• Attention to detail and analytical thinking<br><br><strong>Perks:</strong><br>• Training and certification programs<br>• Career growth in quality engineering<br>• Employee discounts on HP products<br>• Comprehensive benefits package"
  },
  {
    id: 20,
    company: "Intel",
    position: "Systems Software Engineer",
    role: "Backend / Firmware",
    eligibility: "B.Tech / M.Tech in CS / ECE",
    salary: "₹18 - ₹30 LPA",
    experience: "3-6 Years",
    location: "Bangalore",
    description: "Intel is seeking Systems Software Engineers for developing performance-critical software.<br><br><strong>Responsibilities:</strong><br>• Develop high-performance software modules and drivers<br>• Collaborate with hardware and validation teams<br>• Debug and optimize system software performance<br>• Implement security features and protocols<br>• Work on cutting-edge processor technologies<br><br><strong>Requirements:</strong><br>• Proficient in C/C++ and OS internals<br>• Experience with device drivers and low-level programming<br>• Knowledge of computer architecture and hardware<br>• Understanding of performance optimization techniques<br><br><strong>Perks:</strong><br>• Work with cutting-edge processors and technologies<br>• Global exposure and innovation labs<br>• Stock options and competitive compensation<br>• Research and patent opportunities"
  },
  {
    id: 21,
    company: "Accenture",
    position: "Advanced App Engineering Analyst",
    role: "Full Stack Developer",
    eligibility: "BE/B.Tech/ME/M.Tech/MCA",
    salary: "₹4.5 - ₹7.5 LPA",
    experience: "1-3 Years",
    location: "Multiple Locations India",
    description: "Accenture is hiring Application Engineering Analysts for digital transformation projects.<br><br><strong>Responsibilities:</strong><br>• Develop and maintain enterprise applications<br>• Work on cloud migration and modernization projects<br>• Collaborate with global teams and clients<br>• Implement DevOps practices and automation<br>• Support application deployment and operations<br><br><strong>Requirements:</strong><br>• Experience with Java/.NET/JavaScript technologies<br>• Understanding of cloud platforms and services<br>• Knowledge of agile development methodologies<br>• Good communication and client-facing skills<br><br><strong>Perks:</strong><br>• Global project exposure and travel opportunities<br>• Comprehensive training and certification<br>• Career progression and growth paths<br>• Work-life balance initiatives"
  },
  {
    id: 22,
    company: "Oracle",
    position: "Software Developer",
    role: "Backend Developer",
    eligibility: "B.Tech/M.Tech in CS/IT",
    salary: "₹12 - ₹22 LPA",
    experience: "2-4 Years",
    location: "Bengaluru / Hyderabad",
    description: "Oracle is hiring Software Developers for its cloud infrastructure team.<br><br><strong>Responsibilities:</strong><br>• Develop and maintain Oracle Cloud services<br>• Work on database and middleware technologies<br>• Implement scalable and secure solutions<br>• Collaborate with product management teams<br>• Optimize performance and reliability<br><br><strong>Requirements:</strong><br>• Strong Java/Python/SQL programming skills<br>• Experience with distributed systems<br>• Knowledge of cloud computing concepts<br>• Understanding of database technologies<br><br><strong>Perks:</strong><br>• Employee stock purchase plan<br>• Comprehensive health and wellness benefits<br>• Remote and flexible work options<br>• Learning and development opportunities"
  }
]
}
// Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
      const profileContainer = document.querySelector('.container');
      const jobContainer = document.querySelector('.job-container');

      // Force set initial state
      profileContainer.style.display = 'none';
      jobContainer.style.display = 'block';
      
      // Initialize profile data
      updateSidebarInfo();
      computeProgress();
      
      // Load job listings
      loadJobListings();
      
      // Set up event listeners
      setupEventListeners();
    });

    function loadJobListings() {
      const savedListings = localStorage.getItem(JOB_LISTINGS_KEY);
      
      if (savedListings) {
        jobListings = JSON.parse(savedListings);
      } else {
        // Generate sample job listings
        jobListings = generateJobListings();
        localStorage.setItem(JOB_LISTINGS_KEY, JSON.stringify(jobListings));
      }
      
      filteredJobs = [...jobListings];
      renderJobListings();
    } 

function renderJobListings() {
  console.log('Rendering job listings...');
  const jobListingsContainer = document.getElementById('jobListings');
  
  if (!jobListingsContainer) {
    console.error('Job listings container not found! Check if HTML has element with id="jobListings"');
    return;
  }
  
  console.log('Found job container, filtered jobs:', filteredJobs.length);
  
  if (filteredJobs.length === 0) {
    jobListingsContainer.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="material-symbols-outlined">search_off</span>
        <h3>No jobs found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    `;
    return;
  }
  
  // Create job cards HTML
  const jobsHTML = filteredJobs.map(job => `
    <div class="company-card">
      <h3>${job.company}</h3>
      <div class="company-info">
        <p><strong>Position:</strong> ${job.position}</p>
        <p><strong>Role:</strong> ${job.role}</p>
        <p><strong>Eligibility:</strong> ${job.eligibility}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p><strong>Experience:</strong> ${job.experience}</p>
        <p><strong>Location:</strong> ${job.location}</p>
      </div>
      <div class="job-actions">
        <button class="btn success small" onclick="applyJob('${job.company}', '${job.position}')">
          <span class="material-symbols-outlined">send</span> Apply
        </button>
        <button class="btn secondary small" onclick="saveJob('${job.company}', '${job.position}')">
          <span class="material-symbols-outlined">bookmark</span> Save
        </button>
        <button class="btn small" onclick="openModal('${job.company}', '${job.description}')">
          <span class="material-symbols-outlined">visibility</span> View
        </button>
      </div>
    </div>
  `).join('');
  
  jobListingsContainer.innerHTML = jobsHTML;
  console.log('Job listings rendered successfully');
}


    // Search and filter functionality
    function filterJobs() {
      const searchTerm = document.getElementById('jobSearch').value.toLowerCase();
      const roleFilter = document.getElementById('jobFilter').value;
      const experienceFilter = document.getElementById('experienceFilter').value;
      
      filteredJobs = jobListings.filter(job => {
        const matchesSearch = 
          job.company.toLowerCase().includes(searchTerm) ||
          job.position.toLowerCase().includes(searchTerm) ||
          job.role.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm);
        
        const matchesRole = !roleFilter || job.role.includes(roleFilter);
        const matchesExperience = !experienceFilter || job.experience.includes(experienceFilter);
        
        return matchesSearch && matchesRole && matchesExperience;
      });
      
      renderJobListings();
    }

    // Set up all event listeners
    function setupEventListeners() {
      const profileContainer = document.querySelector('.container');
      const jobContainer = document.querySelector('.job-container');
      
      // Navigation event listeners
      document.getElementById('menuHome').addEventListener('click', () => {
        jobContainer.style.display = 'block';
        profileContainer.style.display = 'none';
      });

      document.getElementById('findjob').addEventListener('click', () => {
        jobContainer.style.display = 'block';
        profileContainer.style.display = 'none';
      });

      document.getElementById('myjob').addEventListener('click', () => {
        jobContainer.style.display = 'none';
        profileContainer.style.display = 'flex';
        renderAppliedJobs();
      });

      // Search and filter listeners
      document.getElementById('jobSearch').addEventListener('input', filterJobs);
      document.getElementById('jobFilter').addEventListener('change', filterJobs);
      document.getElementById('experienceFilter').addEventListener('change', filterJobs);

      // Dropdown functionality
      setupDropdown();
      
      // Navigation between sections
      document.querySelectorAll('.steps button').forEach(btn => {
        btn.addEventListener('click', () => {
          loadSection(btn.dataset.section);
        });
      });

      // Confirmation modal handlers
      document.getElementById('confirmCancel').addEventListener('click', closeConfirmation);
      document.getElementById('confirmOk').addEventListener('click', confirmAction);
    }

    // Set up dropdown functionality
    function setupDropdown() {
      const dropdownBtn = document.getElementById('dropdownBtn');
      const dropdownMenu = document.getElementById('dropdownMenu');
      const arrow = document.getElementById('arrow');
      
      dropdownBtn.addEventListener('click', e => {
        e.stopPropagation();
        toggleDropdown();
      });
      
      document.addEventListener('click', (e) => {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
          closeDropdown();
        }
      });
      
      // Dropdown menu item click handlers
      document.getElementById('menuEdit').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.job-container').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
        loadSection('personal');
        closeDropdown();
      });

      document.getElementById('menuDashboard').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.job-container').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
        loadSection('dashboard');
        closeDropdown();
      });

      document.getElementById('menuAppliedJobs').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.job-container').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
        renderAppliedJobs();
        closeDropdown();
      });

      document.getElementById('menuContact').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.job-container').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
        renderContactUs();
        closeDropdown();
      });

      document.getElementById('menuSetting').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.job-container').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
        renderSettings();
        closeDropdown();
      });

      document.getElementById('menuLogout').addEventListener('click', (e) => {
        e.preventDefault();
        showConfirmation('Log Out', 'Are you sure you want to log out?', () => {
          showToast('Logged out successfully', 'success');

          setTimeout(() => {
      window.location.href = 'home.html';
    }, 1000); // 1 second delay (you can adjust)
  });
        
        closeDropdown();
    });
    }

    function toggleDropdown() {
      const dropdownMenu = document.getElementById('dropdownMenu');
      const arrow = document.getElementById('arrow');
      const isVisible = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
      arrow.textContent = isVisible ? 'expand_more' : 'expand_less';
    }

    function closeDropdown() {
      const dropdownMenu = document.getElementById('dropdownMenu');
      const arrow = document.getElementById('arrow');
      dropdownMenu.style.display = 'none';
      arrow.textContent = 'expand_more';
    }

    // ===== Toast Notification System =====
    function showToast(message, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.textContent = message;
      
      document.getElementById('toastContainer').appendChild(toast);
      
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }

    // ===== Confirmation Modal System =====
    let currentConfirmationCallback = null;

    function showConfirmation(title, message, callback) {
      document.getElementById('confirmationTitle').textContent = title;
      document.getElementById('confirmationMessage').textContent = message;
      document.getElementById('confirmationModal').style.display = 'flex';
      currentConfirmationCallback = callback;
    }

    function closeConfirmation() {
      document.getElementById('confirmationModal').style.display = 'none';
      currentConfirmationCallback = null;
    }

    function confirmAction() {
      if (currentConfirmationCallback) {
        currentConfirmationCallback();
      }
      closeConfirmation();
    }

    // ===== Job Application System =====
    function applyJob(company, position) {
      showConfirmation('Apply for Job', `Are you sure you want to apply for ${position} at ${company}?`, () => {
        // Check if already applied
        const alreadyApplied = jobsData.applied.some(job => 
          job.company === company && job.position === position
        );
        
        if (alreadyApplied) {
          showToast(`You've already applied for ${position} at ${company}`, 'warning');
          return;
        }
        
        // Remove from saved if exists
        jobsData.saved = jobsData.saved.filter(job => 
          !(job.company === company && job.position === position)
        );
        
        // Add to applied
        const job = {
          company,
          position,
          appliedDate: new Date().toISOString().split('T')[0],
          status: 'Applied'
        };
        
        jobsData.applied.unshift(job);
        saveJobsData();
        showToast(`Successfully applied for ${position} at ${company}`, 'success');
      });
    }

    function saveJob(company, position) {
      // Check if already saved
      const alreadySaved = jobsData.saved.some(job => 
        job.company === company && job.position === position
      );
      
      if (alreadySaved) {
        showToast(`Job already saved to your list`, 'warning');
        return;
      }
      
      // Check if already applied
      const alreadyApplied = jobsData.applied.some(job => 
        job.company === company && job.position === position
      );
      
      if (alreadyApplied) {
        showToast(`You've already applied for this position`, 'warning');
        return;
      }
      
      // Add to saved
      const job = {
        company,
        position,
        savedDate: new Date().toISOString().split('T')[0],
        status: 'Saved'
      };
      
      jobsData.saved.unshift(job);
      saveJobsData();
      showToast(`Job saved successfully`, 'success');
    }

    function removeJob(jobId, listType) {
      showConfirmation('Remove Job', 'Are you sure you want to remove this job from your list?', () => {
        jobsData[listType] = jobsData[listType].filter((_, index) => index !== jobId);
        saveJobsData();
        renderAppliedJobs();
        showToast('Job removed successfully', 'success');
      });
    }

    function saveJobsData() {
      localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobsData));
    }

    // ===== Enhanced Progress Tracking =====
    function computeProgress() {
      const checkpoints = {
        personal: ['firstName','lastName','email','phone','location','nationality','gender','dob'],
        work: 'workExperience',
        education: 'education',
        skills: 'skills',
        career: ['desiredRoles','availability'],
        certificates: 'certificates',
        courses: 'courses',
        projects: 'projects',
        languages: 'languages'
      };
      
      let total = 0, done = 0;
      
      for(const k in checkpoints){
        total++;
        const key = checkpoints[k];
        let filled = false;
        
        if(Array.isArray(key)){
          filled = key.every(f => profile[f] && String(profile[f]).trim().length>0);
        } else {
          const val = profile[key];
          if(Array.isArray(val)) filled = val.length>0;
          else if(val && Object.keys(val).length>0) filled = true;
          else filled = false;
        }
        
        if(filled) done++;
        
        // Update check mark on sidebar with enhanced visual feedback
        const btn = document.querySelector(`[data-section="${k}"]`);
        if(btn) {
          const check = btn.querySelector('.check');
          check.textContent = filled ? '✓' : '◦';
          if(filled) {
            btn.classList.add('completed');
          } else {
            btn.classList.remove('completed');
          }
        }
      }
      
      const percent = Math.round((done/total)*100);
      document.getElementById('progressBar').style.width = percent + '%';
      document.getElementById('progressText').textContent = percent + '%';
      
      // Add visual feedback for progress milestones
      const progressBar = document.getElementById('progressBar');
      if(percent < 30) {
        progressBar.style.background = 'linear-gradient(90deg, #dc3545, #c82333)';
      } else if(percent < 70) {
        progressBar.style.background = 'linear-gradient(90deg, #ffc107, #e0a800)';
      } else {
        progressBar.style.background = 'linear-gradient(90deg, var(--accent), #005fa3)';
      }
      
      return percent;
    }

    function updateSidebarInfo(){
      document.getElementById('sidebarName').textContent = profile.firstName ? (profile.firstName + (profile.lastName ? ' ' + profile.lastName : '')) : 'John Doe';
      document.getElementById('sidebarEmail').textContent = profile.email || 'johndoe99@gmail.com';
      document.getElementById('avatar').textContent = (profile.firstName ? profile.firstName[0].toUpperCase() : 'J');
      document.getElementById('userName').textContent = profile.firstName || 'User';
    }
function saveProfile() {
  // Save to localStorage
  localStorage.setItem("jobtrack_profile", JSON.stringify(profile));

  // Update sidebar immediately
  const sidebarName = document.getElementById("sidebarName");
  const sidebarEmail = document.getElementById("sidebarEmail");
  const avatar = document.getElementById("avatar");

  sidebarName.textContent = profile.name|| "John Doe";
  sidebarEmail.textContent = profile.email || "johndoe99@gmail.com";
  avatar.textContent = profile.name ? profile.name.charAt(0).toUpperCase() : "J";

  console.log("✅ Profile saved and UI updated:", profile);
}

    // ===== Form Validation =====
    function isLikelyFake(text){
      if(!text) return true;
      const s = String(text).trim().toLowerCase();
      if(s.length < 2) return true;
      const bad = ['test','asdf','qwerty','1234','123','abcd','user','name'];
      if(bad.some(x=>s.includes(x))) return true;
      // repeating single char
      if(/^([a-z0-9])\1{1,}$/.test(s)) return true;
      // many digits only
      if(/^\d{3,}$/.test(s) && s.length < 8) return true;
      return false;
    }

    function validEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }
    function validPhone(p){ return /^\+?\d{7,15}$/.test(p.replace(/\s+/g,'')) }

    // ===== Section Loading =====
    function loadSection(section){
      // Update active state in sidebar
      document.querySelectorAll('.steps button').forEach(b => {
        b.classList.toggle('active', b.dataset.section === section);
      });
      
      if(section === 'personal') return renderPersonal();
      if(section === 'work') return renderWork();
      if(section === 'education') return renderEducation();
      if(section === 'skills') return renderSkills();
      if(section === 'career') return renderCareer();
      if(section === 'certificates') return renderCertificates();
      if(section === 'courses') return renderCourses();
      if(section === 'projects') return renderProjects();
      if(section === 'languages') return renderLanguages();
      if(section === 'dashboard') return renderDashboard();
    }

    // ===== Applied & Saved Jobs Page =====
    function renderAppliedJobs(){
      const content = document.getElementById('contentArea');
      content.innerHTML = `
        <h2>My Jobs</h2>
        <p class="muted">Track your job applications and saved positions.</p>
        
        <div class="jobs-tabs">
          <button class="tab active" data-tab="applied">Applied Jobs (${jobsData.applied.length})</button>
          <button class="tab" data-tab="saved">Saved Jobs (${jobsData.saved.length})</button>
        </div>
        
        <div id="jobsContent">
          <!-- Content will be loaded based on active tab -->
        </div>
      `;

      // Tab functionality
      document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          renderJobsList(tab.dataset.tab);
        });
      });

      // Load initial tab
      renderJobsList('applied');
    }

    function renderJobsList(type) {
      const jobsContent = document.getElementById('jobsContent');
      const jobs = jobsData[type];
      
      if (jobs.length === 0) {
        jobsContent.innerHTML = `
          <div class="empty-state">
            <span class="material-symbols-outlined">work_outline</span>
            <h3>No ${type} jobs</h3>
            <p>You haven't ${type} any jobs yet.</p>
            ${type === 'saved' ? '<button class="btn" onclick="document.getElementById(\'findjob\').click()">Browse Jobs</button>' : ''}
          </div>
        `;
        return;
      }

      jobsContent.innerHTML = jobs.map((job, index) => `
        <div class="entry">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <strong>${job.position}</strong>
                <div class="small">${job.company}</div>
              </div>
              <span class="job-status-badge job-status-${type}">${type}</span>
            </div>
            <div class="small muted" style="margin-top: 8px;">
              ${type === 'applied' ? `Applied on ${job.appliedDate}` : `Saved on ${job.savedDate}`}
            </div>
          </div>
          <div class="center">
            ${type === 'saved' ? `
              <button class="btn success small" onclick="applyJob('${job.company}', '${job.position}')">
                <span class="material-symbols-outlined">send</span> Apply
              </button>
            ` : ''}
            <button class="btn danger small" onclick="removeJob(${index}, '${type}')">
              <span class="material-symbols-outlined">delete</span> Remove
            </button>
          </div>
        </div>
      `).join('');
    }

    // ===== Profile Section Rendering =====
    function renderPersonal(){
      const content = document.getElementById('contentArea');
      content.innerHTML = `
        <h2>Personal Details</h2>
        <div style="display:flex;gap:18px;align-items:flex-start">
          <div style="display:flex;flex-direction:column;align-items:center">
            <div id="photoPreview" style="width:94px;height:94px;border-radius:50%;background:#e8f3ff;color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:32px">${profile.firstName ? profile.firstName[0].toUpperCase() : 'J'}</div>
            <div style="margin-top:8px;display:flex;gap:8px">
              <input id="photoFile" type="file" accept="image/*" style="display:none"/>
              <button class="btn secondary small" type="button" onclick="document.getElementById('photoFile').click()">Upload Photo</button>
            </div>
            <div class="small muted">Allowed: jpg, png</div>
          </div>
          <div style="flex:1">
            <div class="row">
              <div class="col">
                <label>First Name *</label>
                <input id="firstName" type="text" value="${profile.firstName||''}" />
              </div>
              <div class="col">
                <label>Last Name *</label>
                <input id="lastName" type="text" value="${profile.lastName||''}" />
              </div>
            </div>
            <label>Email *</label>
            <input id="email" type="email" value="${profile.email||''}" />
            <label>Phone Number *</label>
            <input id="phone" type="text" placeholder="+91..." value="${profile.phone||''}" />
            <div class="row">
              <div class="col">
                <label>Location *</label>
                <input id="location" type="text" value="${profile.location||''}" />
              </div>
              <div class="col">
                <label>Nationality *</label>
                <input id="nationality" type="text" value="${profile.nationality||''}" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Gender *</label>
                <select id="gender">
                  <option value="">Select</option>
                  <option ${profile.gender==='Female'?'selected':''}>Female</option>
                  <option ${profile.gender==='Male'?'selected':''}>Male</option>
                  <option ${profile.gender==='Other'?'selected':''}>Other</option>
                </select>
              </div>
              <div class="col">
                <label>Date of Birth *</label>
                <input id="dob" type="date" value="${profile.dob||''}" />
              </div>
            </div>

            <label>Professional Summary</label>
            <textarea id="summary">${profile.summary||''}</textarea>

            <div style="display:flex;gap:10px">
              <button class="btn" id="savePersonal">Save Personal Details</button>
              <button class="btn secondary" id="cancelPersonal">Cancel</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('savePersonal').addEventListener('click', ()=>{
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const location = document.getElementById('location').value.trim();
        const nationality = document.getElementById('nationality').value.trim();
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const summary = document.getElementById('summary').value.trim();

        // Basic validations
        if(!firstName || !lastName || !email || !phone || !location || !nationality || !gender || !dob){
          return showToast('Please fill all required fields', 'error');
        }
        if(!validEmail(email)) return showToast('Please enter a valid email', 'error');
        if(!validPhone(phone)) return showToast('Please enter a valid phone number', 'error');

        profile.firstName = firstName;
        profile.lastName = lastName;
        profile.email = email;
        profile.phone = phone;
        profile.location = location;
        profile.nationality = nationality;
        profile.gender = gender;
        profile.dob = dob;
        profile.summary = summary;
        
        saveProfile();
        renderPersonal();
      });

      document.getElementById('cancelPersonal').addEventListener('click', ()=> renderPersonal());
    }

    function renderDashboard(){
      const percent = computeProgress();
      const content = document.getElementById('contentArea');
      content.innerHTML = `
        <h2>Dashboard</h2>
        <p class="muted">Summary of your profile information.</p>
        <div style="margin-top:12px">
          <div class="card" style="padding:12px">
            <strong>Profile Completion</strong>
            <div class="progress" style="margin-top:8px"><i style="width:${percent}%"></i></div>
            <div class="small" style="margin-top:6px">${percent}% complete</div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
            <div class="card" style="text-align: center;">
              <span class="material-symbols-outlined" style="font-size: 36px; color: var(--success);">check_circle</span>
              <h3 style="margin: 8px 0 4px 0;">${jobsData.applied.length}</h3>
              <p class="small muted">Jobs Applied</p>
            </div>
            <div class="card" style="text-align: center;">
              <span class="material-symbols-outlined" style="font-size: 36px; color: var(--warning);">bookmark</span>
              <h3 style="margin: 8px 0 4px 0;">${jobsData.saved.length}</h3>
              <p class="small muted">Jobs Saved</p>
            </div>
          </div>

          <div style="margin-top:12px" id="summaryArea">${generateSummaryHTML()}</div>

          <div style="margin-top:12px;display:flex;gap:8px">
            <button class="btn" id="editAll">Edit Profile</button>
            <button class="btn" onclick="renderAppliedJobs()">View My Jobs</button>
            <button class="btn secondary" id="renew">Clear All Data</button>
          </div>
        </div>
      `;
      
      document.getElementById('editAll').addEventListener('click', ()=> loadSection('personal'));
      document.getElementById('renew').addEventListener('click', ()=>{
        showConfirmation('Clear All Data', 'Are you sure you want to clear all your profile data? This cannot be undone.', () => {
          localStorage.removeItem(STORAGE_KEY); 
          localStorage.removeItem(JOBS_STORAGE_KEY);
          profile = {}; 
          jobsData = {"applied": [], "saved": []};
          updateSidebarInfo(); 
          computeProgress(); 
          renderDashboard(); 
          showToast('All data cleared successfully', 'success');
        });
      });
    }

    function generateSummaryHTML(){
      if(!Object.keys(profile).length) return '<div class="small muted">No data saved yet.</div>';
      let html = '';
      if(profile.firstName || profile.lastName) html += `<div class="card" style="margin-top:8px"><strong>Name</strong><div class="small">${(profile.firstName||'') + ' ' + (profile.lastName||'')}</div></div>`;
      if(profile.email) html += `<div class="card" style="margin-top:8px"><strong>Email</strong><div class="small">${profile.email}</div></div>`;
      if(profile.phone) html += `<div class="card" style="margin-top:8px"><strong>Phone</strong><div class="small">${profile.phone}</div></div>`;
      return html || '<div class="small muted">No detailed content to display</div>';
    }

    function renderContactUs(){
      const content = document.getElementById('contentArea');
      content.innerHTML = `
        <h2>Contact Us</h2>
        <p class="muted">Have questions or need help? Send us a message.</p>
        <form id="contactForm" style="margin-top:12px;max-width:400px;">
          <label>Name</label><input type="text" id="contactName" required>
          <label>Email</label><input type="email" id="contactEmail" required>
          <label>Message</label><textarea id="contactMsg" rows="4" required></textarea>
          <button class="btn" type="submit">Send Message</button>
        </form>
      `;

      document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully! We will get back to you soon.', 'success');
        e.target.reset();
      });
    }

    function renderSettings(){
      const content = document.getElementById('contentArea');
      content.innerHTML = `
        <h2>Account Settings</h2>
        <p class="muted">Manage your account preferences and security.</p>
        <form id="settingsForm" style="margin-top:12px;max-width:400px;">
          <label>Change Password</label>
          <input type="password" id="newPass" placeholder="New Password" required>
          <label>Confirm Password</label>
          <input type="password" id="confirmPass" placeholder="Confirm Password" required>
          <div class="checkbox-group" style="margin-top:12px">
            <label><input type="checkbox" id="notify"> Enable Email Notifications</label>
          </div>
          <button class="btn" type="submit">Save Settings</button>
        </form>
      `;

      document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const pass = document.getElementById('newPass').value;
        const confirm = document.getElementById('confirmPass').value;

        if (pass.length < 6) {
          showToast('Password must be at least 6 characters long', 'error');
          return;
        }
        if (pass !== confirm) {
          showToast('Passwords do not match', 'error');
          return;
        }
        showToast('Settings updated successfully', 'success');
        e.target.reset();
      });
    }

    // ===== Job Modal Functions =====
    function openModal(company, summary, link) {
      document.getElementById('modalCompany').innerText = company;
      document.getElementById('modalContent').innerHTML = summary;
      document.getElementById('modalApply').href = link || '#';
      document.getElementById('jobModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('jobModal').style.display = 'none';
    }

    window.onclick = function(event) {
      const modal = document.getElementById('jobModal');
      if (event.target === modal) modal.style.display = 'none';
    }

    // ===== Placeholder functions for other profile sections =====
    function renderWork() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Work Experience</h2>
        <p class="muted">Coming soon - Work experience section</p>
      `;
    }

    function renderEducation() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Education</h2>
        <p class="muted">Coming soon - Education section</p>
      `;
    }

    function renderSkills() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Skills</h2>
        <p class="muted">Coming soon - Skills section</p>
      `;
    }

    function renderCareer() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Career Preferences</h2>
        <p class="muted">Coming soon - Career preferences section</p>
      `;
    }

    function renderCertificates() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Certificates</h2>
        <p class="muted">Coming soon - Certificates section</p>
      `;
    }

    function renderCourses() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Courses</h2>
        <p class="muted">Coming soon - Courses section</p>
      `;
    }

    function renderProjects() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Projects</h2>
        <p class="muted">Coming soon - Projects section</p>
      `;
    }

    function renderLanguages() {
      document.getElementById('contentArea').innerHTML = `
        <h2>Languages</h2>
        <p class="muted">Coming soon - Languages section</p>
      `;
    }