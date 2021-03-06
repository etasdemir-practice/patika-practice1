import { storage, Context } from "near-sdk-as"

// return the string 'hello world'
export function helloWorld(): string {
  return 'hello Eren!'
}

export function helloWorld2(name: String): string {
  return 'hello ' + name
}

export function helloWorld3(names: Array<string>): string {
  return names.map<string>((name) => "Hello " + name).join(' ,')
}

// read the given key from account (contract) storage
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`
  }
}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`
}
