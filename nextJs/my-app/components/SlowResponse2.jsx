export default async function SlowResponse2() {
  const slowResponse2 = await fetch("https://procodrr.vercel.app/?sleep=5000");
  const data2 = await slowResponse2.json();
  return <div>{JSON.stringify(data2)}</div>;
}
