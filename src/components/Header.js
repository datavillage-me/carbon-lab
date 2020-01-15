import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
             <img width="300px" src="https://www.accenture.com/t00010101T000000Z__w__/fr-fr/_acnmedia/Accenture/Conversion-Assets/MainPages/Images/Global_26/Accenture-Electric-Purple-Logo-marquee.png"/>
       
        <div className="content">
            <div className="inner">
                <h1>Accenture - Employee CarbonLab</h1>
                <p>Automatically calculate your carbon footprint and act accordingly!<br /></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>How does it work?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>My Carbon footprint</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Carbonlab</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact us</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
