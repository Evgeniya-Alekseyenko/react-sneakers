import React from 'react';

import Card from '../components/Card/Card';

export default function Home({
    items,
    // cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddtoCart,
    isLoading,
}) {
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddtoCart(obj)}
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

                        {/* {console.log(cartItems, items)} */}

                        {/* <h1>
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
                    )} */}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder='Search...'
                        />
                    </div>
                </div>
            </div>

            {/* {items
            //         .filter((item) =>
            //             item.title
            //                 .toLowerCase()
            //                 .includes(searchValue.toLocaleLowerCase())
            //         )
            //         .map((item, index) => (
            //             <Card
            //                 key={index}
            //                 onFavorite={(obj) => onAddToFavorite(obj)}
            //                 onPlus={(obj) => onAddtoCart(obj)}
            //                 added={cartItems.some(
            //                     (obj) => Number(obj.id) === Number(item.id)
            //                 )} //не обяз указывать true, react итак понимает, когда исп булевое значение
            //                 loading={false}
            //                 {...item} //передаем все свойства,что хранятся в карточке товара, чтоб не прописывать их отдельно
            //             />
            //         ))} */}
            <div className='content-card-box'>{renderItems()} </div>
        </div>
    );
}
