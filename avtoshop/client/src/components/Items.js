import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd} onFullItem={this.props.onFullItem} />
        ))}
      </main>
    )
  }
}

export default Items