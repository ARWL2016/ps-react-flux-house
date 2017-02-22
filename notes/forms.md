####Form Basics 
1. Create a controller view to manage form state and a display component to handle the UI  
2. On the UI, we use the `value` attribute to pass form data from controller to view  
3. On the UI, we use the `onChange` attribute to reference a function that passes data to the controller  
4. In the controller, the form data is represented by an object. We use `setInitialState` to declare that object. We then create a setState function to update the object.  
5. The setState function is then passed to the view as a prop  