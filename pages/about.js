import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
          <BaseLayout {...this.props}>
            <BasePage className="about-page">
              <Row className="mt-5">
                <Col md="6">
                  <div className="left-side">
                    <h1 className="title fadein">Hello, Welcome</h1>
                    <h4 className="subtitle fadein">To About Page</h4>
                    <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                  </div>
                </Col>
                <Col md="6">
                  <div className="fadein">
                    <p>My name is Vishesh Shukla and I am a Computer Science & Engineering Student and freelance developer. </p>
                    <p>
		    I have done various Certification courses on Technologies like Java, ReactJS, NodeJS from various online platforms.                    
                    </p>
                    <p>
                    I have several years of experience working on a wide range of technologies and projects from Java development 
		    to Full Stack Web Development projects based on MERN Stack.
                    </p>
                  </div>
                </Col>
              </Row>
            </BasePage>
          </BaseLayout>
        )
      }
}

export default About;