import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";

export const HERO_CONTENT = `Welcome to my portfolio! I'm a dynamic developer passionate about driving innovation and enhancing efficiency through technical prowess. With over 2.6 years of immersive experience, I've honed my skills across various technologies. My goal is to optimize workflows and improve data accessibility, leveraging my diverse skill set to drive impactful solutions.`;

export const ABOUT_TEXT = `I'm an enthusiastic and dedicated developer with a solid background in Python, SQL, and data visualization. With over 2 years of experience, I've mastered technologies like Numpy, Pandas, Matplotlib, Django, PostgreSQL, Linux and tools such as Tableau and AWS. My journey in software development started from a fascination with data-driven decision-making and a passion for streamlining workflows through automation. I excel in creating efficient solutions that enhance data accessibility and visualization, whether it's developing Python scripts for network configurations or designing user-friendly self-serve tools. I thrive in collaborative environments where I tackle complex challenges and drive innovation. Beyond work, I stay active exploring new technologies and creating projects. Always eager to learn and grow, I seize every opportunity to expand my skills and insights.`;

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
