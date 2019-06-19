
const initialState = {
    projects:[
        {id:'1', title:'aa', content:'ssss'},
        {id:'2', title:'aa', content:'ssss'},
        {id:'3', title:'aa', content:'ssss'}
    ]

}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
           console.log(action.project);
           return state;
        case 'CREATE_PROJECT_ERROR':
           console.log(action.error);
           return state;
        default: 
           return state;
    }
   
    
}

export default projectReducer