import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appminimal';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppMinimal/Navbar';
import Banner from '../containers/AppMinimal/Banner';
import KeyFeatures from '../containers/AppMinimal/KeyFeatures';
import ChooseUs from '../containers/AppMinimal/ChooseUs';
import Features from '../containers/AppMinimal/Features';
import WalletExperience from '../containers/AppMinimal/WalletExperience';
import SecureTransaction from '../containers/AppMinimal/SecureTransaction';
import WalletDashboard from '../containers/AppMinimal/WalletDashboard';
import Track from '../containers/AppMinimal/Track';
import Gallery from '../containers/AppMinimal/Gallery';
import Counter from '../containers/AppMinimal/Counter';
import Pricing from '../containers/AppMinimal/Pricing';
import Blog from '../containers/AppMinimal/Blog';
import CallToAction from '../containers/AppMinimal/CallToAction';
import Footer from '../containers/AppMinimal/Footer';
import SEO from '../components/seo';

import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
  GradientWrapper,
} from '../containers/AppMinimal/app-minimal.style';

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="SaaS Minimal | A react Gatsby landing page" />
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app minimal landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <KeyFeatures />
            <ChooseUs />
            <Features />
            <WalletExperience />
            <SecureTransaction />
            <WalletDashboard />
            <Track />
          </ContentWrapper>
          <GradientWrapper>
            <Gallery />
            <Counter />
            <Pricing />
            <Blog />
            <CallToAction />
            <Footer />
          </GradientWrapper>
        </AppWrapper>
        {/* end of app minimal landing */}
      </>
    </ThemeProvider>
  );
}
