import React, { useEffect, useState } from 'react';
import { List, Card, Layout, Typography, Spin, Empty } from 'antd';
import { fetchArticles } from '../../infrastructure/newsApi';
import { Article } from '../../domain/article';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading articles:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', padding: '0 24px' }}>
        <Title level={3} style={{ color: 'white', margin: 0, lineHeight: '64px' }}>
          News App
        </Title>
      </Header>

      <Content style={{ padding: '24px' }}>
        {loading ? (
          <Spin tip="Loading articles..." size="large" />
        ) : error ? (
          <Empty description="Gagal memuat artikel" />
        ) : (
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={articles}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={
                    item.urlToImage && (
                      <img
                        alt={item.title}
                        src={item.urlToImage}
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                    )
                  }
                  onClick={() =>
                    navigate(`/detail/${encodeURIComponent(item.title)}`)
                  }
                >
                  <Meta
                    title={item.title}
                    description={
                      <div>
                        <p>{item.description}</p>
                        <p style={{ fontSize: '12px', color: '#999' }}>
                          {new Date(item.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </Content>
    </Layout>
  );
};

export default ArticleList;
