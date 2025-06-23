export interface EducationType {
  school: string;
  degree: string;
  date: string;
  grade: string;
  desc: string;
  img: string;
}

export const education: EducationType[] = [
  {
    school: "National Institute of Technology,Silchar",
    degree: "B.Tech in Electronics and Communication Engineering",
    date: "2023 - 2027",
    grade: "8.72 CGPA",
    desc: "Core subjects included Digital Electronics, Signal Processing, Communication Systems, and Embedded Systems.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2ngdVpqch_pC2GJFdx3xlDt6_PtNBLwXYW6Ut_S_Ug&s"
  },
  {
    school: "Sai RNS Academy",
    degree: "Higher Secondary Education",
    date: "2022- 2023",
    grade: "94.75%",
    desc: "Successfully completed Class 12 with a focus on Physics, Chemistry, and Mathematics, building a strong analytical and technical foundation. Developed critical thinking and problem-solving skills essential for engineering and technology-oriented fields",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3qFjZVRYkVLOYDstbAg0YedfBEqtOpfmtw&s"
  },
  {
    school: "Army Public School,Basistha",
    degree: "Matriculaton",
    date: "2020- 2021",
    grade: "95%",
    desc: "Completed Class 10 with a strong academic foundation in Mathematics, Science, Social Studies, and Languages. Gained essential problem-solving skills, analytical thinking, and discipline, which laid the groundwork for future academic success.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjInH9f8txYUpltw4yNitn_Dn2DeML8ML1g&s"
  }
];
