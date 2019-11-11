import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './logo.svg';
import './App.css';
// import Customers from './components/server/customers';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
// import Container from './components/Container/Container';
// import ContainerContent from './components/ContainerContent/ContainerContent';




// import Profile from './components/Profile/Profile';

let nav__item = {
    'Home': '/',
    'Destinations': '/destinations',
    'Countries': '/countries',
    'Tours': '/tours',
    'Blog': '/blog',
    'Hot Tours': '/hot'
};

let logo = 'UnyTravel';

let searchButton = {
    search: `https://svgshare.com/i/Fpz.svg`,
    close: `https://svgshare.com/i/Fqf.svg`
};
let socialLink = [
    'https://twitter.com',
    'https://facebook.com',
    'https://telegram.org',
    'https://instagram.com'
];
let socialImage = [
    'https://svgshare.com/i/Fok.svg',
    'https://svgshare.com/i/Fq9.svg',
    'https://svgshare.com/i/FqA.svg',
    'https://svgshare.com/i/FrL.svg'
];
let mailRedirect = 'mail:gubin.dm@gmail.com';
let contactLink = {
    '1 888 237 8289': 'tel:+18882378289',
    'question@unytour.com': mailRedirect
};

let countryName = [
    'Thailand, Phe Phe Island',
    'Maldives, Anantara Dhigu Maldives Resort',
    'UAE, Abu Dhabi',
    'Brooklyn, Bridge Skyline',
    'Thailand, Phuket Island',
    'UAE, Dubai'
];
let countryImage = [
    'https://s8.hostingkartinok.com/uploads/images/2019/10/69b2e169042cc9ed8b3e7bc5ef8e8b37.png',
    'https://s8.hostingkartinok.com/uploads/images/2019/10/69b2e169042cc9ed8b3e7bc5ef8e8b37.png',
    'https://s8.hostingkartinok.com/uploads/images/2019/10/69b2e169042cc9ed8b3e7bc5ef8e8b37.png',
    'https://s8.hostingkartinok.com/uploads/images/2019/10/69b2e169042cc9ed8b3e7bc5ef8e8b37.png',
    'https://s8.hostingkartinok.com/uploads/images/2019/10/69b2e169042cc9ed8b3e7bc5ef8e8b37.png',
    // 'http://i.piccy.info/i9/fd0c37b8c8dfdc6dabbc23c417d6040d/1573197223/61310/1346528/home_cover_800.jpg'
    'https://s8.hostingkartinok.com/uploads/images/2019/10/69b2e169042cc9ed8b3e7bc5ef8e8b37.png'
];

let offerTitle = 'New places';
let offerDiscription = 'Rediscover open';

let distinationLink = [
    '/animal',
    '/skiing',
    '/excursion',
    '/shopping',
    '/old'
];
let distinationImage = [
    'https://svgshare.com/i/FrD.svg',
    'https://svgshare.com/i/Fqq.svg',
    'https://svgshare.com/i/FqW.svg',
    'https://svgshare.com/i/FqC.svg',
    'https://svgshare.com/i/FrN.svg'
];
let distinationName = [
    'Animal',
    'Snow skiing',
    'Excursion',
    'Shopping',
    'Old city'
];
let heroDistination = 'Popular destinations';

let loginImage = [
    'https://sendeyo.com/up/d/3b67963913',
    'https://sendeyo.com/up/d/f1b8324d90',
    'https://sendeyo.com/up/d/82de82e7f1'
];
let formLabel = [
    'E-mail',
    'Password'
];
let formInput = [
    'email',
    'password'
];
let linkAvatar = 'https://sendeyo.com/up/d/0f44be3712';

let previewTitleDefault = 'Hello, welcome back!';
let previewDiscriptionDefault = 'Enter your E-mail and Password or join us now';

let previewTitle = 'Hello, Guest';
let previewDiscription = "Enter your data, than to register or Log-In to your account";
// let previewDiscription = 'Enter your data: Random or your Nickname - this is name of your profile, E-Mail - than we are near, and Password - remember him :)';



// разбить сиСС по папкам
// доделать дизайн личного кабинета
// сверстать ЛК как модули
/* 
    переделать форму регистрации на 3 разных (через вылеты снизу)
    error auth
    разобраться с редиректом (роутами)
    сделать лк для админа (с возможностью передавать данные)
*/

class App extends Component {

