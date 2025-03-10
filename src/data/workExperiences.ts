import { WorkExperience } from "~/types/work";

export const workExperiences: WorkExperience[] = [
  {
    title: "Omegapoint Norge",
    description: "IT Consultant & Frontend Advocate",
    shortDescription: "Consultant with additional role as Frontend Advocate",
    content: `I've been with Omegapoint Norge since September 2021, where I work as an IT consultant. My job has taken me across different client projects, which is really exciting because I get to tackle new challenges all the time.

I've had my hands in all sorts of projects. From building slick frontends to developing cross-platform mobile apps and even diving into backend work when needed. It's been great getting to jump between different tech stacks and business domains. Each project has its own unique challenges, but that's what keeps the job interesting!

Since May 2024, I've also taken on an additional role as the Frontend Advocate within Omegapoint. This doesn't replace my consulting work. I'm still fully engaged with clients, but it's something I do alongside my regular projects. As the Frontend Advocate, I help keep our developers up to date with what's happening in the frontend world. I do this through:

- Giving talks about new technologies and approaches I've discovered
- Running workshops where we can get hands-on with new tools and techniques
- Organizing events where we can all share what we're learning
- Encouraging other developers to share their knowledge too

I really enjoy this dual role. The consulting work keeps me in the trenches, solving real-world problems for clients. Meanwhile, the advocate position lets me step back, reflect on what I'm learning, and share that knowledge with my colleagues. It's the best of both worlds!`,
    technologies:
      "React, TypeScript, Next.js, React Native, Flutter, .NET, C#, Azure, Frontend Architecture",
    logo: "/omegapoint_norge_logo.jpg",
    startDate: "Sep 2021",
    endDate: "Mar 2025",
  },
  {
    title: "Mastercard",
    description: "Frontend Developer",
    shortDescription:
      "Carveout project for internal and external applications including banking and payment systems",
    content: `
I am part of a small frontend team leading the effort to revamp the frontend of multiple internal applications. Our project aims to improve overall user experience and streamline the company's internal processes. It's important to note that this is a carveout operation where we are taking existing applications and rebranding or creating new frontends with Mastercard approved UI/UX.

To achieve this, I am utilizing a mix of modern and legacy technologies, with the specific tech stack depending on each application's current state. For completely new frontends, we are developing modern applications using React. The react applications are a breath of fresh air in the org and allow us in the frontend team to create fast and user friendly UI's. 
For existing applications, we are working with and improving legacy technologies such as Java Wicket, Velocity templates, JSP templates aswell as the old AngularJS and Vue. This involves maintaining and enhancing these systems to extend their functionality and improve user experience without a complete rewrite.

This approach allows integration with existing systems while allowing for modernization where possible and appropriate. It also requires a deep understanding of both current best practices and legacy systems, as well as adherence to Mastercard's UI/UX standards.
I am working closely with different teams and PO's to understand their unique requirements and ensure that the frontend aligns with their goals and Mastercard's guidelines. As the project progresses, I am continuously iterating and improving the frontend to deliver the best possible user experience, whether that involves incremental updates to legacy systems or more substantial overhauls using modern frameworks.`,
    technologies: "React, Java, TypeScript, Figma, Jest, Playwright",
    logo: "/mastercard-logo.png",
    startDate: "Mar 2023",
    endDate: "Mar 2025",
  },
  {
    title: "SOS Sikkerhetsgruppen",
    description: "React Native Developer",
    shortDescription: "Bluetooth-enabled mobile app development",
    content: `I had the opportunity to work on the latest Bluetooth technology and design the frontend of the application. My job involved implementing new features, fixing bugs, and improving the overall user experience. During my six-month tenure, I worked closely with the app design and development team to ensure that the app was user-friendly and easy to navigate. 
I also tested the app on multiple devices and platforms to ensure its compatibility and performance. One of the key challenges I faced during the project was implementing the Bluetooth technology in the app, which required extensive research and testing to ensure its smooth functioning. I also had to design the app's frontend to ensure that it was visually appealing and easy to use. 
    
After months of hard work and dedication, I was able to successfully publish the SOS Sikkerhetsgruppen app on both the Google Play Store and Apple App Store. Overall, my six-month experience as a React-Native mobile developer on the SOS Sikkerhetsgruppen app was a valuable learning experience. I gained hands-on experience in implementing the latest technologies and honed my skills in app design and development. I am grateful for the opportunity to have worked on this project and am looking forward to my next challenge in the field.`,
    technologies: "React Native, Xcode, Android Studio",
    logo: "/sikkerhetsgruppen.jpg.png",
    startDate: "Jan 2022",
    endDate: "Jan 2023",
  },
  {
    title: "DigitalKey app (Voglio)",
    description: "Flutter Developer",
    shortDescription: "Developed Flutter app with offline capabilities",
    content: `During my time at Voglio, I was part of the team responsible for developing a flutter app called DigitalKey. My primary role was to work with the backend team to ensure that the app's requirements were met with new API solutions. Working on DigitalKey was an incredibly rewarding experience. 
I was able to use my skills in frontend development to make changes to the app's user interface and design. I also contributed drawings and suggestions to the overall design of the app, which helped to improve its usability and functionality. 

One of the biggest challenges I faced while working on DigitalKey was creating the authentication flow and making offline mode for the application. This required a lot of communication and collaboration, but ultimately, we were able to create a well-functioning app that was able to deliver on its promise. Overall, working on DigitalKey was a great learning experience for me. 
I was able to use my skills in frontend development and design to help create a useful and user-friendly app. Additionally, the experience of working with a team helped me to develop my communication and collaboration skills, which will be invaluable in my future work.`,
    technologies: "Flutter",
    logo: "/digitalkey.jpg",
    startDate: "Jun 2022",
    endDate: "Nov 2022",
  },
  {
    title: "Paradisreiser",
    description: "Fullstack Developer",
    shortDescription: "Enhanced admin panel and mobile apps",
    content: `As a part of my work experience with Paradisreiser, I was tasked with adding new features to the company's admin panel. To accomplish this, I utilized React and MUI as libraries to implement the necessary interface, logic, and functions that the customer requested. One of the key challenges I faced was ensuring that the new features were properly integrated with the backend, which was written in .NET. I spent a significant amount of time working with the backend to coordinate the integration and ensure that everything worked seamlessly. 

In addition to the new features for the admin panel, I also made adjustments to the company's mobile apps, which were written in Flutter for both Android and iOS. This involved implementing the same features that I had added to the admin panel, as well as making any necessary adjustments to ensure that the mobile apps were user-friendly and consistent with the overall design of the company's products. Overall, my work experience with Paradisreiser allowed me to hone my skills in React and MUI, as well as my ability to coordinate with other teams and ensure that the final product met the customer's expectations. I am proud of the work I did, and I believe that it made a significant contribution to the success of the company.`,
    technologies: "React, C#, .NET, Flutter, Azure",
    logo: "/paradisreiser.jpg",
    startDate: "Sep 2022",
    endDate: "Nov 2022",
  },
  {
    title: "Encryption and Cloud Security",
    description: "Java Developer",
    shortDescription: "Developed encryption for public transport ticketing",
    content: `This project involved developing an encryption solution for public transport ticketing for Entur, a Norwegian mobility company, through Capgemini. The primary objective was to encrypt the generation of electronic tickets and manage QR codes for physical tickets, all hosted on the Azure Cloud platform. Our team was responsible for implementing crucial security measures, including: Encryption and decryption processes, digital signature creation and verification, key management for securing information transferred between various system components. 
  
The solution was built as a Spring Boot application, leveraging the Java Crypto API for cryptographic operations. We adopted a test-driven development (TDD) approach, which resulted in high test coverage through comprehensive unit testing and acceptance testing. Key aspects of the project: Utilized Azure Cloud for hosting and scalability, implemented robust security measures for sensitive ticketing data, ensured compliance with relevant data protection regulations, focused on creating a seamless and secure user experience for public transport passengers, collaborated closely with Entur and Capgemini stakeholders to meet specific requirements.`,
    technologies:
      "Java, Spring Boot, Java Cryptography API, Test Driven Development, Docker",
    logo: "/entur.jpg",
    startDate: "Jan 2021",
    endDate: "May 2021",
  },
];
