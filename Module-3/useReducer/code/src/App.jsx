import React, { useReducer } from "react";

const initialState = {
  step: 1,
  isSubmitted: false,
  values: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, values, isSubmitted } = state;

  const isStepValid = () => {
    if (step === 1) {
      return values.name && values.email;
    }
    if (step === 2) {
      return values.username && values.password;
    }
    return true;
  };

  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>🎉 Registration Successful!</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "40px" }}>
      <h2>Step {step} of 3</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />
          <br /><br />

          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={values.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review Details</h3>
          <p><b>Name:</b> {values.name}</p>
          <p><b>Email:</b> {values.email}</p>
          <p><b>Username:</b> {values.username}</p>
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
        )}

        {step < 3 && (
          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={!isStepValid()}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        )}

        {step === 3 && (
          <button
            onClick={() => dispatch({ type: "SUBMIT_FORM" })}
            style={{ marginLeft: "10px" }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
