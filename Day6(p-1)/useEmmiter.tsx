// used a map to resolve that thing
const emitterMap = new Map<string, Array<(data: unknown) => void>>();

export function useEmitter() {
  // used to send the data
  function emit<T>(eventName: string, data: T) {
    console.log("Emit event : ", eventName);
    if (emitterMap.has(eventName)) {
      console.log(emitterMap);

      emitterMap.get(eventName)?.forEach((callback) => {
        callback(data);
      });
    } else {
      console.log("Did not find event name");
    }
  }

  // used to receive the data
  function on<T>(eventName: string, callback: (data: T) => void) {
    console.log("Observer register : ", eventName);

    if (!emitterMap.has(eventName)) {
      emitterMap.set(eventName, [callback]);
    } else {
      emitterMap.get(eventName)?.push(callback);
    }
  }

  return {
    emit,
    on,
  };
}