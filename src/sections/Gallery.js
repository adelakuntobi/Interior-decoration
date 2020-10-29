import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Heading from '../components/heading'
import All from './Gallery sections/All'
import Living from './Gallery sections/Living'
import Kitchen from './Gallery sections/Kitchen'
import Dining from './Gallery sections/Dining'
import Bathroom from './Gallery sections/Bathroom'
import Office from './Gallery sections/Office'
import Furniture from './Gallery sections/Furniture'


function Gallery() {
  // const [isSmall, setIsSmall] = useState(false)
  // const closeMore = () => {
  //   if (isSmall === true) {
  //     setIsSmall(
  //       Opennav => Opennav = false
  //     )
  //   }
  //   else {
  //     setIsSmall(
  //       Opennav => Opennav = true
  //     )
  //   }
  // }
  return (
    <section className="bg-primary py-20 px-5">
      <div className="container mx-auto md:w-10/12">
        <div className="text-center">
          <Heading someHeading="Our Gallery" />
          <div className="hidden lg:flex gap-12 items-center justify-center">
            <NavLink activeClassName="active-g" exact to="/">All</NavLink>
            <NavLink activeClassName="active-g" to="/living">Living</NavLink>
            <NavLink activeClassName="active-g" to="/kitchen">Kitchen</NavLink>
            <NavLink activeClassName="active-g" to="/dining">Dining</NavLink>
            <NavLink activeClassName="active-g" to="/bathroom">Bathroom</NavLink>
            <NavLink activeClassName="active-g" to="/furniture">Furniture</NavLink>
            <NavLink activeClassName="active-g" to="/office">Office</NavLink>
          </div>
        </div>
        <div className={"pt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-height md:max-h-full"}>
          <Switch>
            <Route exact path="/" component={All} />
            <Route exact path="/living" component={Living} />
            <Route exact path="/kitchen" component={Kitchen} />
            <Route exact path="/dining" component={Dining} />
            <Route exact path="/bathroom" component={Bathroom} />
            <Route exact path="/furniture" component={Furniture} />
            <Route exact path="/office" component={Office} />
          </Switch>
        </div>
      </div>
    </section>
  )
}

export default Gallery
