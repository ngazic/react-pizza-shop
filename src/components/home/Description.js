import React from 'react'

const Description = () => {
  return (
    <section className="section-default">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="ui-title-block wow fadeInUp" data-wow-duration="2s" >We are pizza makers, and our mission is to make cool pizza which feeds all your senses.</h2>
          <p className="ui-subtitle-block wow fadeInUp" data-wow-duration="2s" >We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud. <br/> It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family. <br/> And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.</p>

          <div className="advantages">
            <div className="row">
              <div className="col-md-4">
                <div className="advantages__item wow fadeInLeft" data-wow-duration="2s" >
                  <i className="icon pe-7s-leaf"></i>
                  <h3 className="advantages__title ui-title-inner">We’re Careful</h3>
                  <div className="advantages__description">The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a  designated kit, and every pizza is freshly baked on designated parchment paper in our ovens.</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="advantages__item wow fadeInUp" data-wow-duration="2s" >
                  <i className="icon pe-7s-medal"></i>
                  <h3 className="advantages__title ui-title-inner">We’re Certified</h3>
                  <div className="advantages__description">Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), and we take specific caution when making these pizzas.</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="advantages__item wow fadeInRight" data-wow-duration="2s" >
                  <i className="icon pe-7s-rocket"></i>
                  <h3 className="advantages__title ui-title-inner">You’re Creative</h3>
                  <div className="advantages__description">For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option. The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Description;