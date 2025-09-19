import { useState } from "react";


function CostCalculator({ priceOfSingleVMPerHour }: { priceOfSingleVMPerHour: number }) {
    const [numberOfVMs, setNumberOfVMs] = useState(0);
    function costCalculation(hours: number) {
        if (isNaN(numberOfVMs) || numberOfVMs <= 0) {
            return 0;
        }
        return (numberOfVMs * (priceOfSingleVMPerHour) * hours).toFixed(2);
    }
    return (
        <>
        <h1>VM Cost Calculator</h1>
        <label htmlFor="vmNumber">Number of VMs</label>
        <input type="text" id="vmNumber" placeholder="Number of VMs" onChange={(e) =>
            setNumberOfVMs(parseInt(e.target.value))} />
            
        <div>
            <p>Total cost per hour: {costCalculation(1)}</p>
            <p>Total cost per day: {costCalculation(24)}</p>
            <p>Total cost per month: {costCalculation(24 * 30)}</p>
            <p>Total cost per year: {costCalculation(24 * 365)}</p>
        </div>
        </>
    )
}

export default CostCalculator;