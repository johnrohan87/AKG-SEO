import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';
import { navigate } from 'gatsby-link'
import { propTypes } from 'react-stickynode/dist/Sticky';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  sectionTitle,
}) => {
  
  const [nameInput, setNameInput] = React.useState("")
  const [emailInput, setEmailInput] = React.useState("")
  const [messageInput, setMessageInput] = React.useState("")


  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content="Free Estimates!" {...discountAmount} />
              <Text content="on all residential and commercial roofs!" {...discountText} />
            </DiscountLabel>
            <FeatureBlock 
              title={
                <Heading className="bgContainerTitle"
                  content="AKG Roofing and Specialty Services, INC"
                                    {...title}
                />
              }
              description={
                <Text className="bgContainer"
                  content="Repairs, Replaces, and Maintains
                  YOUR Life Investment!"
                  {/*...description*/...sectionTitle}
                />
              }
              //button={<ButtonGroup />}

            />
            <form>
              <Input inputType="text"
              isMaterial={false}
              placeholder="Name"
              name="name"
              aria-label="name"
              onChange={(e)=>setNameInput(e)}
              />
              <Input
              inputType="email"
              isMaterial={false}
              placeholder="Email Address"
              name="email"
              aria-label="email"
              onChange={(e)=>setEmailInput(e)}
            />
            <Input
              inputType="textarea"
              isMaterial={false}
              placeholder="Message"
              name="message"
              aria-label="message"
              onChange={(e)=>setMessageInput(e)}
            />
            <Button type="button" title="SEND MESSAGE" {...btnStyle} onClick={(e)=>{console.log(nameInput,emailInput,messageInput)}} />
            </form>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  value: PropTypes.object,
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
  sectionTitle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500',
    alignItems: 'center',
    ml: '1em',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default BannerSection;
