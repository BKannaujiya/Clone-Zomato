import './header.css'
import React from 'react';


const Header = () => {
  return (<div className=' header max-width'>
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheme.zdassets.com%2Ftheme_assets%2F219316%2Fca65d4b0417dec6fa903cc5fadfd0ad9bbc93ce0.png&f=1&nofb=1'
      alt='Zomato logo'
      className='header-logo'
    />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous" />

    <div className='header-right'>
      <div className='header-location-search-container'>
        <div className=' location-wrapper'>
          <div className='location-icon-name'>
            <i className='fi fi-rr-marker absolute-center location-icon'></i>
            <div>select your city...</div>
          </div>
          {/* <div class="dropdown">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div> */}
          <i className='fi fi-rr-caret-down absolute-center'></i>
        </div>
        <div className='location-search-seperator'></div>
        <div className='header-SearchBar'>
          <i className='fi fi-rr-search absolute-center search-icon'></i>
          <input className='search-input' placeholder='Search for restaurent, cuisine or a dish' />
        </div>
      </div>
      <div className='profile-wrapper'>
        <img className='header-profile-img' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4gcGG1F0z6LjVlJjYWGGcgHaHa%26pid%3DApi&f=1' alt='profile icon' />
        <span className='header-username'>Bashishtha</span>
        <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i>

      </div>
    </div>
  </div>);
};

export default Header;
