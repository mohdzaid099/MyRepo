import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "./Home.module.css";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const colors = ["Primary", "Secondary", "Danger", "Warning", "Info"];
  
  // Adjust the styling of the container div for horizontal display
  return (
    <>
      <div className={styles.background}>
        <h2 style={{ justifyContent: "center",fontSize: "60px", fontFamily: "Times New Roman" , marginLeft: '3%', marginBottom: '20px' }}>
          Blog Posts:
        </h2>

        <div className={styles.cardContainer}>
          {blogs.map((blog, index) => (
            <Card
              bg="dark"
              key={blog.id}
              text={colors[index % colors.length].toLowerCase() === "light" ? "dark" : "white"}
              className={styles.card} // Use CSS module class for card styling
            >
              <Card.Header>Blog No.{index + 1}</Card.Header>
              <Link
                to={`/blog-details/${blog.id}`}
                className={styles.cardLink}
                style={{ color: "dark" }} // Set the text color to dark
              >
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
