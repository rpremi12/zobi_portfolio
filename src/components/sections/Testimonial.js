import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Education',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="exper" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xl text-color-secondary fw-600 tt-u mb-8">
                 California Polytechnic State University, San Luis Obispo
                  </div>

                <h5 className="mt-0 mb-12">
                  B.S. Computer Science | June 2021
                  </h5>

                 <div className="text-xL text-color-primary fw-600 tt-u mb-8">
                                   </div>

                     <h5 className="mt-0">
                   GPA: 3.2 | Fall 2020 Dean's List 
                  </h5>

                <h4 className="mt-0 mb-12">
                Relevant Coursework: 
                  </h4>

                  <p className='mt'>
Data Structures, Object Oriented Programming, Intro to Database Systems, Systems Programming, Design and Analysis of Algorithms, Intro to Artificial Intelligence, Intro to Software Engineering.
                  </p>

              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/calpoly.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;