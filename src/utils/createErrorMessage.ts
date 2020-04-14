export default (message: string): string => {
  if(message.includes('401')){
    return "You are not authorize to see this page, log in first"
  }
  return "There has been an error requisting this information at the moment"
}