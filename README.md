# v4Redux
using redux to easy access all states

* Store - hold our state - THERE IS ONLY ONE STATE 
        - state is READ ONLY
        - so the state is only copied and modified and returned to us
        - the original state is not tampered with
                                                
* Action - STate can be modified using actions - SIMPLE OBJECTS
        - actions cannot directly modify the store 
          - actions must go through a reducer to modify the store
          - actions read the Reducer by Dispatcher
* Dispatcher - Action need to be sent by someone to the Reducer
            - i.e. onPress - when we press on a button, it dispatches an action which will go to the reducer,
                            modify the Store, and the Reducer will return us an updated state
* Reducer - a function that receives an action, modifies the state, to give us a new state
