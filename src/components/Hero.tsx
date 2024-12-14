import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-light-blue to-light-purple py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Effortless Token Swaps at the Best Rates</h1>
          <p className="text-xl text-white mb-8">Swap stablecoins like USDC, USDT, PYUSD, and USDS with ease and transparency.</p>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="mb-4">
            <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
              Swap from
            </label>
            <div className="flex">
              <Input id="from" type="number" placeholder="0.00" className="rounded-r-none" />
              <Select defaultValue="USDC">
                <SelectTrigger className="w-[150px] rounded-l-none">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="PYUSD">PYUSD</SelectItem>
                  <SelectItem value="USDS">USDS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
              Swap to
            </label>
            <div className="flex">
              <Input id="to" type="number" placeholder="0.00" className="rounded-r-none" />
              <Select defaultValue="USDT">
                <SelectTrigger className="w-[150px] rounded-l-none">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="PYUSD">PYUSD</SelectItem>
                  <SelectItem value="USDS">USDS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-light-blue to-light-purple text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300">
            Start Swapping
          </Button>
        </div>
      </div>
    </section>
  );
}
