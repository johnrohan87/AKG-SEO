import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { FeatureWrapper } from './key-features.style';

const KeyFeatures = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        keyFeatures {
          title
          description
          features {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);

  const { title, description, features } = Data.appMinimalJson.keyFeatures;

  return (
    <SectionWrapper id="feature_section">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={description} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade up delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                key={`key-feature--key${item.id}`}
                icon={<Image src={item.icon.publicURL} alt={item.title} />}
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
