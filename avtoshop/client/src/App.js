import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react"
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Тормозной диск',
          img: 'brake.jpg',
          desc: 'Вентилируемый тормозной диск,чугун',
          category: 'brakes',
          price: '150'
        },
        {
          id: 2,
          title: 'Амортизатор',
          img: 'amort.jpg',
          desc: 'Амортизатор передней подвески,пластик',
          category: 'suspension',
          price: '70'
        },
        {
          id: 3,
          title: 'Воздушный фильтр',
          img: 'filtr.jpg',
          desc: 'Воздушный фильтр ДВС',
          category: 'filters',
          price: '30'
        },
        {
          id: 4,
          title: 'ЭБУ',
          img: 'blok.jpg',
          desc: 'Электронный блок управления',
          category: 'electrician',
          price: '300'
        },
        {
          id: 5,
          title: 'Охладительный бачок',
          img: 'bak.jpg',
          desc: 'Бачок для охлаждающей жидкости',
          category: 'engine',
          price: '50'
        },
        {
          id: 6,
          title: 'Поршень',
          img: 'porsh.jpg',
          desc: 'Поршень в сборе',
          category: 'engine',
          price: '80'
        },
        {
          id: 7,
          title: 'Рычаг',
          img: 'richag.jpg',
          desc: 'Рыгач задней подвески',
          category: 'suspension',
          price: '65'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render(){
    return (
    <div class="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer/>
    </div>
    )
  }


  deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }


  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })

  if(!isInArray)
    this.setState({orders: [...this.state.orders,item]})
  }
}

export default App;