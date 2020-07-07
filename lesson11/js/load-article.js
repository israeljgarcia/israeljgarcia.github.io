article_list = {
  fish_haven: `<section class="preston-article">
        <h2>The Haven of Fish</h2>
        <h3>By Izzy</h3>
        <img
          id="light-festival"
          src="./images/fishing-haven-600x400.jpg"
          alt="holiday light festival"
        />
        <p class="article">
          Fish Haven was originally named Rush Creek. A post office was
          established there in 1867 and it was called Fish Haven. Fish Haven is
          actually just 2.5 miles North of the Utah border, so it's a quick
          getaway for people who live in North Utah. The post office that was
          first established there opperated until 1962. It's crazy to think that
          there was a post office operating for almost 100 years! Times are so
          different now. Fish Haven actually got its name because it is near
          Bear Lake which is a popular fishing spot. It is also a very popular
          spot to go on vacation to. Rentals are always available all around the
          internet. I would love to check it out because it looks so calming.
        </p>
      </section>`,

  preston: `<section class="preston-article">
      <h2>Festival of Lights</h2>
      <h3>By Izzy</h3>
      <img
        id="light-festival"
        src="./images/light-festival.jpg"
        alt="holiday light festival"
      />
      <p class="article">
        Every year in Preston there is the Festival of Lights. It includes an
        assortment of Holiday Light displays. It is an event that the whole
        family can enjoy! Unfortunately, this year's festival of lights may be
        cancelled due to the COVID-19 pandemic. The amount of cases have
        skyrocketed around the country, so there is a chance that the festival
        will be cancelled to comply with the COVID-19 safety measures. Despite
        this, Preston continues to plan for the best! After all, Christmas
        time is about spreading joy. We advise that everyone takes the proper
        precautions to stay safe during this pandemic. Help reduce the spread
        by distancing yourself from others and going out as least as possible.
        Have a great day!
      </p>
    </section>`,

  soda_springs: `<section class="preston-article">
    <h2>Bottle Cap Season</h2>
    <h3>By Izzy</h3>
    <img
      id="light-festival"
      src="./images/coca-cola-cap-600x400.jpg"
      alt="holiday light festival"
    />
    <p class="article">
      I've never been to Soda Springs, but it would be cool if Bottle Cap
      Season was a thing! Imagine many people showing off preciously kept
      bottle caps from the 40s, 50s, and 60s, and more! This would be a nice
      event to attend and it goes with the towns name too. Bottle Cap Season
      showcase featuring: <em>soda</em>. Personally, I have never collected
      bottle caps, but I think they are pretty cool, especially the older
      ones from the 60s. It is cool to get to imagine what the past might
      have been like just by lookiing at a bottle cap. My favorite retro
      caps are the Coca-Cola bottle caps because of the flashy red color.
      What are your favorite bottle caps? Maybe one day we can all enjoy our
      favorites at the Soda Springs Bottle Cap Season Festival. One can only
      dream!
    </p>
  </section>`,
};

const { fish_haven, preston, soda_springs } = article_list;

let articles = [fish_haven, preston, soda_springs];

document.getElementById("load-article").innerHTML =
  articles[Math.floor(Math.random() * articles.length)];
