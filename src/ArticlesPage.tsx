// ArticlesPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Article } from "./types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");

        const articlesArray = response.data?.results || [];
        setArticles(articlesArray);
        console.log(articlesArray);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  if (!articles) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(articles)) {
    console.error("Invalid data format for articles:", articles);
    return <div>Error loading articles</div>;
  }

  return (
    <div>
      <Container>
        <h2>Spaceflight News</h2>
        <Row>
          {articles.map((article) => (
            <Col xs={4}>
              <Card key={article.id} style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <Link to={`/article/${article.id}`}>
                    <Card.Title>{article.title}</Card.Title>
                  </Link>
                  <Card.Img variant="top" src={article.image_url} alt={article.title} />
                  <Card.Text>{article.summary}</Card.Text>
                  <Card.Text>Articolo di ~ {article.news_site}</Card.Text>
                  <Link to={`/article/${article.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default ArticlesPage;
