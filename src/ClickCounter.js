import {Component} from 'react';
import WithHoc from './WithHoc';


class ClickCounter extends Component {
 render(){
     return(
         <div>
             <button onClick={this.props.increment}>button {this.props.count} times</button>
         </div>
     )
 }
}
export default WithHoc(ClickCounter)