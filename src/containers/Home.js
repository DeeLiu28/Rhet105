import Content from '../components/Content';
import SmokeGif from '../assets/smokes.gif';

const Home = () => {
  return (
    <Content>
      <blockquote>
        Through the results obtained by conducting public surveys which show how
        the general public recognizes nuclear energy as a clean way to produce
        power and analyzing pro and anti-nuclear infographics to see if
        prominent information in the modern world shapes the public opinion
        alongside analyzing research conducted throughout the past few decades,
        this paper determines that nuclear energy is in fact a source of
        sustainable energy that can be implemented in the United States.
      </blockquote>
      <img src={SmokeGif} alt="smoke" />
      <p>
        Throughout the past centuries, the environment has taken increasing hits
        from each industrial revolution, and is now threatened with destruction
        by the industrializing world. With times changing, global leaders have
        been setting a goal for the international community to strive towards
        sustainable development starting in the 20th century. Now, in the 21st
        century, protection of the environment is paramount to sustainability.
        As electricity usage increases in the modern world, the topic of
        sustainable energy becomes increasingly important. Efforts have been put
        towards finding the perfect way to create power for the ever-developing
        world. A variety of ways to generate power have been examined and
        experimented with over the years, yet we are still in search for the
        most beneficial source of sustainable energy. As nuclear energy rises as
        one of the most promising methods of generating sustainable energy, the
        viability of nuclear energy as a sustainable resource in the United
        States and more specifically in Illinois should be evaluated to see
        whether or not nuclear energy can be implemented throughout the nation
        by evaluating four key property of sustainability: the ability for
        nuclear energy to be accepted by the general public, potential economic
        benefits, possible environmental drawbacks, and social risk concerns
        that the nuclear conundrum creates.
      </p>
    </Content>
  );
};

export default Home;
