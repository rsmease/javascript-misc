function ipToInt32(ip){
  binaries = ip.split(".").map(ele => parseInt(ele).toString(2))
  return binaries
}

console.log(ipToInt32("128.32.10.1"))
