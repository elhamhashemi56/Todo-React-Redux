import {connect} from 'react-redux'

const ListItems = (props) =>{
    return(
        <li>{props.row} <span
        onClick={(event)=>(props.löschitem(Number.parseInt(event.target.id.slice('todo'.length))))}
        id={'todo'+props.löschId}>[x]</span>
     </li>
    )
}

const mapDispatchTpProps= (dispatch) =>({
    löschitem: (data) => dispatch({type:'LÖSCH_ITEM',peyload:data})
})

export default connect(null,mapDispatchTpProps)(ListItems)