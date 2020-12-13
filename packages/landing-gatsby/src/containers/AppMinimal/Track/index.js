import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/Container';
import TrackArea, { Row, Col } from './track.style';

const Track = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        TrackData {
          title
          paragraph {
            text
          }
          trackBox {
            image {
              publicURL
            }
            count
            text
          }
        }
      }
    }
  `);
  const { title, paragraph, trackBox } = Data.appMinimalJson.TrackData;
  return (
    <TrackArea>
      <Container className="Container">
        <Row>
          <Col>
            <Box className="Left">
              <Heading as="h2" content={title} />
              <Box className="TrackRow">
                {trackBox.map(({ image, count, text }, index) => (
                  <Box className="TrackCol" key={`track-key-${index}`}>
                    <Box className="TrackBox">
                      <Box className="TrackImage">
                        <Image src={image.publicURL} alt="track image" />
                      </Box>
                      <Heading as="h3" content={`${count}%`} />
                      <Text as="p" content={text} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>
          <Col>
            <Box className="Right">
              {paragraph.map(({ text }, index) => (
                <Text as="p" key={`track-text-key-${index}`} content={text} />
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </TrackArea>
  );
};

export default Track;
