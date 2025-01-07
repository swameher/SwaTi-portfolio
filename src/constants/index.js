import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";

export const HERO_CONTENT = `Hi, I’m a Data Analyst with over 2.1 years of experience. I specialize in transforming data into actionable insights to drive business growth. From sales analysis and customer behaviour forecasting to financial reporting. Explore my portfolio to see how I use Power BI, Python, and SQL to solve real-world data challenges.`;

export const ABOUT_TEXT = `
Hi, I'm a Data Analyst with a background in data analysis, business intelligence, and predictive modelling. With over 2.1 years of experience at Capgemini Engineering, I've worked with industry leaders like Cisco to turn complex datasets into meaningful insights that help drive business decisions.
I’m passionate about using data to solve real-world problems, from analyzing sales trends to optimizing financial strategies. Skilled in SQL, Python, and Power BI, I create dashboards, build models, and deliver actionable insights.
I thrive in collaborative environments, continuously learning and contributing to impactful projects. I’m always excited about making data-driven decisions that drive business growth.
In my free time, I stay updated on emerging data science trends and contribute to open-source projects. Feel free to explore my portfolio and reach out for collaboration!
`; 

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Data Analyst",
    company: "Capgemini Engineering",
    description: `Leveraged advanced analytics tools like Python, SQL, and Power BI to analyze and visualize complex datasets, driving actionable insights for Cisco. Collaborated with cross-functional teams to optimize business processes and deliver automated reporting solutions.`,
    technologies: ["Python", "SQL", "Power BI", "Data Analysis", "Tableau", "Machine Learning"],
  },
  {
    year: "Jan 2024 - Present",
    role: "Full Stack Data Science Apprenticeship",
    company: "AlmaBetter",
    description:
      `Completed a 6-month full-stack data science apprenticeship at AlmaBetter, mastering Python, SQL, Machine Learning, and Power BI. Built end-to-end projects focused on data analysis, predictive modeling, and interactive dashboards.`,
    technologies: ["Python", "PostgreSQL", "Power BI", "Tableau", "Machine Learning"]
  }
];

export const PROJECTS = [
  {
    title: "Customer Churn Prediction Model",
    image: project1,
    description:
      "Developed a machine learning model to predict customer churn using Python, analyzing key factors like customer behavior and demographics. Leveraged classification algorithms to achieve accurate predictions and actionable insights. Check out the similar project in GitHub",
    technologies: ["Python", "Tableau", "Machine Learning", "Data Preprocessing", "Statistical Analysis", "Model Evaluation", "SQL"],
  },
  {
    title: "Sales Trend Analysis Dashboard",
    image: project2,
    description:
      "Developed a dashboard to analyze sales trends and customer behavior, providing actionable insights into revenue patterns and purchasing habits. Used Power BI to create dynamic visualizations and Python for advanced data analysis.",
    technologies: ["Python", "Tableau", "KPIs", "Data-Cleaning", "Statistical Analysis"],
  },
];

export const CONTACT = {
  email: "swati.meher10@gmail.com"
};
