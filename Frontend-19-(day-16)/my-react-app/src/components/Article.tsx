type ArticleProps = {
  title: string;
  author: string;
  date: string;
  content: string;
};

const Article = ({ title, author, date, content }: ArticleProps) => {
  return (
    <article style={{ marginBottom: "2rem" }}>
      <h2>{title}</h2>
      <p>
        <strong>{author}</strong> | <em>{date}</em>
      </p>
      <p>{content}</p>
    </article>
  );
};

export default Article;
