import React, { Component } from 'react';
import {TweenMax, Power4} from 'gsap/TweenMax';
import './Search.css';
import SearchButton from '../SearchButton/SearchButton';

class Search extends Component {
    constructor(props){
        super(props);
        this.state  = {
            searchValue: ''
        };
    };      

    handleSubmit = (event) => {

        event.preventDefault();

    };

    handleInputChange = ({

        target: {value}

    }) => {

        this.setState({
            searchValue: value
        });
        
    };

    handleSearchOpen = (event) => {

        const searchBtnClose = document.querySelector('.search__button--close');
        const searchInput = document.querySelector('.search__item');
        const searchBlock = document.querySelector('.nav__search');
        const searchLabel = document.querySelector('.search__label');

        const menuItem = document.querySelectorAll('.menu__item');
        const searchForm = document.querySelector('.search__form');
        const searchBtnOpen = document.querySelector('.search__button--open');

        setTimeout(function() {
            searchBlock.removeAttribute('style');
        	searchLabel.removeAttribute('style');
        	searchInput.removeAttribute('style');
        	searchBtnClose.removeAttribute('style');
        }, 1000);

        /* Start animation onOpen search menu */

        /* TM header menu-items animation */

        TweenMax.to(menuItem[5], .5, {
            ease: Power4.easeInOut,
            opacity: 0,
        });
    
        TweenMax.to(menuItem[4], .7, {
            ease: Power4.easeInOut,
            opacity: 0,
        });
    
        TweenMax.to(menuItem[3], .9, {
            ease: Power4.easeInOut,
            opacity: 0,
        });
    
        TweenMax.to(menuItem[2], 1.1, {
            ease: Power4.easeInOut,
            opacity: 0,
        });
    
        TweenMax.to(menuItem[1], 1.3, {
            ease: Power4.easeInOut,
            opacity: 0,
        });
    
        TweenMax.to(menuItem[0], 1.5, {
            ease: Power4.easeInOut,
            opacity: 0,
        });

        TweenMax.to(menuItem, 0, {
            ease: Power4.easeInOut,
            visibility: 'hidden',
            delay: 1.5,
        });

        /* TM header menu-items animation */

        /* TM header nav-menu animation */

        TweenMax.to('.nav__menu', 0, {
            width: '0%',
            delay: 1.5,
        });

        /* TM header nav-menu animation */

        /* TM header search animation */

        TweenMax.to(searchBlock, 1, {
            css:{ 
                className: '+=nav__search--active',
            },
            delay: 1.5,
        });
        
        TweenMax.to(searchForm, 1, {
            css:{ 
                className: '+=search__form--active',
            },
            delay: 1.5,
        });

        TweenMax.to(searchLabel, 1, {
            delay: 1.5,
            css:{ 
                className: '+=search__label--active',
            },
        });

        TweenMax.to(searchInput, 1.4, {
            delay: 1.8,
            css:{ 
                    className: '+=search__item--active',
                },
        });

        TweenMax.to(searchBtnOpen, 0, {
            delay: 1.5,
            css:{ 
                    className: '+=search__button--active',
                },
        });

        TweenMax.to(searchBtnClose, 0, {
            delay: 1.5,
            css:{ 
                    className: '+=search__button--active',
                },
        });

        /* TM header search animation */

    };

    handleSearchClose = (event) => {

        const searchBtnClose = document.querySelector('.search__button--close');
        const searchInput = document.querySelector('.search__item');
        const searchBlock = document.querySelector('.nav__search');
        const searchLabel = document.querySelector('.search__label');

        const menuItem = document.querySelectorAll('.menu__item');
        const searchForm = document.querySelector('.search__form');
        const searchBtnOpen = document.querySelector('.search__button--open');

        setTimeout(function() {

            searchBlock.classList.remove('nav__search--active');
            searchForm.classList.remove('search__form--active');
            searchLabel.classList.remove('search__label--active');
            searchInput.classList.remove('search__item--active');
            searchBtnOpen.classList.remove('search__button--active');
            searchBtnClose.classList.remove('search__button--active');
            
            searchInput.value = '';

        }, 900);

        /* Start animation onClose search menu */

        /* TM header nav-menu animation */

        TweenMax.to('.nav__menu', 0, {
            width: 'initial',
        });

        /* TM header nav-menu animation */

        /* TM header menu-items animation */ 
        
        TweenMax.to(menuItem[0], 1, {
            ease: Power4.easeInOut,
            opacity: 1,
            visibility: 'visible'
        });
    
        TweenMax.to(menuItem[1], 1.3, {
            ease: Power4.easeInOut,
            opacity: 1,
            visibility: 'visible'
        });
    
        TweenMax.to(menuItem[2], 1.6, {
            ease: Power4.easeInOut,
            opacity: 1,
            visibility: 'visible'
        });
    
        TweenMax.to(menuItem[3], 1.9, {
            ease: Power4.easeInOut,
            opacity: 1,
            visibility: 'visible'
        });
    
        TweenMax.to(menuItem[4], 2.2, {
            ease: Power4.easeInOut,
            opacity: 1,
            visibility: 'visible'
        });
    
        TweenMax.to(menuItem[5], 2.5, {
            ease: Power4.easeInOut,
            opacity: 1,
            visibility: 'visible'
        });

        /* TM header menu-items animation */

        /* TM header search animation */

        TweenMax.to(searchBlock, 1, {
            width: '120px',
            height: '0%',
        });

        TweenMax.to(searchLabel, .5, {
            opacity: '0',
        });

        TweenMax.to(searchInput, 1, {
            width: '0%',
            height: '0%',
        });

        TweenMax.to(searchBtnClose, .5, {
            width: '0%',
            height: '0%',
            opacity: '0',
        });

        /* TM header search animation */

    };

    handleInputFocus = (event) => {

        const searchLabel = document.querySelector('.search__label');

        TweenMax.to(searchLabel, 0, {
            ease: Power4.easeInOut,
            opacity: 0,
            visibility: 'hidden',
        });

    };

    handleInputBlur = (event) => {

        const searchLabel = document.querySelector('.search__label');
        const searchInput = document.querySelector('.search__item');

        if(searchInput.value == '') {

            TweenMax.to(searchLabel, 0, {
                ease: Power4.easeInOut,
                opacity: 1,
                visibility: 'visible',
            });

        }

    };

    render() {
        return (
            <div className="nav__search search">
                <form action="/" className="search__form" onSubmit={this.handleSubmit}>
                    <label 
                        htmlFor="search" 
                        className="search__label"
                    >
                        Search
                    </label>
                    <input 
                        type="text" 
                        id="search" 
                        className="search__item"
                        name="search"  
                        data-input="search"
                        autoComplete="off"
                        value={this.state.searchValue} 
                        onFocus={this.handleInputFocus} 
                        onChange={this.handleInputChange} 
                        onBlur={this.handleInputBlur}
                    />
                    <SearchButton 
                        searchButtonImage={this.props.searchButtonImageOpen} 
                        searchButtonImageClass=" img--search" 
                        searchButtonClass=" search__button--open"
                        clickToSearch={this.handleSearchOpen}
                    />
                    <SearchButton 
                        searchButtonImage={this.props.searchButtonImageClose} 
                        searchButtonImageClass=" img--close" 
                        searchButtonClass=" search__button--close"
                        clickToSearch={this.handleSearchClose}
                    />
                </form>
            </div>
        );
    }
}

export default Search;
