import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Button from 'common/src/components/Button';
import Logo from 'common/src/components/UIElements/Logo';
import Container from 'common/src/components/UI/Container';
import Header, {
  LogoContainer,
  NavbarWrapper,
  MobileMenu,
} from './navbar.style';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      logoWhite: file(
        relativePath: { eq: "image/saasMinimal2/logo-white.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoDark: file(
        relativePath: { eq: "image/saasMinimal2/logo-black.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saasMinimal2Json {
        navItems {
          label
          path
          offset
        }
      }
    }
  `);

  const navItems = data?.saasMinimal2Json.navItems;

  const scrollItems = [];

  navItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <Header className="navbar">
      <Container>
        <LogoContainer className="logo-container">
          <Logo
            href="/saasminimal2"
            logoSrc={data.logoWhite.childImageSharp.fluid.src}
            title="Agency Digital"
            className="logo"
          />
          <Logo
            href="/saasminimal2"
            logoSrc={data.logoDark.childImageSharp.fluid.src}
            title="Agency Digital"
            className="logo-sticky"
          />
        </LogoContainer>
        {/* end of logo */}

        <NavbarWrapper>
          <ScrollSpyMenu
            className="menu-items menu-left"
            menuItems={navItems}
            offset={-84}
          />
          {/* end of main menu */}

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon className="bar" size={32} icon={androidClose} />
              ) : (
                <Icon className="close" icon={androidMenu} size={32} />
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </NavbarWrapper>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navItems?.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </Header>
  );
};

export default Navbar;
