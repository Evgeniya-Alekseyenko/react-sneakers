import Card from '../components/Card/Card';

export default function Favorites({ items, onAddToFavorite }) {
    return (
        <div className='content'>
            <div className='content-header'>
                <h1>My bookmakers</h1>
            </div>
            <div className='content-card-box'>
                {' '}
                <div className='content-card-box'>
                    {items.map((item, index) => (
                        <Card
                            // title={item.title}
                            // price={item.price}
                            // imageUrl={item.imageUrl}
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item} //передаем все свойства,что хранятся в айтеме, чтоб не прописывать их отдельно
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
