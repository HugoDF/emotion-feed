import React from 'react';

import './EmotionPicker.css';

// Display images from https://api.github.com/emojis
const defaultEmotions = [
    {
        name: 'love',
        // Uses heart_eyes
        displayImage: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png?v8'
    },
    {
        name: 'joy',
        displayImage: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f602.png?v8'
    },
    {
        name: 'hate',
        // Uses angry
        displayImage: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f620.png?v8'
    },
    {
        name: 'smile',
        default: true,
        // Uses slightly smiling face
        displayImage: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f642.png?v8'
    }
];

const PlusSign = () => <span className="c-plus-sign">+</span>;

const EmotionSelector = ({ emotions, selectedEmotion, onSelectedEmotion }) => {
    return (<div
        className="c-emotion-picker__selector"
        style={{ width: `${emotions.length * 26 + 18}px`, left: `-${2 * 26 - 10}px` }}>
        {emotions.map((emotion, i) => {
            return (<img
                key={i}
                className="c-emotion-picker__selector__image"
                onClick={() => onSelectedEmotion(emotion.name)}
                height="18"
                src={emotion.displayImage}
                alt={emotion.name}
            />);
        })}
    </div>);
}

class EmotionPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSelectedEmotion = this.onSelectedEmotion.bind(this);
    }
    toggleOpen() {
        this.setState({
            open: !this.state.open
        });
    }
    onSelectedEmotion(emotion) {
        this.toggleOpen();
        this.props.onEmotionChange(emotion);
    }
    render() {
        const { emotion, emotions = defaultEmotions } = this.props;
        const { open } = this.state;
        const fullEmotion = emotions.find((el) => el.name === emotion);
        const displayImage = fullEmotion
            ? fullEmotion.displayImage
            : emotions.find(el => el.default).displayImage;
        return (<div className={['c-emotion-picker', !fullEmotion && 'c-emotion-picker--empty'].join(' ')} onClick={this.toggleOpen}>
            <div className="c-emotion-picker__image--active">
                <img alt={emotion} src={displayImage} height="18" />
                {!fullEmotion && <PlusSign />}
            </div>
            {open &&
                <EmotionSelector
                    onSelectedEmotion={this.onSelectedEmotion}
                    selectedEmotion={emotion}
                    emotions={emotions}
                />
            }
        </div>);
    }
}

export default EmotionPicker;