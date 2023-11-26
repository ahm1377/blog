import styled from "./article.module.css";
import article from "./../../assets/images/js.png";
function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} />
      <h3>{props.article.title}</h3>
      <p>مطالعه در {props.article.readingtime} دقیقه</p>
    </div>
  );
}

export default Article;
