import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './secure-transaction.style';

const SecureTransaction = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        secureTransaction {
          title
          description
          image {
            thumb {
              publicURL
            }
            bubble {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { image, title, description } = Data.appMinimalJson.secureTransaction;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image.thumb.publicURL} alt="Transaction" />
            <Image
              src={image.bubble.publicURL}
              alt="bubble image"
              className="bubble-image"
            />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Link to="#" className="button">
              Learn More <Icon icon={androidArrowForward} />
            </Link>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default SecureTransaction;
