import React from 'react';

import EmotionPicker from './EmotionPicker';

import './FeedItem.css';

import isToday from 'date-fns/is_today';
import isYesterday from 'date-fns/is_yesterday';
import format from 'date-fns/format';

const currencyCodeToFormatFunction = {
    GBP(amount) {
        return `£${amount}`;
    }
}

function formatDate(date) {
    return isToday(date)
        ? 'Today'
        : isYesterday(date)
            ? 'Yesterday'
            : format(date, 'dddd, D MMMM');
}

const nameToLogo = {
    'Barber & Parlour': 'https://www.barberandparlour.com/skin/frontend/sohohome/bandp/img/raster/bandp-logo.png',
    'Patty & Bun': 'http://static1.squarespace.com/static/57af5dea725e25de8d140404/t/57ed2fd3e6f2e1a3e7f160f1/1475162069607/round+p%26b-01.png?format=1000w',
    'TFL': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7F02-pl3gglbx7gp281FElwlHVVz5pL5YNBn0veRO7LtFZuA',
    'MEATliquor': 'https://contentpl-a.akamaihd.net/images/playlists/image/medium/182907.jpg',
    'Modern Society': 'https://coffeejobsboard.com/wp-content/uploads/wpjobboard/company/16560/company-logo/modern-logo.jpg',
    'Bonbonniere': 'https://pbs.twimg.com/profile_images/553025434988728320/CgdhQ_gQ.png',
    'Berliner Fernsehturm': 'https://www.berlin.de/binaries/asset/image_assets/3693193/source/1493198303/0x0/',
    'Katz Orange Gmbh': 'https://www.katzorange.com/wp-content/uploads/2016/05/KO_Logo_White-01.png',
    'Starbucks': 'https://images-na.ssl-images-amazon.com/images/I/81Nz6ZX8HhL._SL1500_.jpg'
};

const FeedItemLogo = ({ name }) => {
    const logoUrl = nameToLogo[name];
    return (<div
        className={['c-feed-item__logo', !logoUrl && 'c-feed-item__logo--empty'].join(' ')}
        style={{ backgroundImage: `url('${nameToLogo[name]}')` }}>
    </div>);
}

const FeedItem = ({ transaction, onEmotionChange }) => {
    const { description, amount, currency, created, emotion } = transaction;
    const numberAmount = parseFloat(amount).toFixed(2);
    const formatCurrencyFunction = currencyCodeToFormatFunction[currency];
    const formattedAmount = numberAmount > 0
        ? `+${formatCurrencyFunction(numberAmount)}`
        : formatCurrencyFunction(Math.abs(numberAmount).toFixed(2));
    return (
        <div>
            <div className="c-feed-item__date">{formatDate(created)}</div>
            <div className="c-feed-item__content">
                <div className="c-feed-item__description">
                    <div className="c-feed-item__logo-container">
                        <FeedItemLogo name={description} />
                    </div>
                    <div className="c-feed-item__name">{description}</div>
                </div>
                <div className="c-feed-item__info">
                    <div className="c-feed-item__emotion-picker">
                        <EmotionPicker emotion={emotion} onEmotionChange={onEmotionChange} />
                    </div>
                    <div className={['c-feed-item__amount', numberAmount > 0 ? 'c-feed-item__amount--positive' : ''].join(' ')}>{formattedAmount}</div>
                </div>
            </div>
        </div >
    );
};

export default FeedItem;