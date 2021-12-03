import Content from '../components/Content';
import EarthGif from '../assets/earth.gif';
import LearnMore from '../components/LearnMore';

const Environmental = () => {
  return (
    <Content>
      <blockquote>
        A sustainable environment decreases the risk of human extinction that
        threats such as global warming poses. With the environmental
        sustainability of nuclear energy development with decreased GHG
        emissions and responsible waste disposal, nuclear energy is a viable
        option as a sustainable resource in the US.
      </blockquote>
      <img src={EarthGif} alt="Earth" />
      <p>
        A study by the World Nuclear Association in 2011 shows that the average
        greenhouse gas (GHG) emissions for a coal power plant in the world was
        888 tonnes/Gigawatt-hour. In comparison, the average GHG emissions for a
        nuclear plant was only 29 tonnes/GWh.
      </p>
      <p>
        The significantly lower emission of GHGs stalls the process of global
        warming, a cycle that is harmful to the environment-which depends on GHG
        emissions.
      </p>
      <p>
        Regulations by the Nuclear Regulatory Commission (NRC) govern waste
        handling, storage, transportation, and disposal to protect human health
        and the environment too, with dry casks storing nuclear waste until they
        are safer for transportation to a designated location. Permanent
        repositories are then used for nuclear waste disposal, as dictated by
        the Nuclear Waste Policy Act of 1982, making nuclear energy very
        environmentally sustainable.
      </p>
      <LearnMore to="/risk-factor">Risk Factor</LearnMore>
    </Content>
  );
};

export default Environmental;
