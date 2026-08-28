import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import { MdArrowRight, MdEmail, MdLocationPin } from "react-icons/md";

const terms = [
  {
    title: "1. ACCEPTANCE OF TERMS",
    content: [
      'These Terms and Conditions of Service ("Terms" or "Agreement") constitute a legally binding agreement between you ("Client" or "You") and Edoubleone ("Company," "we," "us," or "our"). These Terms govern your access to and use of our website, as well as the provision of any software solutions, digital product development, technical consulting, and related services (collectively, the "Services").',
      'By engaging our Services, signing a Statement of Work ("SOW"), or navigating our website, you agree to be bound by these Terms. If you do not agree to all of these Terms, you are prohibited from using the Services.',
    ],
  },
  {
    title: "2. WHO WE ARE & THE SERVICES",
    content: [
      "Edoubleone is a global software solutions company headquartered in Maryland, USA, with a diverse team of experts across the world. Since 2015, we have empowered clients to achieve their goals by delivering tailored, high-quality, scalable, and cost-effective digital products and software solutions.",
      'We specialize in an iterative, "start small" development approach that focuses on optimization and the ability to scale up efficiently to meet the increasing demand of our clients\' customers. Every project is approached with precision, innovation, and a commitment to lasting impact.',
    ],
  },
  {
    title: "3. ENGAGEMENT MODEL (SOW)",
    content: [
      'The precise details, deliverables, timelines, budget, and scope of each project will be defined in a separate Statement of Work ("SOW") which must be signed by both parties. Any conflicts between the SOW and these general Terms shall be resolved in favor of the SOW.',
      "Our iterative development philosophy relies on mutual Collaboration, a core value of Edoubleone. The Client must remain engaged and provide timely feedback to ensure the final product matches your vision and produces results.",
    ],
  },
  {
    title: "4. INTELLECTUAL PROPERTY (IP) RIGHTS",
    content: [
      "We believe true Excellence involves delivering precise solutions with a lasting impact. The following provisions clarify the ownership of assets created during the development lifecycle:",
    ],
  },
  {
    title: "4.1. Pre-Existing IP",
    content: [
      'Edoubleone retains exclusive ownership of all proprietary code, pre-existing libraries, "start small" modules, methodologies, templates, tools, and other IP that existed before the project (the "Edoubleone Platform IP").',
    ],
  },
  {
    title: "4.2. Work Product",
    content: [
      'Upon final, full payment by the Client (and not before), Edoubleone assigns to the Client all right, title, and interest in and to the custom source code and deliverables developed specifically for the Client under an SOW (the "Client Work Product").',
    ],
  },
  {
    title: "4.3. Mutual License",
    content: [
      "Client to Edoubleone: The Client grants us a worldwide, non-exclusive, non-transferable license to use Client data and IP solely as necessary to provide the Services defined in the SOW.",
      "Edoubleone to Client: To the extent the Client Work Product contains any Edoubleone Platform IP, we grant the Client a perpetual, royalty-free, worldwide, non-assignable license to use, maintain, and modify such Platform IP solely within the final deliverable.",
    ],
  },
  {
    title: "5. DATA PROTECTION & COMPLIANCE",
    content: [
      "Because we are a Maryland-headquartered company with a global team and clients, we take data protection seriously.",
    ],
  },
  {
    title: "5.1. Compliance",
    content: [
      "Edoubleone will process personal data in compliance with:",
      "The Maryland Personal Information Protection Act (MPIPA).",
      "Relevant federal US regulations.",
      "If applicable, the EU General Data Protection Regulation (GDPR) and the UK GDPR where we process the data of individuals located in those regions.",
    ],
  },
  {
    title: "5.2. Client Responsibility",
    content: [
      "You are responsible for obtaining all necessary consents and authorizations required under the law for us to process any personal data you provide to us (such as data of your own customers) in the course of providing our Services.",
    ],
  },
  {
    title: "6. WARRANTIES & LIABILITIES",
    content: [
      "6.1. Development Standard",
      "We warrant that we will perform the Services with the Excellence, precision, and innovative approach that are our core values, in a professional and workmanlike manner.",
    ],
  },
  {
    title: "6.2. Warranty Period",
    content: [
      "We provide a limited warranty period of days from the acceptance of the final deliverable, during which we will fix, at no cost, any confirmed software defects that deviate from the SOW specifications.",
    ],
  },
  {
    title: "6.3. Limitations of Liability",
    content: [
      'Edoubleone builds scalable software, but the "digital world requires products to adapt as business changes". Because digital products involve complex third-party tools and evolving platforms, the following limitations apply:',
      'Warranty Disclaimer: Except for the limited warranty in Section 6.2, all Services are provided "AS IS" and "WITH ALL FAULTS." We do not warrant that the software will be uninterrupted, error-free, or 100% secure from all cyber threats.',
      "Liability Cap: The total, aggregate liability of Edoubleone to the Client for all claims arising out of this Agreement or the Services shall not exceed the total amount of fees paid by the Client to us under the specific SOW causing the claim.",
    ],
  },
  {
    title: "7. GOVERNING LAW & JURISDICTION",
    content: [
      "This Agreement and all Services shall be governed by, construed, and enforced in accordance with the laws of the State of Maryland, USA, without regard to its conflict of law principles.",
      "The parties irrevocably agree that the exclusive jurisdiction and venue for any dispute resolution process, including mediation or arbitration (if specified in the SOW), or court proceedings, shall be in the state or federal courts located within Maryland, USA.",
    ],
  },
  {
    title: "8. MODIFICATION OF TERMS",
    content: [
      'Edoubleone reserves the right, in our sole discretion, to modify or update these Terms at any time. The most current version will be posted on this webpage with the "Effective Date" updated. We encourage you to review this page regularly.',
    ],
  },
  {
    title: "9. CONTACT INFORMATION",
    content: [
      "If you have any questions, feedback, or need clarification on these Terms, please contact us:",
      "Email: support@edoubleone.net",
      "Address: 7404 Executive Place Lanham, MD 20706, USA",
    ],
  },
];

