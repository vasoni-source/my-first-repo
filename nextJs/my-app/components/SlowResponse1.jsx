

export default async function SlowResponse1() {
  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data1 = await slowResponse.json();
  return <div>{JSON.stringify(data1)}</div>;
}
