import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import '../styles.css';
import { VscClose } from 'react-icons/vsc';
import { VscInfo } from 'react-icons/vsc';


const to = i => ({ x: 0, y: i * -2, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck({ vinyls, handleRemoveVinyl }) {
  const [clicked, setClicked] = useState(false);
  function handleClick(e) {
    setClicked(!clicked);
  };
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(vinyls.length, i => ({ ...to(i), from: from(i) }))
  const bind = useDrag(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.03
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    set(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === vinyls.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    console.log(down);
  })
  if (vinyls.length <= 10) { return (
    <h2>Loading</h2>)
  }
  else { return props.map(({ x, y, rot, scale }, i) => (
      <animated.div className="parentCard" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
        <animated.div
           className="childCard" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url("${vinyls[i].cover}")` }}>
          {clicked ?
          <p style={{color: '#01FF70'}} className="info_button" onClick={handleClick}><VscInfo /></p>
          :
          <p className="info_button" onClick={handleClick}><VscInfo /></p>
          }
          {clicked ?
            <ul className="vinyl_info">
              <li>{vinyls[i].title} - {vinyls[i].artist} ({vinyls[i].year})</li>
              <li>Label: {vinyls[i].label}</li>
              <li>Genre: {vinyls[i].genre}</li>
            </ul>
            :
            ''
          }
          <p className="delete_button" onClick={() => { handleRemoveVinyl(vinyls[i].id); setTimeout(() => gone.clear() || set(i => to(0)), 0);}}><VscClose/></p>
        </animated.div>
      </animated.div>
  ))
  }
}
