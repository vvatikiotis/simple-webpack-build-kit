### Exploring React
UPDATE 5/11/2015: new build process. BrowserSync starts the dev workflow. Webpack is for building and it's a separate process.

#### Real-time search
http://docs.themoviedb.apiary.io/#

Notes:

**Q**: When data is passed to a component via props and when via listening to a store?    
**A**: depends on the design. If we are designing a component, then the top parent component should listen to the store, update its state and pass down data to its children via props. The top component doesn't render anythind (except its children) and acts as a controller. If we need different (i.e. no parent-child relationship) components to listen to a store, then we set both up to listen to the store. 

Interesting thread touching on the subject http://stackoverflow.com/questions/25454591/react-flux-should-store-data-be-stored-in-a-component-state-or-props
