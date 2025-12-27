import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion, Variants } from 'framer-motion';

import styles from './index.module.css';
import Chatbot from '../components/ChatWidget';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const authorImageSrc = useBaseUrl('/img/Author.jpg');
  const heroImageSrc = useBaseUrl('/img/HERO_SECTION.png');

  const coreModules = [
    { 
      title: "Neural Architectures", 
      description: "Deep dive into transformer-based architectures for robotic cognition and decision-making systems.",
      icon: "🧠",
      gradient: "gradient-1"
    },
    { 
      title: "Bipedal Dynamics", 
      description: "Master zero-moment point control, gait optimization, and stability algorithms for humanoid locomotion.",
      icon: "🦿",
      gradient: "gradient-2"
    },
    { 
      title: "Sensor Fusion", 
      description: "Advanced LiDAR, vision, and proprioceptive data integration for spatial awareness.",
      icon: "📡",
      gradient: "gradient-3"
    },
    { 
      title: "Agentic AI", 
      description: "Autonomous decision-making systems with reinforcement learning and adaptive behaviors.",
      icon: "🤖",
      gradient: "gradient-4"
    },
  ];

  const features = [
    { 
      title: "Cutting-Edge Research", 
      description: "Includes latest breakthroughs from leading AI labs and robotics institutions worldwide.",
      stat: "200+",
      unit: "Research Papers"
    },
    { 
      title: "Practical Implementations", 
      description: "Ready-to-deploy code examples in Python, ROS 2, and simulation environments.",
      stat: "50+",
      unit: "Code Labs"
    },
    { 
      title: "Industry Applications", 
      description: "Real-world case studies from manufacturing, healthcare, and autonomous systems.",
      stat: "30+",
      unit: "Case Studies"
    },
  ];

  const testimonials = [
    {
      quote: "The most comprehensive guide to humanoid robotics I've encountered. Bridges the gap between theory and practical implementation flawlessly.",
      author: "Dr. Elena Rodriguez",
      role: "Robotics Lead, Boston Dynamics",
      rating: "★★★★★"
    },
    {
      quote: "This book doesn't just teach robotics—it teaches how to think about robotics. A paradigm shift in educational material.",
      author: "Kenji Tanaka",
      role: "AI Researcher, Toyota Research",
      rating: "★★★★★"
    },
    {
      quote: "Finally, a resource that treats physical AI as the revolutionary field it is. Essential for anyone serious about robotics.",
      author: "Dr. Sarah Chen",
      role: "Professor, MIT Robotics Lab",
      rating: "★★★★★"
    }
  ];

  // const isDarkMode = colorMode === 'dark';

  return (
    <Layout
      title={`${siteConfig.title} | The Future of Robotics`}
      description="Master the convergence of AI and robotics. Build intelligent humanoid systems with cutting-edge techniques and practical implementations.">
      
      {/* HERO SECTION */}
      <header className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGrid}></div>
          <div className={styles.heroGlow}></div>
        </div>
        
        <div className="container">
          <div className="row">
            <motion.div 
              className="col col--6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.heroBadge}>
                <span className={styles.badgeText}>THE DEFINITIVE GUIDE</span>
              </div>
              
              <Heading as="h1" className={styles.heroTitle}>
                <span className={styles.gradientText}>Physical AI</span>
                <br />
                & Humanoid Robotics
              </Heading>
              
              <p className={styles.heroSubtitle}>
                Master the convergence of artificial intelligence and mechanical engineering. 
                Build intelligent systems that perceive, reason, and interact with the physical world.
              </p>
              
              <div className={styles.heroStats}>
              <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Hands-On Labs</div>
              </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Pages of Expertise</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>2025</div>
                  <div className={styles.statLabel}>Latest Edition</div>
                </div>
              </div>
              
              <div className={styles.heroButtons}>
                <Link
                  className={clsx('button button--lg', styles.ctaPrimary)}
                  to="/docs/intro"
                >
                  🚀 Start Reading Now
                </Link>
                <Link
                  className={clsx('button button--lg', styles.ctaSecondary)}
                  to="/docs/intro"
                >
                  📘 Read Sample Chapters
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="col col--6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className={styles.heroImageContainer}>
                <img
                  src={heroImageSrc}
                  alt="Humanoid Robotics Visualization"
                  className={styles.heroImage}
                />
                <motion.div 
                  className={styles.floatingElement1}
                  animate={floatAnimation}
                />
                <motion.div 
                  className={styles.floatingElement2}
                  animate={{...floatAnimation, delay: 1}}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        {/* CORE MODULES SECTION */}
        <section className={styles.modulesSection}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text--center"
            >
              <div className={styles.sectionBadge}>CURRICULUM</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Master The <span className={styles.gradientText}>Core Modules</span>
              </Heading>
              <p className={styles.sectionSubtitle}>
                Comprehensive coverage of essential topics in modern robotics and AI integration
              </p>
            </motion.div>

            <motion.div 
              className={styles.modulesGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {coreModules.map((module, idx) => (
                <motion.div
                  key={idx}
                  className={styles.moduleCard}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className={clsx(styles.moduleIcon, styles[module.gradient])}>
                    {module.icon}
                  </div>
                  <h3 className={styles.moduleTitle}>{module.title}</h3>
                  <p className={styles.moduleDescription}>{module.description}</p>
                  <div className={styles.moduleFooter}>
                    <span className={styles.moduleCta}>Explore Module →</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <motion.div 
                className="col col--6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.featuresContent}>
                  <div className={styles.sectionBadge}>WHY THIS BOOK</div>
                  <Heading as="h2" className={styles.sectionTitle}>
                    Not Just Theory, <span className={styles.gradientText}>Production-Ready</span> Knowledge
                  </Heading>
                  <p className={styles.featuresDescription}>
                    This book bridges academic research with industrial application, providing 
                    actionable insights that have been tested in real-world scenarios. 
                    Each concept is paired with practical implementations.
                  </p>
                  
                  <div className={styles.featureList}>
                    {['Simulation to Real-world Transfer', 'Industry-Grade Code Examples', 
                      'Latest Research Integration', 'Ethical AI Frameworks'].map((item, idx) => (
                      <div key={idx} className={styles.featureListItem}>
                        <div className={styles.checkIcon}>✓</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="col col--6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.statsGrid}>
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className={styles.statCard}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={styles.statNumber}>{feature.stat}</div>
                      <div className={styles.statUnit}>{feature.unit}</div>
                      <h4 className={styles.statTitle}>{feature.title}</h4>
                      <p className={styles.statDescription}>{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text--center"
            >
              <div className={styles.sectionBadge}>INDUSTRY PRAISE</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Trusted by <span className={styles.gradientText}>Leading Experts</span>
              </Heading>
            </motion.div>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className={styles.testimonialCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <div>
                      <div className={styles.authorName}>{testimonial.author}</div>
                      <div className={styles.authorRole}>{testimonial.role}</div>
                    </div>
                    <div className={styles.rating}>{testimonial.rating}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AUTHOR SECTION */}
        <section className={styles.authorSection}>
          <div className="container">
            <div className="row">
              <motion.div 
                className="col col--4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.authorImageWrapper}>
                  <img
                    src={authorImageSrc}
                    alt="Muhammad Farooq"
                    className={styles.authorImage}
                  />
                  <div className={styles.authorBadge}>AUTHOR</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="col col--8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.authorContent}>
                  <div className={styles.sectionBadge}>BEHIND THE BOOK</div>
                  <Heading as="h2" className={styles.sectionTitle}>
                    From <span className={styles.gradientText}>Vision</span> to <span className={styles.gradientText}>Reality</span>
                  </Heading>
                  
                  <p className={styles.authorDescription}>
                    <strong>Muhammad Farooq</strong> is a visionary in the field of agentic AI and robotics. 
                    With over a decade of experience building intelligent systems, he brings a unique 
                    perspective that combines deep technical expertise with practical implementation 
                    knowledge.
                  </p>
                  
                  <p className={styles.authorDescription}>
                    His work spans across multiple industries, from autonomous vehicles to humanoid 
                    robotics, giving him unprecedented insight into the challenges and opportunities 
                    in physical AI. This book distills years of research and real-world experience 
                    into actionable knowledge.
                  </p>
                  
                  <div className={styles.authorExpertise}>
                    <div className={styles.expertiseItem}>
                      <div className={styles.expertiseIcon}>⚡</div>
                      <div>
                        <div className={styles.expertiseTitle}>Agentic AI Systems</div>
                        <div className={styles.expertiseDesc}>Autonomous decision-making architectures</div>
                      </div>
                    </div>
                    <div className={styles.expertiseItem}>
                      <div className={styles.expertiseIcon}>🤖</div>
                      <div>
                        <div className={styles.expertiseTitle}>Humanoid Robotics</div>
                        <div className={styles.expertiseDesc}>Bipedal locomotion & control systems</div>
                      </div>
                    </div>
                    <div className={styles.expertiseItem}>
                      <div className={styles.expertiseIcon}>🌐</div>
                      <div>
                        <div className={styles.expertiseTitle}>Production AI</div>
                        <div className={styles.expertiseDesc}>Deploying AI at industrial scale</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className="container text--center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.ctaBadge}>BEGIN YOUR JOURNEY</div>
              <Heading as="h2" className={styles.ctaTitle}>
                Start Building The <span className={styles.gradientText}>Future</span> Today
              </Heading>
              <p className={styles.ctaDescription}>
                Join thousands of engineers, researchers, and innovators who are shaping 
                the future of robotics. Get instant access to all chapters, code examples, 
                and community resources.
              </p>
              
              <div className={styles.ctaButtons}>
                <Link
                  className={clsx('button button--lg', styles.ctaPrimary)}
                  to="/docs/intro"
                >
                  📖 Start Learning Now
                </Link>
              </div>
              
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <div className={styles.ctaStatNumber}>24,00+</div>
                  <div className={styles.ctaStatLabel}>Readers Worldwide</div>
                </div>
                <div className={styles.ctaStat}>
                  <div className={styles.ctaStatNumber}>98%</div>
                  <div className={styles.ctaStatLabel}>Satisfaction Rate</div>
                </div>
                <div className={styles.ctaStat}>
                  <div className={styles.ctaStatNumber}>Lifetime</div>
                  <div className={styles.ctaStatLabel}>Updates Included</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CHATBOT */}
        <div className={styles.chatbotContainer}>
          <Chatbot />
        </div>
      </main>
    </Layout>
  );
}





