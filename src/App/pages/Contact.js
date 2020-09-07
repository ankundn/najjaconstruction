// Contact.js
import React from "react";
import styled from "styled-components";

// Import AwesomeIcon
import AwesomeIcon from "./../components/AwesomeIcon";

// Import Container component
import Container from "./../components/Container";

// Import Link component
import Link from "./../components/Link";

// Import Section component
import Section from "./../components/Section";

// Import typography components
import { Heading, Text } from "./../components/Typography";

const ContactLink = styled(Link)`
  margin-bottom: 30px;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SocialMediaList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`;

export default class Contact extends React.Component {
  render() {
    return (
      <Section centered>
        <Container>
          <Heading>Let's Get In Touch</Heading>

          <Text>
            Based in Macon, Georgia. Najja Cleaning Services Inc. is willing to
            travel anywhere in the Central Ga area to meet your needs. We have
            multiple teams of employees who are experts in their fields and are
            willing to work anytime, anywhere to get the done to your absolute
            satisfaction.
          </Text>
          <Text>Let's get in touch:</Text>
          <ContactLink href="mailto:info@najjahomes.com">
            info@najjahomes.com
          </ContactLink>
          <Text>P.O Box 5201 Macon, GA 31208</Text>

          <ContactLink>1.800.807.5298 or 1.478.250.8650</ContactLink>

          {/* <Text>Follow me on the web:</Text> */}

          {/* <SocialMediaList>
            <li>
              <Link href="">
                <AwesomeIcon icon="twitter" />
              </Link>
            </li>

            <li>
              <Link href="">
                <AwesomeIcon icon="linkedin" />
              </Link>
            </li>

            <li>
              <Link href="">
                <AwesomeIcon icon="behance" />
              </Link>
            </li>

            <li>
              <Link href="">
                <AwesomeIcon icon="dribbble" />
              </Link>
            </li>

            <li>
              <Link href="">
                <AwesomeIcon icon="github" />
              </Link>
            </li>

            <li>
              <Link href="">
                <AwesomeIcon icon="codepen" />
              </Link>
            </li>
          </SocialMediaList> */}
        </Container>
      </Section>
    );
  }
}
