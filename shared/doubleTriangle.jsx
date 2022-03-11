const colors = {
  primary: '#10aac5',
  secondary: '#345170',
  white: '#ffffff',
  alternative: '#d2e5e6',
}

const doubleTriangleStyle = {
  position: 'relative',
  marginLeft: '-2rem',
  width: '100%',
}

// right triangle sets border left transparent and the opposite for left triangle
const triangleTop = (color, isLeft) => {
  const triangleTopStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTop: `calc(100vw * 0.18) solid ${color}`,
    marginTop: '1px',
  }
  if (isLeft) {
    triangleTopStyle.borderRight = '100vw solid transparent'
  } else {
    triangleTopStyle.borderLeft = '100vw solid transparent'
  }
  return <div style={triangleTopStyle} />
}

const triangleBottom = (color, isLeft) => {
  const triangleTopStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderBottom: `calc(100vw * 0.18) solid ${color}`,
  }
  if (isLeft) {
    triangleTopStyle.borderRight = '100vw solid transparent'
  } else {
    triangleTopStyle.borderLeft = '100vw solid transparent'
  }
  return <div style={triangleTopStyle} />
}

export const chooseTriangles = (type, colorTop, colorBottom) => {
  if (type === 'topRightBottomLeft') {
    return (
      <div style={doubleTriangleStyle}>
        {triangleTop(colors[colorTop], false)}
        {triangleBottom(colors[colorBottom], true)}
      </div>
    )
  } else if (type === 'topLeftBottomRight') {
    return (
      <div style={doubleTriangleStyle}>
        {triangleTop(colors[colorTop], true)}
        {triangleBottom(colors[colorBottom], false)}
      </div>
    )
  } else {
    return null;
  }
}