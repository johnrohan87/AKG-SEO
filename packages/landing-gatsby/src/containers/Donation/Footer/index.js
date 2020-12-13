import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Input from 'common/src/components/Input';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

import {
  FooterWrapper,
  Subscription,
  SubscriptionForm,
  FooterBottom,
  FooterLeft,
  FooterNav,
} from './footer.style';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "image/donation/logo-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donationJson {
        footerNav {
          id
          url
          title
        }
      }
    }
  `);

  const navItems = data.donationJson.footerNav;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  return (
    <FooterWrapper>
      <Container>
        <Subscription>
          <Heading content="Don’t forget to subscribe for any update about COVID-19" />
          <SubscriptionForm onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter Email address"
              className="input-field"
            />
            <Button title="Subscribe" type="submit" />
          </SubscriptionForm>
        </Subscription>
        <FooterBottom>
          <FooterLeft>
            <Image src={data.logo.childImageSharp.fluid.src} alt="logo" />
            <Text content="Copyright 2020 by donate org." />
          </FooterLeft>
          <FooterNav>
            {navItems?.map((nav) => (
              <li key={nav.id}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
