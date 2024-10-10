import "./style/index.scss"
import Card from "./components/Card/Card";
import Header from "./components/Header";
import DrawerAside from "./components/DrawerAside";
import {useEffect, useState} from "react";



function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sneakers, setSneakers] = useState([])
  useEffect(() => {
    fetch("https://67037090bd7c8c1ccd416a91.mockapi.io/sneakersItem")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setSneakers(json);
        })
  }, []);


  const deleteItemToCart = (obj) => {
      console.log('функция ')
      setCartItems(prevState => prevState.filter((id) => id !== Number(obj)))
      console.log(obj);
  }

  const onAddToCart = (obj) => {

      if (!cartItems.includes(obj)){
          setCartItems(prev => [ ...prev, obj])
      } else {

          deleteItemToCart(obj)

      }

  }


  const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value.toLowerCase());
  }


  return (
    <div className="wrapper">
      {cartOpened? <DrawerAside deleteItemToCart={(obj) => deleteItemToCart(obj)} sneakers={sneakers} setCartItems={setCartItems}  cartItems={cartItems} handleCloseClick={() => setCartOpened(false)} /> : ''}
      <Header handleOpenClick={() => setCartOpened(true)} />
      <div className="content">
        <div className={'content-header'}>
          <h1 className={'bold'}>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
          <div className={'content-search'}>
            <img src="/img/icon/search.svg" alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} type="search" placeholder={'Поиск...'}/>
          </div>
        </div>
        <div className="sneakers">
          {
            sneakers.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
                <Card title={item.title}
                      price={item.price}
                      id={item.id}
                      key={index}
                      imageUrl={item.imageUrl}
                      handleClickPlus={(obj) => onAddToCart(obj)} handleClickFavorite={() => console.log('Добавили в закдадки')}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
