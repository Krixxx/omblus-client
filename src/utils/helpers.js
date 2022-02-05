// function to check internet connection availability
// this helps only when wifi is turned off.
// When wifi is connected but router doesn't have internet (or some other problems), it does not recognize network problems.
export const checkInternetConnection = () => {
  return navigator.onLine ? true : false
}

/**
 * Helper function to get specified item from local storage and also provide default value. Return boolean.
 * @param {String} keyValue The string which we need to receive from localStorage
 * @param {boolean} defaultValue Default value which we assign if there is no result in localStorage
 * @returns {boolean} Result from localStorage or assigned default value
 */

export const getLocalStorage = (keyValue, defaultValue) => {
  let data = localStorage.getItem(keyValue)

  if (data) {
    return JSON.parse(data)
  } else {
    return defaultValue
  }
}
