import dns from "node:dns/promises"

export async function domainExists(url: string): Promise <Boolean> {
   try{
      const hostname = new URL(url).hostname
      await dns.lookup(hostname)
      return true
   }catch{
        return false
   }
}