import { useFormState } from 'react-dom';

// Use formData instead of queryData will make better sense in below
const addToCart = (prevState, queryData) => {
  console.log('prevState=', prevState);
  console.log('queryData=', queryData);
  console.log("queryData.get('itemID')=", queryData.get('itemID'));

  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart'; // 3. return the new state of the message.
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
  /*
  * function useFormState<State>(
        action: (state: Awaited<State>) => State | Promise<State>,
        initialState: Awaited<State>,
        permalink?: string,
    ): [state: Awaited<State>, dispatch: () => void];
  * */
  // 1. call addToCart action
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <form
      action={formAction}
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    >
      <h2 className='text-xl font-bold mb-4'>{itemTitle}</h2>
      {/* 2. pass itemID={itemID} via input */}
      <input type='hidden' name='itemID' value={itemID} />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Add to Cart
      </button>

      {/* 4. display in UI */}
      <div className='mt-4 text-sm text-gray-700'>{message}</div>
    </form>
  );
};

export default AddToCartForm;
