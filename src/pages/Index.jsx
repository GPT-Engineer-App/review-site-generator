import React, { useState, useEffect } from "react";
import { Box, Input, List, ListItem, ListIcon, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

// Simulated data (normally you would fetch this from a REST API)
const reviews = [
  { id: 1, productTitle: "Product A", category: "Electronics", rating: 5, title: "Great product", content: "This is a great product. I really enjoyed using it!" },
  { id: 2, productTitle: "Product B", category: "Home Appliances", rating: 2, title: "Poor quality", content: "The quality was not as expected. Quite disappointing." },
  { id: 3, productTitle: "Product C", category: "Electronics", rating: 5, title: "Excellent service", content: "The service was excellent. Very prompt and professional." },
  { id: 4, productTitle: "Product D", category: "Fashion", rating: 3, title: "Not worth the price", content: "It's not worth the price. There are better alternatives." },
  { id: 5, productTitle: "Product E", category: "Beauty", rating: 5, title: "Highly recommended", content: "I highly recommend this. It works wonders!" },
  { id: 6, productTitle: "Product F", category: "Books", rating: 3, title: "Just okay", content: "It's just okay. Nothing special." },
  { id: 7, productTitle: "Product G", category: "Electronics", rating: 5, title: "Fantastic", content: "Fantastic experience! Would buy again." },
  { id: 8, productTitle: "Product H", category: "Fashion", rating: 5, title: "Loved it", content: "I absolutely loved this product!" },
  { id: 9, productTitle: "Product I", category: "Home Appliances", rating: 1, title: "Hated it", content: "I really hated this product. Would not recommend." },
  { id: 10, productTitle: "Product J", category: "Books", rating: 3, title: "Average", content: "Just an average experience. Nothing to write home about." },
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
        <Box display="flex" flexDirection="column" gap={4}>
          {filteredReviews.map((review) => (
            <Box key={review.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" cursor="pointer" onClick={() => alert(`Title: ${review.title}\nContent: ${review.content}\nProduct: ${review.productTitle}\nCategory: ${review.category}\nRating: ${review.rating}`)}>
              <Text fontWeight="bold">
                {review.productTitle} - {review.category} ({review.rating}/5)
              </Text>
              <Text fontSize="sm">{review.title}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
