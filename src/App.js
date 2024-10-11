import "./style/index.scss"
import Card from "./components/Card/Card";
import Header from "./components/Header";
import DrawerAside from "./components/DrawerAside";
import {useEffect, useState} from "react";
import axios from "axios";



function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sneakers, setSneakers] = useState([])
  useEffect(() => {
      axios.get("https://67037090bd7c8c1ccd416a91.mockapi.io/sneakersItem")
          .then(res => setSneakers(res.data))
  }, []);

    useEffect(() => {
        axios.get("https://67037090bd7c8c1ccd416a91.mockapi.io/cart").then(res => setCartItems(res.data))
    }, [cartOpened]);



  const deleteItemToCart = (sneakerId) => {
      axios.delete(`https://67037090bd7c8c1ccd416a91.mockapi.io/cart/${sneakerId}`)
      setCartItems(prevState => prevState.filter(item => item.sneakerId !== sneakerId));

  }

  const onAddToCart = (obj) => {


      if (!cartItems.includes(obj)){

          axios.post("https://67037090bd7c8c1ccd416a91.mockapi.io/cart", {
              id: obj
          })
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
