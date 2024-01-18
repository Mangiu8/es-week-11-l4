import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Article } from "./types";
import { Card, Col, Container, Row } from "react-bootstrap";

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={article.image_url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.summary}</Card.Text>
              <Card.Text>
                Pubblicato da ~ <strong>{article.news_site}</strong> il "{article.published_at}"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetailPage;
