import React from "react";

import { HeaderContainer, Button } from "./style";

interface Props {
  buttons: [{ title: string; link: string }];
}

const Header: React.FC<Props> = ({ buttons }) => {
  return (
    <HeaderContainer>
      {buttons.map(({link, title}, i) => (
        <Button key={i} to={link}>{title}</Button>
      ))}
    </HeaderContainer>
  );
};

export default Header;
