import { useEffect, useState } from "react";
import axios from "axios";

interface Postingan {
  id: number;
  title: string;
  body: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export function AxiosFunc() {
  const [posts, setPosts] = useState<Postingan[]>([]);

  const [newTitle, setNewTitle] = useState("");

  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    axios.get<Postingan[]>(API_URL).then((response) => {
      setPosts(response.data.slice(0, 1)); // ambil 5 postingan pertama
    });
  }, []);

  const handleCreate = async () => {
    const response = await axios.post<Postingan>(API_URL, {
      title: newTitle,
      body: newBody,
      userId: 1,
    });
    setPosts([response.data, ...posts]);
    setNewTitle("");
    setNewBody("");
  };

  const handleUpdate = async (id: number) => {
    const response = await axios.put<Postingan>(`${API_URL}/${id}`, {
      title: newTitle || "updated title",
      body: newBody || "update body",
      userId: 1,
    });

    setPosts(posts.map((post) => (post.id === id ? response.data : post)));
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2>Postingan (Axios Version)</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "30px",
          maxWidth: "400px",
        }}
      >
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
          style={{
            padding: "10px 14px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <input
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          placeholder="Body"
          style={{
            padding: "10px 14px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>

      <button onClick={handleCreate}>Create Posts</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
            <button onClick={() => handleUpdate(post.id)}>Update</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
