import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import Container from 'common/src/components/UI/Container';
import Box from 'common/src/components/Box';
import Switch from 'common/src/components/Switch';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import PricingArea, {
  TopHeading,
  Row,
  Col,
  PriceCard,
  CardTop,
  CardBody,
  CardFooter,
  PricingAmount,
} from './pricing.style';

const Pricing = () => {
  const [state, setState] = useState({
    toggle: true,
  });

  const dataHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        MONTHLY_PRICING_DATA {
          recommended
          title
          price
          tagline
          planLabel
          options {
            text
          }
          button {
            label
            link
          }
        }
        YEARLY_PRICING_DATA {
          recommended
          title
          price
          tagline
          planLabel
          options {
            text
          }
          button {
            label
            link
          }
        }
      }
    }
  `);

  return (
    <PricingArea id="pricing_section">
      <Container className="Container">
        <TopHeading>
          <Heading as="h2" content="Meet our exiciting Pricing Plan" />
        </TopHeading>
        <Box className="priceFilter">
          <span>Monthly</span>
          <Switch
            switchColor="#fff"
            labelText=""
            labelPosition="left"
            onChange={dataHandle}
          />
          <span>Yearly</span>
        </Box>
        {state.toggle === false && (
          <Row>
            {Data.appMinimalJson.MONTHLY_PRICING_DATA.map(
              (
                {
                  recommended,
                  title,
                  price,
                  tagline,
                  planLabel,
                  options,
                  button,
                },
                index
              ) => (
                <Col key={`pricing-card-key-${index}`}>
                  <PriceCard
                    className={recommended === true ? 'recommended' : ' '}
                  >
                    <CardTop className="cardTop">
                      <Heading as="h3" content={title} />
                      <PricingAmount>
                        <Heading as="h4" content={price} />
                        <Text as="p" content={tagline} />
                      </PricingAmount>
                    </CardTop>
                    <CardBody>
                      <Text
                        as="span"
                        className="pricingLabel"
                        content={planLabel}
                      />
                      <ul className="priceList">
                        {options.map(({ text }, index) => (
                          <li key={`priceList-key-${index}`}>
                            <Icon size={18} icon={androidDone} />
                            {text}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                    <CardFooter className="cardFooter">
                      <Link to={button.link} className="priceBtn">
                        {button.label}{' '}
                        <Icon size={18} icon={androidArrowForward} />
                      </Link>
                    </CardFooter>
                  </PriceCard>
                </Col>
              )
            )}
          </Row>
        )}
        {state.toggle === true && (
          <Row>
            {Data.appMinimalJson.YEARLY_PRICING_DATA.map(
              (
                {
                  recommended,
                  title,
                  price,
                  tagline,
                  planLabel,
                  options,
                  button,
                },
                index
              ) => (
                <Col key={`pricing-card-key-${index}`}>
                  <PriceCard
                    className={recommended === true ? 'recommended' : ' '}
                  >
                    <CardTop>
                      <Heading as="h3" content={title} />
                      <PricingAmount>
                        <Heading as="h4" content={price} />
                        <Text as="p" content={tagline} />
                      </PricingAmount>
                    </CardTop>
                    <CardBody>
                      <Text
                        as="span"
                        className="pricingLabel"
                        content={planLabel}
                      />
                      <ul className="priceList">
                        {options.map(({ text }, index) => (
                          <li key={`priceList-key-${index}`}>
                            <Icon size={18} icon={androidDone} />
                            {text}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Link to={button.link} className="priceBtn">
                        {button.label}{' '}
                        <Icon size={18} icon={androidArrowForward} />
                      </Link>
                    </CardFooter>
                  </PriceCard>
                </Col>
              )
            )}
          </Row>
        )}
      </Container>
    </PricingArea>
  );
};

export default Pricing;
