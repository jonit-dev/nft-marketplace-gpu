import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

interface IProps {}

export const Home: React.FC<IProps> = (props) => {
  return (
    <Container>
      <div>
        <Header />
        <section className="container">
          <div className="columns features">
            <Card
              title="lorem"
              imagePath="https://source.unsplash.com/6Ticnhs1AG0"
            >
              <p>
                Ut venenatis tellus in metus vulputate. Amet consectetur
                adipiscing elit pellentesque. Sed arcu non odio euismod lacinia
                at quis risus. Faucibus turpis in eu mi bibendum neque egestas
                cmonsu songue. Phasellus vestibulum lorem sed risus.
              </p>
              <span
                className="button is-link modal-button"
                data-target="modal-card"
              >
                Modal Card
              </span>
            </Card>
            <Card
              title="lorem"
              imagePath="https://source.unsplash.com/6Ticnhs1AG0"
            >
              <p>
                Ut venenatis tellus in metus vulputate. Amet consectetur
                adipiscing elit pellentesque. Sed arcu non odio euismod lacinia
                at quis risus. Faucibus turpis in eu mi bibendum neque egestas
                cmonsu songue. Phasellus vestibulum lorem sed risus.
              </p>
              <span
                className="button is-link modal-button"
                data-target="modal-card"
              >
                Modal Card
              </span>
            </Card>
          </div>
          <div className="columns features"></div>
        </section>
        <footer>
          <div className="content has-text-centered">
            <div className="control level-item">
              <a href="https://github.com/BulmaTemplates/bulma-templates">
                <div className="tags has-addons">
                  <span className="tag is-dark">Bulma Templates</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
          </div>
        </footer>
        {/*  ===============
    HERE BE MODALS
    ===============  */}
        {/* 3dFlipVertical card tiny */}
        <div id="modal-card" className="modal modal-fx-3dSlit">
          <div className="modal-background" />
          <div className="modal-content is-tiny">
            {/* content */}
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/6Ticnhs1AG0"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                        alt="linda barret avatar"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Jane Doe</p>
                    <p className="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div className="content">
                  Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
                  tellin' you way up north bookin' it can't get theyah from
                  heeyah native bean suppah whawf Powrtland Museum of Aht, back
                  woods hawsun around the pit mummah Yessah, mummah muckle riyht
                  on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce
                  ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah
                  sumpin' fierce hoppa bub If you can't stand the wintah you
                  don't deserve the summah slower than molasses going uphill in
                  January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak
                  Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor
                  ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig,
                  naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye.
                  Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih
                  throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
                  nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2018-02-02">12:45 AM - 20 June 2018</time>
                </div>
              </div>
            </div>
            {/* end content */}
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
        {/* end tiny modal card */}
        {/* 3dFlipVertical card tiny [butterfly] */}
      </div>
    </Container>
  );
};

const Container = styled.div``;
