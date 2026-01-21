import SlowResponse1 from "@/components/SlowResponse1";
import SlowResponse2 from "@/components/SlowResponse2";
import Todos from "@/components/Todos";
import { Suspense } from "react";
export default function page() {
  return (
    <div>
      <Suspense fallback="loading todos...">
        <Todos />
      </Suspense>
      <Suspense fallback="loading response-1...">
        <SlowResponse1 />
      </Suspense>
      <Suspense  fallback="loading response-2...">
        <SlowResponse2 />
      </Suspense>
    </div>
  );
}
