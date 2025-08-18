import React from "react";
import { FaReact, FaAws, FaDocker, FaJava, FaPython } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiKubernetes, SiAndroid, SiRedux } from "react-icons/si";
import Particle from "../Particle";

// const experiences = [
//   {
//     role: "Software Engineer Intern — EyCrowd Inc",
//     location: "Tempe, AZ",
//     date: "Jul 2025 – Present",
//     project: "Mobile App Development & QA",
//     bullets: [
//       "Conducted comprehensive app testing to identify and resolve bugs, enhancing stability and performance.",
//       "Integrated social media APIs with React Native for seamless account linking and sign-in.",
//       "Built friend management module with real-time requests and lists.",
//       "Implemented in-app photo/video capture with native APIs, solving performance and storage issues."
//     ],
//     highlights: ["Improved app stability", "Social API integration"],
//     tech: ["React Native", "Node.js", "AWS", "MongoDB", "APIs"]
//   },
//   {
//     role: "Graduate Software Engineer — Arizona State University",
//     location: "Tempe, AZ",
//     date: "Aug 2024 – May 2025",
//     project: "HR & Finance Systems",
//     bullets: [
//       "Built reusable React + TypeScript UI components, cutting content creation time by 50%.",
//       "Deployed apps on AWS (EC2, S3, Cognito) and containerized with Docker.",
//       "Implemented leave, financial calendar, and attendance systems with Spring Boot + MariaDB.",
//       "Created overtime management workflows reducing approval time significantly."
//     ],
//     highlights: ["50% faster content creation", "Improved payroll automation"],
//     tech: ["React", "TypeScript", "Spring Boot", "MariaDB", "AWS", "Docker"]
//   },
//   {
//     role: "Research Engineer — Hyundai Mobis",
//     location: "Hyderabad, India",
//     date: "Feb 2021 – Jul 2023",
//     project: "ADAS & Infotainment Systems",
//     bullets: [
//       "Built real-time chat with Spring Boot + Redis pub/sub, reducing latency to sub-200 ms.",
//       "Developed secure file transfers improving large-file success to 99%+.",
//       "Designed scalable microservices for IVI (navigation, streaming, diagnostics).",
//       "Containerized services with Docker, reducing deployment conflicts by 30%."
//     ],
//     highlights: ["99% file transfer success", "30% faster deployments"],
//     tech: ["Java", "Spring Boot", "Redis", "Docker", "Kubernetes"]
//   },
//   {
//     role: "Web Development Intern — Quanint Tech Soft",
//     location: "Hyderabad, India",
//     date: "Jun 2019 – Jul 2019",
//     project: "Fusion Duniya Website",
//     bullets: [
//       "Developed website using HTML, CSS, JavaScript, Bootstrap, React.js.",
//       "Improved engagement by 25% and reduced load time by 30%.",
//       "Created WordPress-based solutions, improving client satisfaction by 20%."
//     ],
//     highlights: ["25% more engagement", "30% faster load time"],
//     tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "WordPress"]
//   }
// ];

