import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
    {
        title: "Nike Blazer Mid Suede Men's Sneakers",
        price: 750,
        imageUrl: '/img/sneakers/1.jpg',
    },
    {
        title: "Nike Air Max 270 Men's Sneakers",
        price: 750,
        imageUrl: '/img/sneakers/2.jpg',
    },
    {
        title: "Nike Blazer Mid Suede Men's Sneakers",
        price: 800,
        imageUrl: '/img/sneakers/3.jpg',
    },
    {
        title: 'Puma X Aka Boku Future Rider Sneakers',
        price: 950,
        imageUrl: '/img/sneakers/4.jpg',
    },
];

function App() {
    return (
        <div className='wrapper'>
            <Drawer />
            <Header />
            <div className='content'>
                <div className='content-header'>
                    <h1>All sneakers</h1>
                    <div className='search-block'>
                        <img src='/img/Search.svg' alt='Search icon' />
                        <input placeholder='Search...' />
                    </div>
                </div>
                <div className='content-card-box'>
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            clickMe={() => console.log(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
// #3 1:52
export default App;
