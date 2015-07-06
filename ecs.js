var ECS = function() {
  var ECS = {};

  /**
   * The Entity class is the base of all entities in the game and contains a
   * unique ID and list of components. Components can be added and removed from
   * entities to enable and disable various functionalities.
   */
  ECS.Entity = function() {
    // Static variables
    var count = 0; // The number of entities created

    // Entity constructor
    function Entity() {
      // Create a unique ID
      this.id = Date.now().toString(16) + (Math.random() * 100000000 | 0).toString(16) + count;
      count++;

      // Initialize the table of components
      this.components = {};

      // Return this so that you can string together multiple method calls
      return this;
    }

    Entity.prototype.addComponent(component) {
      // Adds the component to the table with the name of the component as the key
      this.components[component.name] = component;
      return this;
    }

    Entity.prototype.removeComponent(component) {
      // Assumes the argument is the name of the component (a string)
      var name = component;
      if (typeof component === "function") { // If it is a function (thus the entire component)...
        // ...find the component's name
        name = component.name;
      }

      // Deletes the component permanently
      delete this.components[name];

      return this;
    }

    return Entity;
  }();

  return ECS;
}();
