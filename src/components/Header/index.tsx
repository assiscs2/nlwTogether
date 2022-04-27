import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
// import logoImg from '/Backup HD antigo/Workspace/nlw_6/letmeask/src/assets/images/logo.svg';
import logoImgDark from '/Backup HD antigo/Workspace/nlw_6/letmeask/src/assets/images/logo-dark.svg';


interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        onColor={colors.switchOn}
        offColor={colors.switchOff}
      />
    </Container>
  );
};

// export default Header;
