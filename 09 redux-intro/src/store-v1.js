import { combineReducers, createStore } from "redux";

// initial states

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// reducers

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        loanPurpose: action.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanpurpose: "",
        balance: state.balance - action.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

// store

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// actions

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};
const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};
const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: amount, purpose };
};
const payLoan = (amount) => {
  return { type: "account/payLoan", payload: amount };
};

const createCustomer = (customer) => {
  return { type: "customer/createCustomer", payload: customer };
};
const updateName = (name) => {
  return { type: "customer/updateName", payload: name };
};

// usage

store.dispatch(deposit(100));
console.log(store.getState());

store.dispatch(deposit(100));
console.log(store.getState());

store.dispatch(withdraw(50));
console.log(store.getState());

store.dispatch(requestLoan(200, "Business"));
console.log(store.getState());

store.dispatch(
  createCustomer({
    fullName: "John Doe",
    nationalID: "12347890",
    createdAt: new Date().toISOString(),
  })
);
console.log(store.getState());
