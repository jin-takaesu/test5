import React from 'react';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";


const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Lorem</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat illum at consequatur et autem sapiente dicta quod a iure quas reiciendis expedita sed accusantium suscipit dolore nisi commodi quo assumenda. Vero deleniti praesentium debitis dolor aperiam neque nostrum saepe quasi porro placeat, iste optio. Iste ut fuga, non veritatis voluptas recusandae consequuntur blanditiis ipsum tempora possimus veniam rem odio iusto voluptatem voluptate repudiandae reprehenderit deleniti perferendis repellat magnam quasi, asperiores id! Omnis perferendis iure doloribus vero rerum sed quos in ab commodi ipsa eos ut libero sunt quas, at, sapiente nisi velit assumenda placeat sint! Consequuntur blanditiis incidunt qui perspiciatis libero possimus minima facilis corrupti tempore consectetur sequi beatae fugit voluptatibus quod voluptate vel vitae distinctio, delectus aliquid? Aut temporibus architecto dolorem cupiditate esse, fugiat, molestias suscipit omnis aliquam modi exercitationem maxime eligendi! Qui aut, nesciunt nam autem atque cumque incidunt modi iste saepe accusamus repellat dolores reiciendis tempore! Ipsam eaque asperiores nemo velit ad explicabo provident nostrum totam consequuntur harum mollitia, aperiam ipsa similique incidunt eum libero minima odit consectetur recusandae distinctio dicta dolores optio, quisquam iste. Incidunt eum a mollitia itaque voluptas ullam quam delectus officia eligendi, aliquid debitis facilis nobis amet. Odit quia alias rerum a?
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">TEXT</h2>
            <h3 class="section-subheading text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae cum et placeat iusto officia id repellat quam illum? Assumenda explicabo dolor quis temporibus ex deserunt fugiat, nulla ipsum doloremque!
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">text</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">text</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">text</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">TEXT</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>text</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, animi.</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>text</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, deleniti.</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>text</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, veniam.</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            more
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage