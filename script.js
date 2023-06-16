
const resume = {
  firstName: 'Saurabh',
  lastName: 'Sanap',
  jobTitle: 'Full Stack Developer',
  city: 'Nashik',
  postalCode: '422606',
  country: 'India',
  phone: '+91 9579411158',
  email: 'sssanap218@gmail.com',
  education: [
    {
      school: 'Savitribai Phule Pune University',
      degree: 'Bachelor',
      graduationDate: '2021',
      description: 'Bachelors of Business Administration and Computer Applications'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/Sonooo'
    },
    {
      label: 'LinkedIn',
      link: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png'
    },
    {
      label: 'Website',
      link: 'https://saurabhsanap.netlify.app/'
    },
    {
      label: 'Side projects',
      link: 'https://github.com/Sonooo'
    }
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'NodeJS',
    'ReactJS',
    'React Native',
    'Ionic',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'AWS',
  ],
  languages: ['English', 'Hindi','Marathi'],
  professionalSummary: `Full Stack Developer with hands-on experience working with SPAs using ReactJS and a willing to learn more. Skilled in JavaScript (ES6), Redux, Appwrite, Bootstrap, Graphql, REST API, MongoDB, ExpressJS, Heroku and AWS with multiple side projects.`,
  employmentHistory: [
    {
      jobTitle: 'Full-Stack Developer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      employer: 'TCS',
      city: 'Pune',
      achievements: [
        'Appreciation by Team - Tata Consultancy Services    You have been a significant part of our team and I would like to take this opportunity to thank you for the commitmenttowards delivering great work ',
      ]
    },
  ],
  PersonalProjects: [
    {
      Title: 'Text Transform',
      startDate: 'Jan 2022',
      endDate: 'Present',
      url: 'https://sonooo.github.io/learnreact/',
      giturl: 'https://github.com/Sonooo/learnreact',
      description: [
        'Utility Web App built in react for transforming text into different formats such as binary and performing actions such as removing extra spaces predicting expected time of reading,I have also added a theme switcher using this user can see the application in different colors other than dark mode'
      ]
    },
    {
      Title: 'Ecommerce Application for Online Tshirt Store with Payment gateway',
      startDate: 'July 2021',
      endDate: 'Present',
      url: 'http://projfrontend.vercel.app/',
      giturl: 'https://github.com/Sonooo/projfrontend',
      description: [
        'I have developed this application for selling online tshirts, in back-end i have used node expressjs and mongodb, for authentication i have used JWT, used Braintree as payment gateway. i have created project frontend in reactjs, used bootstrap to make it look better and responsive'
      ]
    },
    {
      Title: 'News Portal',
      startDate: 'July 2022',
      endDate: 'Present',
      url: 'https://github.com/Sonooo/News-API-handling',
      giturl: 'https://github.com/Sonooo/News-API-handling',
      description: [
        'News App to show news according to country and language '
      ]
    },
  ],
  photo: 'https://media-exp1.licdn.com/dms/image/D4D03AQH9wjsZfuFUeg/profile-displayphoto-shrink_800_800/0/1666614428428?e=1674691200&v=beta&t=FsFVxLv5PdCTQiCmMUsbmEXJ7yJ7mM27F3ydOykMz2A',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
