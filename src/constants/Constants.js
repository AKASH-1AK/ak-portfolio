// SVGs
import Apache from "../assets/apache.svg";
import Aws from "../assets/aws.svg";
import C from "../assets/C.svg";
import Docker from "../assets/docker.svg";
import Matpolib from "../assets/matpolib.svg";
import Git from "../assets/git.svg";
import Github from "../assets/github.svg";
import Google from "../assets/google.svg";
import Mongodb from "../assets/mongodb.svg";
import Mysql from "../assets/mysql.svg";
import Numpy from "../assets/numpy.svg";
import Postgresql from "../assets/postgresql.svg";
import Py from "../assets/py.svg";
import Seaborn from "../assets/seaborn.svg";
import Streamlit from "../assets/streamlit.png";
import Cloud1 from "../assets/cloud1.png";
import Cloud2 from "../assets/cloud2.png";
import Cloud3 from "../assets/cloud3.png";
import Cloud4 from "../assets/cloud4.png";
import Cloud5 from "../assets/cloud5.png";
import Cert1 from "../assets/AWS.png";
import Cert2 from "../assets/GC.png";
import Cert3 from "../assets/GHF.png";
import Cert4 from "../assets/GHA.png";
import Badge1 from "../assets/AWB.png";
import Badge2 from "../assets/AWQB.png";
import Badge3 from "../assets/GCB.png";
import Badge4 from "../assets/GHAB.png";
import Badge5 from "../assets/GHFB.png";
import ML1 from "../assets/ML1.png";
import ML2 from "../assets/ML2.jpg";
import ML3 from "../assets/ML3.jpg";
import ML5 from "../assets/ML5.png";
import Blog1 from "../assets/B1.png";
import Blog2 from "../assets/B2.png";
import Blog3 from "../assets/B3.png";
import Blog4 from "../assets/B4.png";
import Blog5 from "../assets/B5.png";

export const skills = [
  { url: C, skill: "C" },
  { url: Py, skill: "Python" },
  { url: Mysql, skill: "SQL" }, // Assuming you don't have a pandas logo, reusing py.svg
  { url: Numpy, skill: "Numpy" },
  { url: Matpolib, skill: "Matplotlib" }, // Same here — matplotlib logo is uncommon
  { url: Seaborn, skill: "Seaborn" },
  { url: Streamlit, skill: "Streamlit" },
  { url: Apache, skill: "Apache Airflow" },
  { url: Google, skill: "Google Cloud" },
  { url: Aws, skill: "AWS" },
  { url: Git, skill: "Git" },
  { url: Github, skill: "GitHub" },
  { url: Docker, skill: "Docker" },
  { url: Mongodb, skill: "MongoDB" },
  { url: Postgresql, skill: "PostgreSQL" },
];
export const cloudProjects = [
  {
    topic: "Flavors Bakes – Static Site on S3",
    githublink:
      "https://dev.to/akashabish/how-i-hosted-my-first-static-website-on-aws-s3-a-beginners-journey-with-flavors-bakes-2fm4",
    image: Cloud1,
    techStack: ["HTML", "CSS", "AWS S3", "AWS IAM"],
    description:
      "Hosted a static bakery website on AWS S3 with IAM and bucket policy configuration.",
  },
  {
    topic: "URL Shortener with Auto Scaling",
    githublink: "https://github.com/AKASH-1AK/URL-shortener",
    image: Cloud2,
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "AWS EC2",
      "Auto Scaling",
      "Load Balancer",
    ],
    description:
      "Deployed a URL shortener on EC2 with load balancer and auto scaling for high availability.",
  },
  {
    topic: "Micro-Blog with IaC on AWS",
    githublink: "https://github.com/AKASH-1AK/Micro-blog-app",
    image: Cloud3,
    techStack: ["Apache", "PHP", "MariaDB", "AWS EC2", "CloudFormation", "VPC"],
    description:
      "Used CloudFormation to deploy a PHP-based micro-blog with custom VPC and LAMP setup.",
  },
  {
    topic: "Task Manager – Full-Stack on AWS",
    githublink: "https://github.com/AKASH-1AK/Task-manager-RDS",
    image: Cloud4,
    techStack: ["Node.js", "Express", "MySQL (RDS)", "AWS EC2", "AWS S3"],
    description:
      "Deployed a full-stack task manager using EC2 backend, S3 frontend, and RDS database.",
  },
  {
    topic: "Serverless Quote Generator",
    githublink: "https://github.com/AKASH-1AK/Daily-quote-generator",
    image: Cloud5,
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch"],
    description:
      "Built a serverless daily quote app using Lambda, API Gateway, DynamoDB, and CloudWatch.",
  },
];

