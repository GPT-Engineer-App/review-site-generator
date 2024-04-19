import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const ReviewDetails = ({ location }) => {
  const { review } = location.state;

  return (
    <Container maxW="container.md">
      <VStack spacing={4} as="article" align="stretch">
        <Heading as="h1" size="xl" textAlign="center" my="4">
          {review.productTitle} - Details
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
          Category: {review.category}
        </Text>
        <Text>
          {Array.from({ length: review.rating }, (_, i) => (
            <FaStar key={i} color="yellow" />
          ))}
        </Text>
        <Text fontSize="md">{review.title}</Text>
        <Text>{review.content}</Text>
      </VStack>
    </Container>
  );
};

export default ReviewDetails;
