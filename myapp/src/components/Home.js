import React from 'react'
const Home = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/qnjczscu9pkjjths6rtf" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/dvjbnaqg9uguijjueskd" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://luggagehero.com/wp-content/uploads/2020/02/ed-robertson-ON6Xw8XEUQ8-unsplash-1536x1024.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>

      <h1 style={{ textAlign: "center" }}>Destination</h1>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/11/thailand.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Thailand</h5>
                <p class="card-text">
                If you are one of those people who wants to venture to a land that is blessed with concrete jungles but is also not too far from the natural world, we have just found the perfect place for you. There is a country in Southeast Asia that encompasses all of these qualities mentioned above. 
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/02/Best-Places-to-Visit-in-June.jpg"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Pelling, Sikkim</h5>
                <p class="card-text">
                The sweltering summer of India makes us suffer terribly, especially in June when the sun's heat is at its peak. But you will agree, it is one of the best seasons to plan a long summer vacation, away from the scorching heat of the plains.
                </p>
                <a href="#" class="btn btn-primary">
                 Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Andaman.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Andaman</h5>
                <p class="card-text">
                Andaman is a place where beauty in a true sense really enthralls. Not only it is blessed with drop- dead gorgeous beaches but also its a crowning glory of India in terms of biodiversity. Tourists from all over the world love to visit this ecological paradise.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2014/02/top-15-places-honeymoon-north-east-tour-india.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">North East India</h5>
                <p class="card-text">
              Lipika cried out while giving us the details of her recent trip to Shillong and other cities of Meghalaya. With her eyes shining brightly and a bit watery  with excitement and cheeks getting tomato red, she further pledged that she would indeed go to North East for her honeymoon. Everyone in the room busted out laughing; however, a few days later I pondered over her PLEDGE and decided to do a little research on what are some great honeymoon destinations in North East.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
