import { useState } from "react";
import { Button, Typography, Select, MenuItem, Box } from "@mui/material";
import { Language } from "./type";
import { Logo, Modal, FooterInfoItem } from "@/components";
import translations from "@/translation";
import { getGeoLanguage, geoConfig } from "@/utils";
import {
  CasinoInfo,
  CenterSection,
  Character,
  DownloadCard,
  FooterSection,
  LicenseImage,
  PageWrapper,
  RightFooter,
  SlotImage,
  SocialBlock,
  SocialIcon,
  selectStyles,
  getButtonStyles
} from "./styles";
import {
  slot,
  character,
  Download,
  Flag,
  Limitation,
  License,
  socialIcons,
} from "@/icons";

const HomePage = () => {
  const [openGame, setOpenGame] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage) {
      return savedLanguage;
    }

    return getGeoLanguage();
  });

  const t = translations[language];

  const { background } = geoConfig[language];

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
    localStorage.setItem("language", value);
  };

  const handleOpenGame = (value: boolean) => {
    setOpenGame(value);
  }

  return (
    <PageWrapper>
      <CenterSection>
        <Logo width={263} marginBottom={40} />
        <SlotImage src={slot} alt="slot" />

        <Button
          variant="contained"
          onClick={() => handleOpenGame(true)}
          sx={{
            ...getButtonStyles(background),
            borderRadius: "12px",
            padding: "12px 100px",
          }}
        >
          {t.openGame}
        </Button>

        <Modal openGame={openGame} setOpenGame={handleOpenGame} />
      </CenterSection>

      <FooterSection>
        <Character src={character} alt="character" />

        <DownloadCard>
          <Logo width={175} marginBottom={20} />

          <Typography
            sx={{
              color: "#fff",
              fontSize: "32px",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            {t.download}
          </Typography>

          <Typography
            sx={{
              color: "#bababa",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {t.description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              ...getButtonStyles(background),
              display: "flex",
              gap: "8px",
              padding: "12px 13.7%",
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            <Download />
            {t.installApp}
          </Button>
        </DownloadCard>

        <CasinoInfo>
          <FooterInfoItem icon={<Limitation />} text={t.limitation} />

          <FooterInfoItem
            icon={<LicenseImage src={License} alt="license" />}
            text={t.certified}
          />
        </CasinoInfo>

        <RightFooter>
          <Select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            sx={selectStyles}
            renderValue={(value) => (
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Flag />
                {value === "turkish" ? "Turkish" : "English"}
              </Box>
            )}
          >
            <MenuItem value="turkish" sx={{ display: "flex", gap: "8px" }}>
              <Flag /> Turkish
            </MenuItem>

            <MenuItem value="english">English</MenuItem>
          </Select>

          <SocialBlock>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "end",
                },
                color: "#bababa",
                fontWeight: 400,
              }}
            >
              {t.social}:
            </Typography>

            <Box sx={{ display: "flex", gap: "5px", marginTop: "12px" }}>
              {socialIcons.map((Icon) => (
                <SocialIcon key={Icon.alt} src={Icon.src} alt={Icon.alt} />
              ))}
            </Box>
          </SocialBlock>
        </RightFooter>
      </FooterSection>
    </PageWrapper>
  );
};

export default HomePage;
