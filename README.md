# React Native useEffect Infinite Loop with Function Dependency

This repository demonstrates a common error in React Native involving the `useEffect` hook and its dependency array.  Using a function directly within the dependency array can lead to unexpected re-renders and infinite loops.  This example showcases the problem and its solution using `useCallback`.

## Problem
The `useEffect` hook is triggered whenever a value in its dependency array changes.  However, if a function is included, the function's *reference* changes on every render, even if the function's logic remains the same. This causes the effect to run repeatedly.

## Solution
Using `useCallback` memoizes the function, preventing its reference from changing unnecessarily. This ensures that the effect only runs when the actual dependencies change.

## How to Run
Clone the repository and run the app using a React Native CLI environment.