    render() {

        

        return (
            // <Router>
            //     <div className="App">
            //         <Switch>
            //             <Route path="http://localhost:3000/" return={
            //                 () => {
            //                     return [
            //                         <div className="container container--preview fade">,
            //                         <Carousel countryName={countryName} countryImage={countryImage}/>,
            //                             <div className="container__content container__content--absolute">,
            //                                 <Menu nav__item={nav__item} logo={logo} searchButton={searchButton} contactLink={contactLink} socialLink={socialLink} socialImage={socialImage} loginImage={loginImage} formLabel={formLabel} formInput={formInput} linkAvatar={linkAvatar} previewTitle={previewTitle} previewDiscription={previewDiscription}/>,
            //                                 <Header offerTitle={offerTitle} offerDiscription={offerDiscription} distinationLink={distinationLink} distinationImage={distinationImage} distinationName={distinationName} heroDistination={heroDistination}/>,
            //                             </div>,
            //                         </div>
            //                     ]
            //                 }
            //             }/>
            //             <Route exact path="/profile" component={Profile} />
            //         </Switch>
            //     </div>
            // </Router>

            <div className="App">
                <div className="container container--preview fade">
                    <Carousel countryName={countryName} countryImage={countryImage}/>
                    <div className="container__content container__content--absolute">
                        <Menu 
                            nav__item={nav__item} 
                            logo={logo} 
                            searchButton={searchButton} 
                            contactLink={contactLink} 
                            socialLink={socialLink} 
                            socialImage={socialImage}
                            loginImage={loginImage}
                            formLabel={formLabel}
                            formInput={formInput}
                            linkAvatar={linkAvatar}
                            previewTitle={previewTitle}
                            previewDiscription={previewDiscription}
                            previewTitleDefault={previewTitleDefault}
                            previewDiscriptionDefault={previewDiscriptionDefault}/>
                        <Header 
                            offerTitle={offerTitle} 
                            offerDiscription={offerDiscription}
                            distinationLink={distinationLink} 
                            distinationImage={distinationImage} 
                            distinationName={distinationName}
                            heroDistination={heroDistination}/>
                    </div>
                </div>
                {/* <Profile /> */}
            </div>
        );
    }
}

export default App;



// <div className="App">
//     <Container>
//         <Carousel countryName={countryName} countryImage={countryImage}/>
//         <ContainerContent>
//             <Menu nav__item={nav__item} logo={logo} searchButton={searchButton} contactLink={contactLink} socialLink={socialLink} socialImage={socialImage} loginImage={loginImage} formLabel={formLabel} formInput={formInput} linkAvatar={linkAvatar} previewTitle={previewTitle} previewDiscription={previewDiscription}/>
//             <Header offerTitle={offerTitle} offerDiscription={offerDiscription} distinationLink={distinationLink} distinationImage={distinationImage} distinationName={distinationName} heroDistination={heroDistination}/>
//         </ContainerContent>
//     </Container>
// </div>
















//  // <Router>
//         //     <div className="App">
//         //         <Route exact path="/" component={} />
//         //         <div className="container">
//         //             <Route exact path="/register" component={Register} />
//         //             <Route exact path="/login" component={Login} />
//         //             <Route exact path="/profile" component={Profile} />
//         //         </div>
//         //     </div>
//         // </Router>
//         <div className="App">
//             <div className="container container--preview fade">
//                 <Carousel 
//                     countryName={countryName} 
//                     countryImage={countryImage}/>
//                     <div className="container__content container__content--absolute">
//                         <Menu 
//                             nav__item={nav__item} 
//                             logo={logo} 
//                             searchButton={searchButton} 
//                             contactLink={contactLink} 
//                             socialLink={socialLink} 
//                             socialImage={socialImage}
//                             loginImage={loginImage}
//                             formLabel={formLabel}
//                             formInput={formInput}
//                             linkAvatar={linkAvatar}
//                             previewTitle={previewTitle}
//                             previewDiscription={previewDiscription}/>
//                         <Header 
//                             offerTitle={offerTitle} 
//                             offerDiscription={offerDiscription}
//                             distinationLink={distinationLink} 
//                             distinationImage={distinationImage} 
//                             distinationName={distinationName}
//                             heroDistination={heroDistination}/>
//                         <div>
//                         {/* loremloremloremloremloremloremloremloremloremloremloremloremloremlorem */}
//                         </div>
//                     </div>
//             </div>
//             {/* <Customers /> */}
//         </div>