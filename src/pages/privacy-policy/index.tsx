import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import { MdArrowRight, MdEmail, MdLocationPin } from "react-icons/md";

const privacy = [
  {
    title: "1. INTRODUCTION",
    description:
      "Welcome to the Privacy Policy of Edoubleone ('Company,' 'we,' 'us,' or 'our'). We are a global software solutions company headquartered in Maryland, USA, with a diverse team of experts across the world. Since 2015, we have empowered countless clients to achieve their goals by delivering tailored, high-quality, scalable, and cost-effective software solutions.",
    paragraph:
      "We value the privacy of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our Services. Every project we undertake is approached with precision, innovation, and a commitment to lasting impact. By using our website or Services, you agree to the collection and use of information in accordance with this policy.",
  },
  {
    title: "2. INFORMATION WE COLLECT",
    description:
      "We collect information that helps us provide you with the best software solutions. The products we create must adapt as your business changes, allowing you to start small and easily scale up. The information we collect enables this tailored approach. We collect several different types of information, including:",
  },
  {
    title: "A. Personal Data",
    description:
      "While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ('Personal Data'). This may include, but is not limited to:",
    list: [
      "First name and last name",
      "Business email address",
      "Phone number",
      "Company Name",
      "Job Title",
      "Mailing/Billing address",
      "Project details and requirements",
    ],
    paragraph:
      "We collect this information when you request a consultation, fill out a contact form, or engage with us for Services.",
  },
  {
    title: "B. Usage Data and Cookies",
    description:
      "We also collect information on how the Service is accessed and used ('Usage Data'). This data includes technical information, such as:",
    list: [
      "Your computer's Internet Protocol (IP) address",
      "Browser type and version",
      "The pages of our website that you visit",
      "The time and date of your visit",
      "The time spent on those pages",
      "Unique device identifiers and other diagnostic data",
    ],
    paragraph:
      "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "3. HOW WE USE YOUR INFORMATION",
    description:
      "Edoubleone uses the collected data for various purposes, all aimed at delivering Excellence. Specifically, we use your information to:",
    list: [
      "Provide and Maintain Our Services: Including delivering tailored software solutions that scale with your business demand.",
      "Communicate With You: Including responding to your inquiries, providing project updates, and sending you administrative information.",
      "Improve Our Services: Analyzing Usage Data helps us optimize our website performance and innovative solutions.",
      "Customer Support: Addressing technical issues or challenges you may face.",
      "Collaboration: Working closely with you to ensure every solution matches your vision.",
      "Compliance and Legal Obligations: Meeting regulatory requirements or responding to lawful requests.",
    ],
  },
  {
    title: "4. DISCLOSURE OF DATA",
    description:
      "As a global software company headquartered in Maryland, we do not sell your Personal Data. However, we may disclose your information under the following circumstances:",
  },
  {
    title: "A. Global Business Operations",
    description:
      "We may share your information with our diverse team of experts located across the world, but only to the extent necessary to deliver your requested solutions. This internal transfer is governed by strict confidentiality agreements.",
  },
  {
    title: "B. Service Providers",
    description:
      "We may employ third-party companies and individuals (e.g., cloud hosting services like AWS, billing platforms, or analytics providers) to facilitate our Services. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
  },
  {
    title: "C. Legal Requirements",
    description:
      "We may disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), particularly in compliance with US and Maryland state laws.",
  },
  {
    title: "5. DATA SECURITY",
    description:
      "The security of your data is paramount to us, matching our core value of delivering precision and having a real impact. We use industry-standard technical and organizational security measures to protect your Personal Data.",
    paragraph:
      "However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.",
  },
  {
    title: "6. GLOBAL DATA TRANSFERS (GDPR/UK GDPR)",
    description:
      "If you are located outside the United States and provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
    paragraph:
      "For individuals in the European Economic Area (EEA) or the United Kingdom, where we transfer data from those regions to the US, we ensure appropriate safeguards are in place, such as using Standard Contractual Clauses (SCCs) approved by the European Commission, to ensure your data receives an equivalent level of protection.",
  },
  {
    title: "7. YOUR DATA PROTECTION RIGHTS",
    description:
      "Depending on your location (such as Maryland, California, or the EEA/UK), you may have certain data protection rights, including:",
    list: [
      "The Right to Access: You have the right to request copies of your personal data.",
      "The Right to Rectification: You have the right to request that we correct any information you believe is inaccurate.",
      "The Right to Erasure (Right to be Forgotten): You have the right to request that we erase your personal data under certain conditions.",
      "The Right to Restrict Processing: You have the right to request that we restrict the processing of your personal data.",
      "The Right to Object: You have the right to object to our processing of your personal data.",
      "The Right to Data Portability: You have the right to request that we transfer the data we have collected to another organization.",
    ],
    paragraph:
      "To exercise any of these rights, please contact us using the information in Section 9.",
  },
  {
    title: "8. MODIFICATIONS TO THIS POLICY",
    description:
      "Edoubleone reserves the right to modify or update this Privacy Policy at any time, reflecting our need to innovate and adapt in the digital world. The 'Last Updated' date at the top of this policy will reflect when changes were made. We encourage you to review this page periodically for any changes.",
  },
  {
    title: "9. CONTACT INFORMATION",
    description:
      "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our support team:",
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

export default function PrivacyPolicy() {
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
          Privacy Policy
        </Typography>

        {privacy.map((section, index) => (
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
                          <MdEmail size={20} className="text-[#F0F0F0]"/>
                        ) : isAddressItem ? (
                          <MdLocationPin size={20} className="text-[#F0F0F0]" />
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
