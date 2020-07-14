export function AutoUnsubscribe(constructor) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    console.log("component destruction happening...");
    for (let prop in this) {
      const property = this[prop];
      if (property && typeof property.unsubscribe === "function") {
        property.unsubscribe();
      }
    }
    original &&
      typeof original === "function" &&
      original.apply(this, arguments);
  };
}