export default function Experience() {
  return (
    <section className="xp-wrap">
      <Particle />
      <h2 className="xp-heading">Work Experience</h2>
      <div className="xp-timeline">
        <span className="xp-dot" />
        <div className="xp-line" />

        <div className="xp-card">
          <h3><strong>Software Engineer Intern</strong> — EyCrowd Inc</h3>
          <p className="xp-sub">Tempe, AZ • Jul 2025 – Present</p>

          {/* <h4 className="xp-title">Mobile App Development & QA</h4> */}
          <ul className="xp-list">
            <li>Comprehensive app testing to resolve bugs and improve stability.</li>
            <li>Integrated social login via React Native + social APIs.</li>
            <li>Built friend management with real-time requests & lists.</li>
            <li>Implemented in-app photo/video capture with native APIs.</li>
          </ul>

          <div className="xp-metrics">
            <span className="xp-metric">Improved app stability</span>
            <span className="xp-metric">Social API integration</span>
          </div>

          <div className="xp-tags">
            <span className="xp-tag">React Native</span>
            <span className="xp-tag">Node.js</span>
            <span className="xp-tag">AWS</span>
            <span className="xp-tag">MongoDB</span>
            <span className="xp-tag">APIs</span>
          </div>
        </div>
      </div>
      <div className="xp-timeline">
        <span className="xp-dot" />
        <div className="xp-line" />
        <div className="xp-card">
          <h3><strong>Graduate Software Engineer</strong> — Arizona State University</h3>
          <p className="xp-sub">Tempe, AZ • Aug 2024 – May 2025</p>

          {/* <h4 className="xp-title">HR & Finance Systems</h4> */}
          <ul className="xp-list">
            <li>Built reusable React & TypeScript UI components, cutting content creation time by 50%.</li>
            <li>Reviewed 30+ GitHub PRs and resolved 10+ production bugs, improving app stability.</li>
            <li>Deployed services on AWS (EC2, S3, Cognito) and containerized apps with Docker.</li>
            <li>Implemented leave, financial calendar, and attendance systems with Spring Boot + MariaDB.</li>
            <li>Streamlined overtime management workflows, reducing approval turnaround time.</li>
          </ul>

          <div className="xp-metrics">
            <span className="xp-metric">50% faster content creation</span>
            <span className="xp-metric">Improved process automation</span>
          </div>

          <div className="xp-tags">
            <span className="xp-tag">React</span>
            <span className="xp-tag">TypeScript</span>
            <span className="xp-tag">Spring Boot</span>
            <span className="xp-tag">MariaDB</span>
            <span className="xp-tag">AWS</span>
            <span className="xp-tag">Docker</span>
          </div>
        </div>
      </div>
      <div className="xp-timeline">
        <span className="xp-dot" />
        <div className="xp-line" />
        <div className="xp-card">
          <h3><strong>Research Engineer</strong> — Hyundai Mobis</h3>
          <p className="xp-sub">Hyderabad, India • Feb 2021 – Jul 2023</p>

          {/* <h4 className="xp-title">ADAS & Infotainment Systems</h4> */}
          <ul className="xp-list">
            <li>Built real-time chat with Spring Boot + Redis pub/sub, reducing latency to &lt;200 ms.</li>
            <li>Implemented volatile messaging with TTL policies (SQL + Redis) to meet compliance.</li>
            <li>Enabled secure large-file transfers with 99%+ success rates using multipart uploads.</li>
            <li>Containerized backend services with Docker, reducing deployment conflicts by 30%.</li>
            <li>Developed scalable IVI microservices for navigation, streaming, and diagnostics.</li>
            <li>Managed CI/CD with Git, ensuring consistency and high code quality across releases.</li>
            <li>Implemented service discovery and dynamic config for IVI microservices.</li>
            <li>Collaborated with cross-functional teams to integrate APIs with vehicle head units.</li>
            <li>Automated system monitoring/debugging with Python scripts, reducing manual effort by 40%.</li>
            <li>Applied Agile practices (sprints, standups, retros) to drive continuous delivery.</li>
          </ul>

          <div className="xp-metrics">
            <span className="xp-metric">99%+ file transfer success</span>
            <span className="xp-metric">30% faster deployments</span>
            <span className="xp-metric">40% fewer manual interventions</span>
          </div>

          <div className="xp-tags">
            <span className="xp-tag">Java</span>
            <span className="xp-tag">Spring Boot</span>
            <span className="xp-tag">Redis</span>
            <span className="xp-tag">Docker</span>
            <span className="xp-tag">Kubernetes</span>
            <span className="xp-tag">Python</span>
          </div>
        </div>
      </div>
      <div className="xp-timeline">
        <span className="xp-dot" />
        <div className="xp-line" />
        <div className="xp-card">
          <h3><strong>Web Development Intern</strong> — Quanint Tech Soft</h3>
          <p className="xp-sub">Hyderabad, India • Jun 2019 – Jul 2019</p>

          {/* <h4 className="xp-title">Fusion Duniya Website</h4> */}
          <ul className="xp-list">
            <li>Developed a website using HTML, CSS, JavaScript, Bootstrap, and React.js.</li>
            <li>Improved engagement by 25% and reduced page load time by 30%.</li>
            <li>Implemented front-end on WordPress, enhancing client satisfaction by 20%.</li>
            <li>Optimized UX for 1,000+ monthly visitors through tailored solutions.</li>
          </ul>

          <div className="xp-metrics">
            <span className="xp-metric">25% more engagement</span>
            <span className="xp-metric">30% faster load time</span>
            <span className="xp-metric">20% higher client satisfaction</span>
          </div>

          <div className="xp-tags">
            <span className="xp-tag">HTML</span>
            <span className="xp-tag">CSS</span>
            <span className="xp-tag">JavaScript</span>
            <span className="xp-tag">React</span>
            <span className="xp-tag">Bootstrap</span>
            <span className="xp-tag">WordPress</span>
          </div>
        </div>
      </div>
    </section>
  )
}
