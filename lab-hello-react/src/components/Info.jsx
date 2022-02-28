import image1 from '../images/icon1.png';
import image2 from '../images/icon2.png';
import image3 from '../images/icon3.png';
import image4 from '../images/icon4.png';
import '../components/Info.css';

export default function Info() {
    return (
        <div className='infoFlex'>
            <div className='info'>
                <img src={image1} alt=''/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='info'>
                <img src={image2} alt=''/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='info'>
                <img src={image3} alt=''/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='info'>
                <img src={image4} alt=''/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
        </div>
    );
};