export const machineLearningProjects = [
  {
    topic: "Sentiment Analysis for Tamil Lyrics",
    githublink:
      "https://github.com/AKASH-1AK/AKASH-1AK-Tamil-songs-Sentiment-Analysis",
    image: ML1,
    techStack: [
      "NLP",
      "Tamil Language Processing",
      "Emotion Classification",
      "Annotation",
      "Machine Learning",
    ],
    description:
      "An NLP-based system to extract emotions from Tamil song lyrics or Sangam literature texts. Emotions are predicted based on ancient literary rules, enabling emotion-aware song recommendations and narrations.",
  },
  {
    topic: "Emotion-Based Song Recommendation System",
    githublink: "https://github.com/AKASH-1AK/Emotion-based-Song-Recomendation",
    image: ML2,
    techStack: [
      "AI",
      "Emotion Detection",
      "Navarasa",
      "Music Recommendation",
      "ML Algorithms",
    ],
    description:
      "An AI-powered music recommendation system that detects user emotions and suggests songs based on the Navarasa emotional framework, creating a personalized music experience.",
  },
  {
    topic: "Thiran Suzhiyam: A CALC",
    githublink: "https://github.com/AKASH-1AK/Thiran-Suzhiyam-A-CALC",
    image: ML3,
    techStack: [
      "Vosk",
      "Whisper",
      "CNN",
      "Image Recognition",
      "Voice Recognition",
      "Tamil Numerals",
      "Speech-to-Text",
    ],
    description:
      "An intelligent calculator that supports Tamil numerals, traditional units, and scientific calculations. It includes multilingual voice command features and handwritten digit recognition using CNN models.",
  },
  {
    topic: "Netflix Movies and TV Shows Data Analysis using SQL",
    githublink: "https://github.com/AKASH-1AK/netflix_movie_analysis_SQL",
    image: ML5,
    techStack: [
      "SQL",
      "Data Analysis",
      "Business Intelligence",
      "Data Visualization",
      "ETL",
    ],
    description:
      "Analyzed Netflix's movies and TV shows dataset using SQL to derive insights and answer key business questions, such as content trends, production patterns, and genre distributions.",
  },
];

export const certificates = [
  {
    image: Cert1,
    desc: "",
  },
  {
    image: Cert2,
    desc: "",
  },
  {
    image: Cert3,
    desc: "",
  },
  {
    image: Cert4,
    desc: "",
  },
];

export const badges = [
  {
    image: Badge1,
    desc: "",
  },
  {
    image: Badge2,
    desc: "",
  },
  {
    image: Badge3,
    desc: "",
  },
  {
    image: Badge4,
    desc: "",
  },
  {
    image: Badge5,
    desc: "",
  },
  
];
export const blogDetails = [
  {
    image: Blog1,
    link: "https://dev.to/akashabish/how-i-hosted-my-first-static-website-on-aws-s3-a-beginners-journey-with-flavors-bakes-2fm4",
    description:
      "🍰 How I Hosted My First Static Website on AWS S3 – A Beginner’s Journey with Flavors & Bakes",
  },
  {
    image: Blog2,
    link: "https://dev.to/akashabish/deploying-a-url-shortener-app-on-aws-ec2-with-auto-scaling-and-load-balancer-1955",
    description:
      "🚀 Deploying a URL Shortener App on AWS EC2 with Auto Scaling and Load Balancer",
  },
  {
    image: Blog3,
    link: "https://dev.to/akashabish/deploying-a-micro-blog-app-on-aws-ec2-using-vpc-subnets-via-cloudformation-part-1-2k1a",
    description:
      "💻 Deploying a Micro-Blog App on AWS EC2 Using VPC & Subnets via CloudFormation (Part 1)",
  },
  {
    image: Blog4,
    link: "https://dev.to/akashabish/deploying-the-micro-blog-app-on-ec2-setup-of-apache-php-and-mariadb-part-2-4fj5",
    description:
      "💻 Deploying the Micro-Blog App on EC2: Setup of Apache, PHP, and MariaDB (Part 2)",
  },
  {
    image: Blog5,
    link: "https://dev.to/akashabish/from-code-to-cloud-my-first-aws-full-stack-deployment-ec2-s3-rds-1i6l",
    description:
      "🧩 From Code to Cloud: My First AWS Full-Stack Deployment (EC2 + S3 + RDS)",
  },
];
