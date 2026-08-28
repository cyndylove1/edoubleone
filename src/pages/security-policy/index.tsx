import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import { MdArrowRight, MdEmail, MdLocationPin } from "react-icons/md";

const security = [
  {
    title: "1. INTRODUCTION",
    description:
      "Welcome to the Security Policy of Edoubleone ('Edoubleone,' 'we,' 'us,' or 'our'). As a global software solutions company headquartered in Maryland, USA, with a diverse team of experts across the world, we understand that security is a non-negotiable component of modern digital infrastructure.",
    paragraph:
      "This Security Policy outlines our unwavering commitment to protecting the confidentiality, integrity, and availability of our information systems, our client's proprietary data, and the digital products we build. We approach every project with the precision and excellence necessary to ensure a lasting, secure impact.",
  },
  {
    title: "2. POLICY OBJECTIVE",
    description:
      "The primary objective of this policy is to establish a robust security framework that mitigates risks and builds trust. This policy is aligned with our core values:",
    list: [
      "Innovation: Utilizing future-ready security technologies and practices.",
      "Collaboration: Working closely with clients to ensure their specific security needs are met.",
      "Excellence: Delivering high-quality solutions focused on precision and secure impact.",
    ],
  },
  {
    title: "3. COMPLIANCE & GOVERNANCE",
    description:
      "Edoubleone adheres to relevant legal, regulatory, and contractual obligations. As a Maryland-headquartered entity, we are guided by:",
    list: [
      "The Maryland Personal Information Protection Act (MPIPA) regarding the protection of personal data.",
      "Relevant federal standards for data handling and breach notification.",
      "Contractual security requirements specified by our global clients.",
    ],
    paragraph:
      "We maintain an internal security governance structure to oversee the implementation, enforcement, and continuous improvement of our security practices.",
  },
  {
    title: "4. TECHNICAL SECURITY CONTROLS",
    description:
      "We implement layered technical controls to safeguard our environment and your data:",
  },
  {
    title: "4.1. Network Security",
    list: [
      "We utilize corporate-grade firewalls and Intrusion Detection/Prevention Systems (IDS/IPS) to manage and monitor network traffic.",
      "All corporate endpoints (laptops, servers) are protected with advanced anti-malware and endpoint detection and response (EDR) solutions.",
      "Data transmission between users, the website, and our backend systems is encrypted using robust Transport Layer Security (TLS/SSL) protocols.",
    ],
  },
  {
    title: "4.2. Access Control",
    list: [
      "Principle of Least Privilege: Access to sensitive data and systems is granted only to personnel who require it for their specific role, minimizing unnecessary access.",
      "Authentication: We enforce complex password requirements. Multi-Factor Authentication (MFA) is mandatory for accessing all critical systems and client environments.",
      "Access Reviews: We conduct regular reviews of user access rights to ensure they remain appropriate.",
    ],
  },
  {
    title: "4.3. Data Protection (At Rest and in Transit)",
    list: [
      "Sensitive client data, source code, and intellectual property are encrypted when stored (encryption at rest) using industry-standard algorithms.",
      "We utilize secure file transfer protocols (SFTP) for the exchange of data with clients.",
    ],
  },
  {
    title: "5. SECURE SOFTWARE DEVELOPMENT LIFECYCLE (SSDLC)",
    description:
      "Our core competency is building scalable, well-optimized software solutions that grow with your business. To ensure these products are future-ready, security is integrated from the start small phase through the scale up phase.",
    list: [
      "Security by Design: Security requirements are established during the initial design and architecture phase.",
      "Secure Coding Standards: Our global developers follow recognized secure coding standards (e.g., OWASP Top 10) to mitigate common vulnerabilities.",
      "Vulnerability Testing: We perform automated static and dynamic analysis (SAST/DAST) on code before deployment. Regular manual penetration testing is conducted on critical applications.",
    ],
  },
  {
    title: "6. OPERATIONAL SECURITY PRACTICES",
    description: "6.1. Patch Management",
    paragraph:
      "We maintain a rigorous patch management process to ensure all software, operating systems, and application dependencies are promptly updated with the latest security fixes.",
  },
  {
    title: "6.2. Logging and Monitoring",
    description:
      "We collect and retain detailed logs from servers, applications, and security devices. These logs are centrally monitored to detect anomalous behavior and potential security incidents.",
  },
  {
    title: "6.3. Personnel Security",
    description:
      "All Edoubleone employees and contractors must undergo background checks (where legally permissible) and sign comprehensive Non-Disclosure Agreements (NDAs).",
  },
  {
    title: "7. SECURITY INCIDENT RESPONSE",
    description:
      "Edoubleone maintains a dedicated Security Incident Response Plan (SIRP). In the event of a confirmed security breach that affects client data, we will:",
    list: [
      "Execute immediate containment and mitigation steps.",
      "Notify affected clients as soon as reasonably possible, adhering to all legal requirements for breach notification (e.g., under MPIPA).",
      "Coordinate with legal and forensic experts to investigate the root cause.",
    ],
  },
  {
    title: "8. CLIENT RESPONSIBILITY (SHARED SECURITY MODEL)",
    description:
      "While Edoubleone takes immense responsibility for securing our infrastructure and the solutions we deliver, clients hold certain responsibilities in a shared security model:",
    list: [
      "User Credentials: Clients are responsible for the security of credentials they create within the applications we build (e.g., user passwords).",
      "Operational Security: Clients must manage the security of their own internal networks and devices used to access the software.",
    ],
  },
  {
    title: "9. CONTACT INFORMATION",
    description:
      "If you have any questions about our security practices, or if you need to report a potential security vulnerability, please contact us:",
    list: [
      "Email: support@edoubleone.net",
      "Address: 7404 Executive Place Lanham, MD 20706, USA",
    ],
  },
];

