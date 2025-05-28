import React, { useEffect, useState } from "react";

function MainPage() {
  const [title, setTitle] = useState("Fashion");
  const [subtitle, setSubTitle] = useState(
    "Curate your wardrobe with timeless pieces and trendy designs."
  );
  const [index, setIndex] = useState(0);

  const data = [
    {
      title: "Fashion",
      subtitle: "Curate your wardrobe with timeless pieces and trendy designs.",
    },
    {
      title: "Tech",
      subtitle: "Stay updated with the latest gadgets and innovations.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % data.length;
        setTitle(data[newIndex].title);
        setSubTitle(data[newIndex].subtitle);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <main
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section style={{ textAlign: "center", padding: "0 24px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#1f2937",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "#6366f1" }}>{title}</span> Haven
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: "500",
            color: "#4b5563",
            marginBottom: "32px",
          }}
        >
          {subtitle}
        </p>
      </section>
    </main>
  );
}

export default MainPage;
