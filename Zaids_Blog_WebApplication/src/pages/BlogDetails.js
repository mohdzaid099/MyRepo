import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, deleteBlog } from "../store/blogSlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LikesContext } from "../context/like-context";
import styles from "./BlogDetails.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BlogDetails = () => {
  // const ctx = useContext(LikeContext);

  const { id } = useParams();
  console.log(id);
  const blogUnit = useSelector((state) => selectBlogById(state, id));
  console.log(blogUnit);
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);

  const { likes, toggleLike } = useContext(LikesContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  const handleLikeClick = () => {
    toggleLike(id);
  };

  const likeButton = (
    <Button bg="light" variant="danger" style={{ color: "red", background: "white" }} onClick={handleLikeClick}>
      {likes[id] ? (
        <>
          {" "}
          'Liked' <FaHeart />
        </>
      ) : (
        <>
          {" "}
          'Like' <FaRegHeart />
        </>
      )}
    </Button>
  );
  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div className={styles.pageBackground}>
      
      <div>
      <Button
        type="button"
        bg="light"
        variant="dark"
        onClick={() => navigate("/")}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
          marginTop: "25px"
          
        }}
      >
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        BACK
        {/* </Link> */}
      </Button>

      <Card
        border="primary"
        // bg={colors[index % colors.length].toLowerCase()}
        key={blogUnit.id}
        text={"dark"}
        style={{
          width: "50rem",
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "20%",
          marginBottom: "25px",

          className: "mb-2",
        }}
      >
        <Card.Header>
          <Button
            type="button"
            bg="dark"
            variant="dark"
            onClick={() => handleDelete(blogUnit.id)}
            style={{
              marginRight: "25px",
              color: "white",
              background: "rgb(54, 69, 79)"
            }}
          >
            Delete
          </Button>
          <Button
            type="button"
            bg="dark"
            variant="dark"
            onClick={() => handleEdit(blogUnit.id)}
            style={{
              marginRight: "25px",
              color: "white",
              background: "rgb(54, 69, 79)",
            }}
          >
            Edit
          </Button>
          {likeButton}
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <div>
              <div
                style={{
                  marginRight: "25px",
                  color: "rgb(54, 69, 79)",
                  textAlign: "center",
                }}
              >
                {blogUnit.category}
              </div>
              <div>{blogUnit.title}</div>
            </div>

            {/* <div style={{
              marginRight: "25px",
              color: "#B2BEB5",
              gap: "10px 2em",
            }}></div> */}
          </Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {blogUnit.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
    
  );
};

export default BlogDetails;
