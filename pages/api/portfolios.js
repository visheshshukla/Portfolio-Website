import React from 'react';
import axios from 'axios';
import { Link } from '../routes';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

class Portfolios extends React.Component {
    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err) {
            console.error(err);
        }

        return {
            posts: posts.splice(0, 10)
        };
    }
    renderPosts = (posts) => {
        return posts.map((post, index) =>(
            <Col md="4">
                <React.Fragment key={index}>
                <span>
                    <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-city"> Some Location {index} </p>
                        <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                        <CardText className="portfolio-card-text">Some Description {index}</CardText>
                        <div className="readMore"> </div>
                    </CardBody>
                    </Card>
                </span>
                </React.Fragment>
            </Col>          
            )
        );
    }
    render() {
        const { posts } = this.props;
        return (
            <BaseLayout {...this.props}>
                <BasePage className="portfolio-page" title="Portfolios">
                    <Row>
                        { this.renderPosts(posts) }
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios;