import { LogoProps } from "./interface";
import { logo } from "@/icons";
import LogoImage from "./styles";

const Logo = ({ width, marginBottom }: LogoProps) => {
  return (
    <LogoImage
      width={width}
      marginBottom={marginBottom}
      src={logo}
      alt="Casino Royale Logo"
    />
  );
};

export default Logo;
