import React from 'react'

const mockNews = [
  {
    title: 'News 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies",
  },
  {
    title: 'News 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 7',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 8',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
  },
  {
    title: 'News 9',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam',
  }
]

const News = () => {
  return (
    <div>
      <h2>News</h2>
      <ul>
        {mockNews.map((news, index) => (
          <li key={index}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News