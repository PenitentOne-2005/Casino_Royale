import styled from "styled-components";
import { bg } from "@/icons";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CenterSection = styled.div`
  flex: 1;
  display: flex;
  background: url(${bg}) center/cover no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SlotImage = styled.img`
  width: 290px;
  margin-bottom: 30px;
`;

export const LicenseImage = styled.img`
  width: 58px;
`;

export const SocialIcon = styled.img`
  width: 52px;
  height: 52px;
  cursor: pointer;
`;

export const FooterSection = styled.div`
  background: linear-gradient(270deg, #06225d 0%, #02011f 37.03%);
  padding: 60px 2.1%;
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const DownloadCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed orange;
  padding: 1.9%;
  border-radius: 20px;
  width: 390px;

  @media (max-width: 452px) {
    width: 320px;
  }
`;

export const CasinoInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1200px) {
    flex-direction: column;

    &:not(:last-child) {
      margin-right: auto;
    }
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
    width: 100%;
    max-width: 630px;
    order: 3;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Character = styled.img`
  width: 288px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SocialBlock = styled.div`
  @media (min-width: 1200px) {
    margin-left: 66px;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  height: 250px;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1200px) {
    order: 2;
  }
`;

export const selectStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minWidth: "0",
  width: "100%",
  maxWidth: "289px",
  height: "56px",
  color: "#bababa",
  backgroundColor: "rgba(255, 255, 255, 0.1);",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  backdropFilter: "blur(10px)",

  "& .MuiSelect-icon": {
    color: "#bababa",
  },
};

export const getButtonStyles = (background: string) => ({
  background,
  fontSize: "16px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  "&:hover": {
    background,
    transform: "scale(1.03)",
  },
});
