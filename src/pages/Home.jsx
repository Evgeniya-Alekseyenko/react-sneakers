import Card from '../components/Card/Card';

export default function Home({
    items,
    searchValue,
    setsearchValue,
    onAddtoCart,
    onAddToFavorite,
    onChangeSearchInput,
}) {
    return (
        <div className='content'>
            <div className='content-header'>
                <h1>
                    {searchValue
                        ? `Search by: "${searchValue}" `
                        : `All sneakers`}
                </h1>
                <div className='search-block'>
                    <img src='/img/Search.svg' alt='Search icon' />
                    {searchValue && (
                        <img
                            onClick={() => setsearchValue('')}
                            className='clear'
                            src='/img/Btn-removed.svg'
                            alt='Clear'
                        />
                    )}
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        placeholder='Search...'
                    />
                </div>
            </div>
            <div className='content-card-box'>
                {items
                    .filter((item) =>
                        item.title
                            .toLowerCase()
                            .includes(searchValue.toLocaleLowerCase())
                    )
                    .map((item, index) => (
                        <Card
                            key={index}
                            // title={item.title}
                            // price={item.price}
                            // imageUrl={item.imageUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddtoCart(obj)}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    );
}
