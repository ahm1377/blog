import styled from "./article.module.css";
import article from "./../../assets/images/js.png";
function Article() {
  return (
    <div className={styled.articleWrapper}>
      <img src={article} />
      <h3>متغیر در جاوا اسکریپت</h3>
      <p>مطالعه در 5 دقیقه</p>
    </div>
  );
}

export default Article;