const THEME_COLORS = {
  bg: "#050505",
  title: "#ff6b01",
  sectionTitle: "#E5E7EB",
  text: "#9CA3AF",
  icon: "#607d8b",
};

export default function SecurityPolicy() {
  return (
    <Box
      component="section"
      className="policy-section"
      sx={{
        pt: "7rem",
        px: { xs: 2, md: 3, xl: 6 },
        pb: 10,
        backgroundColor: THEME_COLORS.bg,
      }}
    >
      <Box
        className="policy-header"
        sx={{
          maxWidth: "3xl",
          mx: "auto",
          mb: 12,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.2rem" },
            fontWeight: 600,
            color: THEME_COLORS.title,
            leadingTight: 1.25,
            pb: 6,
          }}
        >
          Security Policy
        </Typography>

        {security.map((section, index) => (
          <Box key={index} sx={{ mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.0625rem", md: "1.4375rem" },
                fontWeight: 500,
                color: THEME_COLORS.sectionTitle,
                mb: 6,
                letterSpacing: "0.5px",
              }}
            >
              {section.title}
            </Typography>

            {section.description && (
              <Typography
                variant="body1"
                sx={{
                  color: THEME_COLORS.text,
                  fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                  mb: 4,
                  fontWeight: 300,
                  leadingRelaxed: 1.625,
                }}
              >
                {section.description}
              </Typography>
            )}

            {section.list && (
              <List sx={{ mt: 2, spaceY: 4 }}>
                {section.list.map((item, i) => {
                  const isEmailItem = item.startsWith("Email:");
                  const isAddressItem = item.startsWith("Address:");

                  const typographyStyles = {
                    color: THEME_COLORS.text,
                    fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                    fontWeight: 300,
                    pt: "2px",
                    leadingRelaxed: 1.625,
                    textDecoration: "none",
                  };

                  return (
                    <ListItem
                      key={i}
                      sx={{ alignItems: "flex-start", pb: 0, pt: 0, mb: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: 28, mt: "6px" }}>
                        {isEmailItem ? (
                          <MdEmail size={20} className="text-[#F0F0F0]" />
                        ) : isAddressItem ? (
                          <MdLocationPin size={20} className="text-[#f0f0f0]" />
                        ) : (
                          <MdArrowRight size={20} className="text-[#F0F0F0]" />
                        )}
                      </ListItemIcon>

                      {isEmailItem ? (
                        <Typography
                          variant="body2"
                          component="a"
                          href={`mailto:${item.replace("Email: ", "").trim()}`}
                          sx={{
                            ...typographyStyles,
                            transition: "color 0.3s ease-in-out",
                            "&:hover": {
                              color: THEME_COLORS.title,
                              cursor: "pointer",
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      ) : (
                        <Typography variant="body2" sx={typographyStyles}>
                          {item}
                        </Typography>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            )}

            {section.paragraph && (
              <Typography
                variant="body2"
                sx={{
                  color: THEME_COLORS.text,
                  fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                  mb: 4,
                  fontWeight: 300,
                  leadingRelaxed: 1.625,
                  mt: 2,
                }}
              >
                {section.paragraph}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
