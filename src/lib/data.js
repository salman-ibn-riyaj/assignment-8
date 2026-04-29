export const getCowsData = async ()=>{

    const res = await fetch('https://assignment-8-five-blue.vercel.app/cowsData.json');

    const cows = await res.json();
    return cows;
}