The solution involves using the `useCallback` hook from React to memoize the function. This ensures that the function reference remains the same unless its dependencies change.

```javascript
import React, { useEffect, useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const someFunction = useCallback(() => {
    // ...
  }, []); // Empty dependency array means it only creates a new function if dependencies change

  useEffect(() => {
    console.log('Effect running!');
  }, [someFunction]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```

By adding `useCallback`, the function `someFunction` is now memoized and only re-created when its dependencies (in this case, none, represented by an empty array `[]`) change.  This prevents the unnecessary re-renders and resolves the infinite loop.