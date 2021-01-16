import React from 'react'
import {connect} from 'react-redux'
import ListTodo from './ListTodo'
import Header from './Header'
import './Todo.css'

class TodoRedux extends React.Component{
   
    constructor(props){
        // console.log('hallllllo',props.aufgabe);
        super(props)
        this.state={
            inputname:''
        }
        this.Handelchange=this.Handelchange.bind(this)
    }

Handelchange(event){
    this.setState({inputname:event.target.value})
}



// componentDidUpdate(){
//     console.log("Todo-Redux wurde neu gerendert.");
//     localStorage.setItem('aufgabe_redux',JSON.stringify(this.props.state.aufgabe))
// }

// componentDidMount(){
//     console.log("Todo-Redux geboren");
//     let aufgabe=localStorage.getItem('aufgabe_redux')
//     if(aufgabe){
//       let todos = JSON.parse(aufgabe)
//       this.setState({ aufgabe: todos })
//     }
// }

    render(){
        return(
          
            <div className='Todo'>
                <Header />
                <input type="text" onChange={this.Handelchange} value={this.state.inputname}/>
                <br/>
                <button onClick={()=>{
                    this.props.sendToArray(this.state.inputname)
                    this.setState({inputname:''})
                }}>send to todo</button>
                <ListTodo />
            </div>
            
        )
    }
}

// const mapStateToProps =(state)=>({
//     aufgabe:state.aufgabe
    
// })

const mapDispatchToProps = (dispatch) => ({
    sendToArray: (data) => dispatch({type:'SEND_TOARRAY',peyload:data})
    
})

export default connect(null,mapDispatchToProps)(TodoRedux)