const getSectionIcon = (paragraph: string) => {
  if (paragraph.toLowerCase().startsWith("email:")) return MdEmail;
  if (paragraph.toLowerCase().startsWith("address:")) return MdLocationPin;
  return MdArrowRight;
};

const THEME_COLORS = {
  bg: "#050505",
  title: "#ff6b01",
  sectionTitle: "#E5E7EB",
  text: "#9CA3AF",
  icon: "#607d8b",
};

export default function TermsOfService() {
  return (
    <Box
      component="section"
      className="policy-section"
      // Significant top padding for introduction
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
        {/* Responsive font size */}
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
          Terms of Service
        </Typography>

        {terms.map((section, index) => (
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

            {section.content.length > 1 ? (
              <List sx={{ mt: 2, spaceY: 4 }}>
                {section.content.map((paragraph, i) => {
                  const SectionIcon = getSectionIcon(paragraph);
                  const isEmailLine = paragraph
                    .toLowerCase()
                    .startsWith("email:");

                  return (
                    <ListItem
                      key={i}
                      sx={{ alignItems: "flex-start", pb: 0, pt: 0, mb: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: 28, mt: "6px" }}>
                        <SectionIcon className="font-[20px] text-[#F0F0F0]" />
                      </ListItemIcon>

                      {isEmailLine ? (
                        <Typography
                          component="a"
                          href={`mailto:${paragraph.replace("Email: ", "").trim()}`} // Dynamic 'mailto:' link
                          variant="body1"
                          sx={{
                            color: THEME_COLORS.text,
                            fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                            fontWeight: 300,
                            pt: "2px",
                            leadingRelaxed: 1.625,
                            textDecoration: "none",
                            transition: "color 0.2s ease-in-out",

                            // Apply hover effect
                            "&:hover": {
                              color: THEME_COLORS.title,
                              cursor: "pointer",
                            },
                          }}
                        >
                          {paragraph}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          sx={{
                            color: THEME_COLORS.text,
                            fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                            fontWeight: 300,
                            pt: "2px",
                            leadingRelaxed: 1.625,
                          }}
                        >
                          {paragraph}
                        </Typography>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
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
                {section.content[0]}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
