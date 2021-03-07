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
    title: 'Work Experience',
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
                <div className="text-xl text-color-primary fw-600 tt-u mb-8">
                 TransUnion | Summer 2019

                  </div>
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Software Engineer Intern
                  </h3>
                <p className="m-0">
                   I worked with Node.JS, JavaScript, and AWS Cognito and Lambda to develop a currently confidential project in an Agile development team. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/logo-transunion.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xl text-color-primary fw-600 tt-u mb-8">
                  Portland State University | Summer 2017
                  </div>
                <h3 className="mt-0 mb-12">
                  Researcher, AI Steering 
                  </h3>
                <p className="m-0">
                  I worked in a student research group an artificial intelligence approach to autonomous vehicle steering. I wrote Python scripts and ran extensive Unity simulations to collect and label over 35,000 files for neural network training. I also wrote 3 of 7 layers in Tensorflow for our Convolutional Neural Network, reduced loss from 0.38 to 0.07.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/PSU_logo2.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xl text-color-primary fw-600 tt-u mb-8">
                  Intel Inc. | Summer 2016
                  </div>
                <h3 className="mt-0 mb-12">
                  Software Development Intern 
                  </h3>
                <p className="m-0">
                  I created the backend for a JavaScript image comparison API with 93% accuracy that utilizes a 4 layer algorithmic approach to quickly output changed object positions in images for developers. I lead an Agile development intern group in conducting market research by gathering feedback from over 90 people, as well as creating a detailed business plan for the product.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/logo-intel-2.jpg')}
                  alt="Features split 03"
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