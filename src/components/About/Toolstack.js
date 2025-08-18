import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCogs, FaProjectDiagram, FaGlobe } from "react-icons/fa";
import {
  SiLinux,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiFigma,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiJira,
  SiConfluence,
  SiApachehadoop,
  SiApachespark,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Toolstack() {
  const tools = [
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGitlab />, name: "GitLab" },
    { icon: <SiBitbucket />, name: "Bitbucket" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaCogs />, name: "CI/CD" },
    { icon: <FaProjectDiagram />, name: "Agile" },
    { icon: <TbApi />, name: "REST API" },
    { icon: <FaCogs />, name: "Automation" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaGlobe />, name: "Web Services" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiConfluence />, name: "Confluence" },
    { icon: <SiApachehadoop />, name: "Hadoop" },
    { icon: <SiApachespark />, name: "Spark" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{tool.name}</Tooltip>}
          >
            <span>{tool.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
