import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
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
  margin-bottom: 2rem;
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
`;

const SkillCard = styled.div`
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  color: #00FF00;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 255, 0, 0.2);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00FF00;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

function SkillsAndKnowledge() {
    return (
        <SkillsSection>
            <Title>Skills & Knowledge</Title>
            <SubTitle>Technologies and Tools I'm Proficient With</SubTitle>

            <SkillsContainer>
                <SkillCard>
                    <SkillTitle>Java</SkillTitle>
                    <SkillDescription>
                        Expertise in Core Java, Spring Boot, and Microservices architecture.
                        Building scalable backend systems with efficient data processing.
                    </SkillDescription>
                </SkillCard>

                <SkillCard>
                    <SkillTitle>React</SkillTitle>
                    <SkillDescription>
                        Building dynamic web applications with React, Redux, and hooks.
                        Passionate about clean and maintainable code with responsive design.
                    </SkillDescription>
                </SkillCard>

                <SkillCard>
                    <SkillTitle>Spring Boot</SkillTitle>
                    <SkillDescription>
                        Developing robust backend services using Spring Boot. Expertise in REST APIs, JPA, and security.
                    </SkillDescription>
                </SkillCard>

                <SkillCard>
                    <SkillTitle>PostgreSQL</SkillTitle>
                    <SkillDescription>
                        Proficient in database design, optimization, and query performance.
                        Working knowledge of PostgreSQL for reliable data storage.
                    </SkillDescription>
                </SkillCard>

                <SkillCard>
                    <SkillTitle>Docker</SkillTitle>
                    <SkillDescription>
                        Utilizing Docker for containerization of applications to ensure consistency across different environments.
                    </SkillDescription>
                </SkillCard>
            </SkillsContainer>
        </SkillsSection>
    );
}

export default SkillsAndKnowledge;
