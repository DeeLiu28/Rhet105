import Content from '../components/Content';
import RiskPng from '../assets/risk.png';

const RiskFactor = () => {
  return (
    <Content>
      <blockquote>
        One of the biggest points made whenever the topic of nuclear energy is
        brought up is whether or not nuclear energy is a safe way to create
        energy, especially since there have been historic accidents that took
        thousands of lives due to faulty reactors or natural disasters. However,
        modern day reactors are completely safe and have a myriad of failsafes
        to prevent nuclear accidents from happening. New technologies have also
        been making nuclear reactors even safer to protect its operators from
        radiation exposure while working within the infrastructure. As such,
        nuclear reactors are indeed a viable sustainable resource for the United
        States to implement.
      </blockquote>
      <img src={RiskPng} alt="risk" />
      <p>
        Public concerns on whether nuclear energy is a viable option have been
        widespread ever since the 2011 Fukushima incident in Japan in which 3
        nuclear reactors lost their source of power and cooling following a
        major earthquake and tsunami.
      </p>
      <p>
        However, it is important to note that in the 17,000 cumulative
        reactor-years of commercial operation in 33 countries, only three major
        accidents have occured to nuclear power plants - Three Mile Island,
        Chernobyl, and Fukushima - of which the Three Mile Island accident and
        Chernobyl were caused by outdated versions of nuclear reactors, while
        Fukushima was caused by an uncontrollable natural disaster.
      </p>
      <p>
        New technologies developed such as containment vessels as described by
        the US Energy Information Administration are reinforced enclosures that
        contain the escape of radioactive steam or gas, designed to withstand
        extreme weather events and earthquakes, preventing similar disasters
        from happening in reactors throughout the US.
      </p>
      <p>
        Remote work equipment have also been employed in reactors all around the
        US as a means of minimizing the radiation exposure workers within
        nuclear power plants are exposed to during the plant’s operation, making
        reactors both safe itself and protecting the people working inside it.
      </p>
    </Content>
  );
};

export default RiskFactor;
