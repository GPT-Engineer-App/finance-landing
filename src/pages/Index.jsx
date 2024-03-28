import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Secure Your Financial Future
              </Heading>
              <Text fontSize="xl" mb={8}>
                Invest with confidence and achieve your financial goals with our expert guidance and innovative solutions.
              </Text>
              <Button colorScheme="white" size="lg">
                Get Started
              </Button>
            </Box>
            <Flex justify="center" align="center">
              <Image src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MHx8fHwxNzExNjE0NTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Finance" />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Choose Us
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaChartLine} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Expert Analysis
              </Heading>
              <Text>Our team of financial experts provides in-depth market analysis and personalized investment strategies.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaPiggyBank} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Wealth Management
              </Heading>
              <Text>We offer comprehensive wealth management services to help you grow and protect your assets.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaShieldAlt} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Secure Transactions
              </Heading>
              <Text>Our platform ensures the highest level of security for all your financial transactions.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaUsers} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Customer Support
              </Heading>
              <Text>Our dedicated customer support team is always ready to assist you with any questions or concerns.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Invest?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Take control of your financial future today. Sign up now and start investing with confidence.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
