import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";

export const HERO_CONTENT = `Hi, I’m a Data Analyst with 2.1 years of experience. I specialize in transforming data into actionable insights to drive business growth. From sales analysis and customer behaviour forecasting to financial reporting. Explore my portfolio to see how I use Power BI, Python, and SQL to solve real-world data challenges.`;

export const ABOUT_TEXT = `
<p>Hi, I'm a Data Analyst with a background in data analysis, business intelligence, and predictive modeling. With over 2 years of experience at Capgemini Engineering, I've worked with industry leaders like Cisco to turn complex datasets into meaningful insights that help drive business decisions.</p>

<p>I’m passionate about using data to solve real-world problems, from analyzing sales trends to optimizing financial strategies. Skilled in SQL, Python, and Power BI, I create dashboards, build models, and deliver actionable insights.</p>

<p>I thrive in collaborative environments, continuously learning and contributing to impactful projects. I’m always excited about making data-driven decisions that drive business growth.</p>

<p>In my free time, I stay updated on emerging data science trends and contribute to open-source projects. Feel free to explore my portfolio and reach out for collaboration!</p>
`; 

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "Capgemini Engineering",
    description: `Experienced software engineer adept in Python, Django, and REST API development. Proficient in building scalable web applications, designing robust backend architectures, and implementing efficient RESTful services. Passionate about leveraging technology to solve complex challenges and deliver high-quality software solutions.`,
    technologies: ["Python", "Django", "REST", "API", "GitHub"],
  },
  {
    year: "2023 - 2024",
    role: "Freelancing",
    description:
      `Experienced freelance engineer proficient in Python, Pandas, and Numpy for data wrangling. Specializes in developing custom data analytics tools, automating ETL processes, and implementing advanced data analysis techniques to deliver scalable data solutions enabling informed business decisions.`,
    technologies: ["Python", "Numpy", "Pandas", "ETL", "Data Manipulation"]
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website serves as a digital showcase for presenting my projects, skills, and contact details. This dynamic site is built using a modern stack including HTML for structure, React for interactive components, Tailwind CSS for sleek styling, Three.js for immersive 3D graphics, and framer-motion for smooth animations. It highlights my diverse skill set and provides visitors with an engaging platform to explore my work and connect with me.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Three.js", "Framer-motion"],
  },
  {
    title: "Evaluation of Standard Classifiers for Protein Subcellular Localization ",
    image: project2,
    description:
      "This project explores protein localization's significance in cell function and drug development. It compares three machine learning classifiers (CART, KNN, SVM) using the Hold-out method on the Yeast Dataset. Evaluation metrics include Accuracy, Macro-average Precision, Recall, and F1 Score. SVM exhibits superior Accuracy and Precision, while CART excels in Recall and F1 Score. Implemented in R language via R-studio, this study underscores SVM's efficacy in predicting protein location.",
    technologies: ["Machine Learning Classifiers", "Data Analysis and Evaluation Metrics", "Python"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7978556723 ",
  email: "swati.meher10@gmail.com",
};
