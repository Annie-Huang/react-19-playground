import React from 'react';
import { useFormState } from 'react-dom';

// 2. it get prev state + fromData
const increment = async (previousState, formData) => {
  return previousState + 1;
};

const IncrementForm = () => {
  // 1. hook takes action + initial value
  const [state, formAction] = useFormState(increment, 0);

  return (
    <form>
      {state}
      {/* 3. use returned state from action */}
      <button formAction={formAction}>Increment</button>
    </form>
  );
};

export default IncrementForm;
