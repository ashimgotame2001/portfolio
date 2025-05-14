import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';  // Using React Icons for the icons

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  color: #00FF00;
  font-family: 'Courier New', Courier, monospace;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00FF00;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #00FF00;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: #00FF00;
    font-size: 2.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    a {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.8rem;

    a {
      font-size: 1.8rem;
    }
  }
`;

const ContactDescription = styled.p`
  max-width: 700px;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.85;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function ContactMe() {
    return (
        <ContactSection>
            <Title>Contact Me</Title>
            <SubTitle>Let's Connect!</SubTitle>
            <ContactDescription>
                Whether you're interested in collaborating, have a question, or just want to chat, feel free to reach out!
                You can find me on LinkedIn, GitHub, or shoot me an email.
            </ContactDescription>

            <SocialLinks>
                <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:your-email@example.com">
                    <FaEnvelope />
                </a>
            </SocialLinks>
        </ContactSection>
    );
}

export default ContactMe;
