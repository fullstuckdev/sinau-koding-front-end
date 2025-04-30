import { useEffect, useState } from "react";
import { API_URL_JSON, ENDPOINTS } from "../config/apiConfig";
interface Post {
  id: number;
  title: string;
  body: string;
}

export function PostsFetch() {
  // dia menyimpan, mengambil, menghapus, dan mengupdate data postingan
  const [posts, setPosts] = useState<Post[]>([]);

  const [newTitle, setNewTitle] = useState("");

  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    fetch(`${API_URL_JSON}${ENDPOINTS.getPosts}`) // untuk mengambil data dari variabel API_URL
      .then((res) => res.json()) // untuk konversi data menjadi json
      .then((data: Post[]) => setPosts(data.slice(0, 1))); // Mengambil 5 postingan pertama
  }, []);

  const handleCreate = async () => {
    const response = await fetch(`${API_URL_JSON}${ENDPOINTS.createPosts}`, {
      method: "POST", // POST untuk membuat atau mengirim data
      headers: {
        "Content-Type": "application/json", // menandakan bahwa kita mengirim JSON
      },
      // data yang akan kita kirim, melalui body
      body: JSON.stringify({
        title: newTitle,
        body: newBody,
        userId: 1,
      }),
    });

    // bagian data ini, dia mengacu ke interface Post. datanya akan selalu:
    // id: number;
    // title: string;
    // body: string;

    const data: Post = await response.json(); // untuk convert menjadi bentuk JSON

    // ...posts => merging data / menggabungkan data.
    // const data1 = [1,2,3,4]
    // setPosts([5], ...data1)
    // menjadi: data 1 = [1,2,3,4,5]

    setPosts([data, ...posts]); // untuk memasukan data response ke dalam variabel setPosts
    setNewTitle("");
    setNewBody("");
  };

  const handleUpdate = async (id: number) => {
    const response = await fetch(
      `${API_URL_JSON}${ENDPOINTS.updatePosts.replace(":id", id.toString())}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle || "Updated Title",
          body: newBody || "Updated Body",
          userId: 1,
        }),
      }
    );

    const data: Post = await response.json(); // konversi JSON

    // dia bakal mencari ID yang sesuai dengan parameter
    // setelah menemukan yang sesuai, barulah postingan tersebut kita tampilkan
    setPosts(posts.map((post) => (post.id === id ? data : post)));
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL_JSON}${ENDPOINTS.deletePosts}`, {
      method: "DELETE",
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2>Postingan (Fetch Version)</h2>

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
