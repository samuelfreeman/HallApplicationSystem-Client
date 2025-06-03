import { Lightbulb, Settings, CheckCircle } from "lucide-react"; // or your own icons

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#900633]" />,
    title: "Step 1: Apply",
    description: "Students register and submit room applications directly from their dashboard.",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#900633]" />,
    title: "Step 2: Admin Review",
    description: "Admins review applications and allocate rooms based on availability and priority.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#900633]" />,
    title: "Step 3: Confirm",
    description: "Students get notified, confirm their room, and proceed with payment if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-secondary_background py-20 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="underline decoration-[#900633] underline-offset-8">How It</span> Works
      </h2>
      <p className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-12">
        From registration to room confirmation, here's how Autonomy Hall Management makes things easier.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border border-white/10 hover:scale-[1.02] transition"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-base text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
