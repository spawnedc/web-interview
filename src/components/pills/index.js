import PropTypes from 'prop-types'
import React from 'react'

export class Pills extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
    getItemDisplayValue: PropTypes.func,
  }

  static defaultProps = {
    getItemDisplayValue: item => item,
  }

  onItemClick = item => () => {
    this.props.onItemClick(item)
  }

  render() {
    const { items, getItemDisplayValue } = this.props
    return (
      <ul className="pills">
        {items.map((item, index) => (
          <li
            className="pill"
            onClick={this.onItemClick(item)}
            key={`item-${index}`}
          >
            {getItemDisplayValue(item)}
          </li>
        ))}
      </ul>
    )
  }
}
