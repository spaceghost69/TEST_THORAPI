import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/valkyrlabs.svg').default,
    description: (
      <>
        Peragon Games products are designed from the ground up with developers in mind.
        <br/><br/>
        Build your next application with a seamless <code>PeragonA GAMES</code> project.
        
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/valkyrlabs.svg').default,
    description: (
      <>
        HeimdaLLM™ lets you focus on your business, ThorAPI™ builds with security at the core, while Percival the Dragon Slayer™ handles the workflow chores. 
        <br/><br/>
        Get your business applications up and running quickly.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/valkyrlabs.svg').default,
    description: (
      <>
        Extend or customize your website layout with cutting edge React.
        <br/><br/>
        ThorAPI™ data-bound components can
        be extended or used straight out of the box.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg + ' featureSvg'} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
