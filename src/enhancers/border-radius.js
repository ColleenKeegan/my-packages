import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderTopRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderBottomLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderBottomRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius
}) => {
  return cx(
    borderRadius !== undefined &&
      insertSingleProperty('borderRadius', borderRadius),
    borderTopLeftRadius !== undefined &&
      insertSingleProperty('borderTopLeftRadius', borderTopLeftRadius),
    borderTopRightRadius !== undefined &&
      insertSingleProperty('borderTopRightRadius', borderTopRightRadius),
    borderBottomLeftRadius !== undefined &&
      insertSingleProperty('borderBottomLeftRadius', borderBottomLeftRadius),
    borderBottomRightRadius !== undefined &&
      insertSingleProperty('borderBottomRightRadius', borderBottomRightRadius)
  )
}
