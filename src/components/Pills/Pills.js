import PropTypes from 'prop-types'
import React from 'react'
import uniqid from 'uniqid'
import './Pills.scss'

export class Pills extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
    getItemDisplayValue: PropTypes.func,
    selectedItem: PropTypes.any,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    getItemDisplayValue: item => item,
    selectedItem: null,
  }

  onItemClick = item => () => {
    this.props.onItemClick(item)
  }

  render() {
    const { items, getItemDisplayValue, selectedItem, name } = this.props
    return (
      <ul className="pills" role="radiogroup">
        {items.map((item, index) => {
          const isSelected = item === selectedItem
          const id = uniqid()

          return (
            <li
              className="pill"
              onClick={this.onItemClick(item)}
              key={`item-${index}`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                className="pill-radio-input"
              />
              <label
                htmlFor={id}
                className={`pill-label ${isSelected ? 'is-selected' : ''}`}
              >
                {getItemDisplayValue(item)}
              </label>
            </li>
          )
        })}
      </ul>
    )
  }
}
