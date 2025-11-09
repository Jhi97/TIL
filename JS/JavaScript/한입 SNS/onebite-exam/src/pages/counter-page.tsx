import Controller from "@/counter/controller";
import Viewer from "@/counter/viewer";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">CounterPage</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
