import React, { useState, useEffect, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';
import Container from 'common/src/components/UI/ContainerTwo';
import Button from 'common/src/components/Button';
import SectionHeading from '../SectionHeading';
import Section, {
  ContentWrapper,
  PriceTable,
  PricingFeature,
  FeatureItem,
} from './pricing.style';

function useWindowSize() {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const Pricing = () => {
  const size = useWindowSize();
  const isTablet = Boolean(size.width <= 768);
  const data = useStaticQuery(graphql`
    query {
      agencyDigitalJson {
        pricing {
          id
          package_name
          price
          trial_day
          isRecommended
          features {
            id
            name
            isAvailable
          }
        }
      }
    }
  `);
  const pricing = data.agencyDigitalJson.pricing;

  return (
    <Section id="pricing">
      <Container>
        <SectionHeading
          slogan="Deal for your business"
          title="Meet our pricing plan that suit you"
          mb="80px"
        />
        <ContentWrapper>
          {!isTablet && (
            <PricingFeature>
              <FeatureItem>Full Access Library</FeatureItem>
              <FeatureItem>Multiple user</FeatureItem>
              <FeatureItem>Refund Policy</FeatureItem>
              <FeatureItem>Google Analytics</FeatureItem>
              <FeatureItem>24/7 support</FeatureItem>
            </PricingFeature>
          )}

          {pricing.map((priceTable) => (
            <PriceTable
              key={priceTable.id}
              className={priceTable.isRecommended && 'isRecommended'}
            >
              {priceTable.isRecommended && (
                <div className="recommended">Recommended</div>
              )}

              <h2 className="title">{priceTable.package_name}</h2>
              <div className="price">
                ${priceTable.price}/<span>per mo.</span>
              </div>
              <ul className="featureList">
                {priceTable.features.map((feature) => (
                  <FeatureItem key={feature.id}>
                    {isTablet ? (
                      feature.isAvailable ? (
                        feature.name
                      ) : (
                        <Icon
                          icon={closeCircled}
                          size={18}
                          style={{ color: '#CED7E1' }}
                        />
                      )
                    ) : feature.isAvailable ? (
                      <Icon
                        icon={ic_check_circle}
                        size={18}
                        style={{ color: '#3CC68A' }}
                      />
                    ) : (
                      <Icon
                        icon={closeCircled}
                        size={18}
                        style={{ color: '#CED7E1' }}
                      />
                    )}
                  </FeatureItem>
                ))}
              </ul>
              <Button
                title="Choose Plan"
                className={`${
                  !priceTable.isRecommended && 'primaryOutlined'
                } choosePlan`}
              />
              <p className="trial">{priceTable.trial_day} days free trial</p>
            </PriceTable>
          ))}
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Pricing;
