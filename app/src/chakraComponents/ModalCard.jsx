import { Box, Card, CardBody, Divider, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react';
import ImageModal from './ImageModal';

export const ModalCard = (props) => {
  const { title, image, imageUrl } = props;

  const imageModalRef = useRef(null);

  const handleImageClick = () => {
    if (imageModalRef && imageModalRef.current) {
      imageModalRef.current.openModal();
    }
  };

  return (
    <Box m='0.5rem'>
      <Card width='250px' height='320px'>
        <CardBody>
          <Flex mb='0.5rem' justify='center' align='center'>
            <Image
              onClick={handleImageClick}
              src={image}
              alt={title}
              borderRadius='lg'
            />
          </Flex>
          <Divider/>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <ImageModal
              ref={imageModalRef}
              src={imageUrl}
              title={title}
            />
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
