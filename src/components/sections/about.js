import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['langchain', 'keras', 'opencv', 'Angular 14+', 'Node.js', 'Typescript'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Sobre mim</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Acredito que a tecnologia deve ser utilizada para melhorar a vida das pessoas e que a
              Inteligência Artificial e a Ciência de Dados são as ferramentas mais poderosas para
              isso.
            </p>

            <p>
              Fui ganhador em 1º Lugar do{' '}
              <a href="https://us.https://www.linkedin.com/posts/leonardo-loureiro-costa_artificialinteligence-ai-datascience-activity-7135333473321373696-dAqA?utm_source=share&utm_medium=member_desktop.com/">
                Hackathon
              </a>{' '}
              de Seguros e previdência do BTG Pactual de 2023 implementando uma solução de
              documentação automática de repositórios usando modelos de linguagem.
            </p>
            <p>
              Fui ganhador também em 1º Lugar do 1º{' '}
              <a href="https://www.linkedin.com/posts/leonardo-loureiro-costa_ai-explainableai-promptengineering-activity-7087904165833658368-FWQ6?utm_source=share&utm_medium=member_desktop">
                WIA
              </a>{' '}
              - Workshop de Inteligência Artificial do ICT UNIFESP, recebendo prêmio de melhor
              apresentação e melhor projeto com o artigo{' '}
              <a href="https://github.com/Leonardo-Costa/wikiart-XAI">
                Illuminating Artistic Intuition
              </a>
              : Exploring Zero-Shot Painting Classification and XAI through LIME and Diffusion
              Models
            </p>

            <p>
              Hoje em dia sou desenvolvedor no <a href="https://www.btgpactual.com/">BTG Pactual</a>
              , trabalhando com a automação de processos na área de Seguros e Previdência{' '}
            </p>

            <p>Aqui estão algumas tecnologias que usei recentemente:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
