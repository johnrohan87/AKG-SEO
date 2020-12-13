import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';

import SectionWrapper, {
  ThumbWrapper,
  TextWrapper,
} from './wallet-experience.style';

const WalletExperience = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        walletExperience {
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
          image {
            thumb {
              publicURL
            }
            bubble {
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);
  const {
    image,
    title,
    description,
    features,
  } = Data.appMinimalJson.walletExperience;

  return (
    <SectionWrapper>
      <Container>
        <TextWrapper>
          <SectionHeader className="section-header-two">
            <Heading content={title} />
            <Text content={description} />
          </SectionHeader>

          {features.map((item) => (
            <FeatureBlock
              key={`wallet--key${item.id}`}
              iconPosition="left"
              icon={<Image src={item.icon.publicURL} alt={item.title} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
        <ThumbWrapper>
          <Image src={image.thumb.publicURL} alt="Wallet Thumbnail" />
          {image.bubble.map(({ image }, index) => (
            <Image
              src={image.publicURL}
              key={`image-bubble-key-${index}`}
              className={`bubble-image-${index + 1}`}
              alt="Wallet Thumbnail"
            />
          ))}
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletExperience;
