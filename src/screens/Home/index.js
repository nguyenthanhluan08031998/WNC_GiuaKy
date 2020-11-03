import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { indexRoutes } from './index.routes'
import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    {
                        indexRoutes.map((prop, key) => {
                            return (
                                <Route path={prop.path} component={() => <prop.component key={key} />} />
                            )
                        })
                    }
                </Switch>
                <Footer/>
            </div>

        )
    }
}
export default Home