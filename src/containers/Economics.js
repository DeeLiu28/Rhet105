import Content from '../components/Content';
import EconomicsPng from '../assets/economics.gif';
import LearnMore from '../components/LearnMore';

const Economics = () => {
  return (
    <Content>
      <blockquote>
        For nuclear energy to be evaluated as a sustainable resource, it will
        have to create a sustainable economy alongside it. As nuclear energy is
        already instituted in the United States and is cheaper to operate than
        most fossil fuel alternatives, it does not damage the US economy, but
        instead improves it and is an effective resource for the United States.
      </blockquote>
      <img src={EconomicsPng} alt="Economics" />
      <p>
        The Swedish Nuclear Dilemma by renowned economist and Sterling Professor
        William D. Nordhaus of Yale University creates a model for the economics
        of nuclear energy, specifically its phase-out or removal in Sweden and
        how the phase-out would be detrimental to the Swedish economy.{' '}
      </p>
      <p>
        However, this model does not apply to the US as the US already has
        active nuclear power plants without the need of creating a new system or
        cycle and therefore, introduces no new strain on the economy.
      </p>
      <p>
        In addition, advancing technologies make the construction of nuclear
        plants much cheaper than in previous years and nuclear plants are
        cheaper to operate than traditional fossil fuel power plants with a very
        low risk of operating-cost inflation. Thus, nuclear plants do not damage
        the US economy, but instead, improves it and is an effective resource
        for the United States.
      </p>
      <LearnMore to="/environmental">Environmental</LearnMore>
    </Content>
  );
};

export default Economics;
