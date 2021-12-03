import Content from '../components/Content';
import DontCreatePng from '../assets/dontcreate.png';
import NuclearEnergyPng from '../assets/nuclearenergy.png';
import PeoplePng from '../assets/people.png';
import LearnMore from '../components/LearnMore';

const PublicOpinion = () => {
  return (
    <Content>
      <blockquote>
        Through surveys conducted on the University of Illinois at
        Urbana-Champaign campus and analysis of pro and anti-nuclear energy
        posters, it was found that nuclear energy is in fact a source of energy
        widely acceptable by the general public.
      </blockquote>
      <img src={PeoplePng} alt="people" />
      <p>
        Around a total of 72% of students out of a sample size of approximately
        40 people at the U of I’s Grainger Engineering library believe nuclear
        energy to be a more efficient and sustainable energy source compared to
        traditional fossil fuel power plants or the like.
      </p>
      <div>
        <img src={DontCreatePng} alt="Don't Create" />
        <img src={NuclearEnergyPng} alt="Nuclear Energy" />
      </div>
      <p>
        Pro and anti nuclear energy posters were analyzed and it can be seen
        that the anti-nuclear poster portrays nuclear energy in a much more
        morbid tone while the pro-nuclear energy poster shows nuclear energy as
        a greener source of producing energy.
      </p>
      <p>
        When presented with these posters and asked whether or not the posters’
        information swayed their decisions, 67% of 30 students at the U of I
        found that the pro-nuclear poster was more impactful in their opinion
        due to the information that it provided in contrast to the more warning
        based approach Fig. 1 took, believing that nuclear energy is still a
        more sustainable source of energy.
      </p>
      <LearnMore to="/economics">Economics</LearnMore>
    </Content>
  );
};

export default PublicOpinion;
