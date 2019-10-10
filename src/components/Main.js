import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">How does it work?</h2>
          <span className="image main">
           
          </span>
          <p>
              CarbonLab helps people calculate and improve their carbon footprint by getting insights from your data. We use private processing technology by <a href="https://www.datavillage.me">datavillage.me</a> to ensure only the insights are shared with us. 
          </p>
          <p>
              <b>We never access, keep and store your personal data!</b>
          </p>
          <p> 
              How to calculate your true carbon footprint?
              <ul>
                <li>Install the Datavillage chrome extension</li>
                <li>Activate your data sources via your Datavillage account</li>
                <li>Read and agree with the consent policy</li>
                <li>Trigger the calculation and get your carbon footprint</li>
              </ul>
              <a href="https://chrome.google.com/webstore/detail/ieaegaclpphaflhfajdfabcnhiijpgok">
                <button class="btn btn-default">
                  <img src="https://www.ebsta.com/wp-content/uploads/2019/04/1200px-Google_Chrome_icon_September_2014.svg-300x300.png" width="20" /> Install Chrome extension
                </button>
              </a>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Carbon footprint</h2>
          <h3>Minimal additional information are required:</h3> 
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Number of person(s) at home</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="3" selected>Four</option>
                <option value="3">More</option>
              </select>
            </div>
            <div className="field half">
              <label htmlFor="email">Choose your vehicule (car)</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">Peugeot 308</option>
                <option value="2" selected>BMW X7</option>
                <option value="3">Maserati</option>
                <option value="3">Mercedes AMG</option>
                <option value="3">Other</option>
              </select>
            </div>
            <ul className="actions">
              <li>
                <input type="button" id="datavillageButton" value="Calculate with Datavillage" className="special" />
              </li>
            </ul>
          </form>
          <h3>Evolution of your carbon footprint</h3>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">September</th>
                  <th scope="col">October</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Electricity</th>
                  <td>914 KWh - 200 kg/CO2</td>
                  <td><span id="datavillageOutputs-electricity"></span></td>
                </tr>
                <tr>
                  <th scope="row">Natural gaz</th>
                  <td>800 KWh - 100 kg/CO2</td>
                  <td><span id="datavillageOutputs-gaz"></span></td>
                </tr>
                <tr>
                  <th scope="row">Car</th>
                  <td>2600 Km - 260 kg/CO2</td>
                  <td><span id="datavillageOutputs-car"></span></td>
                </tr>
                <tr>
                  <th scope="row">Train</th>
                  <td>500 Km - 20 kg/CO2</td>
                  <td><span id="datavillageOutputs-train"></span></td>
                </tr>
                <tr>
                  <th scope="row">Total</th>
                  <td><b>580 kg/CO2</b></td>
                  <td><span id="datavillageOutputs-total"></span></td>
                </tr>
              </tbody>
            </table>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Carbonlab</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact us</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="#"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
