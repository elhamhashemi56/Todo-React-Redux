import {connect} from 'react-redux'
import ListItems from './ListItems'

const ListTodo = (props) =>{
    return(
        <div>
            <ul>
            {props.aufgabe.map((element,index)=>{
                return(
                    <ListItems key={index} row={element} löschId={index}/>
                )
              }

            )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>({
    aufgabe:state.aufgabe
})

export default connect(mapStateToProps)(ListTodo)