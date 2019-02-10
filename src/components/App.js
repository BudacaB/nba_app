import React from 'react';
import Header from './Header';
import CardsList from './CardsList';

class App extends React.Component {
    render() {
        let cardsList = [
            {
                title: 'bird',
                link: 'https://c1.staticflickr.com/9/8370/8406752121_379eee2281_z.jpg'
            },
            {
                title: 'jordan',
                link: 'https://cdn.newsapi.com.au/image/v1/5115ef8c03f1131ad928b5e31df9901a?width=1024'
            },
            {
                title: 'payton',
                link: 'https://www.gannett-cdn.com/-mm-/8177e1eeb06a934d4135ff6c395a147b5d96b563/c=0-261-1148-1124/local/-/media/USATODAY/USATODAY/2013/04/05/xxx-nba-playoffs_-lakers_sonics.jpg?width=534&height=401&fit=crop'
            },
            {
                title: 'miller',
                link: 'https://www.gannett-cdn.com/-mm-/2e11b8cc730fc4802e8a510561bb6a81f9357708/c=0-674-2119-2267/local/-/media/2018/05/03/INGroup/Indianapolis/636609486907480586-INI1Brd-11-23-2017-Star-1-C009-2017-11-21-IMG-1-PACERS29.112333.jp-1-1-8EK8U773-L1131985666-IMG-1-PACERS29.112333.jp-1-1-8EK8U773.jpg?width=534&height=401&fit=crop'
            },
            {
                title: 'johnson',
                link: 'https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/full/public/magic-johnson-action-portrait_header.jpeg?itok=HjCBvoYj'
            }
        ]

        return (
            <div>
                <div><Header /></div>
                <br></br>
                    <CardsList cards={cardsList} />
            </div>
        );
    }
}

export default App;