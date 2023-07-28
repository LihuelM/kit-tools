const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// Creacion de REDUCER con if 
const reducerIf = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === 'CHECK') {
    return {
      ...state,
      loading: true,
    };
  } else {
    return {
      ...state,
    };
  }
};

// Creacion de REDUCER con switch (la mas popuular)
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
      error: true,
      loading: false,
    };
    case 'CHECK':
      return {
        ...state,
      loading: true,
    };
    default:
      return {
        ...state,
      };
  }
};


const reducerObject = (state, action) => {
};
