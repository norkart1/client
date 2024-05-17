import React from "react";
import PostAuthor from "../componets/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog-1.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__butons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is t</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          aspernatur dignissimos qui quis neque sapiente veniam veritatis
          eveniet a repellat hic beatae vitae voluptatum perferendis
          necessitatibus sint voluptatem doloribus, expedita ratione error
          perspiciatis quibusdam corrupti quae. Nam voluptate sunt veniam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          praesentium nisi quasi corrupti at sapiente eaque rem ullam, aliquid
          sed doloremque unde exercitationem cupiditate blanditiis cumque magnam
          laborum temporibus nostrum odio, ipsam aliquam similique. Sed
          voluptatem esse reprehenderit libero repellendus amet! Accusantium
          distinctio maiores fugiat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          adipisci veritatis ipsam at, eos sint dolore fugit eius vel!
          Asperiores id amet ipsa deleniti numquam non! Sequi sunt
          exercitationem non nam nesciunt odio incidunt maxime quidem ea totam
          obcaecati iusto voluptas, ducimus corrupti molestiae quisquam et atque
          ratione rem? Placeat quisquam aliquam deserunt qui, cupiditate
          blanditiis. Eius facere consequuntur voluptatibus ex! Quo,
          dignissimos, assumenda cum magni saepe cumque iste ullam qui deleniti
          blanditiis, harum aperiam mollitia aliquid veniam quas similique
          laborum. Fuga molestiae unde voluptas. Qui, ipsa. Praesentium quisquam
          repellat libero error eligendi voluptates maxime deleniti fugit, neque
          alias atque! Tenetur nulla delectus cumque consequatur, quos eius sunt
          dicta tempora aut!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          incidunt architecto reprehenderit dolor ipsam asperiores, possimus
          vero facilis molestias quia.
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione
        impedit, sunt dignissimos nesciunt ex, repellat dolore minus eius quo
        repudiandae consectetur corporis cupiditate tempore perspiciatis quasi
        ducimus. Corrupti necessitatibus eius deleniti repudiandae nobis,
        aliquid consectetur reiciendis blanditiis architecto harum molestiae
        ducimus obcaecati aut ad pariatur assumenda! Accusantium laudantium quae
        officiis rem assumenda omnis facere! Consequuntur quaerat iste nihil
        aut, sed, praesentium quas error asperiores recusandae culpa odio nobis?
        Natus tempora saepe nostrum possimus magni veritatis ut iusto voluptates
        ipsa! Omnis quidem, tenetur dicta tempore, repellat maxime mollitia
        possimus ut illum at nostrum. Pariatur expedita fugit minus placeat
        fugiat. Magni blanditiis quia quod exercitationem assumenda consequuntur
        rerum totam! Nobis, reiciendis. Tempore alias voluptate provident odio
        aliquam ducimus cumque repellat consequuntur, totam accusamus voluptatem
        ex vero commodi eligendi, voluptates repudiandae similique corrupti
        omnis nobis amet fugit? Eligendi, fugiat. Earum excepturi enim porro
        nisi obcaecati eaque vel quod, voluptate corporis quae iure esse
        exercitationem maxime, non necessitatibus. Labore saepe quo accusamus
        quaerat at ratione odio iusto quis. Distinctio dolorum consequatur
        tenetur pariatur necessitatibus laudantium molestias ullam rerum aut
        nulla molestiae odit deserunt iusto quae nesciunt possimus beatae,
        dolores reiciendis vel ipsa obcaecati qui? Quis reprehenderit, quasi
        rerum magnam dicta porro commodi qui.
      </div>
    </section>
  );
};

export default PostDetail;
