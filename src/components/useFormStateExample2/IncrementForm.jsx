import React from 'react';
import { useFormState } from 'react-dom';

const increment = async (previousState, formData) => {
  return previousState + 1;
};

const IncrementForm = () => {
  const [state, formAction] = useFormState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
};

export default IncrementForm;
