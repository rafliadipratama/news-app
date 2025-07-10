import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArticleList from './ArticleList';
import { BrowserRouter } from 'react-router-dom';
import * as api from '../../infrastructure/newsApi';

jest.mock('../../infrastructure/newsApi', () => ({
  fetchArticles: jest.fn(),
}));

const mockArticles = [
  {
    title: 'Test Title 1',
    description: 'Test Description 1',
    content: 'Full Content 1',
    author: 'Author 1',
    publishedAt: '2025-07-10',
    source: { name: 'Test Source' },
    url: 'http://example.com',
  },
  {
    title: 'Test Title 2',
    description: 'Test Description 2',
    content: 'Full Content 2',
    author: 'Author 2',
    publishedAt: '2025-07-11',
    source: { name: 'Test Source 2' },
    url: 'http://example.com',
  },
];

describe('ArticleList Component', () => {
  beforeEach(() => {
    (api.fetchArticles as any).mockResolvedValue(mockArticles);
  });

  it('renders article list correctly', async () => {
    render(
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Title 1')).toBeInTheDocument();
      expect(screen.getByText('Test Title 2')).toBeInTheDocument();
    });
  });

  it('displays error message on API failure', async () => {
    (api.fetchArticles as any).mockRejectedValue(new Error('API Error'));

    render(
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    );

    await waitFor(() => {
      // Pastikan ini cocok dengan text error yang muncul di komponenmu
      expect(screen.getByText(/gagal memuat artikel/i)).toBeInTheDocument();
    });
  });
});
