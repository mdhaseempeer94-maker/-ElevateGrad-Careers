// Career Database
const careerDatabase = {
  "science_stream": {
    "engineering": {
      "description": "Engineering offers diverse specializations like Computer Science, Mechanical, Civil, Electrical, etc.",
      "entrance_exams": ["JEE Main", "MHT CET"],
      "top_colleges": ["IIT Bombay", "ICT Mumbai", "VNIT Nagpur", "COEP Pune", "VJTI Mumbai"],
      "eligibility": "12th with PCM, minimum 45% marks (40% for reserved categories)",
      "salary_range": "₹3-15 lakhs per annum",
      "important_dates": {
        "JEE_Main_Session_2": "April 2-9, 2025",
        "MHT_CET_PCM": "April 19-27, 2025",
        "MHT_CET_registration": "December 30, 2024 to February 15, 2025"
      }
    },
    "medical": {
      "description": "Medical field includes MBBS, BDS, BAMS, BHMS, and other healthcare courses",
      "entrance_exams": ["NEET UG"],
      "top_colleges": ["Grant Medical College Mumbai", "BJ Medical College Pune", "Seth GS Medical College Mumbai"],
      "eligibility": "12th with PCB, minimum 50% marks, age 17+ by Dec 31",
      "salary_range": "₹5-15 lakhs per annum",
      "important_dates": {
        "NEET_2025": "May 4, 2025",
        "NEET_registration": "February 7 to March 7, 2025",
        "Maharashtra_counselling": "July 21-29, 2025"
      }
    },
    "pharmacy": {
      "description": "Pharmacy courses include B.Pharm, D.Pharm, and Pharm.D",
      "entrance_exams": ["MHT CET PCB", "NEET"],
      "eligibility": "12th with PCB/PCM, minimum 45% marks",
      "salary_range": "₹2.5-8 lakhs per annum",
      "important_dates": {
        "MHT_CET_PCB": "April 9-17, 2025"
      }
    },
    "other_options": [
      "B.Sc in Physics/Chemistry/Biology",
      "B.Sc Agriculture", 
      "B.Sc Nursing",
      "BPT (Physiotherapy)",
      "B.Arch (Architecture)",
      "Pilot Training",
      "Veterinary Science"
    ]
  },
  "commerce_stream": {
    "professional_courses": {
      "CA": {
        "description": "Chartered Accountancy - most popular commerce career",
        "salary_range": "₹6-20 lakhs per annum",
        "duration": "4-5 years"
      },
      "CS": {
        "description": "Company Secretary - corporate governance and compliance",
        "salary_range": "₹4-20 lakhs per annum",
        "duration": "3-4 years"
      },
      "CMA": {
        "description": "Cost and Management Accountant",
        "salary_range": "₹6-12 lakhs per annum",
        "duration": "3-4 years"
      }
    },
    "degree_courses": [
      "B.Com - Bachelor of Commerce",
      "BBA - Bachelor of Business Administration", 
      "BMS - Bachelor of Management Studies",
      "B.Com (Hons)",
      "BA Economics",
      "BBA LLB (Integrated Law)"
    ],
    "emerging_fields": [
      "Digital Marketing",
      "Data Analytics", 
      "Business Analytics",
      "E-commerce Management",
      "Financial Planning"
    ]
  },
  "arts_stream": {
    "popular_courses": [
      "BA (Various specializations)",
      "BFA - Bachelor of Fine Arts",
      "BA LLB (5-year integrated law)",
      "BJMC - Journalism & Mass Communication",
      "BHM - Hotel Management",
      "B.Design",
      "Psychology",
      "Social Work"
    ],
    "career_options": [
      "Civil Services (IAS, IPS, IFS)",
      "Journalism and Media",
      "Teaching and Education",
      "Law and Legal Services",
      "Creative Fields (Art, Design, Writing)",
      "Psychology and Counseling",
      "Social Work and NGOs"
    ],
    "salary_ranges": {
      "Civil_Services": "₹7-15 lakhs per annum",
      "Journalism": "₹3-8 lakhs per annum", 
      "Law": "₹4-12 lakhs per annum",
      "Creative_Fields": "₹2-10 lakhs per annum"
    }
  },
  "skill_development": {
    "iti_courses": {
      "engineering_trades": [
        "Electrician", "Fitter", "Mechanic", "Turner", "Welder",
        "Draughtsman Civil/Mechanical", "Electronics Mechanic"
      ],
      "non_engineering_trades": [
        "Computer Operator (COPA)", "Stenography", "Desktop Publishing",
        "Data Entry Operator", "Library Assistant"
      ],
      "duration": "6 months to 2 years",
      "fees": "₹5,000 to ₹30,000"
    },
    "government_schemes": [
      "Pramod Mahajan Kaushalya Yojana (PMKUVA)",
      "National Urban Livelihoods Mission (NULM)",
      "DAKSH Project",
      "T-Ambition (for tribal youth)"
    ]
  },
  "entrance_exam_calendar": {
    "2025": {
      "JEE_Main_Session_2": {
        "dates": "April 2, 3, 4, 7, 8, 9",
        "registration": "Closed (was Jan 31 - Feb 25, 2025)"
      },
      "NEET": {
        "exam_date": "May 4, 2025",
        "registration": "February 7 to March 7, 2025"
      },
      "MHT_CET": {
        "PCB": "April 9-17, 2025",
        "PCM": "April 19-27, 2025", 
        "registration": "December 30, 2024 to February 15, 2025"
      },
      "MAH_LLB_3_Year": "March 20-21, 2025",
      "MAH_MBA_CET": "April 1-3, 2025"
    }
  },
  "colleges_info": {
    "government_engineering": [
      {"name": "IIT Bombay", "location": "Mumbai", "fees": "₹8 lakhs"},
      {"name": "COEP", "location": "Pune", "fees": "₹60,000"},
      {"name": "VJTI", "location": "Mumbai", "fees": "₹5 lakhs"},
      {"name": "VNIT", "location": "Nagpur", "fees": "₹3.08 lakhs"}
    ],
    "government_medical": [
      {"name": "Grant Medical College", "location": "Mumbai", "seats": 250},
      {"name": "BJ Government Medical College", "location": "Pune", "seats": 250},
      {"name": "Government Medical College", "location": "Nagpur", "seats": 250},
      {"name": "AIIMS Nagpur", "location": "Nagpur", "seats": 125}
    ]
  }
};

