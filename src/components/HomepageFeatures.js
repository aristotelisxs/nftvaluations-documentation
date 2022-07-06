import React from 'react';
import Link from "@docusaurus/Link"
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    image: require('../../static/img/homepage-feature-documentation.jpg').default,
    description: 'Read our comprehensive documentation for our roadmap, methodologies, and more',
    links: [
      {
        title: 'About',
        url: '/documentation/about'
      },
      {
        title: 'Methodology',
        url: '/documentation/methodology'
      },
      {
        title: 'Roadmap',
        url: '/documentation/roadmap'
      },
      {
        title: 'Branding',
        url: '/documentation/branding'
      }
    ]
  },
  {
    title: 'Guides',
    image: require('../../static/img/homepage-feature-guides.jpg').default,
    description: 'Our guides serve as a introduction to our core features with instructions on how to utilize them',
    links: [
      {
        title: 'Getting Started',
        url: '/guides/getting-started'
      },
      {
        title: 'Browse NFTs',
        url: '/guides/browse'
      },
      {
        title: 'Collections',
        url: '/guides/collections'
      },
      {
        title: 'Portfolio Management',
        url: '/guides/portfolio-management'
      }
    ]
  }
];

function Feature({image, title, description, links}) {
  return (
    <div className={styles.featuresCard}>
      <img src={image} className={styles.featureSvg} alt={title} />
      <div className={styles.featuresCardHeading}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.featureLinks}>
        {links.map( link => (
          <Link to={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <section className={styles.features}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </div>
  );
}
