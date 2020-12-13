import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

const Features = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        features {
          title
          description
          items {
            description
            id
            title
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { title, description, items } = Data.appMinimalJson.features;

  return (
    <SectionWrapper id="service_section">
      <Container>
        <SectionHeader className="text-white">
          <Heading content={title} />
          <Text content={description} />
        </SectionHeader>
        <FeatureWrapper>
          {items.map((item) => (
            <FeatureBlock
              key={`feature-key${item.id}`}
              icon={<Image src={item.icon.publicURL} alt={item.title} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
