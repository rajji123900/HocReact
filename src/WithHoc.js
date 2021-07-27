import { Component } from "react";

const WithHoc = ( WrappedComponent) => {
   class WithHoc extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
     incrementCount = () =>{
        console.log(this.count,"-----")
      this.setState(prevState=>{return {count:prevState.count+1}})
     }
    
      render(){
          return(
              <div>
                  <WrappedComponent  count={this.state.count} increment={this.incrementCount}/>
              </div>
          )
      }
  }
  return WithHoc
}
export default WithHoc;