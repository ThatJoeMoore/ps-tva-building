import { getButtonProps, getFieldMessageProps, getJSButtonProps, getJSFieldMessageProps } from "@pluralsight/headless-styles"

console.log({
  css: {
    button: getButtonProps(),
    fieldMessage: getFieldMessageProps()
  },
  js: {
    button: getJSButtonProps(),
    fieldMessage: getJSFieldMessageProps()
  }
})
