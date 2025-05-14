import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
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

const Description = styled.p`
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

const CodeBlock = styled.pre`
    background: #1a1a1a;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: #39ff14;
    font-size: 0.95rem;
    max-width: 90%;
    overflow-x: auto;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding: 0.8rem 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 0.6rem 0.8rem;
    }
`;

function Intro() {
    return (
        <IntroSection>
            <Title>Hi, I'm Ashim Gotame ☕</Title>
            <SubTitle>Java Developer & Problem Solver</SubTitle>
            <Description>
                Passionate about building robust, scalable backend systems using Java and Spring Boot.
                I thrive on writing clean code, optimizing performance, and learning new patterns.
            </Description>
            <CodeBlock>
                {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, I am Ashim 👨‍💻");
    }
}`}
            </CodeBlock>
        </IntroSection>
    );
}

export default Intro;
