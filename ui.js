class UI{
  
    constructor()
    {
       this.body = document.querySelector("body");
    }

    
    FirstScene(){
      this.body = document.querySelector("body");

      this.body.innerHTML = `
      <div id="bio">
      <img id="pp" src="a.jpg" alt="">
      <ul>
          <li>
              <button class="svgParent briefcase">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
              </button>
          </li>
          <li>
              <button class="svgParent envelope">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
              </button>
          </li>
          <li>
              <button class="svgParent Person">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
              </button>
          </li>
      </ul>
  </div>
      `
    }


    Skills(){
        this.body = document.querySelector("body");

        this.body.innerHTML = `        
        <div id="Menu">
        <div id="aboutMe">
            <div id="image">
                <img id="Pp" src="a.jpg" style="border-radius: 100%; border: 5px solid rgb(255, 255, 255);" alt="">
            </div>
            <div id="paragraph">
                    <h1><strong>About</strong> me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, id in et impedit dignissimos eaque quia eius, dolorum enim ex quo rem provident sint neque.</p>
            </div>
        </div>
            <div class="Skills">
                <h1>Skills</h1>
                <div id="progresses" style="height: 100%;">
                    <div id="Progress left" style="width: 50%;height: 100%;margin-right: 1em;">
                        <h2>JavaScript</h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 82%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">82%</div>
                          </div>
                          <h2>Php</h2>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                          </div>
                          <h2>CSS</h2>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 96%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">96%</div>
                          </div>
                    </div>
                    <div id="Progress right" style="width: 50%; height: 100%;">
                        <h2>Unity</h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                          </div>
                          <h2>C#</h2>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                          </div>
                          <h2>HTML</h2>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                          </div>
                    </div>
                </div>
            </div>
            <div class="sideMenu" style="bottom: 37.5em;">
                <ul>
                        <a class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                          </svg></a>
                      <a class="list"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                      </svg></a>
                      <a class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                          </svg></a>
                      <a class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                          </svg></a>
                </ul>
              </div>
            </div>`;
            
    }

    Contact(Number,Email,Instagram){
      this.body = document.querySelector("body");

      this.body.innerHTML = `    <div id="Menu" class="Contact">
      <div id="header"  style = "margin-top: 2em;">
          <h1>Get <strong style = "color :#00b7ff">In Touch</strong></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eaque.</p>
      </div>
      <div class="main">
          <div class="aside">
              <div class="social"><h5>Phone</h5>
                  <div class="iconAnd">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        <h5>+${Number}</h5>
                  </div>
              </div>
              <div class="social"><h5>E-mail</h5>
                  <div class="iconAnd">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                      <h5>${Email}</h5>
                </div>
              <div class="social"><h5>Instagram</h5>
                    <div class="iconAnd">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                        <h5>@${Instagram}</h5>
                  </div>
              </div>
          </div>
      </div>
      <div class="section">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis molestias itaque illum, consequuntur quaerat velit asperiores quo accusamus expedita!</p>
          <div id="NameAndMail">
              <div class="form-group"> <i class="fa fa-user prefix"></i>
                  <input id="name" style="border-radius: 1em;width: 20em;" name="name" type="text" class="form-control" placeholder="YOUR NAME" required="">
              </div>
              <div class="form-group"> <i class="fa fa-user prefix"></i>
                  <input id="name" style="border-radius: 1em;width: 20em;" name="name" type="text" class="form-control" placeholder="YOUR E-MAİL" required="">
              </div>
          </div>
          <div class="form-group"> <i class="fa fa-user prefix"></i>
              <input id="name" style="border-radius: 1em;width: 41em;height: 10em;" name="name" type="text" class="form-control" placeholder="YOUR MESSAGE" required="">
          </div>
          <button type="button" class="btn btn-primary" style="margin-top: 1em;" data-bs-toggle="button" autocomplete="off">SEND MESSAGE</button>
      </div>

  </div>
  <div class="sideMenu">
  <ul>
          <a class="list">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg></a>
        <a class="list"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg></a>
        <a class="list">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
            </svg></a>
        <a class="list">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg></a>
  </ul>
</div>`;
    }

    Blog()
    {
      this.body.innerHTML = `
      <div id="Menu" class="Contact">
      <div id="header"  style = "margin-top: 2em;">
          <h1>-My <strong style = "color :#00b7ff">BLOGS</strong>-</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eaque.</p>
      </div>
              <div class="main" style="display: flex;flex-direction:column ">
                  <div class="line" style="display: flex;justify-content:space-between;">
                          <div style="background-image: url(./img/portfolyo/1.jpg); box-shadow: 0 10px 5px rgba(94, 94, 94, 0.438)" class="sliderCard">
                              <div class="slider">
                                  <div class="blogHeader">
                                      orem ipsum dolor sit.
                                  </div>
                                  <a href="#">Read More...</a>
                              </div>
                              <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                  <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                              </div>
                          </div>
                          <div style="background-image: url(./img/portfolyo/2.jpg);box-shadow: 0 10px 5px rgba(94, 94, 94, 0.438)" class="sliderCard">
                              <div class="slider">
                                  <div class="blogHeader">
                                      orem ipsum dolor sit.
                                  </div>
                                  <a href="#">Read More...</a>
                              </div>
                              <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                  <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                              </div>
                          </div>
                          <div style="background-image: url(./img/portfolyo/3.jpg); box-shadow: 0 10px 5px rgba(94, 94, 94, 0.438)" class="sliderCard">
                              <div class="slider">
                                  <div class="blogHeader">
                                      orem ipsum dolor sit.
                                  </div>
                                  <a href="#">Read More...</a>
                              </div>
                              <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                  <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                              </div>
                          </div>
                      </div>
                      <div class="line" style="display: flex;justify-content:space-between;">
                          <div class="sliderCard" style="background-image: url(./img/portfolyo/4.jpg); box-shadow: 0 10px 5px rgba(94, 94, 94, 0.438)">
                              <div class="slider">
                                  <div class="blogHeader">
                                      orem ipsum dolor sit.
                                  </div>
                                  <a href="#">Read More...</a>
                                  <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                      <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                                  </div>
                              </div>
                              <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                  <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                              </div>
                          </div>
                          <div style="background-image: url(./img/portfolyo/5.jpg); box-shadow: 0 10px 5px rgba(94, 94, 94, 0.438)" class="sliderCard">
                              <div class="slider">
                                  <div class="blogHeader">
                                      orem ipsum dolor sit.
                                  </div>
                                  <a href="#">Read More...</a>
                              </div>
                              <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                  <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                              </div>
                          </div>
                          <div style="background-image: url(./img/portfolyo/6.jpg); box-shadow: 0 10px 5px rgba(94, 94, 94, 0.438)" class="sliderCard">
                              <div class="slider">
                                  <div class="blogHeader">
                                      orem ipsum dolor sit.
                                  </div>
                                  <a href="#">Read More...</a>
                              </div>
                              <div class="blogFooter" style="width: 15em;height: 2em; background-color: rgb(255, 255, 255); position: absolute; top: -15px;box-shadow: 0 5px 5px rgb(95, 95, 95);">
                                  <h5 style="text-align: center; text-shadow: 0 1px 1px black;">-Header-</h5>
                              </div>
                          </div>
                      </div>                    
                  </div>
                  <div class="sideMenu">
                      <ul>
                              <a class="list">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                              </svg></a>
                          <a class="list"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                          </svg></a>
                          <a class="list">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                              </svg></a>
                          <a class="list">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                              </svg></a>
                      </ul>
                  </div>
              </div>
      `;
    }
}