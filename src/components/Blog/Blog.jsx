import React from "react";
import  Container from "../Container";
import s from './Blog.module.scss';

function Blog() {
    return <div id="blog" className={s.blog}>
    <div className={s.blog_img}></div>
    <div className={s.blog_box}>
      <Container> 
        <div className={s.box}>
          <h6 className={s.question}>April 16 2020</h6>
          <h4 className={s.title}>Blog Post One</h4>
          <p className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
          <button className={s.btn}>Read Our Blog</button>
        </div>
      </Container>
    </div>        
  </div>
}

export default Blog;