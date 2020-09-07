// About.js
import React from "react";
import styled from "styled-components";

// Import Container component
import Container from "./../components/Container";

// Import Link component
import Link from "./../components/Link";

// Import Section component
import Section from "./../components/Section";

// Import typography components
import { Heading, Subheading, Text } from "./../components/Typography";

export default class About extends React.Component {
  render() {
    return (
      <Section centered>
        <Container>
          <Heading>Najja Cleaning Services</Heading>
          <Subheading>Our Mission</Subheading>
          <Text>
            The Mission of Najjas's Cleaning Services is to perform quality
            construction services at competitive market prices, and to ensure
            the longetivity of our company through repeat and referred businees
            through customer satisfaction. We focus on satisfaction in all areas
            including timelines, attention to detail, service-minded attitudes.
          </Text>
          <Subheading>Our Why</Subheading>
          <Text>
            We aim to maintain the highest level of professionalism, integrity
            and trustworthiines with our customers. Najja's cleaning and
            landscaping is proud to be certifed as a Small Local Business
            Enterprise and Small Local Minority Business Enterprise by
            Macon-Bibb County Office of Small Business Affairs.
          </Text>

          <a href="mailto:info@najjahomes.com">info@najjahomes.com</a>
        </Container>
      </Section>
    );
  }
}
