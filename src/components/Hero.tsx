"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Connection } from "@solana/web3.js";
import { useState, useEffect } from "react";

// Add token mapping
const TOKEN_MINTS: { [key: string]: string } = {
  USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  USDT: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  PYUSD: "HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p",
  USDS: "BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4",
};

export default function Hero() {
  // const connection = new Connection("https://api.mainnet-beta.solana.com");
  const [fromToken, setFromToken] = useState("USDC");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [slippage, setSlippage] = useState(0.5);

  const getQuote = async () => {
    try {
      setLoading(true);
      const quoteResponse = await (
        await fetch(
          `https://quote-api.jup.ag/v6/quote?inputMint=${TOKEN_MINTS[fromToken]}\
&outputMint=${TOKEN_MINTS[toToken]}\
&amount=${amount * 1000000}\
&slippageBps=${slippage * 100}`
        )
      ).json();

      if (quoteResponse) {
        setOutputAmount(Number(quoteResponse.outAmount) / 1000000);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add useEffect to update quote when inputs change
  useEffect(() => {
    if (amount > 0) {
      getQuote();
    } else {
      setOutputAmount(null);
    }
  }, [amount, fromToken, toToken]);

  const handleSwap = async () => {
    console.log("Swapping...");
  };

  return (
    <section className="bg-gradient-to-br from-light-blue to-light-purple py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Effortless Token Swaps </h1>
          <p className="text-xl text-white mb-8">Swap stablecoins like USDC, USDT, PYUSD, and USDS with ease and transparency.</p>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="mb-4">
            <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
              Swap from
            </label>
            <div className="flex">
              <Input id="from" type="number" placeholder="0.00" className="rounded-r-none" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
              <Select value={fromToken} onValueChange={setFromToken} defaultValue="USDC">
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
              <Input id="to" type="number" placeholder="0.00" className="rounded-r-none" value={outputAmount !== null ? outputAmount.toFixed(6) : ""} disabled />
              <Select value={toToken} onValueChange={setToToken} defaultValue="USDT">
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
          <div className="mb-4">
            <label htmlFor="slippage" className="block text-sm font-medium text-gray-700 mb-1">
              Slippage Tolerance (%)
            </label>
            <Input id="slippage" type="number" step="0.1" min="0.1" max="100" value={slippage} onChange={(e) => setSlippage(Number(e.target.value))} className="w-full" />
          </div>
          <Button
            className="w-full bg-gradient-to-r from-light-blue to-light-purple text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
            onClick={handleSwap}
            disabled={loading || !amount || amount <= 0}
          >
            {loading ? "Fetching quote..." : "Start Swapping"}
          </Button>
        </div>
      </div>
    </section>
  );
}
