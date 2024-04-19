import React, { useState, useEffect } from "react";
import { Box, Input, List, ListItem, ListIcon, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

// Simulated data (normally you would fetch this from a REST API)
const reviews = [
  { id: 1, title: "Great product", content: "This is a great product. I really enjoyed using it!" },
  { id: 2, title: "Poor quality", content: "The quality was not as expected. Quite disappointing." },
  { id: 3, title: "Excellent service", content: "The service was excellent. Very prompt and professional." },
  { id: 4, title: "Not worth the price", content: "It's not worth the price. There are better alternatives." },
  { id: 5, title: "Highly recommended", content: "I highly recommend this. It works wonders!" },
  { id: 6, title: "Just okay", content: "It's just okay. Nothing special." },
  { id: 7, title: "Fantastic", content: "Fantastic experience! Would buy again." },
  { id: 8, title: "Loved it", content: "I absolutely loved this product!" },
  { id: 9, title: "Hated it", content: "I really hated this product. Would not recommend." },
  { id: 10, title: "Average", content: "Just an average experience. Nothing to write home about." },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  useEffect(() => {
    const filtered = reviews.filter((review) => review.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredReviews(filtered);
  }, [searchTerm]);

  return (
    <Container maxW="container.md">
      <VStack spacing={4} as="article">
        <Heading as="h1" size="xl" textAlign="center" my="4">
          Product Reviews
        </Heading>
        <Input placeholder="Search reviews..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <List spacing={3}>
          {filteredReviews.map((review) => (
            <ListItem key={review.id} p={2} shadow="md" borderWidth="1px" borderRadius="md">
              <ListIcon as={FaStar} color="yellow.500" />
              <Text fontWeight="bold">{review.title}</Text>
              <Text fontSize="sm">{review.content}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
