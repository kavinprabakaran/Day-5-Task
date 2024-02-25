const resumeData = {
    "name": "kavin prabakaran",
    "title": "resume loop",
    "contact": {
      "email": "kavin@123",
      "phone": "**********",
      "linkedin": "kavin.linked",
      "github": "github.com"
    },
    "education": [
      {
        "degree": "Master Electrical and electronic",
        "school": "Good School",
        "year": 2020
      },
      {
        "degree": "BE EEE",
        "school": "Good Institute",
        "year": 2024
      }
    ],
    "experience": [
      {
        "title": "Senior system Engineer",
        "company": "Tech World.",
        "year": "2024 - Present",
        "responsibilities": [
          "Developing advanced natural language processing models.",
          
        ]
      },
      {
        "title": "good Tittle",
        "company": "Innovative ",
        "year": "Summer 2020",
        "responsibilities": [
          "Conducting research on language understanding algorithms.",
          
        ]
      }
    ],
    "skills": [
      "Natural Language Processing",
      "Machine Learning",
      "Python",
      "Deep Learning",
      "TensorFlow",
      "PyTorch"
    ],
    "languages": [
      "English (Fluent)",
      "French (Intermediate)"
    ],
    "interests": [
      "Artificial Intelligence",
      "Data Science",
      "Problem Solving",
      "Technology Trends"
    ]
  };
  
  // Using 'for' loop
  console.log("Using 'for' loop:");
  for (let key in resumeData) {
    console.log(`${key}: ${resumeData[key]}`);
  }
  
  // Using 'for in' loop
  console.log("\nUsing 'for in' loop:");
  for (let section in resumeData) {
    if (Array.isArray(resumeData[section])) {
      console.log(`${section}:`);
      for (let item of resumeData[section]) {
        for (let key in item) {
          console.log(`  ${key}: ${item[key]}`);
        }
      }
    } else {
      console.log(`${section}: ${resumeData[section]}`);
    }
  }
  
  // Using 'for of' loop
  console.log("\nUsing 'for of' loop:");
  for (let section of Object.entries(resumeData)) {
    if (Array.isArray(section[1])) {
      console.log(`${section[0]}:`);
      for (let item of section[1]) {
        for (let entry of Object.entries(item)) {
          console.log(`  ${entry[0]}: ${entry[1]}`);
        }
      }
    } else {
      console.log(`${section[0]}: ${section[1]}`);
    }
  }
  
  // Using 'forEach' for arrays
  console.log("\nUsing 'forEach' for arrays:");
  ["education", "experience", "skills", "languages", "interests"].forEach(section => {
    if (Array.isArray(resumeData[section])) {
      console.log(`${section}:`);
      resumeData[section].forEach(item => {
        for (let key in item) {
          console.log(`  ${key}: ${item[key]}`);
        }
      });
    } else {
      console.log(`${section}: ${resumeData[section]}`);
    }
  });
  