import Key from "./Key"
import { keyarray } from "../keyarray"

const Keys = ({onPress}) => {
  return (
    <div className='keys'>
        {keyarray.map(
            (item, index) => <Key onPress={onPress} item={item} key={index}/> 
        )}
    </div>
  )
}

export default Keys