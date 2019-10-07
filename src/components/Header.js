import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-pagelines"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>CarbonLab</h1>
                <p>Automatically calculate your true carbon footprint!<br /></p>
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
