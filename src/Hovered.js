import {Component} from 'react';
import WithHoc from './WithHoc';

class Hovered extends Component {
 render(){
    console.log(this.props)
     return(
         <div>
             <button onMouseOver={this.props.increment}>hovered {this.props.count} times</button>
         </div>
     )
 }
}
export default WithHoc(Hovered);