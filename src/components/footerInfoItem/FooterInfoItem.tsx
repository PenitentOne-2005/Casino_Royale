import { Box, Typography } from "@mui/material";
import { FooterInfoItemProps } from "./interface";

const FooterInfoItem = ({ icon, text }: FooterInfoItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        width: "260px",
        minWidth: "0",
        gap: "10px",
      }}
    >
      {icon}

      <Typography
        sx={{
          color: "rgba(251, 251, 251, 0.7)",
          fontWeight: 400,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default FooterInfoItem;
