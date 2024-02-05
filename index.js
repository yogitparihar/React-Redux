const BUY_CAKE = 'BUY_CAKE'

//action describe which task you perform
function butCake(){
    return{
        type:BUY_CAKE,
        payload:"buy_cake"
    }
}

//initialState must be a single object
const initialState = {
    numberOfCake : 10
}

//Reducer function describe how to state change and action perform based on the action

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return{
                ...state,
                numberOfCake:state.numberOfCake-1
            }
    }
}