import React from 'react';

import Card from '../components/Card/Card';

export default function Home({
    items,
    favorites,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddtoCart,
    isLoading,
}) {
    console.log(favorites);

    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddtoCart(obj)}
                // favorited={favorites.some(
                //     (obj) => Number(obj.parentId) === Number(item.id)
                // )}
                // added={cartItems.some(
                //     (obj) => Number(obj.id) === Number(item.id)
                // )} //не обяз указывать true, react итак понимает, когда исп булевое значение
                loading={isLoading}
                {...item} //передаем все свойства,что хранятся в карточке товара, чтоб не прописывать их отдельно
            />
        ));
    };

    return (
        <div>
            <div className='content'>
                <div className='content-header'>
                    <div className='content-header_img'>
                        <img src='/img/Stan.png' alt='' />
                    </div>
                    <div className='content-header_box'>
                        <h1>
                            {searchValue
                                ? `Search by: "${searchValue}" `
                                : `All sneakers`}
                        </h1>

                        <div className='search-block'>
                            <img src='/img/Search.svg' alt='Search icon' />
                            {searchValue && (
                                <img
                                    onClick={() => setSearchValue('')}
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
                </div>
            </div>
            <div className='content-card-box'>{renderItems()} </div>
        </div>
    );
}
