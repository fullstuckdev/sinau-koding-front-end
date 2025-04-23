import React, { useState } from 'react';

type Props = {
  onAdd: (article: {
    title: string;
    author: string;
    date: string;
    content: string;
  }) => void;
};

const NewArticleForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    onAdd({ title, author, date, content });
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <h2>Tambah Artikel Baru</h2>
      <input
        type="text"
        placeholder="Judul Artikel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Isi artikel"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <br />
      <button type="submit">Tambah Artikel</button>
    </form>
  );
};

export default NewArticleForm;