// Chat Management
class ChatBot {
  constructor() {
    this.chatMessages = document.getElementById('chatMessages');
    this.messageInput = document.getElementById('messageInput');
    this.sendButton = document.getElementById('sendButton');
    this.typingIndicator = document.getElementById('typingIndicator');
    this.helpModal = document.getElementById('helpModal');
    this.conversationContext = [];
    this.userStream = null;
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.showWelcomeMessage();
  }
  
  bindEvents() {
    // Send message events
    if (this.sendButton) {
      this.sendButton.addEventListener('click', () => this.sendMessage());
    }
    
    if (this.messageInput) {
      this.messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });
    }
    
    // Quick action buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action') || e.currentTarget.getAttribute('data-action');
        this.handleQuickAction(action);
      });
    });
    
    // Control buttons
    const clearChatBtn = document.getElementById('clearChat');
    if (clearChatBtn) {
      clearChatBtn.addEventListener('click', () => this.clearChat());
    }
    
    const helpBtn = document.getElementById('helpButton');
    if (helpBtn) {
      helpBtn.addEventListener('click', () => this.showHelp());
    }
    
    const shareBtn = document.getElementById('shareChat');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this.shareChat());
    }
    
    // Modal controls
    const closeHelpBtn = document.getElementById('closeHelp');
    if (closeHelpBtn) {
      closeHelpBtn.addEventListener('click', () => this.closeModal());
    }
    
    // Close modal when clicking outside
    if (this.helpModal) {
      this.helpModal.addEventListener('click', (e) => {
        if (e.target === this.helpModal) {
          this.closeModal();
        }
      });
    }
  }
  
  showWelcomeMessage() {
    const welcomeMessage = `
      <div class="career-info">
        <h4>🎓 Welcome to Career Pathfinder!</h4>
        <p>Hi there! I'm here to help Maharashtra students explore career options after 12th standard. I can provide information about:</p>
        <ul>
          <li><strong>Career paths</strong> based on your stream (Science/Commerce/Arts)</li>
          <li><strong>Entrance exams</strong> and important dates</li>
          <li><strong>Top colleges</strong> in Maharashtra</li>
          <li><strong>Salary expectations</strong> for different careers</li>
          <li><strong>Skill development</strong> programs and government schemes</li>
        </ul>
        <p><strong>To get started:</strong> Click on any quick action button above or ask me a question!</p>
        <p><em>Example: "I'm from Science stream, what engineering options do I have?"</em></p>
      </div>
    `;
    
    this.addMessage('bot', welcomeMessage);
  }
  
  sendMessage() {
    const message = this.messageInput.value.trim();
    if (!message) return;
    
    this.addMessage('user', message);
    this.messageInput.value = '';
    
    this.showTyping();
    
    // Simulate processing delay and process message
    setTimeout(() => {
      this.hideTyping();
      this.processMessage(message);
    }, 1000 + Math.random() * 1000);
  }
  
  addMessage(sender, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = `message-avatar ${sender}-avatar`;
    avatar.textContent = sender === 'bot' ? '🤖' : '👨‍🎓';
    
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = content;
    
    bubble.appendChild(messageContent);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    
    if (this.chatMessages) {
      this.chatMessages.appendChild(messageDiv);
      this.scrollToBottom();
    }
    
    // Store in conversation context
    this.conversationContext.push({
      sender: sender,
      content: content,
      timestamp: new Date()
    });
  }
  
  processMessage(message) {
    const lowerMessage = message.toLowerCase();
    let response = '';
    
    // Stream detection
    if (lowerMessage.includes('science') || lowerMessage.includes('pcm') || lowerMessage.includes('pcb')) {
      this.userStream = 'science';
    } else if (lowerMessage.includes('commerce') || lowerMessage.includes('business')) {
      this.userStream = 'commerce';
    } else if (lowerMessage.includes('arts') || lowerMessage.includes('humanities')) {
      this.userStream = 'arts';
    }
    
    // Engineering related queries
    if (lowerMessage.includes('engineering') || lowerMessage.includes('jee') || lowerMessage.includes('mht cet')) {
      response = this.getEngineeringInfo();
    }
    // Medical related queries
    else if (lowerMessage.includes('medical') || lowerMessage.includes('mbbs') || lowerMessage.includes('neet')) {
      response = this.getMedicalInfo();
    }
    // Commerce related queries
    else if (lowerMessage.includes('ca') || lowerMessage.includes('chartered accountant') || lowerMessage.includes('commerce')) {
      response = this.getCommerceInfo();
    }
    // Arts related queries
    else if (lowerMessage.includes('arts') || lowerMessage.includes('civil services') || lowerMessage.includes('ias')) {
      response = this.getArtsInfo();
    }
    // Entrance exam queries
    else if (lowerMessage.includes('exam') || lowerMessage.includes('entrance') || lowerMessage.includes('dates')) {
      response = this.getExamCalendar();
    }
    // College queries
    else if (lowerMessage.includes('college') || lowerMessage.includes('admission')) {
      response = this.getCollegeInfo();
    }
    // Salary queries
    else if (lowerMessage.includes('salary') || lowerMessage.includes('package') || lowerMessage.includes('earning')) {
      response = this.getSalaryInfo();
    }
    // Skill development queries
    else if (lowerMessage.includes('skill') || lowerMessage.includes('iti') || lowerMessage.includes('training')) {
      response = this.getSkillDevelopmentInfo();
    }
    // Stream selection queries
    else if (lowerMessage.includes('stream') || lowerMessage.includes('what can i do') || lowerMessage.includes('career options')) {
      response = this.getStreamGuidance();
    }
    // Default response
    else {
      response = this.getDefaultResponse(message);
    }
    
    this.addMessage('bot', response);
  }
  
  handleQuickAction(action) {
    let response = '';
    
    switch(action) {
      case 'engineering':
        response = this.getEngineeringInfo();
        break;
      case 'medical':
        response = this.getMedicalInfo();
        break;
      case 'commerce':
        response = this.getCommerceInfo();
        break;
      case 'arts':
        response = this.getArtsInfo();
        break;
      case 'exams':
        response = this.getExamCalendar();
        break;
      case 'skills':
        response = this.getSkillDevelopmentInfo();
        break;
      case 'colleges':
        response = this.getCollegeInfo();
        break;
      case 'salary':
        response = this.getSalaryInfo();
        break;
      default:
        response = this.getDefaultResponse('Quick action');
        break;
    }
    
    this.showTyping();
    setTimeout(() => {
      this.hideTyping();
      this.addMessage('bot', response);
    }, 800);
  }
  
  getEngineeringInfo() {
    const eng = careerDatabase.science_stream.engineering;
    return `
      <div class="career-info">
        <h4>🔧 Engineering Career Options</h4>
        <p><strong>Description:</strong> ${eng.description}</p>
        
        <p><strong>Eligibility:</strong> ${eng.eligibility}</p>
        
        <p><strong>Entrance Exams:</strong></p>
        <ul>
          ${eng.entrance_exams.map(exam => `<li>${exam}</li>`).join('')}
        </ul>
        
        <p><strong>Top Colleges in Maharashtra:</strong></p>
        <ul>
          ${eng.top_colleges.map(college => `<li>${college}</li>`).join('')}
        </ul>
        
        <p><strong>Expected Salary:</strong> ${eng.salary_range}</p>
        
        <div class="exam-info">
          <h4>📅 Important Dates 2025:</h4>
          <ul>
            <li><strong>JEE Main Session 2:</strong> ${eng.important_dates.JEE_Main_Session_2}</li>
            <li><strong>MHT CET (PCM):</strong> ${eng.important_dates.MHT_CET_PCM}</li>
            <li><strong>MHT CET Registration:</strong> ${eng.important_dates.MHT_CET_registration}</li>
          </ul>
        </div>
        
        <p><em>💡 Tip: Start preparing early and consider taking coaching for competitive exams!</em></p>
      </div>
    `;
  }
  
  getMedicalInfo() {
    const med = careerDatabase.science_stream.medical;
    return `
      <div class="career-info">
        <h4>🏥 Medical Career Options</h4>
        <p><strong>Description:</strong> ${med.description}</p>
        
        <p><strong>Eligibility:</strong> ${med.eligibility}</p>
        
        <p><strong>Main Entrance Exam:</strong> NEET UG</p>
        
        <p><strong>Top Medical Colleges in Maharashtra:</strong></p>
        <ul>
          ${med.top_colleges.map(college => `<li>${college}</li>`).join('')}
        </ul>
        
        <p><strong>Expected Salary:</strong> ${med.salary_range}</p>
        
        <div class="exam-info">
          <h4>📅 NEET 2025 Important Dates:</h4>
          <ul>
            <li><strong>NEET Exam Date:</strong> ${med.important_dates.NEET_2025}</li>
            <li><strong>Registration Period:</strong> ${med.important_dates.NEET_registration}</li>
            <li><strong>Maharashtra Counselling:</strong> ${med.important_dates.Maharashtra_counselling}</li>
          </ul>
        </div>
        
        <p><em>💡 Tip: NEET is highly competitive. Focus on NCERT books and practice regularly!</em></p>
      </div>
    `;
  }
  
  getCommerceInfo() {
    const com = careerDatabase.commerce_stream;
    return `
      <div class="career-info">
        <h4>💼 Commerce Career Options</h4>
        
        <h4>🎯 Professional Courses:</h4>
        <div class="salary-info">
          <ul>
            <li><strong>CA (Chartered Accountancy):</strong> ${com.professional_courses.CA.description}<br>
                <em>Salary: ${com.professional_courses.CA.salary_range} | Duration: ${com.professional_courses.CA.duration}</em></li>
            <li><strong>CS (Company Secretary):</strong> ${com.professional_courses.CS.description}<br>
                <em>Salary: ${com.professional_courses.CS.salary_range} | Duration: ${com.professional_courses.CS.duration}</em></li>
            <li><strong>CMA (Cost & Management Accountant):</strong> ${com.professional_courses.CMA.description}<br>
                <em>Salary: ${com.professional_courses.CMA.salary_range} | Duration: ${com.professional_courses.CMA.duration}</em></li>
          </ul>
        </div>
        
        <p><strong>🎓 Degree Courses:</strong></p>
        <ul>
          ${com.degree_courses.map(course => `<li>${course}</li>`).join('')}
        </ul>
        
        <p><strong>🚀 Emerging Fields:</strong></p>
        <ul>
          ${com.emerging_fields.map(field => `<li>${field}</li>`).join('')}
        </ul>
        
        <p><em>💡 Tip: Professional courses like CA, CS offer excellent career prospects but require dedication!</em></p>
      </div>
    `;
  }
  
  getArtsInfo() {
    const arts = careerDatabase.arts_stream;
    return `
      <div class="career-info">
        <h4>🎨 Arts Stream Career Options</h4>
        
        <p><strong>🎓 Popular Courses:</strong></p>
        <ul>
          ${arts.popular_courses.map(course => `<li>${course}</li>`).join('')}
        </ul>
        
        <p><strong>💼 Career Opportunities:</strong></p>
        <ul>
          ${arts.career_options.map(option => `<li>${option}</li>`).join('')}
        </ul>
        
        <div class="salary-info">
          <h4>💰 Salary Expectations:</h4>
          <ul>
            <li><strong>Civil Services:</strong> ${arts.salary_ranges.Civil_Services}</li>
            <li><strong>Journalism:</strong> ${arts.salary_ranges.Journalism}</li>
            <li><strong>Law:</strong> ${arts.salary_ranges.Law}</li>
            <li><strong>Creative Fields:</strong> ${arts.salary_ranges.Creative_Fields}</li>
          </ul>
        </div>
        
        <p><em>💡 Tip: Arts stream offers diverse opportunities. Focus on building strong communication and analytical skills!</em></p>
      </div>
    `;
  }
  
  getExamCalendar() {
    const exams = careerDatabase.entrance_exam_calendar["2025"];
    return `
      <div class="exam-info">
        <h4>📅 Entrance Exam Calendar 2025</h4>
        
        <h4>🔬 Science Stream Exams:</h4>
        <ul>
          <li><strong>NEET 2025:</strong> ${exams.NEET.exam_date}<br>
              <em>Registration: ${exams.NEET.registration}</em></li>
          <li><strong>JEE Main Session 2:</strong> ${exams.JEE_Main_Session_2.dates}<br>
              <em>${exams.JEE_Main_Session_2.registration}</em></li>
          <li><strong>MHT CET (PCB):</strong> ${exams.MHT_CET.PCB}</li>
          <li><strong>MHT CET (PCM):</strong> ${exams.MHT_CET.PCM}</li>
        </ul>
        
        <h4>💼 Other Important Exams:</h4>
        <ul>
          <li><strong>MAH LLB (3-Year):</strong> ${exams.MAH_LLB_3_Year}</li>
          <li><strong>MAH MBA CET:</strong> ${exams.MAH_MBA_CET}</li>
        </ul>
        
        <p><strong>📝 MHT CET Registration:</strong> ${exams.MHT_CET.registration}</p>
        
        <p><em>⚠️ Note: Always verify dates on official websites as they may change!</em></p>
      </div>
    `;
  }
  
  getCollegeInfo() {
    const colleges = careerDatabase.colleges_info;
    return `
      <div class="college-info">
        <h4>🏛️ Top Colleges in Maharashtra</h4>
        
        <h4>⚙️ Government Engineering Colleges:</h4>
        <ul>
          ${colleges.government_engineering.map(college => 
            `<li><strong>${college.name}</strong> - ${college.location}<br>
             <em>Annual Fees: ${college.fees}</em></li>`
          ).join('')}
        </ul>
        
        <h4>🏥 Government Medical Colleges:</h4>
        <ul>
          ${colleges.government_medical.map(college => 
            `<li><strong>${college.name}</strong> - ${college.location}<br>
             <em>MBBS Seats: ${college.seats}</em></li>`
          ).join('')}
        </ul>
        
        <p><em>💡 Tip: Government colleges offer excellent education at affordable fees. Prepare well for entrance exams!</em></p>
      </div>
    `;
  }
  
  getSalaryInfo() {
    return `
      <div class="salary-info">
        <h4>💰 Career-wise Salary Guide</h4>
        
        <h4>🔬 Science Careers:</h4>
        <ul>
          <li><strong>Engineering:</strong> ₹3-15 lakhs per annum</li>
          <li><strong>Medical (MBBS):</strong> ₹5-15 lakhs per annum</li>
          <li><strong>Pharmacy:</strong> ₹2.5-8 lakhs per annum</li>
        </ul>
        
        <h4>💼 Commerce Careers:</h4>
        <ul>
          <li><strong>Chartered Accountant (CA):</strong> ₹6-20 lakhs per annum</li>
          <li><strong>Company Secretary (CS):</strong> ₹4-20 lakhs per annum</li>
          <li><strong>Cost & Management Accountant:</strong> ₹6-12 lakhs per annum</li>
        </ul>
        
        <h4>🎨 Arts Careers:</h4>
        <ul>
          <li><strong>Civil Services (IAS/IPS):</strong> ₹7-15 lakhs per annum</li>
          <li><strong>Journalism:</strong> ₹3-8 lakhs per annum</li>
          <li><strong>Law:</strong> ₹4-12 lakhs per annum</li>
          <li><strong>Creative Fields:</strong> ₹2-10 lakhs per annum</li>
        </ul>
        
        <p><em>💡 Note: Salaries vary based on location, experience, and company size. These are approximate starting ranges.</em></p>
      </div>
    `;
  }
  
  getSkillDevelopmentInfo() {
    const skills = careerDatabase.skill_development;
    return `
      <div class="career-info">
        <h4>🛠️ Skill Development Programs</h4>
        
        <h4>🔧 ITI Engineering Trades:</h4>
        <ul>
          ${skills.iti_courses.engineering_trades.map(trade => `<li>${trade}</li>`).join('')}
        </ul>
        
        <h4>💻 ITI Non-Engineering Trades:</h4>
        <ul>
          ${skills.iti_courses.non_engineering_trades.map(trade => `<li>${trade}</li>`).join('')}
        </ul>
        
        <p><strong>⏱️ Duration:</strong> ${skills.iti_courses.duration}</p>
        <p><strong>💸 Fees Range:</strong> ${skills.iti_courses.fees}</p>
        
        <h4>🏛️ Government Schemes:</h4>
        <ul>
          ${skills.government_schemes.map(scheme => `<li>${scheme}</li>`).join('')}
        </ul>
        
        <p><em>💡 Tip: ITI courses provide practical skills and good job opportunities. Many government schemes offer financial support!</em></p>
      </div>
    `;
  }
  
  getStreamGuidance() {
    return `
      <div class="career-info">
        <h4>🎯 Career Guidance by Stream</h4>
        <p>To provide personalized guidance, could you tell me which stream you're from?</p>
        
        <h4>🔬 Science Stream (PCM/PCB):</h4>
        <p>Engineering, Medical, Pharmacy, Architecture, Pilot training, and more!</p>
        
        <h4>💼 Commerce Stream:</h4>
        <p>CA, CS, CMA, BBA, B.Com, Economics, and emerging fields like Data Analytics!</p>
        
        <h4>🎨 Arts/Humanities Stream:</h4>
        <p>Civil Services, Law, Journalism, Psychology, Social Work, and Creative fields!</p>
        
        <p><em>📝 Just type your stream (e.g., "I'm from Science stream") and I'll provide detailed career options!</em></p>
      </div>
    `;
  }
  
  getDefaultResponse(message) {
    const responses = [
      `I understand you're asking about career guidance. Could you be more specific? You can ask me about:
       <ul>
         <li>Career options for your stream</li>
         <li>Entrance exam dates and registration</li>
         <li>Top colleges in Maharashtra</li>
         <li>Salary expectations</li>
         <li>Skill development programs</li>
       </ul>`,
      
      `I'm here to help with career guidance after 12th standard! Try asking questions like:
       <ul>
         <li>"What engineering options are available?"</li>
         <li>"Tell me about medical entrance exams"</li>
         <li>"Which colleges are best for commerce?"</li>
         <li>"What are ITI course options?"</li>
       </ul>`,
       
      `I can help you explore career options! You can use the quick action buttons above or ask me about specific careers, exams, or colleges in Maharashtra. What would you like to know?`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  showTyping() {
    if (this.typingIndicator) {
      this.typingIndicator.classList.remove('hidden');
      this.scrollToBottom();
    }
  }
  
  hideTyping() {
    if (this.typingIndicator) {
      this.typingIndicator.classList.add('hidden');
    }
  }
  
  scrollToBottom() {
    if (this.chatMessages) {
      setTimeout(() => {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
      }, 100);
    }
  }
  
  clearChat() {
    if (this.chatMessages) {
      this.chatMessages.innerHTML = '';
    }
    this.conversationContext = [];
    this.userStream = null;
    this.showWelcomeMessage();
  }
  
  showHelp() {
    if (this.helpModal) {
      this.helpModal.classList.remove('hidden');
    }
  }
  
  closeModal() {
    if (this.helpModal) {
      this.helpModal.classList.add('hidden');
    }
  }
  
  shareChat() {
    if (navigator.share && this.conversationContext.length > 1) {
      const chatSummary = `Career Guidance Chat Summary:\n\n${this.conversationContext
        .filter(msg => msg.sender === 'bot')
        .map(msg => msg.content.replace(/<[^>]*>/g, ''))
        .join('\n\n')
        .substring(0, 500)}...`;
      
      navigator.share({
        title: 'Career Pathfinder Chat',
        text: chatSummary,
        url: window.location.href
      });
    } else {
      // Fallback - copy to clipboard
      const chatText = this.conversationContext
        .map(msg => `${msg.sender.toUpperCase()}: ${msg.content.replace(/<[^>]*>/g, '')}`)
        .join('\n\n');
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(chatText).then(() => {
          alert('Chat copied to clipboard!');
        }).catch(() => {
          alert('Unable to copy chat. Please manually copy the conversation.');
        });
      } else {
        alert('Unable to share chat. Please manually copy the conversation.');
      }
    }
  }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new ChatBot();
});