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
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='info'>
                <img src={image3} alt=''/>
                <h2>Single-way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className='info'>
                <img src={image4} alt=''/>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
};